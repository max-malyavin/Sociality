import { SET_USER_DATA, GET_CAPTCHA_URL } from "../Constants/Constants";


let initialState= {
    id: null as number | null,
    email: null as string  | null,
    login: null as string  | null,
    isFetching: false as boolean,
    isAuth: false as boolean,
    captchaURL: null as string  | null,
};
export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any):InitialStateType => {
   
    switch (action.type) {
        case SET_USER_DATA: 
            return {
                ...state,
                ...action.payload,
            }
        case GET_CAPTCHA_URL:             
            return {
                ...state,
                captchaURL: action.payload,
            }
        default:
            return state;
    }

}

type SetAuthUserDataPayloadType ={
    id:number | null, email: string | null, login:string | null, isAuth:boolean |null
}

type SetAuthUserDataActionType ={
    type: typeof SET_USER_DATA, 
    payload: SetAuthUserDataPayloadType
}


const setAuthUserData = ( id:number | null, email: string | null, login:string | null, isAuth:boolean | null): SetAuthUserDataActionType => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}})



type CaptchaActionType ={
    type: typeof GET_CAPTCHA_URL, 
    payload: string
}

const CAPTCHA = (url: string): CaptchaActionType => ({type: GET_CAPTCHA_URL, payload: url})



export default authReducer;