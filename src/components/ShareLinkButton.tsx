import { cn } from '@/lib/utils'
import { useState } from 'react'
import { LuCheck, LuLink2 } from 'react-icons/lu'

const ShareLinkButton = ({ url }: { url: string }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleClick = async () => {
    await navigator.clipboard.writeText(url)

    setIsCopied(true)

    setTimeout(() => setIsCopied(false), 1000)
  }

  const Icon = isCopied ? LuCheck : LuLink2

  return (
    <button
      className='bg-zinc-300 dark:bg-zinc-700 p-5 rounded-full'
      onClick={handleClick}
    >
      <Icon className={cn('w-7 h-7')} />
    </button>
  )
}

export default ShareLinkButton
