
import React from 'react';
import { ModeToggle } from './theme-button';
import Link from 'next/link';
import Menu from './Menu';



const NavBar = () => {
  return (
    <nav className=' flex justify-between gap-10 items-center p-4 h-16 border-b-white-500 border-b-4'>
      <div className='flex  justify-between md: w-full'>
      <div >
        <Link href="/" className='text-xl md:text-l md:font-bold lg:text-2xl xl:text-3xl font-bold capitalize cursor-pointer text-orange-500 hover:text-orange-600 transition-colors'>Epoxy designs</Link>
      </div>
      <div className='hidden md:flex gap-10'>
        <div >
          <Link href="/OurWorks" className=' text-sm md:text-lg  font-bold capitalize cursor-pointer text-blue-300 hover:text-gray-600 transition-colors'>Our Works</Link>
        </div>
        <div >
          <Link href="/" className=' text-sm md:text-lg  font-bold capitalize cursor-pointer text-blue-300 hover:text-gray-600 transition-colors'>Resin Calculator</Link>
        </div>
        <div >
          <Link href="/" className='text-sm md:text-lg font-bold capitalize cursor-pointer text-blue-300 hover:text-gray-600 transition-colors'>Take the course</Link>
        </div>
        <div >
          <Link href="/" className=' text-sm md:text-lg  font-bold capitalize cursor-pointer text-blue-300 hover:text-gray-600 transition-colors'>Contact Us</Link>
        </div>
      </div>
     
      <div>
        <ModeToggle />
      </div> 
      </div>
      <div className='md:hidden'>
        <Menu />
      </div>
      

      
    </nav>
  );
};

export default NavBar;
