"use client";

import { useState } from "react";
import { Clock } from "lucide-react";
import { phases } from "@/data/phases";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchDialog } from "@/components/SearchDialog";
import { ProgressBar } from "@/components/ProgressBar";
import { LessonCard } from "@/components/LessonCard";
import { useProgress } from "@/hooks/useProgress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CurriculumPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const { progress, isLoaded, isCompleted } = useProgress();

  const totalLessons = phases.reduce((sum, p) => sum + p.lessons.length, 0);
  const completedSet = new Set(progress.completedLessons);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header
        totalLessons={totalLessons}
        onSearchOpen={() => setSearchOpen(true)}
      />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 md:px-6 py-8">
        {/* Page title and overall progress */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            커리큘럼
          </h1>
          <p className="text-muted-foreground mb-6">
            Phase별로 체계적으로 학습하세요. 총 {phases.length}개 Phase,{" "}
            {totalLessons}개 강의로 구성되어 있습니다.
          </p>
          {isLoaded && (
            <ProgressBar
              completed={progress.completedLessons.length}
              total={totalLessons}
              label="전체 진도"
              size="md"
            />
          )}
        </div>

        {/* Phase accordion list */}
        <Accordion
          multiple
          defaultValue={phases.map((p) => `phase-${p.id}`)}
          className="space-y-4"
        >
          {phases.map((phase) => {
            const phaseCompleted = phase.lessons.filter((l) =>
              completedSet.has(l.id)
            ).length;
            const phaseMinutes = phase.lessons.reduce(
              (sum, l) => sum + l.estimatedMinutes,
              0
            );

            return (
              <AccordionItem
                key={phase.id}
                value={`phase-${phase.id}`}
                className="border rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-accent/30">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-1 text-left">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">
                        {phase.id}
                      </span>
                      <div>
                        <h2 className="font-semibold text-foreground">
                          {phase.title}
                        </h2>
                        <p className="text-sm text-muted-foreground mt-0.5 hidden sm:block">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:ml-auto text-sm text-muted-foreground shrink-0">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {phaseMinutes}분
                      </span>
                      <span className="font-medium">
                        {phaseCompleted}/{phase.lessons.length}
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 pt-2">
                  <p className="text-sm text-muted-foreground mb-4 sm:hidden">
                    {phase.description}
                  </p>
                  <div className="grid gap-3">
                    {phase.lessons.map((lesson) => (
                      <LessonCard
                        key={lesson.id}
                        lesson={lesson}
                        isCompleted={completedSet.has(lesson.id)}
                      />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
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
