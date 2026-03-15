"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { LessonSidebar } from "@/components/LessonSidebar";
import { Phase } from "@/types/lesson";

interface MobileSidebarProps {
  phases: Phase[];
  currentLessonId?: string;
  completedLessons: string[];
  open: boolean;
  onClose: () => void;
}

export function MobileSidebar({
  phases,
  currentLessonId,
  completedLessons,
  open,
  onClose,
}: MobileSidebarProps) {
  return (
    <Sheet open={open} onOpenChange={(v) => !v && onClose()}>
      <SheetContent side="left" className="p-0 w-72">
        <SheetHeader className="px-4 py-3 border-b border-border">
          <SheetTitle className="text-sm">강의 목록</SheetTitle>
        </SheetHeader>
        <div className="overflow-y-auto h-[calc(100vh-3.5rem)]">
          <LessonSidebar
            phases={phases}
            currentLessonId={currentLessonId}
            completedLessons={completedLessons}
            className="w-full border-none"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
