import React from 'react'
import Image from 'next/image'
// import { error } from 'console';


import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const { id } = await params
 
  // fetch data
  const {title,description} = await fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
 
  return {
    title, description
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}
 


interface IProps{
  params:{
    id:string;
  }
}

export default async function ProductDetailsPage({params}: IProps) {

  // throw new Error("Something went wrong");

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

