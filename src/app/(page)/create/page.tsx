import PageForm from '@/components/PageForm'
import { getCurrentUser } from '@/lib/actions/current-user'
import { getPageByUserId } from '@/lib/actions/pages'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Create page',
}

const Create = async () => {
  const currentUser = await getCurrentUser()

  const page = await getPageByUserId(currentUser!.id)

  if (page) {
    redirect(`/${page.link}`)
  }

  return (
    <PageForm
      type='create'
      defaultValues={{
        name: currentUser?.name!,
        imageUrl: currentUser?.image!,
      }}
    />
  )
}

export default Create
