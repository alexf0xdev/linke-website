import { cn } from '@/lib/utils'
import { useState } from 'react'
import { LuCheck, LuLink2 } from 'react-icons/lu'

const ShareLinkButton = ({ url }: { url: string }) => {
  const [copied, setCopied] = useState(false)

  const handleClick = async () => {
    await navigator.clipboard.writeText(url)

    setCopied(true)

    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <button
      className='bg-zinc-300 dark:bg-zinc-700 p-5 rounded-full'
      onClick={handleClick}
    >
      {copied ? (
        <LuCheck className={cn('w-7 h-7')} />
      ) : (
        <LuLink2 className={cn('w-7 h-7')} />
      )}
    </button>
  )
}

export default ShareLinkButton
