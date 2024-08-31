"use client";
import Image from 'next/image';
import React from 'react';
import { ProjectData } from '../All_Data/Data';

const Projects = () => {
  return (
    <div className='py-16 bg-gradient-to-tr from-[#141414] to-[#141414]/50'>
      <div className="container">
        <div className='text-center relative'>
            <h4 className='font-Poppins text-5xl text-[#444] font-bold'>PROJECTS</h4>
            <h5 className='text-white absolute top-0 left-[50%] translate-x-[-50%] font-satisfy text-4xl'>Projects</h5>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
            {ProjectData?.map((item)=>{
                return(
                    <div key={item.id} className='p-4 border border-[#504f4f] rounded-xl hover:scale-110 duration-500 mb-4 hover:shadow-lg hover:shadow-[#504f4f]'>                      
                        <div className='h-[300px] '>
                            <Image className='w-[100%] h-full object-cover rounded-lg' src={item.img} alt=''/>
                        </div>
                        <div className='px-4 mt-4'>
                            <h2 className='font-Poppins text-xl font-semibold text-white'>{item.title}</h2>
                            <p className='font-Poppins text-[13px] font-normal text-[#cccccc] mt-3 leading-6'>{item.details}</p>
                        </div>                       
                        <div className='flex xl:gap-6 mb:gap-3 mt-8 text-white justify-between px-4'>
                            <button className='font-Poppins text-[14px] py-2 px-3 bg-gradient-to-r border border-[#cccc] rounded-lg'>View Project</button>
                            <button className='font-Poppins text-[14px] py-2 px-3 bg-gradient-to-r from-secondry to-secondry/50 rounded-lg'>View Code</button>
                        </div>
                    </div>
                )
            })}            
        </div>
      </div>
    </div>
  )
}

export default Projects
