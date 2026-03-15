"use client";

import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import { Phase } from "@/types/lesson";
import { ProgressBar } from "@/components/ProgressBar";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface LessonSidebarProps {
  phases: Phase[];
  currentLessonId?: string;
  completedLessons: string[];
  className?: string;
}

export function LessonSidebar({
  phases,
  currentLessonId,
  completedLessons,
  className,
}: LessonSidebarProps) {
  const completedSet = new Set(completedLessons);
  const totalLessons = phases.reduce((sum, p) => sum + p.lessons.length, 0);

  // Find which phase the current lesson belongs to
  const currentPhase = phases.find((p) =>
    p.lessons.some((l) => l.id === currentLessonId)
  );

  const defaultOpen = currentPhase
    ? [`phase-${currentPhase.id}`]
    : phases.length > 0
    ? [`phase-${phases[0].id}`]
    : [];

  return (
    <aside
      className={cn(
        "w-64 border-r border-border bg-card overflow-y-auto",
        className
      )}
    >
      <div className="p-4 space-y-4">
        {/* Overall progress */}
        <ProgressBar
          completed={completedLessons.length}
          total={totalLessons}
          label="전체 진도"
          size="sm"
        />

        {/* Phase accordion */}
        <Accordion
          multiple
          defaultValue={defaultOpen}
          className="space-y-1"
        >
          {phases.map((phase) => {
            const phaseCompleted = phase.lessons.filter((l) =>
              completedSet.has(l.id)
            ).length;

            return (
              <AccordionItem
                key={phase.id}
                value={`phase-${phase.id}`}
                className="border-none"
              >
                <AccordionTrigger className="px-2 py-2 text-xs font-bold uppercase text-muted-foreground hover:no-underline hover:bg-accent/50 rounded-md [&[data-state=open]>svg]:rotate-180">
                  <div className="flex items-center gap-2 flex-1 text-left">
                    <span>Phase {phase.id}</span>
                    <span className="text-[10px] font-normal normal-case">
                      {phaseCompleted}/{phase.lessons.length}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-1 pt-0">
                  <ul className="space-y-0.5 pl-1">
                    {phase.lessons.map((lesson) => {
                      const isActive = lesson.id === currentLessonId;
                      const isDone = completedSet.has(lesson.id);

                      return (
                        <li key={lesson.id}>
                          <Link
                            href={`/lessons/${lesson.slug}`}
                            className={cn(
                              "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors",
                              isActive
                                ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                            )}
                          >
                            {isDone ? (
                              <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
                            ) : (
                              <span
                                className={cn(
                                  "h-3.5 w-3.5 rounded-full border shrink-0",
                                  isActive
                                    ? "border-primary bg-primary/20"
                                    : "border-muted-foreground/30"
                                )}
                              />
                            )}
                            <span className="truncate">{lesson.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </aside>
  );
}
