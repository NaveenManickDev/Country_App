import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'

const CountryDetails = () => {
  const {name} = useParams()
  const [countryData, setContryData] = useState()
  
    const [isLoading, setLoading] = useState(true)
  useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setContryData(data[0])      
    }).finally(()=>{
      setLoading(false)
    })
  },[name])

   if(isLoading) {
    return <Loading />
  }

  return (
    <div>
      <h2>{countryData?.name?.common}</h2>
      <img src={countryData?.flags?.svg} alt="" />
      <p> <b>Capital</b>: {countryData?.capital?.[0]}</p>
      <p> <b>Region</b>: {countryData?.region}</p>
      <p><b>Population</b>: {countryData?.population}</p>
      <p></p>
    </div>
  )
}

export default CountryDetails