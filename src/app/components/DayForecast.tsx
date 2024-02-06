import React from 'react'
import Container from './Container'
import WeatherDetails from './WeatherDetails';

export default function DayForecast() {
  return (
  <div className='flex gap-4'>
    {/* Sky */}
    <Container className='w-fit justify-center px-4 flex-col bg-blue-400'>
      <p className='text-4xl font-bold'>Sky</p>
      <p className='text-2xl'>Clouds</p>
    </Container>
    {/* Weather */}
    <Container className='flex overflow-x-auto w-screen flex-col bg-yellow-400'>
      <WeatherDetails visibility={1} humidity={2} wind={{speed: 3, deg: 4}} sunrise={5} sunset={6} />
    </Container>
  </div>
  );
}