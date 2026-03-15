export interface Lesson {
  id: string;
  phase: number;
  order: number;
  title: string;
  description: string;
  slug: string;
  estimatedMinutes: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  tags: string[];
  learningGoals: string[];
}

export interface Phase {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
}
