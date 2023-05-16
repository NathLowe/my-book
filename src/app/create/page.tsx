import React from 'react'

export default function page() {
  return (
    <form id="create-post">
        <div>
            {/* Avatar */}
            <div>
                <span> {`User Name`} </span>
                <span> {`Actual Time`} </span>
            </div>
        </div>
        <textarea name="post" id="post" rows={7}></textarea>
        <div>
            <button>Share</button>
        </div>
    </form>
  )
}
