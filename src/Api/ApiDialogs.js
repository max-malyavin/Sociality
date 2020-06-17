import Axios from "axios"


const istance = Axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:9999',
    headers: {
       'API-KEY' : '5e8f916c-5378-444f-a515-c9dfff2ab9ad'
   }
});

export const gialogsAPI = {
    getAll(){
        return istance.get('/dialogs')
     },
    getAllByDialogId(dialogId){
        
        return istance.get('/messages?dialog='+ dialogId)
     }
}