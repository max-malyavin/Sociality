import { getAuthUserData } from "../ThunkCreator/ThunkCreator";

const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES';

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
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


type InitializedActionType = {
    type: typeof INITIALIZED_SUCCES
}
export const initializedSuccess = ( ): InitializedActionType => ({type: INITIALIZED_SUCCES});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
    .then(() => {
        dispatch(initializedSuccess());

    })
  
}


export default appReducer;