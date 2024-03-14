import React from 'react'
import Container from './Container'
import WeatherDetails, { WeatherDetailProps } from './WeatherDetails';
import { convertKelvinToCelsius } from '../utils/convertUnits';

interface CurrentDayForecastProps extends WeatherDetailProps {
  temp: number;
}

export default function DayForecast(props: CurrentDayForecastProps) {
  const {
    visibility = 0,
    humidity = 0,
    wind = { speed: 0, deg: 0 },
    sunrise = 0,
    sunset = 0
  } = props;
  let temp = convertKelvinToCelsius(props.temp);
  return (
  <div className='flex gap-4'>
    {/* Sky */}
    <Container className='w-fit justify-center px-4 flex-nowrap bg-blue-400'>
      <p className='text-3xl text-nowrap font-bold'>{temp} C</p>
      <p className='text-2xl'>Clouds</p>
    </Container>
    {/* Weather */}
    <Container className='flex overflow-x-auto w-screen flex-col bg-yellow-400'>
      <WeatherDetails visibility={props.visibility} humidity={props.humidity} wind={{speed: props.wind.speed, deg: 4}} sunrise={props.sunrise} sunset={props.sunset} />
    </Container>
  </div>
  );
}