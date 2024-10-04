import { getCurrentUser } from '@/lib/actions/current-user'
import { createUploadthing, type FileRouter } from 'uploadthing/next'
import { UploadThingError } from 'uploadthing/server'

const f = createUploadthing()

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
    .middleware(async () => {
      const user = await getCurrentUser()

      if (!user) throw new UploadThingError('Unauthorized')

      return { userId: user.id }
    })
    .onUploadComplete(async ({ metadata, file }) => {}),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
