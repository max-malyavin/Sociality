import { getAuthUserData } from "../ThunkCreator/ThunkCreator";

const INITIALIZED_SUCCES = 'APP/INITIALIZED_SUCCES';

export type InitialStateType = typeof initialState

let initialState = {
    initialized: false
};

const appReducer = (state: InitialStateType = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCES:    
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCES
}


const actions = {
    initializedSuccess: ():initializedSuccessActionType => ({type: INITIALIZED_SUCCES})
}

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
    .then(() => {
        dispatch(actions.initializedSuccess());

    })
  
}


export default appReducer;