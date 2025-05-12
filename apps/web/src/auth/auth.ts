import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { getProfile } from '@/http/get-profile'

export async function isAuthenticated() {
  const cookiesStory = await cookies()

  return !!cookiesStory.get('token')?.value
}

export async function auth() {
  const cookiesStory = await cookies()

  const token = cookiesStory.get('token')?.value

  if (!token) redirect('/auth/sign-in')

  try {
    const { user } = await getProfile()

    return { user }
    // eslint-disable-next-line prettier/prettier
  } catch (error) {
  }

  redirect('/api/auth/sign-out')
}
