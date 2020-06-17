import React from 'react'
import './Covid.scss'
import Cards from './Cards/Cards'
import Chart from './Chart/Chart'
import CountryPicker from './CountryPicker/CountryPicker'
import { useEffect } from 'react'
import { codivAPI } from '../../../Api/ApiCovid'
import { fetachCovid, fetachDaily, handleCountryChange } from '../../../ThunkCreator/ThunkCreator'
import { connect } from 'react-redux'



const Covid = ({fetachCovid, handleCountryChange,CovidData: {isFetching,data,country}}) => {

     useEffect(()=> {
        fetachCovid()
    },[])

    if(isFetching) {
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
        <div>
            <h1 style={{textAlign: 'center',fontWeight:'700', marginBottom: '30px', fontSize: '30px', color: '#c33'}}>Короновирус</h1>
            <Cards  covidData={data}/>
            <CountryPicker country={country} handleCountryChange={handleCountryChange}/>
            <Chart data={data} country={country}/>

        </div>
    )
}

const  mapStateToProps = (state) => {
    return {
        CovidData: state.codiv,
    }
}
export default connect(mapStateToProps,{
    fetachCovid,
    handleCountryChange
})(Covid);
