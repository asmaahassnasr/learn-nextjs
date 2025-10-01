
"use client"
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ProductsSkeleton = () => {
  return (
    <div className="p-10">
      <Skeleton height={30} width="80%" className="mb-2" />
          <Skeleton count={3} />
    </div>
  )
}

export default ProductsSkeleton