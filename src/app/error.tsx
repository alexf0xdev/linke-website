'use client'

import Button from '@/components/Button'
import { cn } from '@/lib/utils'

const Error = () => {
  return (
    <div className={cn('flex flex-col items-center justify-center h-screen')}>
      <h1 className={cn('text-5xl sm:text-6xl text-center')}>
        Internal server error
      </h1>
      <p className={cn('text-xl sm:text-2xl text-center mt-5')}>
        An unexpected error occurred
      </p>
      <div className={cn('flex justify-center mt-10')}>
        <Button href='/'>Go to Home</Button>
      </div>
    </div>
  )
}

export default Error
