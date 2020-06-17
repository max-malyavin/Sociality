import React from 'react'
import { Card } from 'antd';
import CountUp from 'react-countup';

const Cards = ({covidData:{confirmed,recovered,deaths,lastUpdate}}) => {

    if(!confirmed) {
        return  <div id="cube-loader">
                    <div className="caption">
                        <div className="cube-loader">
                          <div className="cube loader-1"></div>
                          <div className="cube loader-2"></div>
                          <div className="cube loader-4"></div>
                          <div className="cube loader-3"></div>
                        </div>
                    </div>
         </div>
      }

    return (
        <div style={{display: 'flex',marginBottom:'30px', flexWrap: 'wrap', justifyContent: 'space-between'}}>
         <Card title="Заражений" bordered={false} style={{ width: 300,marginBottom: '20px', borderBottom: '10px solid rgba(0,0,255,0.5)',textAlign: 'center' }}>
                    <p style={{fontSize: '29px',lineHeight: '35px',textAlign: 'center',paddingBottom: '10px'}}>
                    <CountUp start={0} end={confirmed.value} duration={2.5} separator=','/>
                    </p>
                    <p> Дата: {new Date(lastUpdate).toLocaleString('ru-RU')}</p>
         </Card>
         <Card title="Выздоровлений" bordered={false} style={{ width: 300,marginBottom: '20px',
        borderBottom: '10px solid rgba(0,255,0,0.5)',textAlign: 'center'  }}>
                    <p style={{fontSize: '29px',lineHeight: '35px',textAlign: 'center',paddingBottom: '10px'}}>
                    <CountUp start={0} end={recovered.value} duration={2.5} separator=','/>
                    </p>
                    <p> Дата: {new Date(lastUpdate).toLocaleString('ru-RU')}</p>

         </Card>
         <Card title="Cмертей" bordered={false} style={{ width: 300,marginBottom: '20px',
        borderBottom: '10px solid rgba(255,0,0,0.5) ',textAlign: 'center'  }}>
                    <p style={{fontSize: '29px',lineHeight: '35px',textAlign: 'center',paddingBottom: '10px'}}>
        <CountUp start={0} end={deaths.value} duration={2.5} separator=','/>
                    </p>
                    <p>Дата: {new Date(lastUpdate).toLocaleString('ru-RU')}</p>
  
         </Card>
       </div>
    )
}

export default Cards
