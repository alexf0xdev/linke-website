'use client'

import { cn } from '@/lib/utils'
import { PageSchema, type PageValues } from '@/lib/validations'
import { Controller, useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from './Button'
import { createPage, updatePage } from '@/lib/actions/pages'
import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import ImageUpload from './ImageUpload'
import { IUpdatePage } from '@/types/page'
import PageButtons from './PageButtons'
import { useCreateButtonModal } from '@/hooks/use-create-button-modal'
import { useUpdateButtonModal } from '@/hooks/use-update-button-modal'
import { IButton } from '@/types/button'

interface ICreatePageForm {
  type: 'create'
  id?: undefined
  defaultValues?: IUpdatePage
}

interface IUpdatePageForm {
  type: 'update'
  id: string
  defaultValues: IUpdatePage
}

type PageFormType = ICreatePageForm | IUpdatePageForm

const PageForm: FC<PageFormType> = ({ type, id, defaultValues }) => {
  const router = useRouter()

  const [error, setError] = useState('')

  const [previewUrl, setPreviewUrl] = useState(defaultValues?.imageUrl ?? '')

  const createButtonModal = useCreateButtonModal()
  const updateButtonModal = useUpdateButtonModal()

  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<PageValues>({
    resolver: zodResolver(PageSchema),
    mode: 'onChange',
    defaultValues: {
      name: defaultValues?.name ?? '',
      description: defaultValues?.description ?? '',
      link: defaultValues?.link ?? '',
      buttons: defaultValues?.buttons ?? [],
    },
  })

  const buttons = watch('buttons') as IButton[]

  useEffect(() => {
    if (createButtonModal.data) {
      setValue('buttons', [createButtonModal.data, ...buttons])
    }
  }, [createButtonModal.data])

  useEffect(() => {
    if (updateButtonModal.data) {
      setValue(
        'buttons',
        buttons.map((button) =>
          button.id === updateButtonModal.id ? updateButtonModal.data : button,
        ) as IButton[],
      )
    }
  }, [updateButtonModal.data])

  const onSubmit: SubmitHandler<PageValues> = async (data) => {
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('description', data.description ?? '')
    formData.append('link', data.link)
    formData.append('buttons', JSON.stringify(data.buttons))

    if (data.image) {
      formData.append('image', data.image)
    }

    const { data: page, error } =
      type === 'update'
        ? await updatePage(id, formData)
        : await createPage(formData)

    if (error) {
      setError(error)
    }

    if (page) {
      router.push(`/${page.link}`)
    }
  }

  const handleButtonReorder = (newButtons: IButton[]) => {
    setValue('buttons', newButtons)
  }

  const handleButtonEdit = (id: string) => {
    updateButtonModal.onOpen(
      id,
      buttons.find((button) => button.id === id) as IButton,
    )
  }

  const handleButtonRemove = (id: string) => {
    setValue(
      'buttons',
      buttons.filter((button) => button.id !== id),
    )
  }

  return (
    <form
      className='flex flex-col min-h-[calc(100vh-144px)]'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='flex-1'>
        <div className='flex flex-col items-center justify-center'>
          <Controller
            name='image'
            control={control}
            render={({ field: { onChange } }) => (
              <ImageUpload
                previewUrl={previewUrl}
                onChange={(url, image) => {
                  setPreviewUrl(url)
                  onChange(image)
                }}
              />
            )}
          />
          <div className={cn('w-full')}>
            <input
              className={cn(
                'block bg-transparent placeholder-zinc-600 dark:placeholder-zinc-400 text-2xl text-center mt-5 w-full focus:outline-none',
              )}
              placeholder='Enter name'
              autoFocus
              {...register('name')}
            />
            {errors.name?.message && (
              <p className={cn('text-red-500 text-center mt-1')}>
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className={cn('w-full')}>
            <input
              className={cn(
                'block bg-transparent text-zinc-600 dark:text-zinc-400 placeholder-zinc-600 dark:placeholder-zinc-400 text-center w-full focus:outline-none',
              )}
              placeholder='Enter description'
              {...register('description')}
            />
            {errors.description?.message && (
              <p className={cn('text-red-500 text-center mt-1')}>
                {errors.description?.message}
              </p>
            )}
          </div>
          <div className={cn('w-full')}>
            <div className={cn('flex justify-center')}>
              <p>linke.su/</p>
              <input
                className={cn(
                  'block bg-transparent text-cyan-500 placeholder-zinc-600 dark:placeholder-zinc-400 w-20 focus:outline-none',
                )}
                placeholder='enter_link'
                {...register('link')}
              />
            </div>
            {errors.link?.message && (
              <p className={cn('text-red-500 text-center mt-1')}>
                {errors.link?.message}
              </p>
            )}
          </div>
        </div>
        <div className={cn('mt-5')}>
          <Button
            variant='secondary'
            fullSize
            onClick={createButtonModal.onOpen}
          >
            Create button
          </Button>
          <PageButtons
            buttons={buttons as IButton[]}
            edit
            onReorder={handleButtonReorder}
            onEdit={handleButtonEdit}
            onRemove={handleButtonRemove}
          />
        </div>
        {errors.buttons?.message}
      </div>
      <Button
        className='mt-5'
        fullSize
        type='submit'
        disabled={!isValid || isSubmitting}
      >
        {type === 'create' ? 'Create page' : 'Update page'}
      </Button>
      {error && <p className={cn('text-red-500 text-center mt-2')}>{error}</p>}
    </form>
  )
}

export default PageForm
