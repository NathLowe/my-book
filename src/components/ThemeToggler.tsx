import React from 'react'
import { MdPerson, MdSunny, MdBedtime } from 'react-icons/md'

export const clientToggleTheme = ()=>{
    var themeToggleDarkIcons = document.querySelectorAll('.theme-toggle-dark-icon')!;
    var themeToggleLightIcons = document.querySelectorAll('.theme-toggle-light-icon')!;
  
    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        themeToggleLightIcons.forEach(icon => {
            icon.classList.remove('hidden');
        })
        if(!document.documentElement.classList.contains('dark')) document.documentElement.classList.add('dark')
    } else {
        themeToggleDarkIcons.forEach(icon => {
            icon.classList.remove('hidden');
        })
    }
  
    var themeToggleBtns = document.querySelectorAll('.theme-toggle')!;
  
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
  
            if (!document.documentElement.classList.contains('pause')){
              // toggle icons inside button
              themeToggleDarkIcons.forEach(icon => {
                icon.classList.toggle('hidden');
              })
              themeToggleLightIcons.forEach(icon => {
                icon.classList.toggle('hidden');
              })
        
              // if set via local storage previously
              if (localStorage.getItem('color-theme')) {
                  if (localStorage.getItem('color-theme') === 'light') {
                      document.documentElement.classList.add('dark');
                      localStorage.setItem('color-theme', 'dark');
                  } else {
                      document.documentElement.classList.remove('dark');
                      localStorage.setItem('color-theme', 'light');
                  }
        
              // if NOT set via local storage previously
              } else {
                  if (document.documentElement.classList.contains('dark')) {
                      document.documentElement.classList.remove('dark');
                      localStorage.setItem('color-theme', 'light');
                  } else {
                      document.documentElement.classList.add('dark');
                      localStorage.setItem('color-theme', 'dark');
                  }
              }
              document.documentElement.classList.add('pause')
              setTimeout(()=>{
                document.documentElement.classList.remove('pause')
              },200)
        
            }
              
        });
    })
}

export default function ThemeToggler() {
  return (
    <button type="button" className="theme-toggle text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 outline-none rounded-md text-sm p-2">
        <MdBedtime className="theme-toggle-dark-icon hidden w-5 h-6 fill-current" viewBox="0 0 20 20" />
        <MdSunny className="theme-toggle-light-icon hidden w-5 h-5 fill-current" viewBox="0 0 20 20" />
    </button>
  )
}
