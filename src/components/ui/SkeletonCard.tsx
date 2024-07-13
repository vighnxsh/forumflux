import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-6">
      <Skeleton className="h-[190px] w-[685px] rounded-xl " /> 
      <Skeleton className="h-[190px] w-[685px] rounded-xl" /> 
      <Skeleton className="h-[190px] w-[685px] rounded-xl" />
      <Skeleton className="h-[190px] w-[685px] rounded-xl" />
      <Skeleton className="h-[190px] w-[685px] rounded-xl" />
      <div className="space-y-2">
      
      </div>
    </div>
  )
}
