import React from 'react'
import Product from './product/Product'
const Products = ({products,AddtoCart}) => {
  return (
    <div>
        <div className=' p-4 md:px-20 grid place-items-center grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  mx-auto '>
            {products.map(product=>(
                <div key={product.id}>
                    <Product AddtoCart={AddtoCart} product={product}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products