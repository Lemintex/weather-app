import React from 'react'
import { TbEye, TbDroplet, TbWind, TbSunrise, TbSunset } from "react-icons/tb";

export interface WeatherDetailProps {
  visibility: number; // 10000
  humidity: number; // 84
  wind: {
    speed: number; // 8.62
    deg: number; // 349
  };
  sunrise: number; // 1661834187
  sunset: number; // 1661882248
}

export default function WeatherDetails(props: WeatherDetailProps) {
  const {
    visibility = 0,
    humidity = 0,
    wind = { speed: 0, deg: 0 },
    sunrise = 0,
    sunset = 0
  } = props;
  return (
    <div className='flex justify-between'>
      <SingleWeatherDetail
        info='Visibility'
        icon={<TbEye />}
        value={`${props.visibility} m`}
      />

      <SingleWeatherDetail
        info='Humidity'
        icon={<TbDroplet />}
        value={`${props.humidity}%`}
      />

      <SingleWeatherDetail
        info='Wind'
        icon={<TbWind />}
        value={`${props.wind.speed} m/s`}
      />

      <SingleWeatherDetail  
        info='Sunrise'
        icon={<TbSunrise />}
        value={new Date(props.sunrise * 1000).toLocaleTimeString()}
      />

      <SingleWeatherDetail
        info='Sunset'
        icon={<TbSunset />}
        value={new Date(props.sunset * 1000).toLocaleTimeString()}
      />
    </div>
  )
}

export interface SingleWeatherDetailProps {
  info: string;
  icon: React.ReactNode;
  value: string;
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