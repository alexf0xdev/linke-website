import Button from '@/components/Button'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: '404',
}

const NotFound = () => {
  return (
    <div className={cn('flex flex-col items-center justify-center h-full')}>
      <h1 className={cn('text-4xl text-center')}>Page not found</h1>
      <p className={cn('text-xl text-center mt-4')}>
        This page does not exist but you can create one
      </p>
      <div className={cn('flex justify-center mt-7')}>
        <Button href='/create'>Create page</Button>
      </div>
    </div>
  )
}

export default NotFound
