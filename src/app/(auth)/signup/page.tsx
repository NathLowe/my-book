import React from 'react'
import { headerFont } from '@/datas/fonts'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { randomImage } from '@/datas/functions';

import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <section id="signup-page" className="w-screen h-56 max-w-2xl mx-auto px-8 pt-6 grid grid-cols-1 md:grid-cols-2" >
      <h1 className="sr-only">Login</h1>
      <div className="hidden md:block" >
        <Image src={randomImage()} alt="Signup Image" className="w-full h-full object-cover rounded-l-lg" />
      </div>
      <div>
        <form action="#" className="block h-full p-6 bg-white border border-gray-200 rounded-r-lg shadow  dark:bg-gray-800 dark:border-gray-700" >
            <h2 className={`text-center pt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ${headerFont.className} `} >My Book</h2>
            <h4 className={`text-center pb-4 font-bold tracking-tight text-primary-light dark:text-primary-dark ${headerFont.className} `} >Sign up to see photos and videos from your friends.</h4>
            <Input name="email" label="Email" />
            <Input name="name" label="Name" />
            <Input name="phone" label="Phone" />
            <Input name="username" label="Username" />
            <div className="mt-4">
              <Button>Signup</Button>
            </div>
            <div className="mt-4 text-disabled">
              Already have an account? <Link href="/login" className="font-semibold text-secondary-dark">Log In</Link>
            </div>
        </form>
      </div>
    </section>
  )
}
