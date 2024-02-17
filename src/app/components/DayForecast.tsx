import React from 'react'
import Container from './Container'
import WeatherDetails, { WeatherDetailProps } from './WeatherDetails';

export default function DayForecast(props: WeatherDetailProps) {
  return (
  <div className='flex gap-4'>
    {/* Sky */}
    <Container className='w-fit justify-center px-4 flex-col bg-blue-400'>
      <p className='text-4xl font-bold'>Sky</p>
      <p className='text-2xl'>Clouds</p>
    </Container>
    {/* Weather */}
    <Container className='flex overflow-x-auto w-screen flex-col bg-yellow-400'>
      <WeatherDetails visibility={props.visibility} humidity={props.humidity} wind={{speed: props.wind.speed, deg: 4}} sunrise={props.sunrise} sunset={props.sunset} />
    </Container>
  </div>
  );
}