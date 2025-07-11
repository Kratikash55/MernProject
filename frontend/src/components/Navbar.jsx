import React, { useState } from 'react'
import logo from '../assets/Quickzy.png'
import { Link } from 'react-router-dom'
import { FaUserCircle , FaShoppingCart ,FaTimes ,FaHome ,FaBars ,FaSearch  } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";




const Navbar = () => {

  const [isOpen,setIsOpen] = useState(false);
  const toggleMenu =()=>{setIsOpen(!isOpen)};

return (
       
  <nav className='bg-gradient-to-r from-green-100 to-white shadow-md fixed top-0 left-0 right-0 z-50'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-between h-16'>
                {/* Logo */}
        <div>
        <img src={logo} alt="" className='h-16 w-auto' />
        </div>

                {/* Search Bar */}
        <div className='flex-1 mx-4'>
          <div className='relative'>
            <input type="search" name="" id="" className='w-full bg-gray-50 border border-gray-500 rounded-full ps-4 pe-10 py-2 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-green-500' />
            <FaSearch className='absolute right-3 top-2 text-gray-600 hover:text-green-600' />
          </div>
        </div>

                {/* Menu Items */}
        <div className='hidden md:flex space-x-6 items-center'>
          <Link to={"/"} className='text-2xl hover:text-green-600 '><FaHome /></Link>

          <Link to={"/cart"}><FaShoppingCart className='text-2xl hover:text-green-600'/></Link>

          <Link to={"/login"} ><FaUserCircle className='text-2xl hover:text-green-600' /></Link>

          <Link to={"/contact"}><MdContactSupport className='text-2xl hover:text-green-600'/></Link>

        </div>

                {/* Mobile Toggle */}
        <div className='md:hidden flex items-center'>
          <button onClick={toggleMenu} className="text-2xl text-green-600">
          {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

                {/*Menu Items show */}
        </div>
        </div>
          {isOpen && (
          <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md">
          <Link to={"/"} className="block text-gray-700 hover:text-green-600">
            Home
          </Link>
          <Link to={"/cart"} className="block text-gray-700 hover:text-green-600">Cart</Link>
          <Link
            to={"/login"}u
            className="block text-gray-700 hover:text-green-600"
          >
            User
          </Link>
        </div>
)}
  </nav>
)
}

export default Navbar
