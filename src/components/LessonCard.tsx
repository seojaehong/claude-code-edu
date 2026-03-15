"use client";

import Link from "next/link";
import { Check, Clock } from "lucide-react";
import { Lesson } from "@/types/lesson";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface LessonCardProps {
  lesson: Lesson;
  isCompleted: boolean;
}

const difficultyColors = {
  beginner: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200",
  intermediate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200",
  advanced: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200",
};

const difficultyLabels = {
  beginner: "초급",
  intermediate: "중급",
  advanced: "고급",
};

export function LessonCard({ lesson, isCompleted }: LessonCardProps) {
  return (
    <Link
      href={`/lessons/${lesson.slug}`}
      className={cn(
        "block p-4 rounded-lg border transition-all hover:shadow-md",
        isCompleted
          ? "border-green-200 dark:border-green-800/50 bg-green-50/50 dark:bg-green-950/20"
          : "border-border hover:border-primary/30 bg-card"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-muted-foreground font-mono">
              {lesson.id}
            </span>
            {isCompleted && (
              <Check className="h-4 w-4 text-green-500 shrink-0" />
            )}
          </div>
          <h3 className="font-medium text-foreground mb-2 line-clamp-2">
            {lesson.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {lesson.description}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={cn(
                "text-[11px] px-2 py-0.5 rounded-full font-medium",
                difficultyColors[lesson.difficulty]
              )}
            >
              {difficultyLabels[lesson.difficulty]}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {lesson.estimatedMinutes}분
            </span>
            {lesson.tags.slice(0, 2).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-[11px] px-1.5 py-0"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
