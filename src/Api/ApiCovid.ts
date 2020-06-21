import Axios from "axios"


const istance = Axios.create({
    baseURL: 'https://covid19.mathdro.id/api',
});

export const codivAPI = {
     getInfo(){
        return istance.get('').then(({data : {confirmed,recovered,deaths,lastUpdate}}) => {
            const modifiedData ={
                confirmed,
                recovered,
                deaths,
                lastUpdate,
            }
            return modifiedData
        })
    },
     fetachDailyDate(){
        return istance.get(`/daily`).then(({data}) => {

            const modifiedData = data.map((dailyData:any) =>({
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate
            }))
            return modifiedData
        })
    },
     countries(){
        return istance.get(`/countries`).then(({data:{countries}}) => {
            return countries.map((country:any)=> country.name)
        })
    },
     choceCountries(country:string){
        return istance.get(`/countries/${country}`).then(({data}) => {
            return data
        })
    },

}