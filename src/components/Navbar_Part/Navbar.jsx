"use client"
import React, { useState } from 'react'
import { NavbarData } from '../All_Data/Data'
import { usePathname } from 'next/navigation'
import { FaBars } from "react-icons/fa6";
import ResponsiveMenu from './ResponsiveMenu';


const Navbar = () => {

    const pathname = usePathname();
    const [showMenu, setShowMenu] = useState(false)


    const toggoleMenu =()=>{
        setShowMenu(!showMenu)
    }

  return (
    <div className='py-5 bg-primary'>
        <div className="container">
            <div className='flex justify-between items-center relative z-10'>  
                <div>
                    <a href="/">
                        <h1 className='font-satisfy text-3xl font-bold text-white'>Portfolio</h1>                        
                    </a> 
                </div>    
                <div className='hidden md:block'>
                    <ul className='flex gap-8 '>
                        {NavbarData?.map((link)=>{
                            const isActive = pathname === link.link;
                            return(                                
                                <li className='text-white hover:text-secondry transition-all duration-500 font-Poppins' key={link.id}>
                                    <a className={`${isActive ? "text-[#b3b300]" : ""}`} href={link.link}>
                                        {link.title}
                                    </a>
                                </li>
                            )
                        }                           
                        )}
                        <div>
                            <a className='text-white font-Poppins py-3 px-6 bg-gradient-to-r from-secondry to-secondry/50 rounded-lg' href="#">Get Resume</a>
                        </div>
                    </ul>
                </div>

                {/* mobile menu section  */}
                <div className='md:hidden'>
                    <FaBars onClick={toggoleMenu} className='text-3xl text-white' />
                </div>
            </div>
                {/* mobile sidebar section  */}
                <div className='text-white'>
                    <ResponsiveMenu showMenu={showMenu}/>
                </div>
        </div>
    </div>
  )
}

export default Navbar

