# Design: 자연어/VS Code 기반 콘텐츠 전면 전환

## 1. ChatExample 컴포넌트 설계

### 1.1 Props Interface
```typescript
interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatExampleProps {
  messages: ChatMessage[];
  title?: string;
}
```

### 1.2 렌더링 규칙
- user 메시지: 💬 아이콘 + "나" 라벨, primary/10 배경
- assistant 메시지: 🤖 아이콘 + "Claude" 라벨, muted 배경
- 복사 버튼: user 메시지에만 (프롬프트 복사용)
- 다크모드 대응: 기존 테마 변수 활용
- 위치: src/components/ChatExample.tsx
- Export: callouts.tsx에서 re-export

### 1.3 사용 예시
```tsx
<ChatExample
  title="취업규칙 분석"
  messages={[
    { role: "user", content: "취업규칙.docx에서 연차휴가 관련 조항을 찾아줘" },
    { role: "assistant", content: "취업규칙을 분석했습니다.\n\n연차휴가 관련 조항 3건:\n• 제15조 연차유급휴가\n• 제16조 연차휴가 사용촉진\n• 제18조 휴가일수 계산" },
  ]}
/>
```

## 2. 전환 규칙

### 2.1 CodeBlock 전환 기준
| 현재 패턴 | 전환 방법 |
|-----------|----------|
| `claude "프롬프트"` | ChatExample (user+assistant) |
| `cd ~/폴더 && claude` | 삭제, VS Code 폴더 열기 설명으로 대체 |
| `claude -p "..."` | Phase 6-1에서만 유지 (고급) |
| `> 파일.md` 리다이렉트 | "결과를 파일로 저장해줘" 자연어 |
| `mkdir`, `cp`, `ls` 등 | "폴더를 만들어줘", "복사해줘" 자연어 |
| CLAUDE.md/스킬 내용 | CodeBlock language="markdown" 유지 (파일 내용이므로) |
| JSON 설정 파일 | CodeBlock language="json" 유지 |

### 2.2 유지할 CodeBlock
- CLAUDE.md 파일 내용 (마크다운)
- 스킬 파일 내용 (마크다운)
- MCP 설정 JSON
- Phase 6-1 비대화형 모드 (터미널, 고급)

## 3. Phase별 재작성 핵심

### Phase 1 (시작하기)
- 1-2: VS Code 설치 → 확장 마켓 → Claude Code 설치 → 로그인
- 1-3: VS Code 탐색기에서 폴더 열기 → 사이드바 채팅
- 1-4: VS Code 설정에서 퍼미션 선택

### Phase 2 (문서/데이터)
- 모든 `claude "..."` → ChatExample

### Phase 3 (CLAUDE.md)
- "CLAUDE.md 만들어줘" 자연어 생성 강조
- 파일 내용 CodeBlock은 유지

### Phase 4 (스킬)
- 스킬 폴더/파일 생성을 자연어로
- 스킬 내용 CodeBlock은 유지

### Phase 5 (MCP)
- Desktop App 커넥터 GUI 강조
- 자연어로 MCP 기능 사용

### Phase 6 (자동화)
- 6-1만 터미널 소개 (고급, 선택적)
- 나머지 GUI 기반

### Phase 7 (실전 사례)
- 기존 bash 예시 → ChatExample

## 4. 구현 순서
1. ChatExample 컴포넌트 생성
2. Phase 1 재작성 (4강) — 가장 큰 변경
3. Phase 2-7 재작성 (24강) — 병렬 에이전트
4. phases.ts 메타데이터 업데이트
5. 빌드 검증 + 배포
