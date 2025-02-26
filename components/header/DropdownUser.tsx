'use client'

import {
  ChevronsUpDown,
  Heart,
  UserRound,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CartIcon, LogoutIcon } from "./UserPopover"
import { useRouter } from "next/navigation"
import { Logout } from "@/actions"
import { useStore } from "@/store/ui-store"
import { useSession } from "next-auth/react"

export function DropdownUser() {
  const router = useRouter() 
  const toggleMenu = useStore(state => state.toggleMenu)
  const { data: session } = useSession();

  const onHandleClick = () => {
    toggleMenu()
    router.push('/orders')
  }
  const onHandleLogout = async () => {
    toggleMenu()
    await Logout()
    window.location.href = '/'
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex p-4 py-3 rounded-xl mb-8 items-center gap-3 bg-white border w-full">
        <div className="relative">
          <Avatar className="size-10 rounded">
            <AvatarFallback className="font-medium bg-zinc-100 rounded-full">
              <UserRound size={17} strokeWidth={2} className="opacity-60" aria-hidden />
            </AvatarFallback>
          </Avatar>
          <span className="absolute bottom-0 end-0 size-3 rounded-full bg-emerald-500">
            <span className="sr-only">Online</span>
          </span>
        </div>
        <div className="grid flex-1 text-left text-[15px] leading-tight h-fit">
          <span className="truncate font-semibold">{session?.user.name}</span>
          <span className="truncate text-[13px] text-neutral-500">{session?.user.email}</span>
        </div>
        <ChevronsUpDown className="ml-auto size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[calc(100vw-64px)] rounded mb-2">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={onHandleClick}>
            <CartIcon />
            <span>Orders</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Heart />
            <span>Wishlist</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onHandleLogout}>
          <LogoutIcon />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
