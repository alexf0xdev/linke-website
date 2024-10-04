import { useClickOutside } from '@/hooks/use-click-outside'
import { cn } from '@/lib/utils'
import { FC, useMemo, useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'

interface IOption {
  name: string
  value: string
}

interface ISelect {
  options: IOption[]
  value: string
  onChange: (value: string) => void
  defaultText?: string
  errorMessage?: string
}

const Select: FC<ISelect> = ({
  options,
  value,
  onChange,
  defaultText = 'No selected',
  errorMessage,
}) => {
  const [open, setOpen] = useState(false)

  const ref = useClickOutside(() => setOpen(false))

  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [value],
  )

  return (
    <div className='relative z-10' ref={ref}>
      <div>
        <button
          className={cn(
            'flex items-center justify-between bg-zinc-300 dark:bg-zinc-700 text-xl text-left mt-2 pl-7 pr-4 py-4 w-full rounded-md',
          )}
          type='button'
          onClick={() => setOpen((prev) => !prev)}
        >
          {selectedOption?.name ?? defaultText}
          <LuChevronDown className={cn('w-6 h-6', open && 'rotate-180')} />
        </button>
        {errorMessage && (
          <p className={cn('text-red-500 mt-1')}>{errorMessage}</p>
        )}
      </div>
      {open && (
        <div
          className={cn(
            'absolute inset-x-0 flex flex-col gap-1 bg-zinc-300 dark:bg-zinc-700 mt-2 p-2 rounded-md',
          )}
        >
          {options.map((option) => (
            <button
              key={option.value}
              className={cn(
                'text-left p-2 rounded w-full',
                option.value === value
                  ? 'bg-cyan-600 text-white'
                  : 'hover:bg-zinc-400/50 dark:hover:bg-zinc-800/50',
              )}
              type='button'
              onClick={() => {
                onChange(option.value)
                setOpen(false)
              }}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
