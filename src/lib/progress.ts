import { ProgressData, PROGRESS_KEY } from "@/types/progress";

const DEFAULT_PROGRESS: ProgressData = {
  completedLessons: [],
  lastVisited: "",
  lastVisitedAt: "",
  startedAt: "",
};

export function getProgress(): ProgressData {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    return JSON.parse(raw) as ProgressData;
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export function saveProgress(data: ProgressData): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
}

export function markComplete(lessonId: string): ProgressData {
  const progress = getProgress();
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
  }
  if (!progress.startedAt) {
    progress.startedAt = new Date().toISOString();
  }
  saveProgress(progress);
  return progress;
}

export function markIncomplete(lessonId: string): ProgressData {
  const progress = getProgress();
  progress.completedLessons = progress.completedLessons.filter(
    (id) => id !== lessonId
  );
  saveProgress(progress);
  return progress;
}

export function isCompleted(lessonId: string): boolean {
  return getProgress().completedLessons.includes(lessonId);
}

export function updateLastVisited(lessonId: string): void {
  const progress = getProgress();
  progress.lastVisited = lessonId;
  progress.lastVisitedAt = new Date().toISOString();
  if (!progress.startedAt) {
    progress.startedAt = new Date().toISOString();
  }
  saveProgress(progress);
}

export function getCompletedCount(): number {
  return getProgress().completedLessons.length;
}

export function getProgressPercent(totalLessons: number): number {
  if (totalLessons === 0) return 0;
  return Math.round((getCompletedCount() / totalLessons) * 100);
}

export function resetProgress(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(PROGRESS_KEY);
}
