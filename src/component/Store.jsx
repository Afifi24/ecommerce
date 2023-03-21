import React,{useState} from 'react'
import kittle from '../images/kittle.jpg'
import { Link } from 'react-router-dom'
const Store = ({stor,Delete,IncreaseAmount,DecreaseAmount,counter}) => {
const [Amount,setAmount]= useState(stor.amount)

  return (
    <div className='p-4 md:px-20 mx-auto'>
        
        <div className="group mt-10">
       <div className='shadow-sm group-hover:shadow-lg  duration-300 border border-gray-300 rounded-md max-w-lg  md:max-w-sm h-fit pb-2' >
          <img className='rounded-tl-md rounded-tr-md' src={stor.image} alt="" />
          <div className='px-6 py-4'>
          <div  className='flex justify-between items-center mb-14'>
            <h2 className='text-red-500'>{stor.name}</h2>
            <h2>${stor.price}</h2>
          </div>
          <div className='flex gap-4 justify-center items-center'>
                <button onClick={()=>DecreaseAmount(stor)} className='px-4 py-1 hover:bg-gray-200  '>-</button>
                <button className='px-4 py-1  '>{stor.amount}</button>
                <button onClick={()=>IncreaseAmount(stor)} className='px-4 py-1 hover:bg-gray-200  '>+</button>
                <button onClick={()=>Delete(stor)} className='px-4 py-1  bg-red-500 text-white uppercase rounded-md'>remove</button>
          </div>
        
          </div>
       </div>
            <div className='pt-6 text-md md:text-lg font-semibold'>
                 <h2>subtotal: ${stor.amount*stor.price}</h2>
              </div>
       </div>
    </div>
  )
}

export default Store