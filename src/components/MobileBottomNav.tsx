"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Lesson } from "@/types/lesson";

interface MobileBottomNavProps {
  prev?: Lesson;
  next?: Lesson;
  currentIndex: number;
  totalLessons: number;
}

export function MobileBottomNav({
  prev,
  next,
  currentIndex,
  totalLessons,
}: MobileBottomNavProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="flex items-center justify-between px-2 py-2">
        {/* Previous button */}
        {prev ? (
          <Link
            href={`/lessons/${prev.slug}`}
            className="flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent min-w-0 flex-1"
          >
            <ChevronLeft className="h-4 w-4 shrink-0" />
            <span className="truncate">{prev.title}</span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}

        {/* Progress indicator */}
        <span className="text-xs font-mono text-muted-foreground shrink-0 px-2">
          {currentIndex + 1}/{totalLessons}
        </span>

        {/* Next button */}
        {next ? (
          <Link
            href={`/lessons/${next.slug}`}
            className="flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent min-w-0 flex-1 justify-end"
          >
            <span className="truncate">{next.title}</span>
            <ChevronRight className="h-4 w-4 shrink-0" />
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
}
