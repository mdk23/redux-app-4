import React from 'react'

function Button({onClick, children}) {
  return (
    <button className='bg-indigo-500 text-white py-2 px-8 my-5 rounded-full
     hover:bg-violet-800'
     onClick={onClick}
     >
        {children}
    </button>
  )
}

export default Button
