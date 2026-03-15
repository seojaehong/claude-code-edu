# Plan: 자연어/VS Code 기반 콘텐츠 전면 전환

> **Executive Summary**

| 항목 | 내용 |
|------|------|
| **Feature** | Claude Code Edu 콘텐츠 전면 전환 (bash → 자연어/VS Code) |
| **작성일** | 2026-03-15 |
| **상태** | Plan 완료, Design 대기 |

| 관점 | 내용 |
|------|------|
| **Problem** | 비개발자 타겟인데 터미널/bash 명령어 기반으로 교육 → 진입장벽 높음, 실제 사용 패턴과 괴리 |
| **Solution** | VS Code + 자연어 대화 기반으로 전체 28강 재작성. ChatExample 컴포넌트 신규 개발 |
| **Function UX Effect** | "터미널에 명령어 입력" → "Claude에게 말하기". cd/mkdir 없이 자연어로 폴더·파일 작업 |
| **Core Value** | 비개발자가 5분 만에 시작할 수 있는 최저 진입장벽 교육 |

---

## 1. User Intent Discovery

### 핵심 문제
현재 콘텐츠가 `claude "..."` 식의 bash/터미널 명령어 기반으로 작성되어 있어, 비개발자 타겟 사용자의 실제 사용 패턴과 완전히 다르다.

**실제 사용자(노무사)의 사용 방식:**
- VS Code에서 Claude Code 확장 프로그램 사용
- 사이드바 채팅창에 자연어로 대화
- 리눅스 명령어를 하나도 모르고, 쓰지 않음
- cd, mkdir 없이 자연어로 폴더 이동, 생성, 파일 작업 전부 가능
- 퍼미션 설정도 VS Code GUI에서 처리

### 메인 컨셉
> **"cd, mkdir 같은 명령어 몰라도 자연어로 폴더 이동, 생성, 파일 작업 다 된다"**

### 타겟 사용자
비개발자 전문직 (노무사, 변호사, 회계사, 세무사) — 터미널 경험 zero

### 성공 기준
- 터미널/bash 명령어 언급 0건 (Phase 6 고급 제외)
- 모든 코드 예시가 대화 UI(ChatExample) 형태
- VS Code 설치부터 첫 대화까지 10분 이내 가능한 흐름

---

## 2. Alternatives Explored

| 접근법 | 설명 | 선택 |
|--------|------|:---:|
| **A: 전면 재작성** | 28강 전체를 VS Code + 자연어 기반으로 재작성 | ✅ 선택 |
| B: 점진적 전환 | Phase 1~3만 먼저 전환 → 나머지 | ❌ 이질감 |
| C: 새 컴포넌트 + 기존 보존 | ChatExample 추가, 기존 bash는 접히게 | ❌ 메시지 흐려짐 |

**선택 이유:** 교육 사이트의 정체성 자체가 "비개발자도 쉽게"이므로, 일관성이 핵심. 중간에 톤이 바뀌면 신뢰가 떨어진다.

---

## 3. YAGNI Review

### 필수 포함 (v1)
- [x] 28강 전체 코드 예시 전환 (107건 bash → ChatExample)
- [x] Phase 1 설치 흐름 재설계 (터미널 → VS Code 확장)
- [x] ChatExample 컴포넌트 신규 개발
- [x] As-Is / To-Be 비교표 문서화

### Out of Scope (v1에서 제외)
- 스크린샷/GIF 추가 (별도 작업)
- 동영상 촬영
- 터미널 사용법 보충 강의 (고급 사용자용)

---

## 4. As-Is / To-Be 전환표

### 4.1 전체 접근 방식

| 항목 | As-Is (현재) | To-Be (전환 후) |
|------|-------------|-----------------|
| **도구** | 터미널 (PowerShell/Terminal) | VS Code + Claude Code 확장 |
| **실행** | `claude` 명령어 입력 | VS Code 사이드바에서 바로 대화 |
| **파일 열기** | `cd ~/Desktop/업무` | VS Code "폴더 열기" 또는 💬 "업무 폴더 열어줘" |
| **파일 분석** | `claude "@파일명"` | 💬 "이 파일 분석해줘" (탐색기에서 보이는 파일) |
| **결과 저장** | `> 결과.md` 리다이렉트 | 💬 "결과를 파일로 저장해줘" |
| **폴더 생성** | `mkdir 사건폴더` | 💬 "사건폴더를 만들어줘" |
| **퍼미션** | `--allowedTools` 플래그 | VS Code 설정 화면 (GUI) |
| **스킬 실행** | 터미널에서 `/스킬명` | VS Code 채팅에서 `/스킬명` (동일) |
| **비대화형** | `claude -p "..."` | Phase 6 고급에서만 선택적 소개 |
| **코드 예시** | `CodeBlock language="bash"` | `ChatExample` 컴포넌트 (대화 UI) |

