import { istance } from "./Api"

type GetCaptchaUrlResponseType = {
    url: string
 }
 

 export const securityAPI = {
     getCaptchaURL(){
         return istance.get<GetCaptchaUrlResponseType>(`security/get-captcha-url`,)
     },
 }
 
 