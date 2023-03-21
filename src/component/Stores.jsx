import React, { useState } from 'react'
import Store from './Store'
import { Link } from 'react-router-dom'
const Stores = ({storesitem,Delete,IncreaseAmount,DecreaseAmount,setStoreitem,setCounter,counter}) => {
  const [subtotal,setSubtotal]= useState(5.99)
  const EmptyCart = ()=>{
    setStoreitem([])
    setCounter(0)
  }
  return (
   <div className='p-4 md:mx-20  mx-auto '>
     <h1 className='text-3xl'>{counter==0? 'Your Shopping Cart is Empty':'Your Shopping Cart'}</h1>

     <div className='  grid place-items-center grid-col-1 md:grid-cols-2 lg:grid-cols-3  gap-6  mx-auto '>
    {storesitem.map(stor=>(
        <div>
          <div key={stor.id}>
            <Store counter={counter} DecreaseAmount={DecreaseAmount} IncreaseAmount={IncreaseAmount} Delete={Delete} stor={stor}/>
        </div>
        </div>
        
    ))}
    {/* <Store/> */}
</div>
     { counter!==0?
     <div className='flex flex-col items-center justify-between  md:flex-row '>
      <div>
        <h2 className='font-bold text-red-500 md:text-xl'>Total: <small className='px-4 py-1 bg-red-500 text-white'>$ {Math.floor(storesitem.reduce((acc,item)=>acc+=item.amount*item.price,0))}</small></h2>
        
      </div>
     <div className='flex flex-col gap-6 md:flex-row mt-10 mb-6 justify-end'>
      <button onClick={EmptyCart} className='px-10 hover:shadow-xl py-3 bg-red-500 text-white uppercase'>empty cart </button>
      <button className='px-10 hover:shadow-xl py-3 bg-blue-500 text-white uppercase'><Link to={'/checkout'}>checkout</Link></button>
    </div>
    </div>
     :''
    }
   </div>
  )
}

export default Stores