import React, { useEffect } from 'react'
import Slidebar from './Slidebar'
import { useParams } from 'react-router-dom'

const AdminDashboard = () => {
    const {id} = useParams();

  async function queryData() {
    try {
      const response = await fetch(`/api/querysingledata/${id}`);
      const record = await response.json();
      if (response.ok) {
        console.log(record);
      } else {
        console.log(record.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

    useEffect(()=>{
        queryData();
    },[id]);

    return (
        <div className='flex mt-16' >
            <Slidebar/>
            <div className='flex-1 p-10 bg-gray-50 min-h-screen'>
                <h1 className='text-3xl font-bold mb-6 text-gray-800'>Query-Reply</h1>

    <form action="" className='bg-white shadow-md rounded-xl p-6 max-w-2xl mx-auto space-y-6 mt-6'>

    <label htmlFor="" className='block text-gray-700 font-medium mb-1' >To:-</label>

    <input type="text" name="" id="" placeholder='Mail-to' className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500'/>
    
    <label htmlFor="" className='block text-gray-700 font-medium mb-1' >From:-</label>

    <input type="text" name="" id="" placeholder='Mail-From' className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500'/>
    
    <label htmlFor="" className='block text-gray-700 font-medium mb-1' >Sub:-</label>

    <input type="text" name="" id="" placeholder='Sub....' className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500'/>

    <label htmlFor="" className='block text-gray-700 font-medium mb-1' >Body:-</label>

    <textarea name="" id="" className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500'></textarea>

    <div className='text-right '>
    <button type="submit" className='bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-700 transition'>Reply</button>
    </div>
</form>
</div>
           
</div>
)}

export default AdminDashboard
