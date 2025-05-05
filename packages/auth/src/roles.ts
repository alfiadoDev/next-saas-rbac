import { z } from 'zod'

export const rolesSchema = z.union([
  z.literal('ADMIN'),
  z.literal('MEMBER'),
  z.literal('BILING'),
])

export type Role = z.infer<typeof rolesSchema>
