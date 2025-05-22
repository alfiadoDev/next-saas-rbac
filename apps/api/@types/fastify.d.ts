import 'fastify'

import type { Member, Organization } from 'generated/prisma'

declare module 'fastify' {
  export interface FastifyRequest {
    getCurrentUserId(): Promise<string>
    getUserMemberShip(
      slug: string,
    ): Promise<{ organization: Organization; memberShip: Member }>
  }
}
