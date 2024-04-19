import React from 'react'
import Dashboard from './Dashboard'
import bg_image from '../images/landing-page.png'


const HomePage = () => {
  return (
    <>
    <div className='relative z-10'>
                <img src={bg_image} className='h-svh w-[100%] absolute inset-0' alt='background_image'  />
                
    </div>

    <div className='relative z-20 flex'>
    <Dashboard/>
      <div className='h-auto w-[140vh] bg-white border rounded-3xl ml-7 mt-16 my-7'>
        <div className='flex flex-row min-h-[45%] px-8 py-6'>
            
            <div className='flex flex-col min-w-[60%]'>
                hello
            </div>
            <div className='flex flex-col min-w-[40%]'>
                bye
            </div>
        </div>
        <div className='flex flex-row px-8 py-6 min-h-[50%]'>
        <div className='flex flex-col min-w-[50%]'>
                hello
            </div>
            <div className='flex flex-col min-w-[50%]'>
                bye
            </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default HomePage
