'use server'

import { env } from '@saas/env'
import { redirect } from 'next/navigation'

export async function signInWithGithub() {
  const githubUrl = new URL('login/oauth/authorize', 'https://github.com')

  githubUrl.searchParams.set('client_id', env.GITHUB_OAUTH_CLIENT_ID)
  githubUrl.searchParams.set(
    'redirect_url',
    env.GITHUB_OAUTH_CLIENT_REDIRECT_URI,
  )
  githubUrl.searchParams.set('scope', 'user')

  redirect(githubUrl.toString())
}
