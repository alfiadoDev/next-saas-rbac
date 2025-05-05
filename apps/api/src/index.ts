import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER' })

const userCanIviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteAnotherUSer = ability.can('delete', 'User')

console.log(userCanIviteSomeoneElse)
console.log(userCanDeleteAnotherUSer)
