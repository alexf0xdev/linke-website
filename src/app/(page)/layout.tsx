import PageFooter from '@/components/PageFooter'
import PageHeader from '@/components/PageHeader'
import { cn } from '@/lib/utils'

const PageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className={cn('flex flex-col h-screen max-w-2xl mx-2 sm:mx-auto')}>
      <PageHeader />
      <main className={cn('flex-1')}>{children}</main>
      <PageFooter />
    </div>
  )
}

export default PageLayout
