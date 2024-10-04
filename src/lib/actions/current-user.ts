import { getServerSession } from 'next-auth'
import { authOptions } from '../auth-options'

export const getCurrentUser = async () => {
  const session = await getServerSession(authOptions)

  return session?.user
}
