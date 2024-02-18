import React from 'react'
import { FaCloudRain, FaCloud, FaSun, FaSnowflake } from "react-icons/fa";
interface WeatherIconProps {
    icon: string
}


export default function WeatherIcon(props: WeatherIconProps) {
    return (
        <div className='flex flex-col items-center'>
            {getIcon(props.icon)}
        </div>
    )
}

function getIcon(icon: string) {
    switch (icon) {
        case 'ClearSky':
        return <FaSun />
        case 'FewClouds':
        return <FaCloud />
        case 'Clouds':
        return <FaCloud />
        case 'Rain':
        return <FaCloudRain />
        case 'Thunderstorm':
        return <FaCloudRain />
        case 'Snow':
        return <FaSnowflake />
        case 'Fog':
        return <FaCloud />
        default:
        return <FaSun />
    }
}