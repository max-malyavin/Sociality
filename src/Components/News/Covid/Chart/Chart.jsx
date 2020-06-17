import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { codivAPI } from '../../../../Api/ApiCovid'
import { Line, Bar } from 'react-chartjs-2'
import { de } from 'date-fns/esm/locale'


const Chart = ({data,country}) => {

    const [dailyDatam, setDailyData] = useState([])

    useEffect(()=> {
        codivAPI.fetachDailyDate().then((props)=> {
            setDailyData(props)
        })
    },[])
    
    const lineChart = (
        dailyDatam.length  ? (<Line
            data={{
                labels: dailyDatam.map(({date}) => date),
                datasets: [{
                    data: dailyDatam.map(({confirmed}) => confirmed),
                    label: 'Заболевшие',
                    borderColor: 'rgba(0,0,255,0.5)',
                    fill: true,
                },{
                    data: dailyDatam.map(({deaths}) => deaths),
                    label: 'Умершие',
                    borderColor: 'rgba(255,0,0,0.5)',
                    fill: true,
                }]
            }}
        /> ) 
        : null
    )
           
        const barChar = (
                data.confirmed
                 ?
                     (<Bar 
                        data={{
                            labels: ['Заражений', 'Выздоровлений', 'Смертей'],
                            datasets: [{
                                label: 'Люди',
                                backgroundColor: ['rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)'],
                                data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                            }],
  
                        }}
                        options={{
                            legend: { display: false},
                            title: { display: true, text: `Выбрана страна ${country}`}
                        }}
                     />)
                 : null
            )


    return (
       <div>
           {country ? barChar : lineChart}
       </div>
    )
}

export default Chart
