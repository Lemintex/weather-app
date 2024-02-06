import React from 'react'
import { SingleWeatherDetailProps, WeatherDetailProps } from './WeatherDetails'
import Container from './Container'

interface FutureDayForecastProps extends SingleWeatherDetailProps {
}

export default function FutureDayForecast(props: FutureDayForecastProps) {
  return (
    <Container className="bg-red-300 my-3">
      test
    </Container>
  )
}