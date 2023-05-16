import React from 'react'

export default function page() {
  return (
    <section id="signup-page">
        <div>
            {/* Image for >lg */}
        </div>
        <div>
            <form action="#">
                <input type="text" name="email" id="email" placeholder='Email' />
                <input type="text" name="name" id="name" placeholder='full Name' />
                <input type="text" name="number" id="number" placeholder='Number' />
                <input type="text" name="username" id="username" placeholder='Username' />
                <button>Sign Up</button>
            </form>
        </div>
    </section>
  )
}
