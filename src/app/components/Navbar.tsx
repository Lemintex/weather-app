'use client';
import React, { useState } from 'react'
import axios from 'axios';
import { MdOutlineLocationOn, MdWbSunny } from 'react-icons/md'
import SearchBox from './SearchBox';

type Props = {
  city: string;
  setCity: (city: string) => void;
}

export default function Navbar(props: Props) {
  const [error, setError] = useState<string>("");
  
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState<boolean>();

  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  async function handleInputChange(value: string) {
    props.setCity(value);
    if (props.city.length > 2) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/find?q=${value}&appid=${API_KEY}`
        );

        console.log(response.data);
        // set the suggestions and show them
        setSuggestions(response.data.list.map((item: { name: string }) => item.name));
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

  function handleSuggestionClick(item: string) {
    props.setCity(item);
    setShowSuggestions(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
            <p className='text-lg'>{props.city}</p>
            <div className="relative">
              <SearchBox
              value={props.city}
              onSubmit={handleSubmit}
              onChange={(e) => handleInputChange(e.target.value)}
              />
            <SuggestionBox 
              suggestions={suggestions}
              showSuggestions={showSuggestions}
              handleSuggestionClick={handleSuggestionClick}
              error={error}
              />
            </div>
            {/*
            <a href="/contact" className='m-2'>Contact</a>
            <a href="/about" className='m-2'>About</a>
            */}
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
  showSuggestions: boolean | undefined;
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
        ))}
      </ul>
    </div>
  )
}