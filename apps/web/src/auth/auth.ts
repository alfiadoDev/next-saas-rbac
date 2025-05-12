import { cookies } from 'next/headers'

export async function isAuthenticated() {
  const cookiesStory = await cookies()

  return !!cookiesStory.get('token')?.value
}
