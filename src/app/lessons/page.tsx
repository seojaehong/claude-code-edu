"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { phases } from "@/data/phases";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchDialog } from "@/components/SearchDialog";
import { ProgressBar } from "@/components/ProgressBar";
import { LessonCard } from "@/components/LessonCard";
import { useProgress } from "@/hooks/useProgress";
import { Input } from "@/components/ui/input";

export default function LessonsPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const { progress, isLoaded } = useProgress();

  const allLessons = useMemo(
    () => phases.flatMap((p) => p.lessons),
    []
  );

  const totalLessons = allLessons.length;
  const completedSet = new Set(progress.completedLessons);

  const filteredLessons = useMemo(() => {
    if (!filter.trim()) return allLessons;
    const q = filter.toLowerCase();
    return allLessons.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.tags.some((t) => t.toLowerCase().includes(q)) ||
        l.description.toLowerCase().includes(q)
    );
  }, [filter, allLessons]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header
        totalLessons={totalLessons}
        onSearchOpen={() => setSearchOpen(true)}
      />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-6 py-8">
        {/* Page title and progress */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            강의 목록
          </h1>
          <p className="text-muted-foreground mb-6">
            전체 {totalLessons}개 강의를 한눈에 살펴보세요.
          </p>
          {isLoaded && (
            <ProgressBar
              completed={progress.completedLessons.length}
              total={totalLessons}
              label="전체 진도"
              size="md"
              className="mb-6"
            />
          )}
        </div>

        {/* Filter input */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="강의 제목, 태그로 검색..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Lessons grid */}
        {filteredLessons.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-lg mb-1">검색 결과가 없습니다.</p>
            <p className="text-sm">다른 키워드로 검색해보세요.</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredLessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                isCompleted={completedSet.has(lesson.id)}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
      <SearchDialog
        phases={phases}
        open={searchOpen}
        onOpenChange={setSearchOpen}
      />
    </div>
  );
}