### 4.2 Phase별 전환 상세

#### Phase 1: 시작하기

| 강 | As-Is | To-Be |
|----|-------|-------|
| **1-1** | Claude Code 소개 (변경 적음) | 동일 + "명령어 없이 대화로" 강조 |
| **1-2** | Node.js 설치 → `npm install -g @anthropic-ai/claude-code` → 터미널에서 `claude` | **VS Code 다운로드 → 설치 → 한글 팩 → 기본 화면 이해** |
| **1-3** | `cd ~/업무폴더` → `claude` → `@파일명` | **VS Code에서 폴더 열기 → 사이드바에서 대화 → "이 파일 분석해줘"** |
| **1-4** | `--allowedTools`, `Shift+Tab` 단축키 | **VS Code 설정 화면에서 퍼미션 선택 (GUI 스크린샷)** |

#### Phase 2: 문서와 데이터

| 강 | As-Is | To-Be |
|----|-------|-------|
| **2-1** | `claude "취업규칙.docx 분석해줘"` | 💬 "취업규칙.docx에서 연차 조항 찾아줘" |
| **2-2** | `claude "의견서 초안 작성해줘"` → `> 의견서.md` | 💬 "의견서 초안을 작성해서 파일로 저장해줘" |
| **2-3** | `claude "@급여대장.xlsx 오류 찾아줘"` | 💬 "급여대장.xlsx에서 4대보험 오류 찾아줘" |
| **2-4** | 이미지 전달 `@스캔문서.png` | 💬 "이 스캔 문서의 텍스트를 추출해줘" (드래그앤드롭) |

#### Phase 3: CLAUDE.md

| 강 | As-Is | To-Be |
|----|-------|-------|
| **3-1** | 터미널에서 CLAUDE.md 생성 | 💬 "CLAUDE.md 파일을 만들어줘. 내 직업은 노무사야" |
| **3-2** | 코드블록으로 템플릿 제시 | 동일 (CLAUDE.md 내용 자체는 마크다운) |
| **3-3** | `/memory` 터미널 명령 | VS Code 채팅에서 `/memory` (동일하게 동작) |

#### Phase 4: 스킬

| 강 | As-Is | To-Be |
|----|-------|-------|
| **4-1** | `.claude/skills/` 폴더 직접 생성 | 💬 "급여검증 스킬을 만들어줘" → Claude가 자동 생성 |
| **4-2** | `mkdir .claude/skills` 명령 | 💬 ".claude/skills 폴더를 만들고 요약 스킬을 만들어줘" |
| **4-3** | 코드블록으로 스킬 파일 내용 | 동일 (스킬 내용은 마크다운) + 자연어 생성법 추가 |
| **4-4** | 폴더 복사 `cp -r` | 💬 "이 스킬 폴더를 복사해줘" 또는 탐색기에서 복사 |

#### Phase 5: MCP

| 강 | As-Is | To-Be |
|----|-------|-------|
| **5-1** | `claude mcp add` 터미널 명령 | **Desktop App 커넥터 GUI** 또는 VS Code 설정 |
| **5-2~4** | MCP 설정 JSON, 터미널 명령 | **GUI 기반 설정 안내 + 자연어로 사용** |

#### Phase 6: 자동화

| 강 | As-Is | To-Be |
|----|-------|-------|
| **6-1** | `claude -p "..."` 비대화형 | **유일하게 터미널 소개** — "고급: 자동 실행이 필요할 때" |
| **6-2~4** | Desktop App, Remote | 변경 적음 (이미 GUI 기반) |

#### Phase 7: 실전 사례

| 강 | As-Is | To-Be |
|----|-------|-------|
| **7-1~5** | 일부 bash 예시 | ChatExample로 전환 (큰 변경 아님) |

---

## 5. 신규 컴포넌트: ChatExample

### 용도
기존 `CodeBlock language="bash"`를 대체하여 실제 VS Code 채팅 대화를 시뮬레이션하는 UI

### Props
```typescript
interface ChatExampleProps {
  messages: {
    role: "user" | "assistant";
    content: string;
  }[];
  title?: string;  // 예: "취업규칙 분석 요청"
}
```

