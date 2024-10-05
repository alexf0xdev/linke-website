import { cn } from '@/lib/utils'
import { ButtonSchema, ButtonValues } from '@/lib/validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Select from './Select'
import Button from './Button'
import { FC } from 'react'

interface ICreateButtonForm {
  type: 'create'
  defaultValues?: undefined
  onFormSubmit: (data: ButtonValues) => void
  onClose: () => void
}

interface IUpdateButtonForm {
  type: 'update'
  defaultValues: ButtonValues
  onFormSubmit: (data: ButtonValues) => void
  onClose: () => void
}

type ButtonFormType = ICreateButtonForm | IUpdateButtonForm

const ButtonForm: FC<ButtonFormType> = ({
  type,
  onFormSubmit,
  defaultValues,
  onClose,
}) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<ButtonValues>({
    resolver: zodResolver(ButtonSchema),
    mode: 'onChange',
    defaultValues: {
      text: defaultValues?.text ?? '',
      href: defaultValues?.href ?? 'https://',
      color: defaultValues?.color,
    },
  })

  const onSubmit: SubmitHandler<ButtonValues> = async (data) => {
    onFormSubmit(data)
    onClose()
  }

  return (
    <form className={cn('mt-5')} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          className={cn(
            'bg-zinc-300 dark:bg-zinc-700 placeholder-zinc-600 dark:placeholder-zinc-400 text-xl px-7 py-4 rounded-md w-full focus:outline-none',
          )}
          placeholder='Enter text'
          {...register('text')}
        />
        {errors.text?.message && (
          <p className={cn('text-red-500 mt-1')}>{errors.text?.message}</p>
        )}
      </div>
      <div>
        <input
          className={cn(
            'bg-zinc-300 dark:bg-zinc-700 placeholder-zinc-600 dark:placeholder-zinc-400 text-xl mt-2 px-7 py-4 rounded-md w-full focus:outline-none',
          )}
          placeholder='Enter URL'
          {...register('href')}
        />
        {errors.href?.message && (
          <p className={cn('text-red-500 mt-1')}>{errors.href?.message}</p>
        )}
      </div>
      <Controller
        name='color'
        control={control}
        render={({ field: { value, onChange } }) => (
          <Select
            options={[
              { name: 'Black', value: 'BLACK' },
              { name: 'White', value: 'WHITE' },
              { name: 'Red', value: 'RED' },
              { name: 'Green', value: 'GREEN' },
            ]}
            value={value}
            onChange={onChange}
            defaultText='Select color'
            errorMessage={errors.color?.message}
          />
        )}
      />
      <Button className='mt-5' type='submit' disabled={!isValid}>
        {type === 'create' ? 'Create button' : 'Update button'}
      </Button>
    </form>
  )
}

export default ButtonForm
