"use client"

import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

export const Toaster = ({ ...props }: ToasterProps) => {

  return (
    <Sonner
      className="toaster group !text-base-heading"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg !text-sm",
          description: "group-[.toast]:text-muted-foreground !text-sm",
          actionButton:
            "group-[.toast]:!bg-white group-[.toast]:text-primary-foreground group-[.toast]:hover:!bg-zinc-100 group-[.toast]:!transition-all !p-[4px] !h-auto",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

// export { Toaster }
