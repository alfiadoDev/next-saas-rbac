import { XOctagon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { revokeInviteAction } from './actions'

interface RevokeButtonProps {
  inviteId: string
}

export async function RevokeInviteButton({ inviteId }: RevokeButtonProps) {
  return (
    <form action={revokeInviteAction.bind(null, inviteId)}>
      <Button variant="destructive" size="sm">
        <XOctagon className="mr-2 size-4" />
        Revoke invite
      </Button>
    </form>
  )
}
