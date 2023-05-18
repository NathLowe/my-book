import React from 'react'

export default function Button({
    children
}:{
    children: React.ReactNode
}) {
  return (
    <button type="button" className="text-white bg-gradient-to-br from-primary-main to-secondary-dark hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-primary-light dark:focus:ring-secondary-dark font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-200">{children}</button>
  )
}
