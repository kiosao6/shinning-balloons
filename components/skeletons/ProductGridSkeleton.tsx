


import { Skeleton } from "@/components/ui/skeleton"


export function ProductGridSkeleton() {
  const arr = Array.from({ length: 12 });
  return (
    <>
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:gap-8">
      {
        arr.map((_, i) => (
          <div key={i} className="flex flex-col space-y-3">
            <Skeleton className="mx-auto max-w-sm aspect-square w-full h-auto rounded-xl" />
            <div className="space-y-2 max-w-sm">
              <Skeleton className="h-4 w-3/4 rounded-[0.3rem]" />
              <Skeleton className="h-4 w-[60px] rounded-[0.3rem]" />
            </div>
          </div>
        ))
      }
    </div>
    </>
  )
}
