'use client'

import { Eye, EyeOff } from "lucide-react";


interface Props {
  callback: () => void;
  showPassword: boolean
}

export const PasswordIcon = ({callback, showPassword}:Props ) => {


  return (
    <button
      type="button"
      aria-label="Show and hide password"
      onClick={callback}
      className="absolute p-2 group pr-4 end-0 rounded-e-md"
    >
      {
        showPassword ? (
          <Eye className="size-3.5 text-neutral-400 group-hover:text-neutral-500 transition-all" />
        ) : (
          <EyeOff className="size-3.5 text-neutral-400 group-hover:text-neutral-500 transition-all"/>
        )
      }
    </button>
  )
}