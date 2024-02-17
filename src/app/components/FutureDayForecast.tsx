import React from 'react'
import { SingleWeatherDetailProps, WeatherDetailProps } from './WeatherDetails'
import Container from './Container'
import { TbEye, TbDroplet, TbWind, TbSunrise, TbSunset } from "react-icons/tb";
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
            icon={<TbEye />}
            value={`${props.visibility} m`}
          />
          <SingleWeatherDetail
            info='Humidity'
            icon={<TbDroplet />}
            value={`${props.humidity} %`}
          />
          <SingleWeatherDetail
            info='Wind'
            icon={<TbWind />}
            value={`${props.wind.speed} m/s`}
          />
          <SingleWeatherDetail
            info='Sunrise'
            icon={<TbSunrise />}
            value={`${props.sunrise} m`}
          />
          <SingleWeatherDetail
            info='Sunset'
            icon={<TbSunset />}
            value={`${props.sunset} m`}
          />
      </section>
    </Container>
  )
  
}
function SingleWeatherDetail(props: SingleWeatherDetailProps) {
  return (
    <div className='flex flex-col justify-between items-center gap-2 w-full h-full bg-gray-200 border border-black'>
      <p>
        {props.info}
      </p>
      <div className='text-6xl items-center'>
        {props.icon}
      </div>
      <p>
        {props.value}
      </p>
    </div>
  )
}