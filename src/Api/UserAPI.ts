import { istance } from "./Api"
import { AxiosPromise } from "axios"
import { UserType } from "../Types/Types"
import {ResponseType} from './Api'
import { profileAPI } from "./ProfileAPI"


export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
 }
 
 
export const userAPI = {
    getUsers(currentPage = 1,pageSize = 15){
        return istance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`).then(data=> {
            return data.data
         })
     },
     follow(id: number){
        return istance.post<ResponseType>(`follow/${id}`)
     },
     unfollow(id: number){
        return istance.delete(`follow/${id}`) as AxiosPromise<ResponseType>
     },
     getProfile(userId: number){
         console.log("Use old object")
        return profileAPI.getProfile(userId)
     }
}
