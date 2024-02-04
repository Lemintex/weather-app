'use client';
import Image from "next/image";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useQuery } from "react-query";
import Container from "./components/Container";

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
  console.log(data?.city.population);

  if (isLoading)
  return (
   <div className="flex items-center min-h-screen justify-center text-4xl">
     <p className="animate-bounce">
       Loading...
     </p>
   </div>
  );
  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
      <main className=" max-w-full mx-auto flex flex-col gap-9 px-4 pb-10 pt-4 bg-blue-700">
        {/* Today */}
        <section>
          <div>
            <div className="flex gap-1 text-2xl items-end">
              <p className="text-4xl font-bold">Today</p>
              <p className="text-lg font-bold">Date</p>
            </div>
            <Container className="gap-10 px-5 items-center">
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
                      <p>{item.main.temp}</p>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <Image
                  src="/01d.png"
                  alt="Weather Icon"
                  width={200}
                  height={200}
                />
              </div>
            </Container>
          </div>
        </section>
        {/*Next 5 days */}
        <div></div>
        </main>
    </div>
  );
}
