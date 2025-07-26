import React from 'react'
import image from '../assets/Quickzy.png'

const Hero = () => {
    return (
        <section className='bg-gradient-to-r from-green-100 to-white px-6 py-12 md:flex items-center m-8 mx-auto mt-6 justify-between max-w-7xl  rounded-xl '>
        {/* Left */}
            <div className='md:w-1/2 space-y-4'>
                <h1 className='text-4xl md:text-5xl font-bold text-gray-800'>Fast Delivery 🚀</h1>
                <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, fuga.</p>
                <button className='mt-4 bg-green-500 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg'>Shop Now</button>
            </div>

        {/* Right */}

            <div className='md:w-1/2 mt-8 md:mt-0 '>
                <img src={image} alt="" className='w-full max-w-md mx-auto' />
            </div>
            
        </section>
    )
}

export default Hero
