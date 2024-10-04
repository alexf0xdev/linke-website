import Button from '@/components/Button'
import { cn } from '@/lib/utils'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404',
}

const NotFound = () => {
  return (
    <div className={cn('flex flex-col items-center justify-center h-screen')}>
      <h1 className={cn('text-5xl sm:text-6xl text-center')}>Page not found</h1>
      <p className={cn('text-xl sm:text-2xl text-center mt-5')}>
        We didn&apos;t find any such page, but there are many others out there
      </p>
      <div className={cn('flex justify-center mt-10')}>
        <Button href='/'>Go to Home</Button>
      </div>
    </div>
  )
}

export default NotFound
