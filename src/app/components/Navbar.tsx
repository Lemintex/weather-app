import React from 'react'
import { MdOutlineLocationOn, MdWbSunny } from 'react-icons/md'
import SearchBox from './SearchBox';

type Props = {}

export default function Navbar({}: Props) {
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
            <SearchBox />
            <a href="/about" className='m-2'>About</a>
            <a href="/contact" className='m-2'>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}