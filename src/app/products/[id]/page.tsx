import React from 'react'

interface IProps{
  params:{
    id:string;
  }
}

export default async function ProductDetailsPage({params}: IProps) {

  const { id } = await params
  return <div>My Product: {id}</div>

}

