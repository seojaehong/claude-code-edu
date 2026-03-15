import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <span className="font-semibold">Claude Code Edu</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/curriculum" className="hover:text-foreground transition-colors">
              커리큘럼
            </Link>
            <Link href="/lessons" className="hover:text-foreground transition-colors">
              강의 목록
            </Link>
          </nav>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Claude Code Edu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
