import Link from 'next/link'
import React from 'react'

const ProductsPage = () => {
  return (
    <div>
        {Array.from({length:10}, (_,idx) => (
            <h3 key={idx}>
                <Link href={`/products/${idx + 1}`}> Product - {idx + 1} </Link>
            </h3>
        ))}
    </div>
  )
}

export default ProductsPage