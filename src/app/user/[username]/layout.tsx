import React from 'react'

export default function layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <main>
        <section id="user-header">
            <div>
                {/* Avatar */}
                <div>
                    <h1> {`Username`} </h1>
                    <div>
                        <button> Follow </button>
                        {/* Add Edit profile if user connected */}
                    </div>
                </div>
            </div>
            <div>
                <span> {`User Name`} </span>
                <span> {`Company`} </span>
                <a href="#" > {`Website`} </a>
            </div>
        </section>
        <section id="user-links"> {/* Border bottom */}
            {/* Icons for the different links */}
        </section>
        {children}
    </main>
  )
}
