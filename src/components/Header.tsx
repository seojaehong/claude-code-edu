"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProgressBar } from "@/components/ProgressBar";
import { useProgress } from "@/hooks/useProgress";
import { cn } from "@/lib/utils";

interface HeaderProps {
  totalLessons: number;
  onSearchOpen?: () => void;
  onMenuOpen?: () => void;
}

const navLinks = [
  { href: "/curriculum", label: "커리큘럼" },
  { href: "/lessons", label: "강의 목록" },
];

export function Header({ totalLessons, onSearchOpen, onMenuOpen }: HeaderProps) {
  const pathname = usePathname();
  const { completedCount, isLoaded } = useProgress();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 md:px-6">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 md:hidden h-9 w-9"
          onClick={onMenuOpen}
          aria-label="메뉴 열기"
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mr-6">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg hidden sm:inline">
            Claude Code Edu
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 text-sm rounded-md transition-colors",
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-foreground font-medium bg-accent"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Progress mini */}
        {isLoaded && completedCount > 0 && (
          <div className="hidden lg:flex items-center gap-2 mr-4">
            <span className="text-xs text-muted-foreground">
              {completedCount}/{totalLessons}
            </span>
            <div className="w-20">
              <ProgressBar
                completed={completedCount}
                total={totalLessons}
                showPercentage={false}
                size="sm"
              />
            </div>
          </div>
        )}

        {/* Search shortcut */}
        <Button
          variant="outline"
          size="sm"
          className="hidden sm:flex items-center gap-2 text-muted-foreground h-9 px-3 mr-2"
          onClick={onSearchOpen}
        >
          <Search className="h-4 w-4" />
          <span className="text-xs">검색</span>
          <kbd className="pointer-events-none ml-1 inline-flex h-5 select-none items-center gap-0.5 rounded border border-border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground">
            <span className="text-[10px]">⌘</span>K
          </kbd>
        </Button>

        {/* Mobile search */}
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden h-9 w-9 mr-1"
          onClick={onSearchOpen}
          aria-label="검색"
        >
          <Search className="h-4 w-4" />
        </Button>

        {/* Theme toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
}
