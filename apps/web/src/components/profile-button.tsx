import { ChevronDown, LogOut, User } from 'lucide-react'

import { auth } from '@/auth/auth'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

function getInitials(name: string): string {
  const initals = name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('')

  return initals
}

export async function ProfileButton() {
  const { user } = await auth()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-3 outline-none">
        <div className="flex flex-col items-end">
          <span className="text-sm font-medium capitalize">{user.name}</span>
          <span className="text-muted-foreground text-xs">{user.email}</span>
        </div>
        <Avatar>
          {user.avatarUrl && <AvatarImage src={user.avatarUrl} />}
          <AvatarFallback>
            {user.name ? getInitials(user.name) : <User className="size-4" />}
          </AvatarFallback>
        </Avatar>
        <ChevronDown className="text-muted-foreground size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <a href="/api/auth/sign-out">
            <LogOut className="mr-2 size-4" /> Sign out
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
