import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'

function Inputs() {
  return (
    <div className='flex flex-row justify-center my-6 '>
        <div className='flex flex-row items-center justify-center w-3/4 space-x-4'>
            <input type='text' placeholder='search for city...' className='w-full p-2 text-xl font-light shadow-xl focus:outline-none capitalize placeholder:lowercase'/>
            <UilSearch size={25} className=" text-white cursor-pointer transition ease-out hover:scale-125 "/ >
            <UilLocationPoint size={25} className=" text-white cursor-pointer transition ease-out hover:scale-125 "/ >

            
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
          <button name="metric" className=' text-xl text-white font-light'>℃</button>
          <p  className=' text-xl text-white mx-1'>|</p>
          <button name="imperial" className=' text-xl text-white font-light' >℉ </button>

        </div>
    </div>
  )
}

export default Inputs