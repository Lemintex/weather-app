import React from 'react'
import { SingleWeatherDetailProps, WeatherDetailProps } from './WeatherDetails'
import Container from './Container'

interface FutureDayForecastProps extends WeatherDetailProps {
}

export default function FutureDayForecast(props: FutureDayForecastProps) {
  return (
    <Container className="flex w-full h-64 bg-red-100 my-1">
      <div className='w-fit border border-black'>
        <p className='text-2xl font-bold'>Day</p>
        <p className='text-lg'>Date</p>
      </div>
      <div className='border border-cyan-600 px-5'>
        <p className='text-2xl font-bold'>Weather</p>
        <p className='text-lg'>Description</p>
      </div>
      {/*right bit*/}
      <section className='flex w-full'>
        <SingleWeatherDetail
            info='Visibility'
            icon={<i className='fas fa-eye'></i>}
            value={`m`}
          />
          <SingleWeatherDetail
            info='Humidity'
            icon={<i className='fas fa-eye'></i>}
            value={`%`}
          />
          <SingleWeatherDetail
            info='Wind'
            icon={<i className='fas fa-eye'></i>}
            value={`m/s`}
          />
          <SingleWeatherDetail
            info='Sunrise'
            icon={<i className='fas fa-eye'></i>}
            value={`m`}
          />
          <SingleWeatherDetail
            info='Sunset'
            icon={<i className='fas fa-eye'></i>}
            value={`m`}
          />
      </section>
    </Container>
  )
}

function SingleWeatherDetail(props: SingleWeatherDetailProps) {
  return (
    <div className='flex flex-col justify-between items-center w-full h-full bg-gray-200 border border-black'>
      <p>
        {props.info}
      </p>
      <p>
        {props.value}
      </p>
    </div>
  )
}