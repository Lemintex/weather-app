import React from 'react'
import { SingleWeatherDetailProps, WeatherDetailProps } from './WeatherDetails'
import Container from './Container'

interface FutureDayForecastProps extends WeatherDetailProps {
}

export default function FutureDayForecast(props: FutureDayForecastProps) {
  return (
    <Container className="flex w-full h-64 bg-red-300 my-3">
      <div className='w-fit mx-5'>
      test
      </div>
      {/*right bit*/}
      <section className='flex w-full'>
        <SingleWeatherDetail
            info='Visibility'
            icon={<i className='fas fa-eye'></i>}
            value={`m`}
          />
          <SingleWeatherDetail
            info='Visibility'
            icon={<i className='fas fa-eye'></i>}
            value={`m`}
          />
          <SingleWeatherDetail
            info='Visibility'
            icon={<i className='fas fa-eye'></i>}
            value={`m`}
          />
          <SingleWeatherDetail
            info='Visibility'
            icon={<i className='fas fa-eye'></i>}
            value={`m`}
          />
          <SingleWeatherDetail
            info='Visibility'
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
      <p>R</p>
    </div>
  )
}