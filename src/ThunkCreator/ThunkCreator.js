import { toggleFetching,unfollow, setUsers, setTotalUserCount, toggleFollowingProgress, follow, setUserProfile,setCurrentPage, setAuthUserData, setStatus, setIsLoading,setDialogs, setMessages, savePhotoSucces, setCurrentMessages, setCovidData, setCountryCovid, CAPTCHA } from "../Actions/Actions"

import { gialogsAPI } from "../Api/ApiDialogs"
import { stopSubmit } from "redux-form"
import { codivAPI } from "../Api/ApiCovid"
import { userAPI } from "../Api/UserAPI"
import { profileAPI } from "../Api/ProfileAPI"
import { authAPI } from "../Api/authAPI"
import { securityAPI } from "../Api/securityAPI"

export const getUsersThunk = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleFetching( true ))
    dispatch(setCurrentPage(currentPage))
    const response = await userAPI.getUsers( currentPage, pageSize )
    dispatch(toggleFetching( false ))
    dispatch(setUsers( response.items ))
    dispatch(setTotalUserCount( response.totalCount ))
}

export const followThunk = (userId) =>async (dispatch) => {
    let apiMethod = userAPI.follow.bind(userAPI)
    let actionCreator = follow
    followUnfollowFlow(dispatch,userId, apiMethod, actionCreator)
}


export const unfollowThunk = (userId) =>async (dispatch) => {
    let apiMethod = userAPI.unfollow.bind(userAPI)
    let actionCreator = unfollow
    followUnfollowFlow(dispatch,userId, apiMethod, actionCreator)
}


const followUnfollowFlow = async (dispatch,userId,apiMethod,actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if(response.data.resultCode === 0){
        dispatch(actionCreator(userId))
    }
     dispatch(toggleFollowingProgress(false,userId))
}




export const getUserProfileThunk = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId)
    dispatch(setUserProfile(response.data)) 
}


export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()
    if(response.data.resultCode === 0){
       let {id, login,email} = response.data.data
         dispatch(setAuthUserData(id,email, login,true))
    }
}

export const getStatus = (userId) =>async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
     dispatch(setStatus(response.data))
}
export const updateStatus = (status) =>async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0){
        dispatch(setStatus(status))
    }
}
export const fetachDialogs = () => (dispatch) => {
    gialogsAPI.getAll()
    .then(({data})=> {
            dispatch(setDialogs(data))
        
    })
}

export const fetachCovid = () => async (dispatch) => {
    dispatch(toggleFetching(true))
    let response = await codivAPI.getInfo()
    dispatch(toggleFetching(false))
    dispatch(setCovidData(response))

}

export const fetachDaily = () => async (dispatch) => {
    dispatch(toggleFetching(true))
    let response = await codivAPI.fetachDailyDate()
    dispatch(toggleFetching(false))
    // dispatch(setCovidData(response))

}

export const fetachMessages = (dialogId) => (dispatch) => {
   dispatch(setIsLoading(true))
    dispatch(setCurrentMessages(dialogId))
    dispatch(setIsLoading(false))
}


export const login = (email,password,rememberMe,captcha) => async (dispatch) => {
    
    let response = await authAPI.login(email,password,rememberMe,captcha)
    if(response.data.resultCode === 0){
         dispatch(getAuthUserData())
    } else if(response.data.resultCode === 10){
       dispatch(getCaptchaURL())
    } else {
        let action = stopSubmit('login', {_error: 'Пожалуйста, проверьте правильность написания почты и пароля.'})
        dispatch(action)
    }
}
export const getCaptchaURL = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaURL()
    dispatch(CAPTCHA(response.data.url))
}


export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if(response.data.resultCode === 0){
         dispatch(setAuthUserData(null,null, null,false))
    }
}

export const handleCountryChange = (country) => async (dispatch) => {
    let response = await codivAPI.choceCountries(country)
    dispatch(setCovidData(response))
    dispatch(setCountryCovid(country))
 
}



export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
  
    if(response.data.resultCode === 0){
         dispatch(savePhotoSucces(response.data.data.photos))
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id
    let response = await profileAPI.saveProfile(profile)
  
    if(response.data.resultCode === 0){
         dispatch(getUserProfileThunk(userId))
    } else{
        dispatch(stopSubmit('editprofile', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}



