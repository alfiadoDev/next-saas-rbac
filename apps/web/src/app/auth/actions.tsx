'use server'

import { redirect } from 'next/navigation'

export async function signInWithGithub() {
  const githubUrl = new URL('login/oauth/authorize', 'https://github.com')

  githubUrl.searchParams.set('client_id', 'Ov23liYdBnXHe1agNvdh')
  githubUrl.searchParams.set(
    'redirect_url',
    'http://localhost:3000/api/auth/callback',
  )
  githubUrl.searchParams.set('scope', 'user')

  redirect(githubUrl.toString())
}
