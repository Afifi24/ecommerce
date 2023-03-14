import React from 'react'
import {FaShoppingCart} from  'react-icons/fa'
// import {SiPicartodottv} from  'react-icons/si'
import {FaOpencart} from  'react-icons/fa'
import { Link } from 'react-router-dom'
const Nav = ({counter}) => {
  return (
    <div>
        <div className='flex fixed top-0 left-0 right-0 bg-white z-10 justify-between mb-10 items-center p-4 md:px-20 shadow-sm  border-b border-gray-300'>
            <Link to={'/'}><div className='flex items-center gap-2'>
            <div className='h-8 w-8 grid place-items-center bg-black rounded-full text-white'><FaOpencart/></div>
            <h3 className='font-bold'> Commerce</h3>
            </div></Link>
             <div className='h-10 w-10 grid relative place-items-center cursor-pointer duration-200 hover:bg-gray-200 rounded-full'>
             <Link to={'/store'}><FaShoppingCart className='text-2xl'/></Link>
               <span className='absolute flex items-center justify-center top-0 text-sm h-5 w-5 bg-red-500 rounded-full right-0 text-white '>{counter}</span>
             </div>
        </div>
    </div>
  )
}

export default Nav