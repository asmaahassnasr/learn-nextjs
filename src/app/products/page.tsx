import ProductsSkeleton from '@/components/ProductsSkeleton'
import Link from 'next/link'
import React, { Suspense } from 'react'


const ProductsPage = async () => {
  
  const data = await fetch('https://dummyjson.com/products')
  const {products} = await data.json()

  return (
    <div>
      {/* Static Data */}
      <h2> All Products  </h2>
      {/* Dynamic Data */}
      <Suspense fallback={<ProductsSkeleton />}>
        {products.map( ({id,title} :{id:number, title:string}) => (
        <h3 key={id}>
          <Link href={`/products/${id}`}>ID {id} -  {title}</Link>
        </h3>
       ))}
      </Suspense>
       
    </div>
  )
}

export default ProductsPage