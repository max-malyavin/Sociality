import Axios from "axios"


export const istance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
       'API-KEY' : '797a5b5f-0c0c-46e7-87e8-047f08700223'
   }
});


export type ResponseType<D = {}, RC = string> = {
   data: D
   messages: Array<string>
   resultCode: RC,
}

