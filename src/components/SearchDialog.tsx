"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Phase } from "@/types/lesson";
import { Badge } from "@/components/ui/badge";

interface SearchDialogProps {
  phases: Phase[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ phases, open, onOpenChange }: SearchDialogProps) {
  const router = useRouter();

  // Cmd+K shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const handleSelect = (slug: string) => {
    onOpenChange(false);
    router.push(`/lessons/${slug}`);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="강의 검색... (예: 프롬프트, 스킬, MCP)" />
      <CommandList>
        <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
        {phases.map((phase) => (
          <CommandGroup
            key={phase.id}
            heading={`Phase ${phase.id}: ${phase.title}`}
          >
            {phase.lessons.map((lesson) => (
              <CommandItem
                key={lesson.id}
                value={`${lesson.title} ${lesson.tags.join(" ")}`}
                onSelect={() => handleSelect(lesson.slug)}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-3 w-full">
                  <span className="text-xs text-muted-foreground font-mono w-6">
                    {lesson.id}
                  </span>
                  <span className="flex-1">{lesson.title}</span>
                  <span className="text-xs text-muted-foreground">
                    {lesson.estimatedMinutes}분
                  </span>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
