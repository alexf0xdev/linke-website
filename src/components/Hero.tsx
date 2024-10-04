import { cn } from '@/lib/utils'
import Button from './Button'

const Hero = () => {
  return (
    <div className={cn('text-center py-32')}>
      <h1 className={cn('text-5xl sm:text-6xl')}>Simple page for a blog</h1>
      <p className={cn('text-xl sm:text-2xl mt-5')}>
        Create a simple page with the links you need in one place
      </p>
      <div className={cn('flex items-center justify-center mt-10')}>
        <Button href='/create'>Create page for free</Button>
      </div>
    </div>
  )
}

export default Hero
