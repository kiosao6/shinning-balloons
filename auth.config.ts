import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import {z} from "zod";
import prisma from './lib/prisma';
import bcryptjs from 'bcryptjs';
import Github from 'next-auth/providers/github'
 
export const authConfig = {
  pages: {
    signIn: '/login',
    newUser: '/register',
  },

  callbacks: {
    jwt({ token, user }: { token: any, user: any }) {
      if(user) {
        token.data = user;
      }
      return token
    },

    session({ session, token }: { session: any, token: any }) {
      session.user = token.data;
      return session
    },
  },
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

          if(!parsedCredentials.success){
            return null;
          }

          const { email, password } = parsedCredentials.data;
          const user = await prisma.user.findUnique({
            where: {
              email: email.toLowerCase()

            }
          })

          if(!user) return null;

          if(!bcryptjs.compareSync(password, user.password)) return null;

          const { password: _, ...rest } = user;

          return rest;
      },
    }),
  ]
};


export const { signIn, signOut, auth, handlers } = NextAuth(authConfig)