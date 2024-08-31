import React from 'react'
import { NavbarData } from '../All_Data/Data'

const ResponsiveMenu = ({showMenu}) => {
  return (
    <div className='md:hidden relative z-10'>
        <div className={` ${showMenu ? "left-0" : "left-[-100%]"} fixed top-[72px] left-0 h-screen w-[75%] bg-primary z-0 text-white pt-10 pl-10 duration-300`}>
            <div>
                <div>
                    <ul>
                        {NavbarData?.map((link)=>{
                            return(
                                <li className='pb-7' key={link.id}>
                                    <a href={link.link}>{link.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResponsiveMenu
