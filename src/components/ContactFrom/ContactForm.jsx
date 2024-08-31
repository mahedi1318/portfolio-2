import Image from 'next/image'
import React from 'react'
import MassegeImg from "../../assets/message.avif"

const ContactForm = () => {
  return (
    <section className='bg-gradient-to-tr from-[#141414] to-[#141414]/50 py-24'>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="bg-primary p-10">
            <form action="">
                <h2 className='font-Poppins text-white mb-6'>Get in touch</h2>
                <div className='mb-6'>
                    <label className='text-white font-Poppins text-[15px] font-normal mb-1 block'>Name</label>
                    <input className=' block w-full py-2 pl-4 border border-[#757474] rounded-md focus:outline-none
                    focus:ring focus:ring-opacity-50 ring-[#757474] bg-primary text-white' type="text" name='name'/>
                </div>
                <div className='mb-6'>
                    <label className='text-white font-Poppins text-[15px] font-normal mb-1 block'>Email</label>
                    <input className=' block w-full py-2 pl-4 border border-[#757474] rounded-md focus:outline-none
                    focus:ring focus:ring-opacity-50 ring-[#757474] bg-primary text-white' type="email" name='email'/>
                </div>
                <div className='mb-6'>
                    <label className='text-white font-Poppins text-[15px] font-normal mb-1 block'>Message</label>
                    <textarea className='block w-full py-10 pl-4 pt-2 border border-[#757474] rounded-md focus:outline-none
                    focus:ring focus:ring-opacity-50 ring-[#757474] bg-primary text-white'  name='message'/>
                </div>
                <button type='submit' className='font-Poppins py-3 px-6 bg-gradient-to-r from-secondry to-secondry/50 rounded-lg text-white'>Send Email</button>
            </form>
        </div>
        <div className="hidden md:flex justify-center items-center">
            <Image src={MassegeImg} alt='send email' className='w-[300px]'/>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
