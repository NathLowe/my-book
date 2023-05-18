"use client"

import { MdSearch } from "react-icons/md"

export default function SearchBar() {
  return (
    <div id="search-bar" className="w-full" >
        <label htmlFor="simple-search" className="sr-only">Search</label>
        <div className="relative w-full -z-10 ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MdSearch aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"/>
            </div>
            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-main focus:border-primary-main block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-main dark:focus:border-primary-main" placeholder="Search" required/>
        </div>
    </div>
  )
}
