import React from 'react'
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { CiSquareMinus ,CiSquarePlus  } from "react-icons/ci";


const Cart = () => {
     const navigate = useNavigate();

    return (
          <div className='fixed inset-0 bg-back bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50'>
            <div className='bg-white w-full max-w-xl p-6 rounded-xl shadow-lg relative overflow-y-auto max-h-[90vh] '>
              <button onClick={()=>{navigate("/ ")}} className='absolute top-3 right-3 text-gray-500 hover:text-green-500 text-xl'><FaTimes/></button>
            
            <h2 className='text-2xl font-bold text-green-500 text-center mb-4'>Your Cart🛒</h2>

            {/* Items */}

            <ul className='divide-y divide-gray-300 '>
                <li className='flex items-center gap-5 py-4'>
                    <img src="sfhh" alt="ProductImage" className='w-16 h-16 object-cover rounded border '/>

                <div className='flex-1 '>
                        <h3 className='font-semibold text-gray-700 '>Fresh Products</h3>
                        <p className='text-sm text-gray-500 '>Price:- ₹99</p>

                    <div className='flex items-center mt-2 gap-2'>
                        <button className=' text-green-500 hover:text-green-700 text-2xl'><CiSquareMinus/></button>
                        <span className='px-2'>2</span>
                        <button className=' text-green-500 hover:text-green-700 text-2xl'><CiSquarePlus /></button>
                    </div>
                </div>
                  <p className='font-bold text-green-500'>₹198</p>
                </li>

                  <li className='flex items-center gap-5 py-4'>
                    <img src="sfhh" alt="ProductImage" className='w-16 h-16 object-cover rounded border '/>

                <div className='flex-1 '>
                        <h3 className='font-semibold text-gray-700 '>Fresh Products</h3>
                        <p className='text-sm text-gray-500 '>Price:- ₹99</p>

                    <div className='flex items-center mt-2 gap-2'>
                        <button className=' text-green-500 hover:text-green-700 text-2xl'><CiSquareMinus/></button>
                        <span className='px-2'>2</span>
                        <button className=' text-green-500 hover:text-green-700 text-2xl'><CiSquarePlus /></button>
                    </div>
                </div>
                  <p className='font-bold text-green-500'>₹198</p>
                </li>
            </ul>

            {/* Total  */}
            <div className='mt-6 text-right'>
                <p className='text-lg font-semibold text-gray-800'>Total Price:- <span className='text-green-500'> ₹396</span></p>
                <button className='mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition shadow-lg'>CheckOut</button>
            </div>

            </div>
        </div>
    )
}

export default Cart
