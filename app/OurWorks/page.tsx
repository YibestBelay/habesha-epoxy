import React from 'react'
import Image from 'next/image'
const pages = () => {
  return (
    <div className=' flex justify-center items-center h-[calc(100vh-4rem)]   '>
      <div className="flex flex-col items-center sm:gap-2 sm:flex-row w-[100%] sm:w-[70%] h-[99%]">

      <div className=' flex-1 flex-col items-center w-[98%] h-[70%]'>
        <Image src="/tempo/clock.jpg" alt="" width={500} height={100} className='h-[80%] overflow-hidden'/>
        <h1 className='p-5 text-center'>Clock designs</h1>
      </div>
      <div className=' flex-1 flex-col items-center w-[98%] h-[70%]'>
        <Image src="/tempo/table.jpg" alt="" width={500} height={500} className='h-[80%] overflow-hidden'/>
        <h1 className='p-5 text-center'>Table designs</h1>
      </div>
      <div className=' flex-1 flex-col items-center w-[98%] h-[70%]'>
        <Image src="/tempo/pic-5.jpg" alt="" width={500} height={100} className='h-[80%] overflow-hidden'/>
        <h1 className='p-5 text-center'>Picture designs</h1>
      </div>
    </div>

    </div>
  )
}

export default pages