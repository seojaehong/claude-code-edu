import { ReactNode } from "react";

interface LessonLayoutProps {
  children: ReactNode;
}

export default function LessonLayout({ children }: LessonLayoutProps) {
  return <>{children}</>;
}
