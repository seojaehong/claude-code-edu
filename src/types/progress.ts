export interface ProgressData {
  completedLessons: string[];
  lastVisited: string;
  lastVisitedAt: string;
  startedAt: string;
}

export const PROGRESS_KEY = "claude-code-edu-progress";
