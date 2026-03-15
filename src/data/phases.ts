export interface Lesson {
  id: string;
  phase: number;
  order: number;
  title: string;
  description: string;
  slug: string;
  estimatedMinutes: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  tags: string[];
  learningGoals: string[];
}

export interface Phase {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
}

export const phases: Phase[] = [
  // ─────────────────────────────────────────────
  // Phase 1: 시작하기 — 오늘 바로 쓸 수 있게
  // ─────────────────────────────────────────────
  {
    id: 1,
    title: "시작하기 — 오늘 바로 쓸 수 있게",
    description:
      "설치부터 첫 대화까지. 30분이면 Claude Code가 내 업무 파일을 읽고 분석합니다.",
    lessons: [
      {
        id: "1-1",
        phase: 1,
        order: 1,
        title: "Claude Code란? — 3분 핵심 이해",
        description:
          "챗봇이 아닙니다. 내 컴퓨터의 파일을 직접 읽고, 분석하고, 새로 만들어주는 AI 업무 파트너입니다.",
        slug: "1-1",
        estimatedMinutes: 10,
        difficulty: "beginner",
        tags: ["개념 이해"],
        learningGoals: [
          "Claude Code가 일반 챗봇(ChatGPT, Claude.ai)과 어떻게 다른지 설명할 수 있다",
          "파일 읽기/쓰기/분석이 왜 전문직에게 핵심인지 이해한다",
          "'내 컴퓨터에서 직접 일하는 AI'라는 핵심 개념을 파악한다",
        ],
      },
      {
        id: "1-2",
        phase: 1,
        order: 2,
        title: "설치하기 — 복사 붙여넣기 3분",
        description:
          "Windows든 Mac이든, 명령어 한 줄 복사해서 붙여넣으면 끝. 스크린샷으로 따라하세요.",
        slug: "1-2",
        estimatedMinutes: 15,
        difficulty: "beginner",
        tags: ["설정", "실습"],
        learningGoals: [
          "자신의 운영체제에 맞는 설치 명령어를 실행할 수 있다",
          "터미널(PowerShell/Terminal)을 열고 명령어를 입력할 수 있다",
          "claude --version으로 설치 확인을 할 수 있다",
        ],
      },
      {
        id: "1-3",
        phase: 1,
        order: 3,
        title: "첫 대화 — 내 파일을 읽게 하기",
        description:
          "업무 폴더에서 Claude Code를 실행하고, 실제 문서를 분석시켜 봅니다. '이 계약서 요약해줘'부터 시작.",
        slug: "1-3",
        estimatedMinutes: 15,
        difficulty: "beginner",
        tags: ["실습", "도구 활용"],
        learningGoals: [
          "업무 폴더에서 claude 명령을 실행할 수 있다",
          "@파일명으로 특정 파일을 지정해서 분석을 요청할 수 있다",
          "Claude의 응답을 파일로 저장하는 방법을 안다",
        ],
      },
      {
        id: "1-4",
        phase: 1,
        order: 4,
        title: "권한 모드 이해 — 안전하게 사용하기",
        description:
          "Claude가 파일을 수정하기 전에 물어보게 할 수 있습니다. Ask/Auto-accept/Plan 모드의 차이를 알아봅니다.",
        slug: "1-4",
        estimatedMinutes: 10,
        difficulty: "beginner",
        tags: ["개념 이해", "설정"],
        learningGoals: [
          "세 가지 권한 모드의 차이를 설명할 수 있다",
          "Plan 모드로 안전하게 탐색하는 방법을 안다",
          "자신에게 맞는 모드를 선택할 수 있다",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Phase 2: 문서와 데이터 다루기
  // ─────────────────────────────────────────────
  {
    id: 2,
    title: "문서와 데이터 다루기",
    description:
      "계약서 분석, 엑셀 데이터 처리, 보고서 작성. 전문직의 핵심 업무를 Claude Code로.",
    lessons: [
      {
        id: "2-1",
        phase: 2,
        order: 1,
        title: "문서 읽기 — 계약서, 취업규칙, 법령 분석",
        description:
          "수십 페이지 문서를 통째로 읽고 핵심을 뽑아내는 실전. 취업규칙 검토를 예시로 따라합니다.",
        slug: "2-1",
        estimatedMinutes: 20,
        difficulty: "beginner",
        tags: ["실습", "도구 활용", "사례 분석"],
        learningGoals: [
          "긴 문서를 Claude에게 읽히고 요약을 받을 수 있다",
          "특정 조항을 찾아 법적 쟁점을 분석하게 할 수 있다",
          "여러 문서를 비교 분석하는 프롬프트를 작성할 수 있다",
        ],
      },
      {
        id: "2-2",
        phase: 2,
        order: 2,
        title: "문서 작성 — 의견서, 보고서, 안내문 생성",
        description:
          "빈 파일에서 시작해 완성된 문서를 만들어냅니다. 서식과 구조를 지정하는 방법을 배웁니다.",
        slug: "2-2",
        estimatedMinutes: 20,
        difficulty: "beginner",
        tags: ["실습", "도구 활용"],
        learningGoals: [
          "Claude에게 문서 구조를 지정해서 초안을 생성할 수 있다",
          "기존 템플릿을 참조해서 새 문서를 만들 수 있다",
          "생성된 문서를 원하는 경로에 저장할 수 있다",
        ],
      },
      {
        id: "2-3",
        phase: 2,
        order: 3,
        title: "엑셀/CSV 분석 — 급여대장, 매출 데이터",
        description:
          "엑셀 파일의 데이터를 읽고 분석합니다. 오류 검출, 통계, 보고서 자동 생성까지.",
        slug: "2-3",
        estimatedMinutes: 25,
        difficulty: "beginner",
        tags: ["실습", "도구 활용", "사례 분석"],
        learningGoals: [
          "CSV/엑셀 파일을 Claude에게 분석시킬 수 있다",
          "데이터에서 이상값이나 오류를 자동으로 찾을 수 있다",
          "분석 결과를 새 파일로 저장할 수 있다",
        ],
      },
      {
        id: "2-4",
        phase: 2,
        order: 4,
        title: "이미지 분석 — 스캔 문서, 캡처 화면",
        description:
          "스크린샷이나 스캔한 문서를 Claude에게 보여주고 분석시킵니다. OCR 없이 바로 텍스트를 추출합니다.",
        slug: "2-4",
        estimatedMinutes: 15,
        difficulty: "beginner",
        tags: ["실습", "도구 활용"],
        learningGoals: [
          "이미지를 Claude에 전달하는 방법을 안다",
          "스캔 문서에서 텍스트를 추출할 수 있다",
          "캡처 화면을 분석해서 정보를 뽑아낼 수 있다",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Phase 3: CLAUDE.md — AI에게 내 업무를 기억시키기
  // ─────────────────────────────────────────────
  {
    id: 3,
    title: "CLAUDE.md — AI에게 내 업무를 기억시키기",
    description:
      "'나는 노무사야. 의견서는 이 형식으로 써.' Claude에게 업무 규칙을 알려주면, 매번 설명 안 해도 됩니다.",
    lessons: [
      {
        id: "3-1",
        phase: 3,
        order: 1,
        title: "CLAUDE.md 만들기 — 나만의 AI 비서 세팅",
        description:
          "프로젝트 폴더에 CLAUDE.md 파일 하나 만들면, Claude가 매번 내 업무 맥락을 기억합니다.",
        slug: "3-1",
        estimatedMinutes: 20,
        difficulty: "beginner",
        tags: ["실습", "설정"],
        learningGoals: [
          "CLAUDE.md 파일을 생성하고 기본 규칙을 작성할 수 있다",
          "업무 맥락(직업, 업무 영역, 선호 형식)을 명시하는 방법을 안다",
          "CLAUDE.md가 있을 때와 없을 때의 차이를 체감한다",
        ],
      },
      {
        id: "3-2",
        phase: 3,
        order: 2,
        title: "실전 CLAUDE.md — 직군별 템플릿",
        description:
          "노무사, 변호사, 회계사, 세무사별 실전 CLAUDE.md 예시. 복사해서 바로 쓰세요.",
        slug: "3-2",
        estimatedMinutes: 15,
        difficulty: "beginner",
        tags: ["사례 분석", "실습"],
        learningGoals: [
          "자신의 직군에 맞는 CLAUDE.md를 작성할 수 있다",
          "문서 서식, 용어, 검토 기준을 CLAUDE.md에 명시할 수 있다",
          "다른 직군의 예시를 참고해 자신의 업무에 맞게 커스텀할 수 있다",
        ],
      },
      {
        id: "3-3",
        phase: 3,
        order: 3,
        title: "Auto Memory — Claude가 알아서 기억하는 것",
        description:
          "직접 적지 않아도 Claude가 대화 중 배운 것을 자동으로 기억합니다. /memory로 관리하는 법.",
        slug: "3-3",
        estimatedMinutes: 10,
        difficulty: "beginner",
        tags: ["개념 이해", "도구 활용"],
        learningGoals: [
          "Auto Memory가 어떻게 작동하는지 이해한다",
          "/memory 명령으로 저장된 기억을 확인/편집할 수 있다",
          "CLAUDE.md와 Auto Memory의 역할 차이를 안다",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Phase 4: 스킬 — 반복 업무를 명령어 하나로
  // ─────────────────────────────────────────────
  {
    id: 4,
    title: "스킬 — 반복 업무를 명령어 하나로",
    description:
      "매번 같은 지시를 반복하지 마세요. /급여계산, /취업규칙검토 같은 나만의 명령어를 만듭니다.",
    lessons: [
      {
        id: "4-1",
        phase: 4,
        order: 1,
        title: "스킬이란? — /명령어 하나로 복잡한 작업을",
        description:
          "자주 하는 작업을 /슬래시명령어로 저장합니다. 코딩이 아닙니다. 마크다운으로 지시사항을 적으면 끝.",
        slug: "4-1",
        estimatedMinutes: 15,
        difficulty: "intermediate",
        tags: ["개념 이해", "실습"],
        learningGoals: [
          "스킬이 무엇이고 왜 유용한지 설명할 수 있다",
          "스킬 파일(SKILL.md)의 기본 구조를 이해한다",
          "빌트인 스킬(/commit, /review-pr 등)을 사용할 수 있다",
        ],
      },
      {
        id: "4-2",
        phase: 4,
        order: 2,
        title: "첫 스킬 만들기 — /요약, /검토, /보고서",
        description:
          ".claude/skills/ 폴더에 마크다운 파일을 만들면 나만의 명령어가 생깁니다. 단계별로 따라합니다.",
        slug: "4-2",
        estimatedMinutes: 25,
        difficulty: "intermediate",
        tags: ["실습", "자동화"],
        learningGoals: [
          ".claude/skills/ 폴더를 만들고 SKILL.md를 작성할 수 있다",
          "name, description, 실행 지시사항을 작성할 수 있다",
          "만든 스킬을 /명령어로 실행할 수 있다",
        ],
      },
      {
        id: "4-3",
        phase: 4,
        order: 3,
        title: "실전 스킬 5개 — 복사해서 바로 쓰세요",
        description:
          "급여 계산, 취업규칙 검토, 판례 요약, 세금 계산, 계약서 검토. 직군별 실전 스킬 템플릿.",
        slug: "4-3",
        estimatedMinutes: 20,
        difficulty: "intermediate",
        tags: ["사례 분석", "실습", "자동화"],
        learningGoals: [
          "제공된 스킬 템플릿을 복사해서 자기 폴더에 설치할 수 있다",
          "템플릿을 자신의 업무에 맞게 수정할 수 있다",
          "$ARGUMENTS로 매번 다른 입력을 받는 스킬을 만들 수 있다",
        ],
      },
      {
        id: "4-4",
        phase: 4,
        order: 4,
        title: "스킬 공유하기 — 사무실 동료와 함께 쓰기",
        description:
          "만든 스킬을 동료에게 공유하는 방법. 폴더 복사, Git, 또는 마켓플레이스 활용.",
        slug: "4-4",
        estimatedMinutes: 10,
        difficulty: "intermediate",
        tags: ["도구 활용"],
        learningGoals: [
          "스킬 폴더를 동료에게 공유하는 방법을 안다",
          "프로젝트 레벨 vs 사용자 레벨 스킬의 차이를 이해한다",
          "팀 전체가 같은 스킬을 쓸 수 있게 설정할 수 있다",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Phase 5: 외부 도구 연결 — Gmail, 캘린더, Notion
  // ─────────────────────────────────────────────
  {
    id: 5,
    title: "외부 도구 연결 — Gmail, 캘린더, Notion",
    description:
      "Claude에게 눈과 손을 달아줍니다. 이메일 확인, 일정 관리, 브라우저 검색까지 Claude가 대신합니다.",
    lessons: [
      {
        id: "5-1",
        phase: 5,
        order: 1,
        title: "MCP란? — Claude에 눈과 손 달아주기",
        description:
          "MCP(Model Context Protocol)는 Claude를 외부 서비스에 연결하는 방법입니다. 레고 블록처럼 원하는 기능을 꽂으세요.",
        slug: "5-1",
        estimatedMinutes: 15,
        difficulty: "intermediate",
        tags: ["개념 이해"],
        learningGoals: [
          "MCP가 무엇이고 왜 필요한지 설명할 수 있다",
          "MCP 서버를 추가하는 기본 명령어를 안다",
          "Desktop App의 Connectors와 CLI의 차이를 이해한다",
        ],
      },
      {
        id: "5-2",
        phase: 5,
        order: 2,
        title: "Gmail 연동 — 이메일 확인과 초안 작성",
        description:
          "Claude가 받은 메일을 읽고 요약하고, 답장 초안을 작성합니다. 의뢰인 이메일 분류도 자동으로.",
        slug: "5-2",
        estimatedMinutes: 20,
        difficulty: "intermediate",
        tags: ["실습", "도구 활용", "자동화"],
        learningGoals: [
          "Gmail MCP 서버를 설정할 수 있다",
          "Claude에게 메일을 읽고 요약하게 할 수 있다",
          "메일 답장 초안을 Claude가 작성하게 할 수 있다",
        ],
      },
      {
        id: "5-3",
        phase: 5,
        order: 3,
        title: "캘린더 + Notion — 일정과 사건 관리",
        description:
          "Google Calendar의 일정을 확인하고, Notion 데이터베이스에 사건 기록을 관리합니다.",
        slug: "5-3",
        estimatedMinutes: 20,
        difficulty: "intermediate",
        tags: ["실습", "도구 활용", "자동화"],
        learningGoals: [
          "Google Calendar MCP를 설정하고 일정을 조회할 수 있다",
          "Notion MCP를 설정하고 데이터베이스를 조작할 수 있다",
          "여러 MCP를 조합한 워크플로우를 구성할 수 있다",
        ],
      },
      {
        id: "5-4",
        phase: 5,
        order: 4,
        title: "브라우저 연동 — 판례 검색, 법령 조회 자동화",
        description:
          "Claude가 브라우저를 직접 열어 웹사이트를 검색합니다. 판례 검색, 법령 조회, 정부 사이트 조회 등.",
        slug: "5-4",
        estimatedMinutes: 20,
        difficulty: "intermediate",
        tags: ["실습", "도구 활용", "사례 분석"],
        learningGoals: [
          "Chrome MCP 또는 Playwright MCP를 설정할 수 있다",
          "Claude에게 특정 웹사이트에서 정보를 검색시킬 수 있다",
          "검색 결과를 문서로 정리하게 할 수 있다",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Phase 6: 자동화와 고급 활용
  // ─────────────────────────────────────────────
  {
    id: 6,
    title: "자동화와 고급 활용",
    description:
      "정해진 시간에 자동 실행, 여러 파일 일괄 처리, 폰에서 원격 접속. 진짜 AI 비서처럼 쓰는 법.",
    lessons: [
      {
        id: "6-1",
        phase: 6,
        order: 1,
        title: "비대화형 모드 — 자동 실행의 기초",
        description:
          "claude -p '명령어'로 대화 없이 바로 실행. 배치 파일이나 스케줄러와 연결하면 완전 자동화.",
        slug: "6-1",
        estimatedMinutes: 15,
        difficulty: "advanced",
        tags: ["실습", "자동화"],
        learningGoals: [
          "claude -p 명령으로 비대화형 실행을 할 수 있다",
          "파이프(|)로 데이터를 Claude에 전달할 수 있다",
          "결과를 파일로 리다이렉트할 수 있다",
        ],
      },
      {
        id: "6-2",
        phase: 6,
        order: 2,
        title: "Desktop App 활용 — 스케줄, 커넥터, 미리보기",
        description:
          "Desktop App의 핵심 기능: 정해진 시간에 자동 실행(스케줄), GUI로 서비스 연결(커넥터), 결과 미리보기.",
        slug: "6-2",
        estimatedMinutes: 20,
        difficulty: "advanced",
        tags: ["실습", "도구 활용", "자동화"],
        learningGoals: [
          "Desktop App에서 스케줄 작업을 설정할 수 있다",
          "Connectors로 GUI 기반 서비스 연결을 할 수 있다",
          "매일 아침 브리핑 자동 생성 워크플로우를 구축할 수 있다",
        ],
      },
      {
        id: "6-3",
        phase: 6,
        order: 3,
        title: "원격 접속과 웹 — 폰에서도, 어디서든",
        description:
          "사무실 컴퓨터의 Claude Code에 폰으로 접속. 또는 claude.ai/code에서 클라우드로 실행.",
        slug: "6-3",
        estimatedMinutes: 15,
        difficulty: "advanced",
        tags: ["도구 활용"],
        learningGoals: [
          "Remote Control로 다른 기기에서 세션을 이어갈 수 있다",
          "Claude Code on Web의 장단점을 이해한다",
          "장시간 작업을 원격으로 모니터링할 수 있다",
        ],
      },
      {
        id: "6-4",
        phase: 6,
        order: 4,
        title: "전체 워크플로우 통합 — 나만의 AI 사무실",
        description:
          "CLAUDE.md + 스킬 + MCP + 스케줄을 조합해서, 출근하면 브리핑이 준비되어 있는 AI 사무실을 만듭니다.",
        slug: "6-4",
        estimatedMinutes: 25,
        difficulty: "advanced",
        tags: ["사례 분석", "자동화", "실습"],
        learningGoals: [
          "여러 기능을 조합한 통합 워크플로우를 설계할 수 있다",
          "아침 브리핑 자동화 시나리오를 구축할 수 있다",
          "자신의 업무에 맞는 AI 자동화 파이프라인을 계획할 수 있다",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // Phase 7: 실전 사례 — 이런 것까지 자동화했습니다
  // ─────────────────────────────────────────────
  {
    id: 7,
    title: "실전 사례 — 이런 것까지 자동화했습니다",
    description:
      "급여 관리, 판례 검색, 블로그 발행, 수임 자동화, 한글 문서 생성. 실제로 만들어서 쓰고 있는 자동화 시스템의 비하인드.",
    lessons: [
      {
        id: "7-1",
        phase: 7,
        order: 1,
        title: "급여 관리 스킬 — 30개 사업장 4대보험을 AI가 검증",
        description:
          "매달 30개 사업장의 급여를 처리할 때, Claude가 4대보험 계산 오류를 자동으로 잡아냅니다. CLAUDE.md에 업무 규칙을 넣으면 AI가 전문가처럼 검토합니다.",
        slug: "7-1",
        estimatedMinutes: 25,
        difficulty: "advanced" as const,
        tags: ["사례 분석", "실습", "자동화"],
        learningGoals: [
          "실무 규칙을 CLAUDE.md/스킬에 녹이는 방법을 이해한다",
          "4대보험 상한·하한 처리 등 도메인 규칙을 AI에 가르치는 법을 안다",
          "30개 사업장 규모의 반복 검증 자동화 사례를 참고할 수 있다",
        ],
      },
      {
        id: "7-2",
        phase: 7,
        order: 2,
        title: "Chrome 자동화 — 판례 검색 4탭 병렬 처리",
        description:
          "엘박스, 슈퍼로이어, BigCase를 Claude가 직접 열어서 검색합니다. 4개 탭을 동시에 돌리고, 결과를 마크다운으로 정리합니다.",
        slug: "7-2",
        estimatedMinutes: 25,
        difficulty: "advanced" as const,
        tags: ["사례 분석", "자동화", "도구 활용"],
        learningGoals: [
          "Chrome MCP로 법률 플랫폼을 자동 검색하는 워크플로우를 이해한다",
          "4탭 병렬 검색의 구조와 감사 로그 생성 방식을 안다",
          "AI 검색 결과의 할루시네이션 검증 방법을 안다",
        ],
      },
      {
        id: "7-3",
        phase: 7,
        order: 3,
        title: "블로그 자동 발행 — 글 쓰고 발행까지 한 번에",
        description:
          "마크다운으로 글을 쓰면 Claude가 티스토리에 자동 발행합니다. 시리즈 5편을 한 번에 올리는 배치 처리까지.",
        slug: "7-3",
        estimatedMinutes: 20,
        difficulty: "advanced" as const,
        tags: ["사례 분석", "자동화"],
        learningGoals: [
          "마크다운 → 블로그 자동 발행 파이프라인의 구조를 이해한다",
          "세션 유지와 배치 처리의 개념을 안다",
          "자신의 블로그에 적용할 수 있는 자동화 아이디어를 얻는다",
        ],
      },
      {
        id: "7-4",
        phase: 7,
        order: 4,
        title: "수임 자동화 GUI — 명함 사진 → 서류 5종 자동 생성",
        description:
          "거래처 명함을 사진 찍으면 OCR로 정보를 추출하고, 사무위탁서·수임신청서·위임장 등 5종을 한 번에 만듭니다.",
        slug: "7-4",
        estimatedMinutes: 25,
        difficulty: "advanced" as const,
        tags: ["사례 분석", "자동화", "도구 활용"],
        learningGoals: [
          "OCR + AI + 문서 생성을 결합한 자동화 사례를 이해한다",
          "Streamlit으로 비개발자도 쓸 수 있는 GUI를 만드는 개념을 안다",
          "템플릿 기반 문서 생성의 원리를 이해한다",
        ],
      },
      {
        id: "7-5",
        phase: 7,
        order: 5,
        title: "한글(HWPX) 자동 생성 — 의견서를 AI가 써서 한글 파일로",
        description:
          "Claude가 작성한 법률 의견서를 자동으로 한글(.hwpx) 파일로 변환합니다. 3단계 검증으로 깨진 파일이 나오지 않습니다.",
        slug: "7-5",
        estimatedMinutes: 25,
        difficulty: "advanced" as const,
        tags: ["사례 분석", "자동화", "도구 활용"],
        learningGoals: [
          "HWPX 파일 구조(ZIP + XML)를 이해한다",
          "마크다운 → HWPX 변환 파이프라인의 원리를 안다",
          "3단계 검증 게이트로 문서 품질을 보장하는 방법을 안다",
        ],
      },
    ],
  },
];

// 유틸리티 함수
export function getAllLessons(): Lesson[] {
  return phases.flatMap((p) => p.lessons);
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return getAllLessons().find((l) => l.slug === slug);
}

export function getPhaseByLessonId(lessonId: string): Phase | undefined {
  return phases.find((p) => p.lessons.some((l) => l.id === lessonId));
}

export function getAdjacentLessons(lessonId: string): {
  prev?: Lesson;
  next?: Lesson;
} {
  const all = getAllLessons();
  const idx = all.findIndex((l) => l.id === lessonId);
  return {
    prev: idx > 0 ? all[idx - 1] : undefined,
    next: idx < all.length - 1 ? all[idx + 1] : undefined,
  };
}

export function getTotalMinutes(): number {
  return getAllLessons().reduce((sum, l) => sum + l.estimatedMinutes, 0);
}
