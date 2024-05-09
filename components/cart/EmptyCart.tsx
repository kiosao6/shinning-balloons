import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils";


interface Props {
  headingClasses?: string;
  descriptionClasses?: string;
  imageClasses?: string;
}

export const EmptyCart = ({
  headingClasses,
  descriptionClasses,
  imageClasses

}: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        width={400}
        height={200}
        alt="Empty Cart Image"
        src="/outlineballoon.webp"
        className={cn("w-28", imageClasses)}
      />

      <p className={cn("text-2xl mb-1 font-bold tracking-tight mx-auto", headingClasses )}>Your cart is empty</p>
      <p className={cn("text-xs text-base-heading/70 mb-6", descriptionClasses)}>Looks like you haven&apos;t added anything to your cart yet</p>
      <Button className="bg-moon-500 h-11 mx-auto block text-base rounded-[0.5rem] text-white hover:bg-moon-600 w-64 p-0 md:mx-auto lg:mx-0" variant="default" size="lg">
        <Link className="w-full text-sm h-full flex justify-center items-center" href="/shop">Shop now</Link>
      </Button>
    </div>
  )
}