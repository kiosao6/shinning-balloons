import type { NextAuthConfig } from 'next-auth';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import {z} from "zod";
import prisma from './lib/prisma';
import bcryptjs from 'bcryptjs';
import Github from 'next-auth/providers/github'
import { Account, Profile, User as NextAuthUser } from 'next-auth';
interface User {
  id: string;
  email: string;
  name: string;
}
export const authConfig = {
  pages: {
    signIn: '/login',
    newUser: '/register',
  },

  callbacks: {

    async signIn({user, account, profile}: { user: NextAuthUser | User, account: Account | null, profile?: Profile | null }) {
      if(account?.provider === 'github') {
        if(!user.email) return false;

        const existingUser = await prisma.user.findUnique({
          where: { email: user.email}
        })
        const randomPassword = bcryptjs.hashSync("github-auth", 10);

        if(!existingUser){
          await prisma.user.create({
            data: {
              email: user.email,
              name: user.name || "Usuario de GitHub",
              password: randomPassword
            }
          })
        }
      }
      return true;
    },

    async jwt({ token, user }: { token: any, user: any }) {
      if(user) {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email }
        })
        if(existingUser) {
          token.id = existingUser.id,
          token.name = existingUser.name;
          token.email = existingUser.email;
        }
      }
      return token
    },

    async session({ session, token }: { session: any, token: any }) {
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
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