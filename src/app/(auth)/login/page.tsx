import React from 'react'

export default function page() {
  return (
    <section id="login-page">
        <form action="#">
            <input type="text" name="email" id="email" placeholder='Email' />
            <input type="text" name="username" id="username" placeholder='Username' />
            <button>Login</button>
        </form>
    </section>
  )
}
