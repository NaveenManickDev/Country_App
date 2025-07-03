import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

const CountryList = () => {

  const [countryDatas, setContryDatas] = useState([])

  const [isLoading, setLoading] = useState(true)

  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setContryDatas(data)      
    }).finally(()=>{
      setLoading(false)
    })
  },[])

  if(isLoading) {
    return <Loading />
  }

  return (
    <div>
      <h1 className='text-3xl font-bold mb-4'>Countries</h1>
      <div className="card-container grid grid-cols-4 gap-4">
        {countryDatas.map((country) => {
          return(
              <Link to={`/country/${country.name.common}`} className="p-4 border rounded-xl shadow-md">
                <img className='w-full h-32 object-contain' src={country.flags.svg} alt="Ironman" />
                <h2>{country.name.common}</h2>
              </Link>
          )
        })}
        {/* <div className="p-4 border rounded-xl shadow-md">
          <img className='w-full h-32 object-contain' src="https://cdna.artstation.com/p/assets/images/images/037/453/246/large/preet-iron-man-3.jpg?1620404652" alt="Ironman" />
          <h2>Tony Stark</h2>
        </div> */}
      </div>
    </div>
  )
}

export default CountryList