'use server'

import { signIn } from '@/auth.config';
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

  try {
    await signIn('credentials', { email, password, redirectTo: !redirect ? "/shop" : "/checkout"  })
    
    return {
      ok: true
    }
  } catch (error) {
    if(error instanceof AuthError){
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials"}
        default: 
          return { error: "Something went wrong"}
      }
    }

    throw error
  }
}

