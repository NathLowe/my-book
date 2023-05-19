"use client"

import React, { useEffect } from 'react'
import { MdClose } from 'react-icons/md'
import { Drawer as DrawerFlowbite, DrawerInterface } from 'flowbite';

import { useDrawer } from '@/stores/drawer'
import { shallow } from 'zustand/shallow';

// set the drawer menu element
const drawerId = "navigation-drawer"

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



export default function Drawer() {
    let { hideDrawer } = useDrawer(state => ({
      hideDrawer: state.hideDrawer
    }),shallow)

  return (
    <div id={drawerId} className="fixed top-0 left-0 z-60 shadow h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80
        hidden md:block md:left-20 lg:left-48 dark:bg-gray-800" aria-labelledby="drawer-label">
        <h5 id="drawer-label" className="mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">Info</h5>
        <button onClick={hideDrawer} type="button" data-drawer-hide={drawerId} aria-controls={drawerId} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
            <MdClose className="w-5 h-5 fill-current" />
            <span className="sr-only">Close menu</span>
        </button>
    </div>
  )
}
