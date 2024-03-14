import React from 'react'
import { cn } from '../utils/cn'

export default function Container(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div 
      {...props}
      className={cn('px-5 bg-gray-200 border rounded-lg py-4 shadow-sm', props.className)}>
    </div>
  )
}