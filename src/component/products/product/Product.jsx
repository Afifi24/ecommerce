import React from 'react'
import {MdOutlineAddShoppingCart} from 'react-icons/md'
const Product = ({product,AddtoCart}) => {
  return (
    <div>
       <div className="group">
       <div className='shadow-sm group-hover:shadow-lg md:group-hover:scale-105 duration-300 border border-gray-300 rounded-md max-w-lg  md:max-w-sm h-fit pb-2' >
          <img className='rounded-tl-md rounded-tr-md' src={product.image} alt="" />
          <div className='px-6 py-4'>
          <div  className='flex justify-between items-center mb-14'>
            <h2 className='text-red-500'>{product.name}</h2>
            <h2>${product.price}</h2>
          </div>
         <div onClick={()=>AddtoCart(product)} className='text-right  flex justify-end'> 
            <div className='w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200'><MdOutlineAddShoppingCart className='text-xl text-gray-400 cursor-pointer' /></div>
         </div>
          </div>
       </div>
       </div>
    </div>
  )
}

export default Product