'use client'

import { useSearchParams } from 'next/navigation'
import Button from './Button'
import { signIn } from 'next-auth/react'

const LoginGoogleButton = () => {
  const searchParams = useSearchParams()

  const callbackUrl = searchParams.get('callbackUrl') ?? '/'

  return (
    <Button className='mt-5' onClick={() => signIn('google', { callbackUrl })}>
      Login with Google
    </Button>
  )
}

export default LoginGoogleButton
