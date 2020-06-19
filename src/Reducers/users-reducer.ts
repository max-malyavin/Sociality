import { TOGGLE_IS_FOLLOWING_PROGRESS,FOLLOW, UNFOLLOW, SET_USERS, CURRENT_PAGE, SET_TOTAL_USERS_COUNT,TOGGLE_IS_FETCHING } from "../Constants/Constants";
import { updateObjectInArray } from "../Utils/helpers/Object-helpers";
import { PhotosType, UserType, GetStateType } from "../Types/Types";
import { AppStateType } from "../Redux/Redux-store";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";




let initialState = {
    users: [] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>

}
export type InitialStateType = typeof initialState;



type ActionsTypes = setTotalUserCountType | setCurrentPageType | toggleFetchingType | toggleFollowingProgressType | followActionType | setUsersActionType | unfollowActionType



type setTotalUserCountType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalCount: number
}


type setCurrentPageType = {
    type: typeof CURRENT_PAGE,
    pageNumber: number
}

type toggleFetchingType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}


type toggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: number
}


type followActionType = {
    type: typeof FOLLOW,
    userID: number
}


type setUsersActionType = {
    type: typeof SET_USERS,
    users: Array<UserType>
}



type unfollowActionType = {
    type: typeof UNFOLLOW,
    userID: number
}















 const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users:  updateObjectInArray(state.users, action.userID, 'id', {followed: true})

            }
        case UNFOLLOW: 
            return {
                ...state, 
                    users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
                }
         case SET_USERS: 
               return {
                  ...state,  users: action.users
                }
         case CURRENT_PAGE: 
               return {
                  ...state,  currentPage: action.pageNumber
                }
         case SET_TOTAL_USERS_COUNT: 
               return {
                  ...state,  totalUsersCount: action.totalCount
                }
         case TOGGLE_IS_FETCHING: 
               return {
                  ...state,  isFetching: action.isFetching
                }
         case TOGGLE_IS_FOLLOWING_PROGRESS: 
               return {
                  ...state,  
                  followingInProgress: action.isFetching
                  ? 
                  [...state.followingInProgress, action.userId]
                  : state.followingInProgress.filter(id=> id != action.userId)
                }
        default:
            return state;
    }


}

export default usersReducer;














export const setTotalUserCount = (totalCount:number):setTotalUserCountType => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const setCurrentPage = (pageNumber:number):setCurrentPageType => ({type: CURRENT_PAGE, pageNumber})
export const toggleFetching = (isFetching:boolean):toggleFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching:boolean,userId:number):toggleFollowingProgressType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export const follow = (userID:number):followActionType => ({type: FOLLOW, userID})

export const setUsers = (users: Array<UserType>):setUsersActionType => ({type: SET_USERS, users})


export const unfollow = (userID: number):unfollowActionType => ({type: UNFOLLOW, userID})



type ThunkType =  ThunkAction<Promise<void>, GetStateType, unknown, ActionsTypes> ;

 const getUsersThunk = (currentPage:number, pageSize:number) => async (dispatch: Dispatch<ActionsTypes>, getState: GetStateType) => {
    
    dispatch(toggleFetching( true ))
    dispatch(setCurrentPage(currentPage))
    // const response = await userAPI.getUsers( currentPage, pageSize )
    dispatch(toggleFetching( false ))
    // dispatch(setUsers( response.items ))
    // dispatch(setTotalUserCount( response.totalCount ))
}

const getUsersThunk2 = (currentPage:number, pageSize:number):ThunkType =>
 async (dispatch, getState) => {
    
    dispatch(toggleFetching( true ))
    dispatch(setCurrentPage(currentPage))
    // const response = await userAPI.getUsers( currentPage, pageSize )
    dispatch(toggleFetching( false ))
    // dispatch(setUsers( response.items ))
    // dispatch(setTotalUserCount( response.totalCount ))
}

const followThunk = (userId:number): ThunkType=>async (dispatch) => {
    // let apiMethod = userAPI.follow.bind(userAPI)
    let actionCreator = follow
    // followUnfollowFlow(dispatch,userId, _, actionCreator)
}

 const unfollowThunk = (userId:number): ThunkType =>async (dispatch) => {
    // let apiMethod = userAPI.unfollow.bind(userAPI)
    let actionCreator = unfollow
    // followUnfollowFlow(dispatch,userId, , actionCreator)
}

const followUnfollowFlow = async (dispatch:any,userId:number,apiMethod: any,actionCreator:(userId:number)=>followActionType |unfollowActionType) => {
    // dispatch(toggleFollowingProgress(true, userId))
    // let response = await apiMethod(userId)
    // if(response.data.resultCode === 0){
    //     dispatch(actionCreator(userId))
    // }
    //  dispatch(toggleFollowingProgress(false,userId))
}
