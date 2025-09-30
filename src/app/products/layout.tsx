import React, { ReactNode } from 'react'

const ProductsLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='flex gap-10'>
        <h3> Products Layout </h3>
        {children}
    </div>
  )
}

export default ProductsLayout