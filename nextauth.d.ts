
import NextAuth, { DefaultSession } from "next-auth"

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      address: string;
    } & DefaultSession['user']
  }
}