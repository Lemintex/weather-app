import React from 'react'
import Container from './Container'

export default function DayForecast() {
  return (
  <div className='flex gap-4'>
    {/* Sky */}
    <Container className='w-fit justify-center px-4 flex-col bg-blue-400'>
      <p className='text-4xl font-bold'>Sky</p>
      <p className='text-2xl'>Clouds</p>
    </Container>
    {/* Weather */}
    <Container className='overflow-x-auto w-full flex-col bg-yellow-400'>
    </Container>
  </div>
  );
}