import LoginGoogleButton from '@/components/LoginGoogleButton'
import { getCurrentUser } from '@/lib/actions/current-user'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Login',
}

const Login = async () => {
  const currentUser = await getCurrentUser()

  if (currentUser) {
    redirect('/')
  }

  return (
    <div className={cn('flex items-center justify-center h-full')}>
      <LoginGoogleButton />
    </div>
  )
}

export default Login
