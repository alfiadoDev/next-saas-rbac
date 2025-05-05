import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { User } from './models/user'
import { Role } from './roles'

type PermissionsByRole = (
  User: User,
  builder: AbilityBuilder<AppAbility>,
) => void
export const permissions: Record<Role, PermissionsByRole> = {
  ADMIN: (_, { can }) => {
    can('manage', 'all')
  },
  MEMBER: (_, { can }) => {
    // can('invite', 'User')
    can('manage', 'Project')
  },
  // eslint-disable-next-line prettier/prettier
  BILING: () => { },
}
