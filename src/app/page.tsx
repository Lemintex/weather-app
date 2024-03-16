'use client';
import Image from "next/image";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useQuery } from "react-query";
import Container from "./components/Container";
import { convertKelvinToCelsius } from "./utils/convertUnits";
import DayForecast from "./components/DayForecast";
import FutureDayForecast from "./components/FutureDayForecast";
import { log } from "console";
import { useState } from "react";

type WeatherInfo = {
  cod: string;
  message: number;
  cnt: number;
  list: Array<{
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    snow?: {
      "3h": number;
    };
    sys: {
      pod: string;
    };
    dt_txt: string;
  }>;
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};

export default function Home() {
  const { data, isLoading, isError } = useQuery<WeatherInfo>("weather", async () => {
   const {data} = await axios.get<WeatherInfo>(`https://api.openweathermap.org/data/2.5/forecast?q=Glasgow&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`);
   return data;
  }
  );
  console.log(data);

  const uniqueDates = data?.list.reduce((acc, item) => {
    const date = new Date(item.dt_txt).toDateString();
    if (!acc.includes(date)) {
      acc.push(date);
    }
    return acc;
  }
  , [] as string[]);
  console.log(uniqueDates);

  const dataForEachDate = uniqueDates?.map((date) => {
    return data?.list.filter((item) => {
      const itemDate = new Date(item.dt_txt).toDateString();
      const itemTime = new Date(item.dt_txt).getHours();
      let midday = new Date("12:00:00 PM")
      if (itemDate === date) {
        return item;
      }
    });
  });

  console.log('Date ForDate', dataForEachDate);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let currentDate = '';
  if (data && data.list[0]) {
    currentDate = new Date(data.list[0].dt_txt).toDateString();
  }
  const todayDate = new Date(currentDate);
  const today = todayDate.toLocaleDateString();
  const dayIndex = todayDate.getDay();
  const day = days[dayIndex];
  console.log("Date", todayDate); 
  console.log("Day", day);
//  if (isLoading)
//  return (
//   <div className="flex items-center min-h-screen justify-center text-4xl">
//     <p className="animate-bounce">
//       Loading...
//     </p>
//   </div>
//  );

  const [city, setCity] = useState<string>("");
  function handleInputChange(value: string) {
    setCity(value);
  }

  if (isError) {
    return (
      <div className="flex items-center min-h-screen justify-center text-4xl">
        <p>
          An error occurred
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 min-h-screen">
      <Navbar city={city.toString()} setCity={handleInputChange}/>
      <main className=" max-w-full mx-auto flex flex-col gap-9 px-4 pb-10 pt-4 bg-gray-100">
        {/* Today */}
        <section>
            <div className="flex gap-1 text-2xl items-end">
              <p className="text-4xl font-bold">{day}</p>
              <p className="text-lg font-bold">{today}</p>
            </div>
            <Container className="gap-10 px-5 my-3 items-center">
              <div className="flex flex-col px-4">
                {/* <div>
                  <p className="text-4xl font-bold">Temperature</p>
                  <p className="text-2xl">Feels like</p>
                </div> */}
                <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between p-3">
                  {/* <p className="text-4xl font-bold">Weather</p>
                  <p className="text-2xl">Description</p> */}

                  {data?.list.map((item, n) => 
                    <div key={n} className="flex flex-col justify-between gap-2 items-center">
                      <p>{item.dt_txt}</p>
                      <p>{convertKelvinToCelsius(item.main.temp)} C</p>
                    </div>
                  )}
                </div>
              </div>
            </Container>
            <DayForecast temp={data?.list[0].main.temp ?? 0} visibility={data?.list[0].visibility ?? 0} humidity={data?.list[0].main.humidity ?? 0} wind={{speed: data?.list[0].wind.speed ?? 0, deg: data?.list[0].wind.deg ?? 0}} sunrise={data?.city.sunrise ?? 0} sunset={data?.city.sunset ?? 0}/>
        </section>
        {/*Next 5 days */}
        <section className="bg-green-300">
          <p className="text-4xl font-bold">Next 5 days</p>
          <div className="flex gap-10 overflow-x-auto w-full justify-between p-3">
            <p className="text-4xl font-bold">Day</p>
            <p className="text-2xl">Weather</p>
            </div>
          {dataForEachDate?.map((item, n) => {
            if (item) {
              return (
                console.log('Item', item),
                <FutureDayForecast key={n} day={item[0].dt_txt} type={item[0].weather[0].main} visibility={item[0].visibility} humidity={item[0].main.humidity} wind={{speed: item[0].wind.speed, deg: item[0].wind.deg}} sunrise={data?.city.sunrise ?? 0} sunset={data?.city.sunset ?? 0}/>
              );
            }
            return null;
          })}
        </section>
        </main>
    </div>
  );
}
