import Button from '@/components/Button'
import PageButtons from '@/components/PageButtons'
import PageInfo from '@/components/PageInfo'
import { getCurrentUser } from '@/lib/actions/current-user'
import { getPageByLink } from '@/lib/actions/pages'
import { cn } from '@/lib/utils'
import { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'

interface IPage {
  params: { link: string }
}

export const generateMetadata = async ({
  params: { link },
}: IPage): Promise<Metadata> => {
  const page = await getPageByLink(link)

  if (!page) {
    notFound()
  }

  return {
    title: page.name,
  }
}

const Page: NextPage<IPage> = async ({ params: { link } }) => {
  const [page, currentUser] = await Promise.all([
    getPageByLink(link),
    getCurrentUser(),
  ])

  if (!page) {
    notFound()
  }

  return (
    <div className={cn('flex flex-col h-full')}>
      <div className={cn('flex-1')}>
        <PageInfo page={page} />
        <PageButtons buttons={page.buttons} />
      </div>
      {currentUser?.id === page.userId && (
        <Button className='mt-5' fullSize href='/edit'>
          Edit page
        </Button>
      )}
    </div>
  )
}

export default Page
