import React from 'react'

function TextField({label,inputProps,onChange,value}) {
  return (
        <div className='flex flex-col mt-5'> 
            <label className='mb-2 text-base text-gray-800'> {label}</label>
            <input 
            className='bg-gray-300 py-2 px-3 border-2 outline-none'
            {...inputProps} onChange={onChange} value={value}/>
        </div>
  )
}

export default TextField