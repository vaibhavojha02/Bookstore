import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <>
      <Navbar/>
      <div className='max-w-screen-2xl h-[100vh]  mx-auto container md:px-20  px-4 py-28 mt-12 flex justify-center items-center dark:text-white'>
      <div className='flex-col mt-20 items-start w-[550px] h-[550px]'>
      <h1 className=' font-bold text-2xl'>Contact US</h1>

      <div className='w-full mt-2'>
        <h2>Name</h2>
        <input type='text' className=' dark:text-black border w-full mt-1 rounded-sm outline-none'></input>
      </div>
      <div className='w-full mt-2'>
        <h2>Email</h2>
        <input type='text' className='border w-full mt-1 rounded-sm outline-none  dark:text-black dark:border'></input>
      </div>
      <div className='w-full mt-2'>
        <h2>message</h2>
        <textarea id ="text-input" className='w-full h-[70px] outline-none border  dark:text-black'></textarea>
      </div>
      
      <button className='bg-blue-600 hover:bg-blue-400 h-[45px] w-[90px] text-white mt-6 py-1 dark:text-black rounded-md'>submit</button>



      </div>
     
      
      </div>
    </>
  )
}

export default Contact
