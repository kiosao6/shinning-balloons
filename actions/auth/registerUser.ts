

'use server'

import prisma from "@/lib/prisma";
import bcryptjs from 'bcryptjs';



export const registerUser = async(name: string, email: string, password: string) => {

  try {
    // Lets verify is user exists. If not, then we can create it

    const trimmedEmail = email.trim().toLowerCase();
    const trimmedName = name.trim();

    const existingUser = await prisma.user.findUnique({
      where: { email: trimmedEmail}
    })


    if(existingUser)
    {
      return {
        ok: false,
        message: 'This email address is already taken. Please try another one'
      }
    }


    const user = await prisma.user.create({
      data: {
        name: trimmedName,
        email:trimmedEmail,
        password: bcryptjs.hashSync(password)
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    });

    return {
      ok: true,
      user: user,
      message: 'Redirecting....'
    }
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      message: 'An error occurred. Please try again.'
    }
  }



};  // registerUser