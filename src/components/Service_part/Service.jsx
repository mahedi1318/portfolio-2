"use client"
import React from 'react'
import { ServiceData } from '../All_Data/Data'

const Service = () => {
  return (
    <div className='py-20 bg-gradient-to-tr from-[#141414] to-[#141414]/50'>
      <div className="container">
        <div className="xl:grid grid-cols-1 md:grid-cols-2 lg:block gap-10 items-center">
            <div>
                <h3 className='font-Poppins text-3xl font-semibold text-white'>Services</h3>
                <p className='font-Poppins text-[14px] font-normal text-[#cccccc] leading-7 xl:w-[500px] mb:w-[297px] mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eaque, ea consequatur 
                adipisci consectetur quia dolores consequuntur quasi eum blanditiis?</p>
                <p className='font-Poppins text-[14px] font-normal text-[#cccccc] leading-7 xl:w-[500px] mb:w-[297px] mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, perferendis!</p>
                <div className='flex xl:gap-8 mb:gap-3 mt-8 text-white mb-10'>
                    <button className='font-Poppins xl:text-[15px] mb:text-[13px] py-3 px-5 bg-gradient-to-r from-secondry to-secondry/50 rounded-lg'>Know More</button>
                    <button className='font-Poppins xl:text-[15px] mb:text-[13px] py-3 px-5 bg-gradient-to-r from-secondry to-secondry/50 rounded-lg'>Download Resume</button>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {ServiceData?.map((item)=>(
                    <div key={item.id} className='px-6 py-10 bg-[#1f2629] rounded-xl'>
                        <div>
                            <span className='text-4xl text-[#2532a1]'>
                                {item.icon}
                            </span>
                            <h2 className='text-white font-Poppins text-xl font-semibold mt-3'>{item.title}</h2>
                            <p className='font-Poppins text-[14px] font-normal text-[#cccccc] leading-7 mt-4'>{item.details}</p>
                        </div>
                    </div>
                    ))}                  
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Service
