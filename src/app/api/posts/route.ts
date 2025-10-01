import { NextResponse } from "next/server";


export async function GET() {
  const data = await fetch('https://dummyjson.com/posts')
  const {posts} = await data.json()

    return NextResponse.json(posts)
}