import React from 'react'
import Slidebar from './Slidebar'
import { Link } from 'react-router-dom'
import { FaPlus ,FaEdit ,FaTrash  } from "react-icons/fa";


const AdminProducts = () => {
    return (
        <div className='flex mt-16' >
            <Slidebar/>
            <div className='flex-1 p-10 bg-gray-50 min-h-screen'>
                <h1 className='text-3xl font-bold mb-6 text-gray-800'>Admin Products 📊</h1>

             {/* Product Manage */}
             <Link to={'/admin/add_product'}>
                <button className='flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition'>
                 <FaPlus/> Add Products
                </button>
             </Link>

             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5'>

                {
                    [1,2,3,4,5,6,7].map(()=>(
                        <div className='bg-white rounded-xl shadow p-4 hover:shadow-xl transition '>

                    <img src="assdd" alt="Product img" className='w-full h-40 object-cover rounded-md mb-4 border' />

                    <h1 className='text-xl font-semibold text-gray-700'>Product Name</h1>

                    <p className='text-sm text-gray-600'>Category:- Home</p>

                    <p className='text-green-500 font-bold mt-1'>Price:- ₹99</p>

                    <div className='flex justify-between mt-4 flex-col sm:flex-row'>
                        <Link to={"/admin/edit-product"} className='flex items-center  text-blue-500 hover:text-blue-700'> <FaEdit/> Edit</Link>
                        <Link className='flex items-center  text-red-500 hover:text-red-700'> <FaTrash/>Delete</Link>
                    </div>
                </div>
                    ))
                }
             </div>
            </div>
        </div>
    )
}

export default AdminProducts
