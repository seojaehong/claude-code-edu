"use client";

import { useRouter } from "next/navigation";
import { Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/hooks/useProgress";
import { Lesson } from "@/types/lesson";
import { cn } from "@/lib/utils";

interface CompleteButtonProps {
  lessonId: string;
  nextLesson?: Lesson;
}

export function CompleteButton({ lessonId, nextLesson }: CompleteButtonProps) {
  const router = useRouter();
  const { isCompleted, markComplete, markIncomplete } = useProgress();
  const completed = isCompleted(lessonId);

  const handleClick = () => {
    if (completed) {
      markIncomplete(lessonId);
    } else {
      markComplete(lessonId);
      if (nextLesson) {
        setTimeout(() => router.push(`/lessons/${nextLesson.slug}`), 300);
      }
    }
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className={cn(
        "w-full sm:w-auto",
        completed
          ? "bg-green-600 hover:bg-green-700 text-white"
          : "bg-primary hover:bg-primary/90"
      )}
    >
      {completed ? (
        <>
          <Check className="h-4 w-4 mr-2" />
          완료됨 (취소하려면 클릭)
        </>
      ) : nextLesson ? (
        <>
          완료하고 다음 강의로
          <ChevronRight className="h-4 w-4 ml-2" />
        </>
      ) : (
        <>
          <Check className="h-4 w-4 mr-2" />
          이 강의 완료하기
        </>
      )}
    </Button>
  );
}
