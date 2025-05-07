import { rolesSchema } from '@saas/auth'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

import { auth } from '@/http/middlewares/auth'

export async function getMemberShip(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .get(
      '/organizations/:slug/membership',
      {
        schema: {
          tags: ['organizations'],
          summary: 'Get user membership on organization',
          security: [{ bearerAuth: [] }],
          params: z.object({
            slug: z.string(),
          }),
          response: {
            200: z.object({
              memberShip: z.object({
                id: z.string().uuid(),
                role: rolesSchema,
                organizationId: z.string().uuid(),
              }),
            }),
          },
        },
      },
      async (request) => {
        const { slug } = request.params

        const { memberShip } = await request.getUserMemberShip(slug)

        return {
          memberShip: {
            id: memberShip.id,
            role: rolesSchema.parse(memberShip.role),
            organizationId: memberShip.organizationId,
          },
        }
      },
    )
}
