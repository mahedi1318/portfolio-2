"use client"
import React from 'react'
import CountUp from 'react-countup'
import MahediImg from "../../assets/mahedi.jpg"
import Image from 'next/image'


const Hero = () => {
  return (
    <div className='py-20 bg-gradient-to-tr from-[#141414] to-[#141414]/50'>
        <div className="container">
            <div className='grid xl:grid-cols-2 mb:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-6 relative z-0'>
                <div className=''>
                    <h4 className='font-Poppins text-2xl text-white'>Hello, I'm</h4>
                    <h3 className='font-satisfy text-4xl font-semibold text-white mt-4'>Mahedi Hassan</h3>
                    <p className='font-Poppins text-[14px] font-normal text-white xl:w-[554px] lg:w-[554px] mb:w-[298px] mt-6 leading-6 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique architecto amet itaque sequi quis. Quas,
                     sed corporis dicta reprehenderit, totam tempora deserunt consequatur cum soluta magnam ea aliquid provident modi.</p>
                     <button className='font-Poppins text-[15px] font-normal text-white py-3 px-6 bg-gradient-to-r from-secondry to-secondry/50 rounded-lg mt-6'>Know More</button>

                     {/* state section  */}
                     <div className='flex justify-around md:max-w-[500px] p-6 bg-gradient-to-tl from-secondry to-secondry/50 rounded-lg text-white mt-10'>
                        <div className='flex flex-col gap-2 items-center '>
                            <p className='font-Poppins text-[20px] font-normal'>
                                <CountUp end={4} start={0} suffix='+' delay={1.4} enableScrollSpy/>
                            </p>
                            <p className='font-Poppins text-[17px] font-normal'>Experience</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <p className='font-Poppins text-[20px] font-normal'><CountUp end={70} start={0} suffix='+' delay={1.4} enableScrollSpy/></p>
                            <p className='font-Poppins text-[17px] font-normal'>Project</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <p className='font-Poppins text-[20px] font-normal'><CountUp end={10} start={0} suffix='+' delay={1.4} enableScrollSpy/></p>
                            <p className='font-Poppins text-[17px] font-normal'>Clients</p>
                        </div>                       
                     </div>
                </div>
                <div className='flex items-center justify-center'>
                    <Image className='' src={MahediImg} alt="" />
                </div>
            </div>           
        </div>   
    </div>
  )
}

export default Hero

