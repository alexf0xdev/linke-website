import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { getCurrentUser } from '@/lib/actions/current-user'
import { cn } from '@/lib/utils'

const MainLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const currentUser = await getCurrentUser()

  return (
    <div className={cn('container mx-auto flex flex-col h-screen')}>
      <Header currentUser={currentUser} />
      <main className={cn('flex-1')}>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
