import prisma from '@/libs/prismadb'

export default async function getAllUsers() {
  try {
    const users=prisma?.user.findMany()

    return users
  } catch (error:any) {
    throw new Error(error)
    
  }
  
}