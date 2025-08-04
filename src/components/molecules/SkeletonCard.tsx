import { Card, CardContent, CardFooter } from '@/components/ui/card';

export default function SkeletonCard() {
  return (
    <Card className="relative h-full flex flex-col border-none p-0 rounded-2xl animate-pulse bg-white dark:bg-zinc-900">
      {/* Image skeleton */}
      <div className="w-full h-48 rounded-t-2xl bg-gray-200 dark:bg-zinc-800" />

      <CardContent className="flex-1 flex flex-col gap-3 pt-4 px-4">
        <div className="h-5 w-2/3 bg-gray-200 dark:bg-zinc-700 rounded" />
        <div className="h-4 w-full bg-gray-100 dark:bg-zinc-800 rounded" />
        <div className="h-4 w-1/3 bg-blue-100 dark:bg-zinc-700 rounded-full" />
        <div className="h-3 w-1/2 bg-gray-100 dark:bg-zinc-700 rounded" />
        <div className="h-3 w-1/3 bg-gray-100 dark:bg-zinc-700 rounded" />
      </CardContent>
      <CardFooter className="flex flex-col gap-2 mt-auto px-4 pb-4">
        <div className="flex justify-between items-center w-full">
          <div className="h-6 w-16 bg-gray-200 dark:bg-zinc-700 rounded" />
          <div className="h-5 w-12 bg-gray-100 dark:bg-zinc-800 rounded" />
        </div>
        <div className="h-10 w-full bg-gray-200 dark:bg-zinc-700 rounded-lg mt-2" />
      </CardFooter>
    </Card>
  );
}
