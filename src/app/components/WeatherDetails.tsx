import React from 'react'

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
        icon={<i className='fas fa-eye'></i>}
        value={`${props.visibility} m`}
      />

      <SingleWeatherDetail
        info='Humidity'
        icon={<i className='fas fa-tint'></i>}
        value={`${props.humidity}%`}
      />

      <SingleWeatherDetail
        info='Wind'
        icon={<i className='fas fa-wind'></i>}
        value={`${props.wind.speed} m/s`}
      />

      <SingleWeatherDetail  
        info='Sunrise'
        icon={<i className='fas fa-sun'></i>}
        value={new Date(props.sunrise * 1000).toLocaleTimeString()}
      />

      <SingleWeatherDetail
        info='Sunset'
        icon={<i className='fas fa-moon'></i>}
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
    <div className='flex flex-col justify-between px-5 items-center'>
      <p>
        {props.info}
      </p>
      <p>
        {props.value}
      </p>
    </div>
  )
}