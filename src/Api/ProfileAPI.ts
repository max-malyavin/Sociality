import { ProfileType, PhotosType } from "../Types/Types"
import { istance, ResponseType } from "./Api"






export const profileAPI = {
    getProfile(userId: number){
       return istance.get<ProfileType>(`profile/${userId}`)
    },
    getStatus(userId: number){
       return istance.get<string>(`profile/status/${userId}`)
    },
    updateStatus(status: string | null){
       return istance.put<ResponseType>(`profile/status`, {
           status: status
       })
    },
    savePhoto(photoFile:any){ 
       let formData = new FormData()
       formData.append('image', photoFile)
       return istance.put<ResponseType<PhotosType>>(`profile/photo`, formData, {
           headers : {
              'Content-Type': 'multipart/form-data'
           }
       })
    },
    saveProfile(profile: ProfileType){
     return istance.put<ResponseType>(`profile`, profile)
    }

}