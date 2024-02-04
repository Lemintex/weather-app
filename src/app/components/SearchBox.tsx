import React from 'react'
import { cn } from '../utils/cn';

type Props = {
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: React.FormEvent) => void;
}

export default function SearchBox(props: Props) {
  return (
    <form 
    
    className={cn("flex justify-center items-center", props.className)}>
        <input
            type="text"
            value={props.value}
            onSubmit={props.onSubmit}
            placeholder="Search for a city"
            className="border-2 border-gray-300 p-2 rounded-l-md"
        />
        <button className="bg-blue-500 text-white p-2 rounded-r-md">
            Search
        </button>
    </form>
  )
}