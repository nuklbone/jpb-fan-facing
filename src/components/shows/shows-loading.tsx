import { Skeleton } from "@/components/ui/skeleton";

export function ShowsLoading() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-lg border border-white/10 bg-black/50 p-6">
          <div className="mb-3 flex items-center justify-between">
            <Skeleton className="h-4 w-24" variant="text" />
            <Skeleton className="h-6 w-20 rounded-full" variant="rectangular" />
          </div>
          <Skeleton className="mb-1 h-6 w-32" variant="text" />
          <Skeleton className="mb-4 h-4 w-40" variant="text" />
          <Skeleton className="mb-2 h-10 w-full" variant="rectangular" />
          <Skeleton className="h-8 w-full" variant="rectangular" />
        </div>
      ))}
    </div>
  );
}

