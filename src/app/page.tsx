"use client";

import Link from "next/link";
import { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Clock,
  Layers,
  ArrowRight,
  Terminal,
  Zap,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchDialog } from "@/components/SearchDialog";
import { phases } from "@/data/phases";

const totalLessons = phases.reduce((sum, p) => sum + p.lessons.length, 0);
const totalHours = Math.round(
  phases.reduce(
    (sum, p) =>
      sum + p.lessons.reduce((s, l) => s + l.estimatedMinutes, 0),
    0
  ) / 60
);

const targetUsers = [
  { label: "노무사", desc: "취업규칙, 급여, 4대보험" },
  { label: "변호사", desc: "계약서 검토, 판례 분석" },
  { label: "회계사", desc: "재무제표, 세무 신고" },
  { label: "세무사", desc: "원천징수, 세금 계산" },
  { label: "의사", desc: "진료 기록, 논문 검색" },
];

const features = [
  {
    icon: Terminal,
    title: "따라하면 바로 쓸 수 있는",
    desc: "복사 가능한 실전 코드와 프롬프트로 즉시 업무에 적용",
  },
  {
    icon: Zap,
    title: "비개발자를 위한 쉬운 설명",
    desc: "전문 용어 없이, 여러분의 업무 언어로 설명합니다",
  },
  {
    icon: Users,
    title: "실무 시나리오 기반",
    desc: "실제 업무 상황에서 Claude Code가 어떻게 도움되는지 체험",
  },
];

export default function HomePage() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        totalLessons={totalLessons}
        onSearchOpen={() => setSearchOpen(true)}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm mb-6">
              <GraduationCap className="h-4 w-4" />
              비개발자 전문직을 위한 실전 가이드
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              AI 시대,{" "}
              <span className="text-primary">전문직의 새로운 무기</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Claude Code를 업무에 바로 적용하세요.
              <br className="hidden sm:block" />
              세팅부터 활용까지, 쉽고 정확하게 안내합니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/lessons/1-1">
                <Button size="lg" className="text-base px-8">
                  학습 시작하기
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="/curriculum">
                <Button variant="outline" size="lg" className="text-base px-8">
                  커리큘럼 보기
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span className="text-2xl font-bold text-foreground">
                    {totalLessons}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">실전 강의</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-2xl font-bold text-foreground">
                    {totalHours}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">시간 분량</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <Layers className="h-4 w-4 text-primary" />
                  <span className="text-2xl font-bold text-foreground">
                    {phases.length}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">단계 체계</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-5xl mx-auto px-4 md:px-6 py-16">
          <h2 className="text-2xl font-bold text-center mb-10">
            왜 이 강의인가요?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-shadow"
              >
                <f.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Target users */}
        <section className="bg-muted/30 py-16">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center mb-2">
              이런 분들에게 추천합니다
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              코딩을 몰라도 괜찮습니다. 업무를 알면 충분합니다.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {targetUsers.map((u) => (
                <div
                  key={u.label}
                  className="p-4 rounded-xl border border-border bg-card text-center hover:border-primary/30 transition-colors"
                >
                  <span className="text-lg font-semibold text-foreground">
                    {u.label}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 md:px-6 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">지금 시작하세요</h2>
          <p className="text-muted-foreground mb-6">
            Phase 1부터 차근차근, 자신의 속도로 학습할 수 있습니다.
          </p>
          <Link href="/lessons/1-1">
            <Button size="lg" className="text-base px-8">
              첫 번째 강의 시작
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </section>
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
