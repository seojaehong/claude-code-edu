"use client";

import { cn } from "@/lib/utils";

interface ProgressBarProps {
  completed: number;
  total: number;
  label?: string;
  showPercentage?: boolean;
  size?: "sm" | "md";
  className?: string;
}

export function ProgressBar({
  completed,
  total,
  label,
  showPercentage = true,
  size = "md",
  className,
}: ProgressBarProps) {
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className={cn("space-y-1.5", className)}>
      {(label || showPercentage) && (
        <div className="flex items-center justify-between text-sm">
          {label && (
            <span className="text-muted-foreground font-medium">{label}</span>
          )}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>
              {completed}/{total}
            </span>
            {showPercentage && (
              <span className="font-semibold text-foreground">{percent}%</span>
            )}
          </div>
        </div>
      )}
      <div
        className={cn(
          "w-full rounded-full bg-muted overflow-hidden",
          size === "sm" ? "h-1.5" : "h-2.5"
        )}
      >
        <div
          className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
