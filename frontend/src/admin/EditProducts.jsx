import React from 'react'
import Slidebar from './Slidebar'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import {toast} from 'react-hot-toast';



const EditProducts= () => {
  const navigate = useNavigate();
  const [edit,setEdit]=useState({});
  
  const{id} = useParams();

  async function editValueData(){
    try {
     const response =  await fetch(`/api/editValueData/${id}`);
     const record = await response.json();
     setEdit(record.data);
    } catch (error) {
      console.log(error)
    }
}

  async function handleForm(e){
    try {
      e.prevent.default();
    const FormData = {Pname:edit.productName,
    Pprice : edit.productPrice ,
    cat :edit.productCategory,
    Pstatus :edit.productStatus};
    
    const response = await fetch(`/api/productupdate/${id}`,{
      method: "PUT",
      headers: {"Content-Type" : "application/json"},
      body : JSON.stringify(FormData),
    });

    const record = await response.json();
    if(response.ok){
     toast.success(record.message);
     navigate("/admin/products")
    }else{
      toast.error(record.message);
    }

    } catch (error) {
      console.log(error);
    }
}

    useEffect(()=>{
      editValueData();
    },[]);

  function handleChange(e){
    setEdit({...edit,[e.target.name]:e.target.value});
  }
return (
  <div className='flex mt-16' >
  <Slidebar/>

  <div className='flex-1 p-10 bg-gray-50 min-h-screen'>
    <h1 className='text-3xl font-bold mb-6 text-gray-800'>Edit Products ✔️</h1>
    <button className='bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 flex items-center gap-1' onClick={()=>{navigate("/admin/products")}}><IoArrowBackCircleOutline/> Back</button>

  <form action="" onSubmit={handleForm} className='bg-white shadow-md rounded-xl p-6 max-w-2xl mx-auto space-y-6 mt-6'>

    <label htmlFor="" className='block text-gray-700 font-medium mb-1' >Product Name</label>

    <input type="text" name="productName" id="" value={edit.productName} onChange={handleChange} placeholder='Eg. Fresh Fruits' className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500'/>

    <label htmlFor="" className='block text-gray-700 font-medium mb-1' >Price ₹</label>

    <input type="number" name="productPrice" id="" value={edit.productPrice} onChange={handleChange} placeholder='Eg.₹99' className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500'/>

    <label htmlFor="" className='block text-gray-700 font-medium mb-1' >Categories</label>

    <select name="productCategory" id=" " value={edit.productCategory} onChange={handleChange} className='w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500'>
        <option value="select">--Select--</option>
        <option value="cafe">Cafe</option>
        <option value="home">Home</option>
        <option value="fresh">Fresh</option>
        <option value="toys">Toys</option>
        <option value="electronics">Electronics</option>
        <option value="mobile">Mobile</option>
        <option value="beauty">Beauty</option>
    </select>

    <label htmlFor="" className='block text-gray-700 font-medium mb-1' >Action</label>

      <select name="productStatus" id="" value={edit.productStatus} onChange={handleChange} className='w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500'>
        <option value="select">--Select--</option>
        <option value="In-Stock">In-Stock</option>
        <option value="Out-Of-Stock">Out-of-Stock</option>
        </select>

    <label htmlFor="" className='block text-gray-700 font-medium mb-1' >Product Image</label>

      <input type="file" name="" id="" className='w-full px-4 py-2 border border-gray-300 rounded ' />
        <div className='text-right '>
        <button type="submit" className='bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-700 transition'>Save Changes</button>
        </div>
  </form>
</div>
</div>
)}

export default EditProducts
