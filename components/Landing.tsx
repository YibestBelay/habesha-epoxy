import React from 'react'

const Landing = () => { 
  return (
    <div className='flex flex-col justify-center items-center h-[calc(100vh-4rem)]'>
        <div className='flex flex-col gap-15 justify-center items-center'>
            <h1 className='text-3xl font-bold capitalize sm:text-4xl md:text-5xl lg:text-6xl '>welcome to Habesha Epoxy</h1>
            <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-500 '>Online Epoxy craft store and school</p>
        </div>
    </div>
  )
}

export default Landing