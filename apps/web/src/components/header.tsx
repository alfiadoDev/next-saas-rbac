import Image from 'next/image'

import reactIcon from '@/assets/react.svg'

import { ProfileButton } from './profile-button'

export function Header() {
  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center justify-center gap-3">
        <Image
          src={reactIcon}
          alt="react icon"
          className="size-6 dark:invert"
        />
      </div>

      <div className="flex items-center gap-4">
        <ProfileButton />
      </div>
    </div>
  )
}
