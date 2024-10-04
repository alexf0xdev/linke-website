import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from 'next-themes'
import ModalProvider from '@/components/ModalProvider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Linke - Simple page for a blog',
    template: '%s - Linke',
  },
  description: 'Create a simple page with the links you need in one place',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang='ru' suppressHydrationWarning>
      <body
        className={cn(
          'bg-zinc-100 dark:bg-zinc-900 antialiased',
          inter.className,
        )}
      >
        <ThemeProvider attribute='class' storageKey='linke-theme'>
          {children}
          <ModalProvider />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
