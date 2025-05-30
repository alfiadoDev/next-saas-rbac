import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { User } from './models/user'
import { Role } from './roles'

type PermissionsByRole = (
  User: User,
  builder: AbilityBuilder<AppAbility>,
) => void
export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN: (user, { can, cannot }) => {
    can('manage', 'all')

    cannot(['transfer_ownership', 'update'], 'Organization')
    can(['transfer_ownership', 'update'], 'Organization', {
      ownerId: { $eq: user.id },
    })
  },
  MEMBER: (user, { can }) => {
    can('get', 'Project')
    can('get', 'User')
    can('create', 'Project')
    can(['update', 'delete'], 'Project', { ownerId: { $eq: user.id } })
  },
  // eslint-disable-next-line prettier/prettier
  BILLING: (_, { can }) => {
    can('manage', 'Billing')
  },
}
