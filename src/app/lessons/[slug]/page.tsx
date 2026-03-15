"use client";

import { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import { phases } from "@/data/phases";
import { Lesson } from "@/types/lesson";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchDialog } from "@/components/SearchDialog";
import { LessonSidebar } from "@/components/LessonSidebar";
import { MobileSidebar } from "@/components/MobileSidebar";
import { Breadcrumb } from "@/components/Breadcrumb";
import { LearningGoals } from "@/components/LearningGoals";
import { PrevNextNav } from "@/components/PrevNextNav";
import { CompleteButton } from "@/components/CompleteButton";
import { CodeBlock } from "@/components/CodeBlock";
import { TryThis, KeyPoint, BeforeAfter } from "@/components/callouts";
import { lessonContents } from "@/data/lesson-content";
import { useProgress } from "@/hooks/useProgress";

export default function LessonDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { progress, isLoaded, updateLastVisited } = useProgress();

  // Flatten all lessons for navigation
  const allLessons = useMemo(
    () => phases.flatMap((p) => p.lessons),
    []
  );
  const totalLessons = allLessons.length;

  // Find current lesson
  const currentIndex = allLessons.findIndex((l) => l.slug === slug);
  const lesson = allLessons[currentIndex] as Lesson | undefined;
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : undefined;
  const nextLesson =
    currentIndex < allLessons.length - 1
      ? allLessons[currentIndex + 1]
      : undefined;

  // Find current phase
  const currentPhase = phases.find((p) =>
    p.lessons.some((l) => l.slug === slug)
  );

  // Track last visited
  useEffect(() => {
    if (lesson && isLoaded) {
      updateLastVisited(lesson.id);
    }
  }, [lesson, isLoaded, updateLastVisited]);

  if (!lesson || !currentPhase) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header
          totalLessons={totalLessons}
          onSearchOpen={() => setSearchOpen(true)}
        />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">강의를 찾을 수 없습니다</h1>
            <p className="text-muted-foreground">
              요청한 강의가 존재하지 않습니다.
            </p>
          </div>
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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header
        totalLessons={totalLessons}
        onSearchOpen={() => setSearchOpen(true)}
        onMenuOpen={() => setMobileMenuOpen(true)}
      />

      <div className="flex flex-1">
        {/* Desktop sidebar */}
        <div className="hidden md:block sticky top-14 h-[calc(100vh-3.5rem)]">
          <LessonSidebar
            phases={phases}
            currentLessonId={lesson.id}
            completedLessons={progress.completedLessons}
          />
        </div>

        {/* Mobile sidebar */}
        <MobileSidebar
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          phases={phases}
          currentLessonId={lesson.id}
          completedLessons={progress.completedLessons}
        />

        {/* Main content */}
        <main className="flex-1 min-w-0 max-w-4xl mx-auto w-full px-4 md:px-8 py-8">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: `Phase ${currentPhase.id}: ${currentPhase.title}`, href: "/curriculum" },
              { label: lesson.title },
            ]}
          />

          {/* Lesson header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-muted-foreground font-mono">
                {lesson.id}
              </span>
              <span className="text-sm text-muted-foreground">
                {lesson.estimatedMinutes}분
              </span>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-3">
              {lesson.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {lesson.description}
            </p>
          </div>

          {/* Learning Goals */}
          <LearningGoals goals={lesson.learningGoals} />

          {/* Lesson content */}
          <article className="prose prose-zinc dark:prose-invert max-w-none">
            {lessonContents[lesson.id] || (
              <>
                <h2>핵심 내용</h2>
                <p>
                  이 강의에서는 <strong>{lesson.title}</strong>에 대해 다룹니다.
                  {" "}{lesson.description}
                </p>
                <KeyPoint>
                  <p>
                    이 강의의 콘텐츠는 준비 중입니다. 곧 실전 예제와 함께 업데이트됩니다.
                  </p>
                </KeyPoint>
                <BeforeAfter
                  scenario={lesson.title}
                  before="기존 방식: 수작업으로 하나씩 처리"
                  after="Claude Code로 자동 처리"
                  result="업무 시간 대폭 단축, 정확도 향상"
                />
                <TryThis>
                  <p>다음 업데이트에서 실습 내용이 추가됩니다.</p>
                </TryThis>
              </>
            )}
          </article>

          {/* Complete + Nav */}
          <div className="mt-12 space-y-6">
            <div className="flex justify-center">
              <CompleteButton
                lessonId={lesson.id}
                nextLesson={nextLesson}
              />
            </div>
            <PrevNextNav prev={prevLesson} next={nextLesson} />
          </div>
        </main>
      </div>

      <Footer />
      <SearchDialog
        phases={phases}
        open={searchOpen}
        onOpenChange={setSearchOpen}
      />
    </div>
  );
}
