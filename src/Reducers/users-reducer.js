import { TOGGLE_IS_FOLLOWING_PROGRESS,FOLLOW, UNFOLLOW, SET_USERS, CURRENT_PAGE, SET_TOTAL_USERS_COUNT,TOGGLE_IS_FETCHING } from "../Constants/Constants";
import { updateObjectInArray } from "../Utils/helpers/Object-helpers";


let initialState = {
    users: [
        // {id:1, photoURL:'https://image.flaticon.com/icons/svg/2979/2979284.svg', 
        // followed: false, fullName: 'mmm',
        //  status: ' status', location: {city: "Minsk",country: 'Belaus'}},

        // {id:2, photoURL:'https://image.flaticon.com/icons/svg/2979/2979284.svg',
        //  followed: true, fullName: 'mmm3333', 
        //  status: ' status', location: {city: "Minsk",country: 'Belaus'}},
         
        // {id:3, photoURL:'https://image.flaticon.com/icons/svg/2979/2979284.svg',
        //  followed: false, fullName: 'mm5555m',
        //  status: ' status', location: {city: "Minsk",country: 'Belaus'}},
    ],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

}

 const usersReducer = (state = initialState, action) => {
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