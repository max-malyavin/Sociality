import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { codivAPI } from '../../../../Api/ApiCovid'

import {Form, Select } from 'antd';


const CountryPicker = ({country,handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([])

    function onChange(value) {
        handleCountryChange(value)
    }
    useEffect(()=> {
        codivAPI.countries().then((props)=> {
            setFetchedCountries(props)
        })
    },[setFetchedCountries])


    return (
        <Form>
            <Form.Item label="Страна">
                    <Select onChange={onChange}  value={country ? country: 'Весь мир'}  >       
{fetchedCountries.map((county,i)=> <Select.Option key={i} value={county}>{county}</Select.Option>  )}
                    </Select>
            </Form.Item>
        </Form>
    )
}

export default CountryPicker
