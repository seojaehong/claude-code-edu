import { ReactNode } from "react";
import { Lightbulb, AlertTriangle, Sparkles, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalloutProps {
  children: ReactNode;
  className?: string;
}

export function TryThis({ children, className }: CalloutProps) {
  return (
    <div
      className={cn(
        "rounded-xl border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/30 p-5 my-6",
        className
      )}
    >
      <h4 className="flex items-center gap-2 font-semibold text-blue-900 dark:text-blue-200 mb-2">
        <Sparkles className="h-5 w-5" />
        지금 해보기
      </h4>
      <div className="text-sm text-blue-800 dark:text-blue-200/80 space-y-2">
        {children}
      </div>
    </div>
  );
}

export function Tip({ children, className }: CalloutProps) {
  return (
    <div
      className={cn(
        "rounded-xl border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-950/30 p-5 my-6",
        className
      )}
    >
      <h4 className="flex items-center gap-2 font-semibold text-amber-900 dark:text-amber-200 mb-2">
        <Lightbulb className="h-5 w-5" />
        TIP
      </h4>
      <div className="text-sm text-amber-800 dark:text-amber-200/80 space-y-2">
        {children}
      </div>
    </div>
  );
}

export function Warning({ children, className }: CalloutProps) {
  return (
    <div
      className={cn(
        "rounded-xl border-l-4 border-red-500 bg-red-50 dark:bg-red-950/30 p-5 my-6",
        className
      )}
    >
      <h4 className="flex items-center gap-2 font-semibold text-red-900 dark:text-red-200 mb-2">
        <AlertTriangle className="h-5 w-5" />
        주의
      </h4>
      <div className="text-sm text-red-800 dark:text-red-200/80 space-y-2">
        {children}
      </div>
    </div>
  );
}

export function KeyPoint({ children, className }: CalloutProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-primary/20 bg-primary/5 p-5 my-6",
        className
      )}
    >
      <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
        <Info className="h-5 w-5 text-primary" />
        핵심 정리
      </h4>
      <div className="text-sm text-foreground/80 space-y-2">{children}</div>
    </div>
  );
}

interface BeforeAfterProps {
  scenario: string;
  before: string;
  after: string;
  result: string;
}

export function BeforeAfter({
  scenario,
  before,
  after,
  result,
}: BeforeAfterProps) {
  return (
    <div className="rounded-xl border border-amber-200 dark:border-amber-800/30 bg-amber-50/50 dark:bg-amber-950/20 p-5 my-6">
      <h4 className="font-semibold text-foreground mb-3">
        실전 적용: {scenario}
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
        <div className="rounded-lg bg-red-50 dark:bg-red-950/30 p-3 border border-red-200 dark:border-red-800/30">
          <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase">
            Before
          </span>
          <p className="text-sm text-foreground/80 mt-1">{before}</p>
        </div>
        <div className="rounded-lg bg-green-50 dark:bg-green-950/30 p-3 border border-green-200 dark:border-green-800/30">
          <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase">
            After
          </span>
          <p className="text-sm text-foreground/80 mt-1">{after}</p>
        </div>
      </div>
      <p className="text-sm font-medium text-foreground/70">
        결과: {result}
      </p>
    </div>
  );
}
