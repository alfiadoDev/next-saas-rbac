import { Slash } from 'lucide-react'
import Image from 'next/image'

import reactIcon from '@/assets/react.svg'
import { ability } from '@/auth/auth'

import { OrganizationSwitcher } from './organization-switcher'
import { PendingInvites } from './pending-invites'
import { ProfileButton } from './profile-button'
import { ProjectSwitcher } from './project-switcher'
import { ThemeSwitcher } from './theme/theme-switcher'
import { Separator } from './ui/separator'

export async function Header() {
  const permissions = await ability()

  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center justify-center gap-3">
        <Image
          src={reactIcon}
          alt="react icon"
          className="size-6 dark:invert"
        />

        <Slash className="text-border size-3 rotate-[24deg]" />
        <OrganizationSwitcher />

        {permissions?.can('get', 'Project') && (
          <>
            <Slash className="text-border size-3 rotate-[24deg]" />
            <ProjectSwitcher />
          </>
        )}
      </div>

      <div className="flex items-center gap-4">
        <Separator orientation="vertical" className="h-5" />
        <PendingInvites />
        <ThemeSwitcher />
        <ProfileButton />
      </div>
    </div>
  )
}
