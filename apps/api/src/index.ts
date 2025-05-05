import { ability } from '@saas/auth'

const userCanIviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteAnotherUSer = ability.can('delete', 'User')

console.log(userCanIviteSomeoneElse)
console.log(userCanDeleteAnotherUSer)
