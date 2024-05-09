'use client'

import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation";

interface Props {
  links: {
    name: string;
    href: string;
  }[]
}



export function BreadCrumb({ links }: Props) {
  const pathName = usePathname();

  return (
    <Breadcrumb className="mb-2">
      <BreadcrumbList>
        {
          links.map((link, index) => (
            <>
            <BreadcrumbItem key={index}>
              <BreadcrumbLink asChild>
                <Link className={`text-base-heading/60 transition hover:underline hover:text-base-heading ${pathName === link.href && '!text-base-heading'}`} href={link.href}>{link.name}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className={`${index === links.length-1 && 'hidden'}`}/>
            </>
          ))
        }
      </BreadcrumbList>
    </Breadcrumb>
  )
}