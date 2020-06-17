import { TOGGLE_IS_FOLLOWING_PROGRESS,FOLLOW, UNFOLLOW, SET_USERS, CURRENT_PAGE, SET_TOTAL_USERS_COUNT,TOGGLE_IS_FETCHING } from "../Constants/Constants";
import { updateObjectInArray } from "../Utils/helpers/Object-helpers";
import { PhotosType, UserType } from "../Types/Types";




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








export const setTotalUserCount = (totalCount:number):setTotalUserCountType => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const setCurrentPage = (pageNumber:number):setCurrentPageType => ({type: CURRENT_PAGE, pageNumber})
export const toggleFetching = (isFetching:boolean):toggleFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching:boolean,userId:number):toggleFollowingProgressType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export const follow = (userID:number):followActionType => ({type: FOLLOW, userID})

export const setUsers = (users: Array<UserType>):setUsersActionType => ({type: SET_USERS, users})


export const unfollow = (userID: number):unfollowActionType => ({type: UNFOLLOW, userID})