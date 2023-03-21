import React from 'react'

const Checkout = () => {
  return (
    <div className=' pt-10 tracking-little text-center font-semibold flex justify-center items-center'>
        <div>
            <h1 className='text-4xl'>Checkout</h1>
            <div className='my-6 flex justify-between items-center gap-4'>
                  <div className='flex gap-2'>
                    <div className='w-6 h-6 grid place-items-center text-white rounded-full bg-blue-700'><span >1</span></div>
                    <p>Shipping address</p>
                  </div>
                  <div className='h-[0.7px] bg-gray-500 w-32'></div>
                  <div className='flex gap-2'>
                    <div className='w-6 h-6 flex justify-center items-center text-center text-white rounded-full bg-blue-700'><span >2</span></div>
                    <p>Payment details</p>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout