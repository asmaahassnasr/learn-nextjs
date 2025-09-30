import React from 'react'
import Image from 'next/image'

interface IProps{
  params:{
    id:string;
  }
}

export default async function ProductDetailsPage({params}: IProps) {

  const { id } = await params

  const data = await fetch(`https://dummyjson.com/products/${id}`)
  const {title,description,thumbnail} = await data.json()

  return <div>
    <h2> ID : {id}</h2>
    <p> {title} </p>
    <p> {description} </p> 
    <Image src={thumbnail} alt={title} width={500} height={500}/>
  </div>

}

