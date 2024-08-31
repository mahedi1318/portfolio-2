import Image from 'next/image'
import React from 'react'
import BannerImg from "../../assets/img-8.png"

const Banner = () => {
  return (
    <div className='py-20 bg-gradient-to-bl from-[#141414] to-[#141414]/50'>
      <div className="container">
        <div className='py-16 bg-[#1f2629] rounded-2xl'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-5'>
                <div className='rounded-full'>
                    <Image className='w-full xl:h-[400px] mb:h-[400px] object-contain ' src={BannerImg} alt=''/>
                </div>
                <div className='text-white'>
                    <h2 className='font-satisfy xl:text-4xl mb:text-3xl font-semibold'>I am a Front-End Developer</h2>
                    <p className='font-Poppins xl:text-[14px] mb:text-[13px] text-[#cccccc] font-normal mt-7 leading-7 xl:w-[600px] mb:w-[262px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quisquam vel quis totam,
                     ducimus voluptatem animi reprehenderit magnam! Modi provident, quaerat labore nemo officia facilis.</p>
                     <div className='xl:flex mb:block mb:text-center lg:text-start gap-8 mt-8 '>
                        <button className='font-Poppins text-[14px] lg:mr-[30px] xl:mr-[0px] mb:mb-5 py-3 px-6 bg-gradient-to-r from-secondry to-secondry/50 rounded-lg'>Know More</button>
                        <button className='font-Poppins text-[14px] mb:mb-5 py-3 px-4 bg-gradient-to-r from-secondry to-secondry/50 rounded-lg'>Download Resume</button>
                     </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
