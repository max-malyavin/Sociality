import { SET_USER_DATA, GET_CAPTCHA_URL } from "../Constants/Constants";


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaURL: null
};

window.initialState= initialState;

const authReducer = (state = initialState, action) => {
   
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


export default authReducer;