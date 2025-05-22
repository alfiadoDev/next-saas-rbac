import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectUrl = request.nextUrl.clone()

  redirectUrl.pathname = '/auth/sign-in'
  redirectUrl.search = ''

  const cookieStory = await cookies()
  cookieStory.delete('token')

  return NextResponse.redirect(redirectUrl)
}
