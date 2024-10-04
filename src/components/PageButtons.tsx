'use client'

import { IButton } from '@/types/button'
import { cn } from '@/lib/utils'
import PageButtonCard from './PageButtonCard'
import { FC } from 'react'
import { Reorder } from 'framer-motion'

interface IPageButtons {
  buttons: IButton[]
  edit?: false
  onReorder?: undefined
  onEdit?: undefined
  onRemove?: undefined
}

interface IEditPageButtons {
  buttons: IButton[]
  edit: true
  onReorder: (buttons: IButton[]) => void
  onEdit: (id: string) => void
  onRemove: (id: string) => void
}

type PageButtonsType = IPageButtons | IEditPageButtons

const PageButtons: FC<PageButtonsType> = ({
  buttons,
  edit,
  onReorder,
  onEdit,
  onRemove,
}) => {
  if (!buttons.length) {
    return null
  }

  if (edit) {
    return (
      <Reorder.Group
        as='div'
        className={cn('flex flex-col gap-5 mt-5')}
        onReorder={onReorder}
        values={buttons}
      >
        {buttons.map((button) => (
          <PageButtonCard
            key={button.id}
            button={button}
            edit={edit}
            onEdit={() => onEdit(button.id)}
            onRemove={() => onRemove(button.id)}
          />
        ))}
      </Reorder.Group>
    )
  }

  return (
    <div className={cn('flex flex-col gap-5 mt-5')}>
      {buttons.map((button) => (
        <PageButtonCard key={button.id} button={button} />
      ))}
    </div>
  )
}

export default PageButtons
