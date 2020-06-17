import { SET_COVID_DATA, TOGGLE_IS_FETCHING, SET_COVID_COUNTRY } from "../Constants/Constants";


let initialState = {
    data: {},
    isFetching: true,
    country: ''
};

const covidReducer = (state = initialState, action) => {
 
    switch (action.type) {
        case SET_COVID_DATA:   
            return {
                ...state,
                data : {...action.payload},
            }
         case TOGGLE_IS_FETCHING: 
            return {
               ...state,  isFetching: action.isFetching
             }
         case SET_COVID_COUNTRY: 
            return {
               ...state,  country: action.payload
             }
        default:
            return state;
    }

}


export default covidReducer;