import '../style/main.css';
import React from 'react';
export default function Navbar()
{
    return (
        <div className='flex justify-between px-4 font-2xl' text-2xl py-2>
            <div className='text-2xl'>
                TailwindLogo 
            </div>
            <div>
                <a href='#' className='px-2 text-2xl' >About</a>
                <a href='#' className='px-2 text-2xl'>Home</a>
                <a href='#' className='px-2 text-2xl'>Contact us</a>
                <a href='#'className='px-2 text-2xl'>Login</a>
            </div>
        </div>
    )
}