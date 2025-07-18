import React from 'react'

const Contact = () => {
    return (
        <div className='max-w-3xl mx-auto mt-24 p-6 bg-white rounded-xl shadow-xl'>
            <h2 className='text-2xl font-bold text-green-500 mb-5 text-center'>Query Form</h2>

            
            <form action="">
                <label htmlFor="" className='block text-gray-700 font-medium mb-1' >Your Name</label>
                <input type="text" name="" id="" placeholder='Eg. Your Name...' className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600'/>

                <label htmlFor="" className='block text-gray-700 font-medium mb-1' >Your Email</label>
                <input type="email" name="" id="" placeholder='Eg. Example@email.com' className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600'/>


                <label htmlFor="" className='block text-gray-700 font-medium mb-1' >Your Query</label>
                <textarea name="" id="" placeholder='Your Query..' className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600' ></textarea>

                
                <button type="submit" className='bg-green-500 w-full text-white px-6 py-2 mt-3 rounded hover:bg-green-700 transition'>Submit Query</button>
                
            </form>
        </div>
    )
}

export default Contact
