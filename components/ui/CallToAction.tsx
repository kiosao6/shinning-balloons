import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  text?: string;
  action?: () => void;
  className?: string;
  href?: string
  variant?: 'primary' | 'outline'
 }

export const CallToAction = ( { text = 'Shop now', action, className, href = '/shop', variant = 'primary' }: Props ) => {
  return (
    <Link
      href={href}
      className={cn("h-full md:h-12 w-full lg:mx-0 flex text-base rounded-xl md:w-72 p-4 justify-center items-center font-medium transition-colors",
        variant == 'primary' && "bg-moon-500 hover:bg-moon-600 text-white border border-moon-500 hover:border-moon-600",
        variant == 'outline' && "bg-white border hover:border-neutral-400 text-base-paragraph",
        className
      )}
      {...(action && { onClick: action })}
      >
      { text }
    </Link>
  )
}