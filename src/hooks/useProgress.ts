"use client";

import { useState, useEffect, useCallback } from "react";
import { ProgressData } from "@/types/progress";
import {
  getProgress,
  markComplete as markCompleteFn,
  markIncomplete as markIncompleteFn,
  updateLastVisited as updateLastVisitedFn,
  resetProgress as resetProgressFn,
} from "@/lib/progress";

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>({
    completedLessons: [],
    lastVisited: "",
    lastVisitedAt: "",
    startedAt: "",
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setProgress(getProgress());
    setIsLoaded(true);
  }, []);

  const markComplete = useCallback((lessonId: string) => {
    const updated = markCompleteFn(lessonId);
    setProgress({ ...updated });
  }, []);

  const markIncomplete = useCallback((lessonId: string) => {
    const updated = markIncompleteFn(lessonId);
    setProgress({ ...updated });
  }, []);

  const toggleComplete = useCallback(
    (lessonId: string) => {
      if (progress.completedLessons.includes(lessonId)) {
        markIncomplete(lessonId);
      } else {
        markComplete(lessonId);
      }
    },
    [progress.completedLessons, markComplete, markIncomplete]
  );

  const updateLastVisited = useCallback((lessonId: string) => {
    updateLastVisitedFn(lessonId);
    setProgress(getProgress());
  }, []);

  const resetAll = useCallback(() => {
    resetProgressFn();
    setProgress({
      completedLessons: [],
      lastVisited: "",
      lastVisitedAt: "",
      startedAt: "",
    });
  }, []);

  const isCompleted = useCallback(
    (lessonId: string) => progress.completedLessons.includes(lessonId),
    [progress.completedLessons]
  );

  const completedCount = progress.completedLessons.length;

  const getPercent = useCallback(
    (total: number) =>
      total === 0 ? 0 : Math.round((completedCount / total) * 100),
    [completedCount]
  );

  return {
    progress,
    isLoaded,
    markComplete,
    markIncomplete,
    toggleComplete,
    updateLastVisited,
    resetAll,
    isCompleted,
    completedCount,
    getPercent,
  };
}
