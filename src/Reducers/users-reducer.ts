import { TOGGLE_IS_FOLLOWING_PROGRESS,FOLLOW, UNFOLLOW, SET_USERS, CURRENT_PAGE, SET_TOTAL_USERS_COUNT,TOGGLE_IS_FETCHING } from "../Constants/Constants";
import { updateObjectInArray } from "../Utils/helpers/Object-helpers";
import { PhotosType } from "../Types/Types";



type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType
}




let initialState = {
    users: [] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>

}
export type InitialStateType = typeof initialState;

 const usersReducer = (state = initialState, action: any): InitialStateType => {
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