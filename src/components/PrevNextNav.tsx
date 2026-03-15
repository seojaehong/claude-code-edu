import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Lesson } from "@/types/lesson";

interface PrevNextNavProps {
  prev?: Lesson;
  next?: Lesson;
}

export function PrevNextNav({ prev, next }: PrevNextNavProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-12 pt-8 border-t border-border">
      {prev ? (
        <Link
          href={`/lessons/${prev.slug}`}
          className="group flex flex-col p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
        >
          <span className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
            <ChevronLeft className="h-3 w-3" />
            이전 강의
          </span>
          <span className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-1">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/lessons/${next.slug}`}
          className="group flex flex-col items-end p-4 rounded-lg border border-border hover:border-primary/50 transition-colors text-right"
        >
          <span className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
            다음 강의
            <ChevronRight className="h-3 w-3" />
          </span>
          <span className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-1">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
