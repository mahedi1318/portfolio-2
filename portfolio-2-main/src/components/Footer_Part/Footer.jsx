import React from 'react'
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-black text-white py-16'>
        <div className="container">
            <div className='bg-gradient-to-r from-primary/50 to-primary/20 text-white py-12 border-2 border-primary rounded-2xl px-12 hover:shadow-lg
             hover:shadow-secondry duration-300 flex flex-col lg:flex-row gap-5 justify-around items-center'>
                <div className='space-y-3'>
                    <h2 className='font-satisfy xl:text-3xl mb:text-2xl font-bold mb-2'>Developer Mahedi Hassan</h2>
                    <p className='font-Poppins xl:text-[16px] mb:text-[13px] font-normal text-[#c7c7c7] mb-2'>contact.mahedihasan7784@gmail.com</p>
                    <p className='font-Poppins xl:text-[16px] mb:text-[13px] font-normal text-[#c7c7c7]'>copyright © 2022 Dev Mahedi Hassan</p>
                </div>
                <div className='flex gap-9'>
                    <div>
                        <a href="https://www.linkedin.com/feed/"><IoLogoLinkedin className='text-4xl text-[#0077B5]' /></a>
                    </div>
                    <div>
                        <a href="#"><FaInstagram className='text-4xl text-[#E1306C]' /></a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/"><FaFacebook className='text-4xl text-[#1877F2]' /></a>
                    </div>
                </div>
             </div>
        </div>
    </footer>
  )
}

export default Footer
