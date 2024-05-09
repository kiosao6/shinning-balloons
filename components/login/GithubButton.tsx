
'use client'

import { signIn } from "next-auth/react";
import { SiGithub } from "react-icons/si"


export const GithubButton = () => {

  const onClick = (provider: "github") => {
    signIn(provider, {
      callbackUrl: "/shop"
    })
  };

  return (
    <button onClick={() => onClick("github")} className="flex w-full justify-center mb-5 items-center gap-2 border border-zinc-300 shadow-sm px-16 h-12 rounded-[0.5rem] hover:border-zinc-400 transition-all">
      <SiGithub className="h-5 w-5" />
      <p>Sign in with GitHub</p>
    </button>
  )
}