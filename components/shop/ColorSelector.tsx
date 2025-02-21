'use client';

import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const colors = [

  {
    name: "All colors",
    value: "all"
  },
  {
    name: "Blue",
    value: "blue"
  },
  {
    name: "Red",
    value: "red"
  },
  {
    name: "Yellow",
    value: "yellow"
  },
  {
    name: "Green",
    value: "green"
  }
]

export function ColorSelector() {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const color = searchParams.get("color");

  const handleColorchange = (color: string) => {
    if (color === "all") return router.push(pathName)
    router.push(`${pathName}?color=${color}`)
  };
  const [isOpen, setIsOpen] = React.useState()
  


  return (
    <Select open={isOpen} onOpenChange={() => setIsOpen} onValueChange={handleColorchange} defaultValue={color as string || undefined}>
      <SelectTrigger className="w-[180px] h-12">
        <SelectValue placeholder="Color" />
      </SelectTrigger>
      <SelectContent className="max-w-[180px] min-w-[0px]">
        <SelectGroup>
          {
            colors.map((color, i) => (
              <SelectItem
                className="py-3"
                key={i}
                value={color.value}>{color.name}
              </SelectItem>
            ))
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
