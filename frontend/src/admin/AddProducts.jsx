import React from 'react'
import Slidebar from './Slidebar'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {toast} from 'react-hot-toast';


const AddProducts= () => {
    const navigate = useNavigate();
    const [product,setProduct] = useState({Pname:"",price:"",cat:""});
    const [pimage,setPimage] = useState("");

    
    async function handleForm(e) {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("Pname", product.Pname);
    formdata.append("Price", product.price);
    formdata.append("Cat", product.cat);
    formdata.append("image", pimage);
        
     try {
      const response = await fetch("/api/addadminproduct", {
        method: "POST",
        body: formdata,
      });

      const result = await response.json();
      if (response.ok) {
        toast.success(result.message);
        navigate("/admin/products");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error(error);
    }
  }

    function handleChange(e){
        setProduct({...product,[e.target.name]:e.target.value});
    }
    
return (
<div className='flex mt-16' >
    <Slidebar/>

    <div className='flex-1 p-10 bg-gray-50 min-h-screen'>
        <h1 className='text-3xl font-bold mb-6 text-gray-800'>Add Products 💹</h1>
        <button className='bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 flex items-center gap-1' onClick={()=>{navigate("/admin/products")}}><IoArrowBackCircleOutline/> Back</button>

        <form action="" encType='multipart/form-data' onSubmit={handleForm}  className='bg-white shadow-md rounded-xl p-6 max-w-2xl mx-auto space-y-6 mt-6'>
        <label htmlFor="" className='block text-gray-700 font-medium mb-1' >Product Name</label>
        <input type="text" required name="Pname" value={product.Pname} onChange={handleChange} id="" placeholder='Eg. Fresh Fruits' className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500'/>

        <label htmlFor="" className='block text-gray-700 font-medium mb-1' >Price ₹</label>
        <input type="number" required value={product.price} onChange={handleChange} name="price" id="" placeholder='Eg.₹99' className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500'/>

        <label htmlFor="" className='block text-gray-700 font-medium mb-1' >Categories</label>
            <select name="cat" onChange={handleChange} value={product.cat} id=" " required className='w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500'>
            <option value="">--Select--</option>
            <option value="cafe">Cafe</option>
            <option value="home">Home</option>
            <option value="fresh">Fresh</option>
            <option value="toys">Toys</option>
            <option value="electronic">Electronics</option>
            <option value="mobile">Mobile</option>
            <option value="beauty">Beauty</option>
            </select>

        <label htmlFor="" onChange={(e)=>{setPimage(e.target.files[0])}} className='block text-gray-700 font-medium mb-1' >Product Image</label>
        <input type="file" name="" id="" className='w-full px-4 py-2 border border-gray-300 rounded ' />

        <div className='text-right '>
        <button type="submit" className='bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-700 transition'>Add Product</button>
        </div>
    </form>
</div>
</div>
);}

export default AddProducts
