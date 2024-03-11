'use client';
import React, { useState } from 'react'
import { MdOutlineLocationOn, MdWbSunny } from 'react-icons/md'
import SearchBox from './SearchBox';

type Props = {}

export default function Navbar({}: Props) {
  const [city, setCity] = useState<string>("");
  const [error, setError] = useState<string>("");
  
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState<boolean>(true);

  async function handleInputChange(city: string) {
    setCity(city);
    if (city.length > 2) {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`
        );
        const data = await response.json();
        console.log(data);

        // set the suggestions and show them
        setSuggestions(data.map((item: { name: string }) => item.name));
        setShowSuggestions(true);

        // don't show any error if we have suggestions
        setError("");
      } catch (error) {

        // if we have an error, show it
        setError("An error occurred");

        // clear the suggestions and hide them
        setSuggestions([]);
        setShowSuggestions(false);

        // DEBUG: log the error
        console.error(error);
      }
    }
  }
  return (
    <nav className="shadow-sm sticky top-0 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <a href="/" className="text-xl font-bold">
                Weather App
                <MdWbSunny className="w-8 h-8 inline-block text-yellow-300" />
            </a>
          </div>
          <div className='flex mr-4 gap-2'>
            <MdOutlineLocationOn className='text-3xl'/>
            <p className='text-lg'>TEST Glasgow</p>
            <div className="relative">
              <SearchBox
              value={city}
              onChange={(e) => setCity(e.target.value)}
              />
              <SuggestionBox />
            </div>
            <a href="/about" className='m-2'>About</a>
            <a href="/contact" className='m-2'>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function SuggestionBox({
  suggestions,
  showSuggestions,
  handleSuggestionClick,
  error,
}: {
  suggestions: string[];
  showSuggestions: boolean;
  handleSuggestionClick: (item: string) => void;
  error: string;
}) {
  if (!showSuggestions) {
    return null;
  }

  return (
    <div>
      <ul className='mb-4 bg-gray-50 absoq border top-11 left-0 border-black rounder-md min-w-48 flex flex-col gap-1 py-1 px-1'>
        {suggestions.map((suggestion, i) => (
          <li key={i} className=' cursor-pointer hover:bg-gray-200' onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</li>
        ))};
      </ul>
    </div>
  )
}