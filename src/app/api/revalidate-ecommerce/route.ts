import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag')

  const endpoint = `${process.env.NEXT_PUBLIC_ECOMMERCE_BASE_URL}/api/revalidate-tag/?tag=${tag}`
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()

    if (data.revalidated) {
      console.log(`✅ Cache invalidated for tag: ${tag}`)
      return NextResponse.json({ revalidated: true })
    } else {
      console.error(`❌ Error invalidating cache for tag: ${tag}`)
      return NextResponse.json({ revalidated: false })
    }
  } catch (error) {
    console.error('❌ Error invalidating cache', error)
    return NextResponse.json({ revalidated: false })
  }
}
