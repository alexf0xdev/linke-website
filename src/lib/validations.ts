import { ButtonColor } from '@prisma/client'
import { z } from 'zod'
import {
  ACCEPTED_IMAGE_TYPES,
  BAN_WORDS,
  MAX_FILE_SIZE,
  URL_REGEX,
} from './constants'

export const ButtonSchema = z.object({
  text: z.string().min(1, 'Text required').max(50, 'Maximum 50 characters'),
  href: z
    .string()
    .min(1, 'Url required')
    .max(100, 'Maximum 100 characters')
    .regex(URL_REGEX, 'Invalid url'),
  color: z.nativeEnum(ButtonColor, { message: 'Invalid color' }),
})

export type ButtonValues = z.infer<typeof ButtonSchema>

export const PageSchema = z.object({
  name: z.string().min(1, 'Name required').max(20, 'Maximum 20 characters'),
  description: z.string().max(50, 'Maximum 50 characters'),
  link: z
    .string()
    .min(1, 'Link required')
    .min(3, 'Minimum 3 characters')
    .max(10, 'Maximum 10 characters')
    .regex(/^[a-z0-9_]*$/, 'Invalid link')
    .refine(
      (word) => !BAN_WORDS.includes(word),
      'You use ban-word in your link',
    ),
  image: z
    .instanceof(File)
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      'Image size must be less than 4MB',
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      'Only the following image types are allowed: JPEG, PNG',
    )
    .optional()
    .nullable(),
  buttons: z.array(ButtonSchema).max(20, 'Maximum 20 buttons'),
})

export type PageValues = z.infer<typeof PageSchema>
