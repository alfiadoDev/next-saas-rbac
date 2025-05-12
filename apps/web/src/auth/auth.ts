import { defineAbilityFor } from '@saas/auth'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { getMembership } from '@/http/get-membership'
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

export async function getCurrentOrg() {
  return (await cookies()).get('org')?.value ?? null
}

export async function getCurrentMemberShip() {
  const org = await getCurrentOrg()

  if (!org) return null

  const { memberShip } = await getMembership(org)

  return memberShip
}

export async function ability() {
  const membership = await getCurrentMemberShip()

  if (!membership) return null

  const ability = defineAbilityFor({
    id: membership.userId,
    role: membership.role,
  })

  return ability
}
