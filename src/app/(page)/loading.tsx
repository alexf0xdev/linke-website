import { cn } from '@/lib/utils'
import { LuLoader2 } from 'react-icons/lu'

const Loading = () => {
  return (
    <div className={cn('flex items-center justify-center h-full')}>
      <LuLoader2 className={cn('text-zinc-400 w-8 h-8 animate-spin')} />
    </div>
  )
}

export default Loading
