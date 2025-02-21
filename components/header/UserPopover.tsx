// "use client"

// import * as React from "react"

// import { cn } from "@/lib/utils"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"

// import { useSession } from "next-auth/react";
// import { Logout } from "@/actions";


// export function UserPopover() {

//   const { data: session } = useSession();

//   return (
//     <>
//       {
//         session && (
//           <>
//             <NavigationMenu className="hidden md:block">
//               <NavigationMenuList>
//                 <NavigationMenuItem>
//                   <NavigationMenuTrigger className="text-sm font-normal">Hi, {session.user.name.split(' ')[0] ?? session.user.name}</NavigationMenuTrigger>
//                   <NavigationMenuContent className="bg-white">
//                     <button onClick={() => Logout()} className="bg-white py-3 px-5  hover:underline">Logout</button>
//                     <ListItem
//                       title='My orders'
//                       href='/orders'
//                     >
//                       A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
//                     </ListItem>
//                   </NavigationMenuContent>
//                 </NavigationMenuItem>
//               </NavigationMenuList>
//             </NavigationMenu>
//           </>
//         )
//       }
//     </>
//   )
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-zinc-100",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   )
// })
// ListItem.displayName = "ListItem"


"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useSession } from "next-auth/react"
import { Logout } from "@/actions";

export function UserPopover() {
  const { data: session } = useSession();
  const onHandleLogout = async () => {
    await Logout()
    window.location.href = '/'
  }
  return (
    <>
      {
        session && (
          <NavigationMenu left>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base font-normal">Hi, {session.user.name.split(' ')[0] ?? session.user.name}</NavigationMenuTrigger>
                <NavigationMenuContent defaultValue="open">
                  <ul className="p-2 w-[250px] lg:flex lg:flex-col divide-y">
                    <ListItem className="mb-1" href="/orders" title="My orders" icon={<CartIcon />} />
                    <ListItem as="button" onClick={onHandleLogout} className="mt-1" title="Log out" icon={<LogoutIcon />} />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )
      }
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button"> & { icon: React.ReactNode; as?: "link" | "button"; href?: string; onClick?: () => void; }
>(({ className, title, children, icon, as = "link", href, onClick, ...props }, ref) => {
  const isLink = as === 'link'
  return (
    <li>
      <NavigationMenuLink asChild>
        {isLink && href ? (
          <Link href={href} className={cn("flex items-center gap-2 p-3 rounded transition hover:bg-zinc-100", className)}>
            {icon}
            <p className="text-base font-normal">{title}</p>
          </Link>
        ) : (
          <button
            ref={ref}
            onClick={onClick}
            className={cn("flex w-full items-center gap-2 p-3 rounded transition hover:bg-zinc-100", className)}
            {...props}
          >
            {icon}
            <p className="text-base font-normal">{title}</p>
          </button>
        )}
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


export const CartIcon = () => {
  return (
    <svg className="size-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2H3.30616C3.55218 2 3.67519 2 3.77418 2.04524C3.86142 2.08511 3.93535 2.14922 3.98715 2.22995C4.04593 2.32154 4.06333 2.44332 4.09812 2.68686L4.57143 6M4.57143 6L5.62332 13.7314C5.75681 14.7125 5.82355 15.2031 6.0581 15.5723C6.26478 15.8977 6.56108 16.1564 6.91135 16.3174C7.30886 16.5 7.80394 16.5 8.79411 16.5H17.352C18.2945 16.5 18.7658 16.5 19.151 16.3304C19.4905 16.1809 19.7818 15.9398 19.9923 15.6342C20.2309 15.2876 20.3191 14.8247 20.4955 13.8988L21.8191 6.94969C21.8812 6.62381 21.9122 6.46087 21.8672 6.3335C21.8278 6.22177 21.7499 6.12768 21.6475 6.06802C21.5308 6 21.365 6 21.0332 6H4.57143ZM10 21C10 21.5523 9.55228 22 9 22C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C9.55228 20 10 20.4477 10 21ZM18 21C18 21.5523 17.5523 22 17 22C16.4477 22 16 21.5523 16 21C16 20.4477 16.4477 20 17 20C17.5523 20 18 20.4477 18 21Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const LogoutIcon = () => {
  return (
    <svg className="size-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 17L21 12M21 12L16 7M21 12H9M12 17C12 17.93 12 18.395 11.8978 18.7765C11.6204 19.8117 10.8117 20.6204 9.77646 20.8978C9.39496 21 8.92997 21 8 21H7.5C6.10218 21 5.40326 21 4.85195 20.7716C4.11687 20.4672 3.53284 19.8831 3.22836 19.1481C3 18.5967 3 17.8978 3 16.5V7.5C3 6.10217 3 5.40326 3.22836 4.85195C3.53284 4.11687 4.11687 3.53284 4.85195 3.22836C5.40326 3 6.10218 3 7.5 3H8C8.92997 3 9.39496 3 9.77646 3.10222C10.8117 3.37962 11.6204 4.18827 11.8978 5.22354C12 5.60504 12 6.07003 12 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}