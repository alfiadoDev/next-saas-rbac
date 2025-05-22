import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Check, UserPlus2, X } from 'lucide-react'

import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

dayjs.extend(relativeTime)

export function PendingInvites() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="ghost">
          <UserPlus2 className="size-4" />
          <span className="sr-only">Pending invites</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 space-y-2">
        <span className="text-sm font-medium">Pending invites (2)</span>

        <div className="space-y-2">
          <p className="text-muted-foreground text-sm leading-relaxed">
            <span className="text-foreground font-medium">John Doe</span>{' '}
            invited you to join{' '}
            <span className="text-foreground font-medium">
              Acme Inc (Admin)
            </span>{' '}
            <span className="">{dayjs(new Date()).fromNow()}</span>
          </p>

          <div className="flex gap-2">
            <Button size="xs" variant="outline">
              <Check className="mr-1.5 size-3" />
              Accept
            </Button>
            <Button size="xs" variant="ghost" className="text-muted-foreground">
              <X className="mr-1.5 size-3" />
              Reject
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
