import React from 'react'
import WeatherDetails, { SingleWeatherDetailProps, WeatherDetailProps } from './WeatherDetails'
import Container from './Container'
import WeatherIcon from './WeatherIcon'

interface FutureDayForecastProps extends WeatherDetailProps {
  day: string; // "Monday"
  type: string; // "ClearSky"
}

export default function FutureDayForecast(props: FutureDayForecastProps) {
  const {
    day = 'Monday',
    type = 'ClearSky',
    visibility = 0,
    humidity = 0,
    wind = { speed: 0, deg: 0 },
    sunrise = 0,
    sunset = 0
  } = props;
  return (
    <div className="flex w-full bg-red-100 my-1">
      {/*(left bit)*/}
        <Container className='flex flex-col items-center w-1/12 bg-blue-400'>
        <p className='text-2xl font-bold'>{day}</p>
        <WeatherIcon icon={type} />
      </Container>
      {/*temperature informaton*/}
      <Container className='flex flex-col items-center w-1/12 bg-green-400'>
        <p className='text-2xl font-bold'>Temperature</p>
        <p className='text-2xl font-bold'>10°</p>
      </Container>
      {/*right bit*/}
      <Container className='flex overflow-x-auto w-screen flex-col bg-yellow-400'>
        <WeatherDetails visibility={visibility} humidity={humidity} wind={{speed: wind.speed, deg: 4}} sunrise={sunrise} sunset={sunset} />
      </Container>
    </div>
  )
}