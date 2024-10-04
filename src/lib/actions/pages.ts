'use server'

import { IPage } from '@/types/page'
import { prisma } from '../prisma'
import { PageSchema } from '../validations'
import { Prisma } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { getCurrentUser } from './current-user'
import { utapi } from '../server/uploadthing'

export const getPage = async (id: string) => {
  return (await prisma.page.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      link: true,
      description: true,
      imageUrl: true,
      userId: true,
      buttons: {
        select: {
          id: true,
          text: true,
          href: true,
          color: true,
        },
      },
    },
  })) as IPage
}

export const getPageByLink = async (link: string) => {
  return (await prisma.page.findUnique({
    where: { link },
    select: {
      id: true,
      name: true,
      link: true,
      description: true,
      imageUrl: true,
      userId: true,
      buttons: {
        select: {
          id: true,
          text: true,
          href: true,
          color: true,
        },
      },
    },
  })) as IPage
}

export const getPageByUserId = async (userId: string) => {
  return (await prisma.page.findUnique({
    where: { userId },
    select: {
      id: true,
      name: true,
      link: true,
      description: true,
      imageUrl: true,
      userId: true,
      buttons: {
        select: {
          id: true,
          text: true,
          href: true,
          color: true,
        },
      },
    },
  })) as IPage
}

export const createPage = async (formData: FormData) => {
  try {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
      return { error: 'Unauthorized', data: null }
    }

    const validatedFields = PageSchema.safeParse({
      name: formData.get('name'),
      link: formData.get('link'),
      description: formData.get('description'),
      image: formData.get('image'),
      buttons: JSON.parse(`${formData.get('buttons')}`),
    })

    if (!validatedFields.success) {
      return {
        error: validatedFields.error.errors[0].message,
        data: null,
      }
    }

    const { image, buttons, ...otherData } = validatedFields.data

    let imageUrl = currentUser.image

    let page = await prisma.page.create({
      data: {
        ...otherData,
        imageUrl,
        userId: currentUser.id,
        buttons: { createMany: { data: buttons } },
      },
    })

    if (image) {
      const uploadedFile = await utapi.uploadFiles([image])

      if (uploadedFile[0].data) {
        imageUrl = uploadedFile[0].data.url
      }

      page = await prisma.page.update({
        where: { id: page.id },
        data: { imageUrl },
      })
    }

    revalidatePath('/create')

    return { error: '', data: page }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        return { error: 'This link is already in use', data: null }
      }
    }

    return { error: 'Failed to create a page', data: null }
  }
}

export const updatePage = async (id: string, formData: FormData) => {
  try {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
      return { error: 'Unauthorized', data: null }
    }

    const validatedFields = PageSchema.safeParse({
      name: formData.get('name'),
      link: formData.get('link'),
      description: formData.get('description'),
      image: formData.get('image'),
      buttons: JSON.parse(`${formData.get('buttons')}`),
    })

    if (!validatedFields.success) {
      return {
        error: validatedFields.error.errors[0].message,
        data: null,
      }
    }

    const page = await getPage(id)

    const { image, buttons, ...otherData } = validatedFields.data

    let imageUrl = page.imageUrl

    let updatedPage = await prisma.page.update({
      where: { id },
      data: {
        ...otherData,
        imageUrl,
        userId: currentUser.id,
        buttons: { deleteMany: {}, createMany: { data: buttons } },
      },
    })

    if (image) {
      if (
        page.imageUrl &&
        !page.imageUrl.startsWith('https://lh3.googleusercontent.com')
      ) {
        const fileKey = page.imageUrl.replace('https://utfs.io/f/', '')

        await utapi.deleteFiles([fileKey])
      }

      const uploadedFile = await utapi.uploadFiles([image])

      if (uploadedFile[0].data) {
        imageUrl = uploadedFile[0].data.url
      }

      updatedPage = await prisma.page.update({
        where: { id },
        data: { imageUrl },
      })
    }

    revalidatePath('/edit')

    return { error: '', data: updatedPage }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        return { error: 'This link is already in use', data: null }
      }
    }

    return { error: 'Failed to create a page', data: null }
  }
}
