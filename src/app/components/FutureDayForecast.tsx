import React from 'react'
import { SingleWeatherDetailProps, WeatherDetailProps } from './WeatherDetails'
import Container from './Container'

interface FutureDayForecastProps extends WeatherDetailProps {
}

export default function FutureDayForecast(props: FutureDayForecastProps) {
  return (
    <Container className="flex w-full bg-red-300 my-3">
      <div className='w-fit mx-5'>
      test
      </div>
      {/*right bit*/}
      <section className='flex overflow-x-auto w-screen justify-between'>
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
    <div className='flex flex-col justify-between px-5 items-center w-fit bg-gray-200'>
      <p>
        {props.info}
      </p>
      <p>
        {props.value}
      </p>
    </div>
  )
}