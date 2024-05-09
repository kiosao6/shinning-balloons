'use client'



import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { generatePaginationNumbers } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";


interface Props {
  page?: number;
  totalPages: number;
}

export function ShopPagination({
  page,
  totalPages
}: Props) {

  const pathName = usePathname();
  const searchParams = useSearchParams();
  const currentPage = page || 1
  const allPages = generatePaginationNumbers(currentPage, totalPages)

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === '...') {
      return `${pathName}?${params.toString()}`
    }

    if (+pageNumber <= 0) {
      return `${pathName}`
    }

    if (+pageNumber > totalPages) {
      return `${pathName}?${params.toString()}`
    }

    params.set("page", pageNumber.toString())

    return `${pathName}?${params.toString()}`

  }

  return (
    <Pagination className="mt-12">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={createPageUrl(currentPage - 1)} />
        </PaginationItem>

        {
          allPages.map((page, index) => (
            <PaginationItem key={page} >
              <PaginationLink isActive={page === currentPage} href={createPageUrl(page)}>{page}</PaginationLink>
            </PaginationItem>
          ))
        }

        <PaginationItem>
          <PaginationNext href={createPageUrl(currentPage + 1)} />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
  )
}
