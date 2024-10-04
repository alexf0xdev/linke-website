import { IPage } from '@/types/page'
import { cn } from '@/lib/utils'
import Avatar from './Avatar'

const PageInfo = ({ page }: { page: IPage }) => {
  return (
    <div className={cn('flex flex-col items-center ')}>
      <Avatar imageUrl={page.imageUrl} />
      <h1 className={cn('text-2xl text-center mt-5')}>{page.name}</h1>
      {page.description && (
        <p className={cn('text-zinc-600 dark:text-zinc-400 text-center')}>
          {page.description}
        </p>
      )}
    </div>
  )
}

export default PageInfo
