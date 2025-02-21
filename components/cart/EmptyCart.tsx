import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils";
import { CallToAction } from "../ui/CallToAction";


interface Props {
  className?: string;
  headingClasses?: string;
  descriptionClasses?: string;
  imageClasses?: string;
  closeModal?: () => void;
}

export const EmptyCart = ({
  headingClasses,
  descriptionClasses,
  imageClasses,
  className,
  closeModal
}: Props) => {
  return (
    <div className={cn("flex flex-col justify-center items-center px-8", className)}>
      <Image
        width={400}
        height={200}
        alt="Empty Cart Image"
        src="/outlineballoon.webp"
        className={cn("w-32", imageClasses)}
      />

      <p className={cn("text-3xl mb-2 font-bold tracking-tight mx-auto", headingClasses )}>Your cart is empty</p>
      <p className={cn("text-sm text-neutral-500 mb-6 text-center", descriptionClasses)}>Looks like you haven&apos;t added anything to your cart yet</p>
      <CallToAction
        {...(closeModal && { action: closeModal })}
        text="Start shopping"
        className="mt-4 lg:hidden"
      />
    </div>
  )
}