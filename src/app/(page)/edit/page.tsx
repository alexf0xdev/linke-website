import PageForm from '@/components/PageForm'
import { getCurrentUser } from '@/lib/actions/current-user'
import { getPageByUserId } from '@/lib/actions/pages'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Edit page',
}

const Edit = async () => {
  const currentUser = await getCurrentUser()

  const page = await getPageByUserId(currentUser!.id)

  if (!page) {
    redirect('/create')
  }

  return (
    <PageForm
      type='update'
      id={page.id}
      defaultValues={{
        name: page.name,
        description: page.description,
        link: page.link,
        imageUrl: page.imageUrl,
        buttons: page.buttons,
      }}
    />
  )
}

export default Edit
