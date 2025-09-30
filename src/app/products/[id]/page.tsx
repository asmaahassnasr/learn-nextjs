import React from 'react'

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
    <img src={thumbnail} alt={title}/>
  </div>

}

