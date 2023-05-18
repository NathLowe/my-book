"use client"

import React, { useEffect } from 'react'
import { drawerClientFunction } from './Navigation/Drawer'
import { useDrawer } from './../stores/drawer';
import { shallow } from "zustand/shallow"


export default function FlowbiteInitializer() {
    let { initializeDrawer } = useDrawer((state)=>({initializeDrawer: state.initializeDrawer}), shallow)

    useEffect(()=>{
        // setting the state for the drawer
        initializeDrawer(drawerClientFunction())
    })

  return (null)
}
