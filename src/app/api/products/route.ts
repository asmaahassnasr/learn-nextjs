import { NextResponse } from "next/server";


export async function GET() {
    
  const data = await fetch('https://dummyjson.com/products')
  const {products} = await data.json()

    return NextResponse.json(products)
}