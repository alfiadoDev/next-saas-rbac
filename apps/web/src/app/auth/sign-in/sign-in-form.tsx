'use client'

import { AlertTriangle, Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

import githubIcon from '@/assets/github-icon.svg'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { useFormState } from '@/hooks/use-form-state'

import { signInWithGithub } from '../actions'
import { signInWithEmailAndPassword } from './actions'

export function SignInForm() {
  // const [{ success, message, errors }, formAction, isPending] = useActionState(
  //   signInWithEmailAndPassword,
  //   { success: false, message: null, errors: null },
  // )
  const router = useRouter()
  const searchParams = useSearchParams()
  const [{ success, message, errors }, handleSubmit, isPending] = useFormState(
    signInWithEmailAndPassword,
    () => {
      router.push('/')
    },
  )

  return (
    <div className="space-y-4">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {!success && message && (
          <Alert
            variant="destructive"
            className="border-red-500 dark:border-red-400 dark:text-red-400 [&>svg]:text-red-400"
          >
            <AlertTriangle className="size-4" />
            <AlertTitle>Sign in failed</AlertTitle>
            <AlertDescription>
              <p>{message}</p>
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-1">
          <Label htmlFor="email">E-mail</Label>
          <Input
            name="email"
            type="email"
            id="email"
            defaultValue={searchParams.get('email') ?? ''}
          />
          {errors?.email && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.email[0]}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">Senha</Label>
          <Input name="password" type="password" id="password" />

          {errors?.email && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.email[0]}
            </p>
          )}

          <Link
            href="/auth/forgot-password"
            className="text-foreground text-xs font-medium hover:underline"
          >
            Forgot you password?
          </Link>
        </div>

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            'Sign in with e-mail'
          )}
        </Button>

        <Button variant="link" className="w-full" size="sm" asChild>
          <Link href="/auth/sign-up">Create new account</Link>
        </Button>
      </form>

      <form action={signInWithGithub}>
        <Separator />

        <Button type="submit" variant="outline" className="w-full">
          <Image src={githubIcon} alt="" className="mr-2 size-4 dark:invert" />
          Sign in with Github
        </Button>
      </form>
    </div>
  )
}
