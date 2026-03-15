import { Target } from "lucide-react";

interface LearningGoalsProps {
  goals: string[];
}

export function LearningGoals({ goals }: LearningGoalsProps) {
  if (goals.length === 0) return null;

  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 mb-8">
      <h3 className="flex items-center gap-2 font-semibold text-foreground mb-3">
        <Target className="h-5 w-5 text-primary" />
        이 강의에서 배울 것
      </h3>
      <ul className="space-y-2">
        {goals.map((goal, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-foreground/80"
          >
            <span className="text-primary mt-0.5">&#10003;</span>
            <span>{goal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
