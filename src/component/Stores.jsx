import React from 'react'
import Store from './Store'
const Stores = ({storesitem,Delete,IncreaseAmount}) => {
  return (
   <div className='p-4 md:mx-20  mx-auto '>
     <h1 className='text-3xl'>Your Shopping Cart</h1>

     <div className='  grid place-items-center grid-col-1 md:grid-cols-2 lg:grid-cols-3  gap-6  mx-auto '>
    {storesitem.map(stor=>(
        <div key={stor.id}>
            <Store IncreaseAmount={IncreaseAmount} Delete={Delete} stor={stor}/>
        </div>
    ))}
    {/* <Store/> */}
</div>
   </div>
  )
}

export default Stores