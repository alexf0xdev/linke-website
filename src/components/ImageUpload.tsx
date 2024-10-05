import { cn } from '@/lib/utils'
import Avatar from './Avatar'
import Button from './Button'
import { ChangeEvent, FC, useRef } from 'react'

interface IImageUpload {
  previewUrl: string
  onImageChange: (url: string, image: File) => void
}

const ImageUpload: FC<IImageUpload> = ({ previewUrl, onImageChange }) => {
  const ref = useRef<HTMLInputElement>(null)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files![0]

    if (image) {
      const url = URL.createObjectURL(image)

      onImageChange(url, image)
    }
  }

  return (
    <div className={cn('flex flex-col items-center gap-2')}>
      <Avatar imageUrl={previewUrl} />
      <Button
        variant='secondary'
        size='small'
        onClick={() => ref.current?.click()}
      >
        Upload image
      </Button>
      <input type='file' ref={ref} onChange={onChange} hidden />
    </div>
  )
}

export default ImageUpload
