'use server'

import { signIn } from '@/auth.config';
import prisma from '@/lib/prisma';
import { AuthError } from 'next-auth';
import { z } from 'zod';
 
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', {...Object.fromEntries(formData), redirectTo: "/shop"})
    return "Success"

  } catch (error) {
    if((error as any).type === 'CredentialsSignin') {
      return "CredentialsSignin"
    }
    throw(error);

  }
}



export const login = async(email: string, password: string, redirect?:boolean) => {

  const existingUser = await prisma.user.findUnique({
    where: { email: email.trim()}
  })

  if(!existingUser)
  {
    return {
      ok: false,
      message: "We couldn't find an account with that email. Would you like to create an account?"
    }
  }

  try {
    await signIn('credentials', { email, password, redirectTo: !redirect ? "/shop" : "/checkout"  })
    
    return {
      ok: true,
      message: "Login successful! Just a moment..."
    }
  } catch (error) {
    if(error instanceof AuthError){
      switch (error.type) {
        case "CredentialsSignin":
          return { ok: false, message: "Something’s off! Make sure your email and password are correct."}
        default: 
          return { ok: false, message: "Something went wrong"}
      }
    }

    throw error
  }
}

