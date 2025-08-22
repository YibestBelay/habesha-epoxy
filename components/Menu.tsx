"use client"

import React,{useState} from 'react'
import Link from 'next/link'
import { AlignJustify, X } from 'lucide-react'

const Links = [
    {id:1,href:"/",label:"Home"},
    {id:2,href:"/our Works",label:"Our Works"},
    {id:3,href:"/resin Calculator",label:"Resin Calculator"},
    {id:4,href:"/take the course",label:"Take the course"},
    {id:5,href:"/contact us",label:"Contact Us"},
]
const Menu = () => {
    const [open,setOpen] = useState(false)
  return (
    <div className='relative '>
        <div className=' fixed right-4 top-4 z-20'>
            {open ? (
                <X 
                    className=' cursor-pointer' 
                    size={24} 
                    onClick={() => setOpen(false)} 
                />
            ) : (
                <AlignJustify 
                    className='cursor-pointer' 
                    size={24} 
                    onClick={() => setOpen(true)} 
                />
            )}
        </div>
        {open && (
            <div className='fixed top-0 right-0 z-10 w-1/2 h-[100vh] backdrop-blur-md'> 
                {Links.map((link) => (
                    <Link 
                        key={link.id} 
                        href={link.href} 
                        className='block ml-5 mt-10 cursor-pointer text-blue-300 hover:text-gray-600 transition-colors'
                        onClick={() => setOpen(false)}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        )}
    </div>
  )
}

export default Menu