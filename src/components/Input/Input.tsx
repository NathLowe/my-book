'use client'

import React from 'react'
import './style.css'

export default function Input({
    name,
    label,
    error,
    value,
    handleChange
}:{
    name:string,
    label:string,
    error?:boolean,
    value?: string,
    handleChange?: (e:string)=>void
}) {
  let isError = error === undefined ? false : error
  let onChange = (e:string) => {
    if(handleChange) handleChange(e)
  }
  return (
    <div className="relative mb-2">
        <input onChange={(e) => onChange(e.target.value)} value={value} type="text" id={name} name={name} className={`my-input peer ${isError && 'error'} `} placeholder=" " />
        <label htmlFor={name} className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"> {label} </label>
    </div>
  )
}
