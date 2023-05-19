"use client"

import React, { Suspense, useEffect, useRef, useState } from 'react'
import { MdClose, MdSearch } from 'react-icons/md'
import { Drawer as DrawerFlowbite, DrawerInterface } from 'flowbite';

import { useDrawer } from '@/stores/drawer'
import { shallow } from 'zustand/shallow';

import { headerFont } from '@/datas/fonts';
import SearchResult from './SearchResult';

// set the drawer menu element
const drawerId = "navigation-drawer"


// Initializing the Flowbite drawer for user interaction on the client
export const drawerClientFunction = ()=>{
    const $targetEl = document.getElementById(drawerId);
    
    // options with default values
    const options = {
      placement: 'left',
      backdrop: false,
    };

    const drawer = new DrawerFlowbite($targetEl, options);
    return drawer
}


const Searchbar = ()=>{
  let {search, setSearch} = useDrawer(state => ({
    search: state.search,
    setSearch: state.setSearch
  }), shallow)
  let searchInput = useRef<HTMLInputElement|null>(null)

  let handleRemoveFocus = ()=>{
    setSearch("")
    if(searchInput.current !== null){
      searchInput.current.blur()
    }
  }

  return (
    <form>   
        <label htmlFor="default-search" className="sr-only">Search</label>
        <div className="relative">
          <input ref={searchInput} type="text" id="default-search" value={search} onChange={(e)=>setSearch(e.target.value)}
            className="block peer w-full pr-4 py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 
            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
              focus:pl-3 " placeholder="Search only users..."/>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none peer-focus:hidden ">
              <MdSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"/>
          </div>
          <MdClose onClick={handleRemoveFocus} className="absolute right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400 cursor-pointer hidden peer-focus:block" />
        </div>
    </form>
  )
}

export default function Drawer() {
    let { hideDrawer } = useDrawer(state => ({
      hideDrawer: state.hideDrawer
    }),shallow)

  return (
    <div id={drawerId} className="fixed top-0 left-0 z-60 shadow-lg h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80
        hidden md:block md:left-20 lg:left-48 text-slate-800 dark:text-gray-100 dark:bg-gray-800 overscroll-contain" aria-labelledby="drawer-label">
      <button onClick={hideDrawer} type="button" data-drawer-hide={drawerId} aria-controls={drawerId} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <MdClose className="w-5 h-5 fill-current" />
        <span className="sr-only">Close menu</span>
      </button>

      <h5 id="drawer-label" className={`mb-6 text-3xl font-bold text-primary-light dark:text-primary-dark ${headerFont.className}`}>Search</h5>
      <Searchbar/>
      <hr className="my-6" />
      <Suspense fallback={ <div>Loading...</div> } >
        {/* @ts-expect-error Server Component */}
        <SearchResult/>
      </Suspense>
    </div>
  )
}
