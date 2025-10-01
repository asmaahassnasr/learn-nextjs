
import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "E-Commerce Products Page",
  description: "",
}
 

export default function ProductsLayout({children}:{children:ReactNode}){
  return (
    <div className='flex gap-10'>
        <h3> Products Layout </h3>
        {children}
    </div>
  )
}