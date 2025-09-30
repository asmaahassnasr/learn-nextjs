import Link from 'next/link'
import React from 'react'


const ProductsPage = async () => {
  
  const data = await fetch('https://dummyjson.com/products')
  const {products} = await data.json()

  return (
    <div>
       {products.map( ({id,title} :{id:number, title:string}) => (
        <h3 key={id}>
          <Link href={`/products/${id}`}>ID {id} -  {title}</Link>
        </h3>
       ))}
    </div>
  )
}

export default ProductsPage