### 렌더링
```
┌─ 취업규칙 분석 요청 ─────────────────┐
│                                       │
│  💬 나                                │
│  ┌─────────────────────────────────┐  │
│  │ 취업규칙.docx에서 연차휴가      │  │
│  │ 관련 조항을 찾아서 근로기준법   │  │
│  │ 제60조와 비교해줘               │  │
│  └─────────────────────────────────┘  │
│                                       │
│  🤖 Claude                            │
│  ┌─────────────────────────────────┐  │
│  │ 취업규칙을 분석했습니다.        │  │
│  │ 연차휴가 관련 조항 3건을        │  │
│  │ 찾았습니다:                     │  │
│  │ • 제15조 연차유급휴가...        │  │
│  └─────────────────────────────────┘  │
│                                       │
└───────────────────────────────────────┘
```

### 스타일
- user 메시지: 오른쪽 정렬, primary 배경
- assistant 메시지: 왼쪽 정렬, card 배경
- 다크모드 대응
- 복사 버튼 (user 메시지에만 — 프롬프트 복사용)

---

## 6. 작업 순서

### Step 1: ChatExample 컴포넌트 개발
- `src/components/ChatExample.tsx` 생성
- Props: messages, title
- 스타일: 대화 UI, 다크모드, 복사 버튼
- callouts.tsx에 export 추가

### Step 2: Phase 1 재작성 (4강)
- 1-1: "명령어 없이 대화로" 컨셉 강조
- 1-2: VS Code 설치 → 확장 설치 → 로그인 (터미널 완전 삭제)
- 1-3: VS Code에서 폴더 열기 → 자연어 대화 시작
- 1-4: VS Code 설정 GUI로 퍼미션 선택

### Step 3: Phase 2 재작성 (4강)
- 모든 `claude "..."` → ChatExample 전환
- "결과를 파일로 저장해줘" 자연어 패턴

### Step 4: Phase 3 재작성 (3강)
- CLAUDE.md를 자연어로 생성하는 방법 추가
- /memory는 VS Code 채팅에서 동일하게 사용

### Step 5: Phase 4 재작성 (4강)
- 스킬 폴더/파일 생성을 자연어로
- 스킬 실행은 동일 (/명령어)

### Step 6: Phase 5 재작성 (4강)
- MCP 설정을 GUI 기반으로 전환
- Desktop App 커넥터 강조

### Step 7: Phase 6 재작성 (4강)
- 6-1만 터미널 소개 (고급, 선택적)
- 나머지는 GUI 기반

### Step 8: Phase 7 점검 (5강)
- 기존 bash 예시를 ChatExample로 전환

### Step 9: phases.ts 메타데이터 업데이트
- Phase 1 강의 제목/설명 변경 반영

### Step 10: 최종 검증
- bash/터미널 언급 0건 확인 (Phase 6-1 제외)
- 빌드 테스트
- 배포

---

## 7. Brainstorming Log

| Phase | 결정 | 이유 |
|-------|------|------|
| Intent | VS Code 전용, 터미널 완전 삭제 | 타겟이 비개발자. cd도 모르는 사람이 대상 |
| Intent | VS Code 설치부터 시작 | 처음 접하는 사람 기준으로 설계 |
| Alternatives | 전면 재작성 선택 | 일관성이 교육에서 가장 중요 |
| YAGNI | 스크린샷/동영상은 제외 | 콘텐츠 전환 자체가 이번 범위 |
| Design | ChatExample 컴포넌트 신규 | bash CodeBlock 대체 필요 |
| Design | As-Is/To-Be 비교표 포함 | 변경 내용 명확화 |
| Constraint | Phase 6-1만 터미널 허용 | 비대화형 자동화는 터미널이 유일한 방법 |
| Core Concept | 자연어로 cd/mkdir 대체 가능 | **메인 컨셉** — 명령어 없이 다 된다 |

---

## 8. 예상 영향

| 항목 | Before | After |
|------|--------|-------|
| bash/터미널 명령어 | 107건 | ~3건 (Phase 6-1만) |
| 진입장벽 | 터미널 열기 + 명령어 암기 | VS Code 설치 + 대화 시작 |
| 첫 사용까지 시간 | 15~30분 (Node.js+npm+터미널) | 5~10분 (VS Code+확장 클릭) |
| 코드 예시 형태 | `CodeBlock language="bash"` | `ChatExample` (대화 UI) |
| 콘텐츠 품질 F(전문직 맥락) | 4.5 | 5.0 (실제 사용 패턴과 일치) |
