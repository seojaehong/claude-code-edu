import { ReactNode } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { TryThis, Tip, Warning, KeyPoint, BeforeAfter } from "@/components/callouts";

// 각 강의의 실제 콘텐츠를 JSX로 정의합니다.
// MDX 전환 전까지 이 방식으로 콘텐츠를 관리합니다.

export const lessonContents: Record<string, ReactNode> = {
  // ─────────────────────────────────────────
  // 1-1: Claude Code란? — 3분 핵심 이해
  // ─────────────────────────────────────────
  "1-1": (
    <>
      <h2>Claude Code는 챗봇이 아닙니다</h2>
      <p>
        Claude.ai나 ChatGPT는 <strong>웹 브라우저에서 대화</strong>하는 도구입니다.
        파일을 하나씩 붙여넣고, 결과를 다시 복사해야 합니다.
      </p>
      <p>
        Claude Code는 다릅니다. <strong>내 컴퓨터에서 직접 일하는 AI</strong>입니다.
        터미널(명령 창)에서 실행하면, Claude가 내 폴더의 파일을 직접 읽고, 분석하고,
        새 파일을 만들어줍니다.
      </p>

      <BeforeAfter
        scenario="계약서 50건 검토"
        before="ChatGPT에 계약서를 하나씩 복사 붙여넣기. 50번 반복. 반나절 소요."
        after='Claude Code에 "이 폴더의 계약서 50건에서 위약금 조항을 찾아 비교표를 만들어줘" 한 마디. 5분 완료.'
        result="반나절 → 5분. 50배 빠르고 빠뜨리는 것도 없습니다."
      />

      <h2>핵심 차이: 파일 접근</h2>
      <p>가장 중요한 차이는 하나입니다.</p>

      <KeyPoint>
        <ul className="space-y-1">
          <li><strong>Claude.ai/ChatGPT</strong> — 내가 복사해서 줘야 읽을 수 있음</li>
          <li><strong>Claude Code</strong> — 내 컴퓨터 폴더를 직접 보고 파일을 읽고 씀</li>
        </ul>
        <p className="mt-2">
          이것 하나 때문에 전문직 업무가 완전히 달라집니다. 수십 개 문서를
          한꺼번에 분석하고, 결과를 파일로 바로 저장할 수 있으니까요.
        </p>
      </KeyPoint>

      <h2>전문직에게 왜 게임체인저인가</h2>
      <p>전문직은 <strong>문서를 다루는 직업</strong>입니다.</p>
      <ul>
        <li><strong>노무사</strong> — 취업규칙, 급여대장, 4대보험 신고서, 진정서</li>
        <li><strong>변호사</strong> — 계약서, 소장, 판례, 의견서</li>
        <li><strong>회계사</strong> — 재무제표, 감사보고서, 세무 신고</li>
        <li><strong>세무사</strong> — 원천징수, 부가세 신고, 세금 계산</li>
      </ul>
      <p>
        이 문서들을 하나하나 열어서 검토하고, 비교하고, 새로 작성하는 게 일상입니다.
        Claude Code는 이 과정을 <strong>한국어 한 문장</strong>으로 자동화합니다.
      </p>

      <h3>실제 사용 예시</h3>
      <CodeBlock language="bash" filename="terminal">
{`# 취업규칙에서 연차 관련 조항 찾기
claude "취업규칙.docx에서 연차휴가 관련 조항을 모두 찾아서 정리해줘"

# 급여대장 오류 검출
claude "이번 달 급여대장.xlsx에서 4대보험 계산 오류가 있는지 확인해줘"

# 계약서 비교 분석
claude "계약서_v1.pdf와 계약서_v2.pdf를 비교해서 변경된 조항을 표로 정리해줘"`}
      </CodeBlock>

      <Tip>
        <p>
          위 명령어는 실제로 동작하는 예시입니다.
          다음 강의에서 설치한 후 바로 따라해 볼 수 있습니다.
        </p>
      </Tip>

      <h2>걱정하지 마세요</h2>
      <p>
        "터미널"이라는 단어가 낯설어도 괜찮습니다. 다음 강의에서 3분이면 설치가 끝나고,
        그 다음부터는 <strong>한국어로 대화</strong>하는 것만으로 충분합니다.
      </p>

      <Warning>
        <p>
          Claude Code는 코딩 도구가 아닙니다. 코드를 짤 수도 있지만,
          우리는 <strong>업무 문서를 다루는 데</strong> 사용합니다.
          이 강의에서 코딩을 배우는 일은 없습니다.
        </p>
      </Warning>

      <TryThis>
        <p>
          아직 설치 전이니, 먼저 머릿속으로 생각해 보세요:
        </p>
        <ol className="list-decimal list-inside space-y-1 mt-2">
          <li>내 업무에서 <strong>반복적으로 하는 문서 작업</strong>이 뭐가 있을까?</li>
          <li>그 작업을 한국어 한 문장으로 설명한다면 어떻게 말할까?</li>
          <li>예: "매월 급여대장에서 4대보험 공제액이 맞는지 확인해줘"</li>
        </ol>
        <p className="mt-2">
          이 문장이 곧 Claude Code에 입력할 명령어가 됩니다.
        </p>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 1-2: 설치하기 — 복사 붙여넣기 3분
  // ─────────────────────────────────────────
  "1-2": (
    <>
      <h2>설치 전 체크리스트</h2>
      <p>Claude Code를 설치하려면 딱 두 가지가 필요합니다:</p>
      <ol>
        <li><strong>Anthropic 계정</strong> — claude.ai에서 가입 (Pro 플랜 $20/월 또는 Max 플랜)</li>
        <li><strong>터미널</strong> — 이미 컴퓨터에 있습니다. 여는 방법만 알면 됩니다.</li>
      </ol>

      <Tip>
        <p>
          <strong>요금 안내:</strong> Pro 플랜($20/월, 약 27,000원)이면 일반 업무에 충분합니다.
          하루 평균 15-20번 정도 대화할 수 있습니다.
          헤비 유저라면 Max 플랜($100/월)을 고려하세요.
        </p>
      </Tip>

      <h2>Step 1: 터미널 열기</h2>

      <h3>Windows 사용자</h3>
      <p>
        키보드에서 <code>Win + R</code>을 누르고, <code>powershell</code>을 입력하고 Enter.
        파란색 창이 열리면 성공입니다.
      </p>
      <CodeBlock language="text" filename="Windows 단축키">
{`Win + R → powershell → Enter

또는

시작 메뉴 → "PowerShell" 검색 → 클릭`}
      </CodeBlock>

      <h3>Mac 사용자</h3>
      <p>
        <code>Cmd + Space</code>를 누르고 "터미널"을 입력하고 Enter.
        흰색(또는 검은색) 창이 열리면 성공입니다.
      </p>
      <CodeBlock language="text" filename="Mac 단축키">
{`Cmd + Space → "터미널" 입력 → Enter

또는

Finder → 응용 프로그램 → 유틸리티 → 터미널`}
      </CodeBlock>

      <Warning>
        <p>
          <strong>터미널이 무섭다면:</strong> 터미널은 그냥 텍스트로 컴퓨터와 대화하는 창입니다.
          잘못 입력해도 컴퓨터가 고장나지 않습니다. 최악의 경우 "명령을 찾을 수 없습니다"라는
          메시지가 나올 뿐입니다. 언제든 창을 닫으면 됩니다.
        </p>
      </Warning>

      <h2>Step 2: Claude Code 설치</h2>
      <p>터미널에 아래 명령어를 <strong>복사해서 붙여넣기</strong>하세요. 딱 한 줄입니다.</p>

      <h3>Windows (PowerShell)</h3>
      <CodeBlock language="powershell" filename="PowerShell">
{`irm https://claude.ai/install.ps1 | iex`}
      </CodeBlock>

      <h3>Mac / Linux</h3>
      <CodeBlock language="bash" filename="Terminal">
{`curl -fsSL https://claude.ai/install.sh | bash`}
      </CodeBlock>

      <KeyPoint>
        <p>
          설치 명령어를 외울 필요 없습니다. 이 페이지에서 복사 버튼(📋)을 누르면 됩니다.
          설치는 보통 1-2분이면 완료됩니다.
        </p>
      </KeyPoint>

      <h2>Step 3: 설치 확인</h2>
      <p>설치가 끝나면, 아래 명령어로 확인합니다:</p>
      <CodeBlock language="bash" filename="terminal">
{`claude --version`}
      </CodeBlock>
      <p>
        <code>claude v2.x.x</code> 같은 버전 번호가 나오면 설치 성공입니다.
      </p>

      <h2>Step 4: 로그인</h2>
      <CodeBlock language="bash" filename="terminal">
{`claude`}
      </CodeBlock>
      <p>
        처음 실행하면 브라우저가 열리면서 로그인 화면이 나타납니다.
        claude.ai 계정으로 로그인하세요.
        "Choose your login method"가 나오면 <strong>Anthropic Console (Pro/Max)</strong>을 선택합니다.
      </p>

      <h2>문제가 생겼나요?</h2>

      <h3>"command not found" / "명령을 찾을 수 없습니다"</h3>
      <p>터미널을 껐다가 다시 열어보세요. 대부분 이것으로 해결됩니다.</p>
      <CodeBlock language="bash" filename="해결 방법">
{`# 터미널을 닫고 다시 열기
# 그래도 안 되면 아래 명령어 시도:

# Windows
npx @anthropic-ai/claude-code@latest

# Mac
sudo npm install -g @anthropic-ai/claude-code`}
      </CodeBlock>

      <h3>"Node.js가 필요합니다" 메시지가 나올 때</h3>
      <p>네이티브 설치기를 사용하면 Node.js가 필요 없습니다. 위의 설치 명령어를 다시 확인하세요.</p>

      <TryThis>
        <p>지금 바로 따라해 보세요:</p>
        <ol className="list-decimal list-inside space-y-1 mt-2">
          <li>터미널을 엽니다 (위의 방법 참고)</li>
          <li>설치 명령어를 복사해서 붙여넣습니다</li>
          <li><code>claude --version</code>으로 확인합니다</li>
          <li><code>claude</code>를 입력해서 로그인합니다</li>
        </ol>
        <p className="mt-2">
          <strong>축하합니다!</strong> 이제 Claude Code를 사용할 준비가 되었습니다.
          다음 강의에서 첫 번째 업무 파일을 분석해 봅시다.
        </p>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 1-3: 첫 대화 — 내 파일을 읽게 하기
  // ─────────────────────────────────────────
  "1-3": (
    <>
      <h2>업무 폴더에서 시작하기</h2>
      <p>
        Claude Code의 핵심은 <strong>내 업무 폴더에서 실행</strong>하는 것입니다.
        그래야 Claude가 폴더 안의 파일을 직접 읽을 수 있습니다.
      </p>

      <h3>업무 폴더로 이동하기</h3>
      <CodeBlock language="bash" filename="terminal">
{`# Windows — 예: 바탕화면의 "업무" 폴더
cd ~/Desktop/업무

# Mac — 예: 문서 폴더
cd ~/Documents/업무

# 현재 폴더에 뭐가 있는지 확인
ls`}
      </CodeBlock>

      <Tip>
        <p>
          <code>cd</code>는 "change directory"의 약자로, 폴더를 이동하는 명령어입니다.
          <code>ls</code>는 현재 폴더의 파일 목록을 보여줍니다.
          이 두 개만 알면 충분합니다.
        </p>
      </Tip>

      <h3>Claude Code 실행</h3>
      <CodeBlock language="bash" filename="terminal">
{`claude`}
      </CodeBlock>
      <p>
        이렇게 치면 대화 모드가 시작됩니다. 이제부터는 <strong>한국어로 대화</strong>하면 됩니다.
      </p>

      <h2>첫 번째 명령: 문서 요약</h2>
      <p>
        폴더에 문서 파일이 있다면, 아래처럼 요청해 보세요:
      </p>
      <CodeBlock language="text" filename="Claude Code 대화">
{`이 폴더에 있는 파일 목록을 보여줘`}
      </CodeBlock>
      <p>Claude가 폴더의 파일 목록을 보여줍니다. 그 중 하나를 골라서:</p>
      <CodeBlock language="text" filename="Claude Code 대화">
{`취업규칙.docx를 읽고 핵심 내용을 5줄로 요약해줘`}
      </CodeBlock>

      <KeyPoint>
        <p>
          Claude Code에 입력하는 건 프로그래밍 언어가 아닙니다.
          <strong>평소에 동료에게 말하듯이</strong> 한국어로 요청하면 됩니다.
          "이거 읽어봐", "여기서 이런 거 찾아줘", "이걸 표로 정리해줘" — 이런 식으로요.
        </p>
      </KeyPoint>

      <h2>@ 기호로 파일 지정하기</h2>
      <p>
        특정 파일을 정확하게 지정하고 싶을 때는 <code>@</code>를 사용합니다:
      </p>
      <CodeBlock language="text" filename="Claude Code 대화">
{`@취업규칙.docx 에서 연차휴가 관련 조항만 뽑아줘

@급여대장_2024.xlsx 에서 총 인건비를 계산해줘

@계약서_A.pdf 와 @계약서_B.pdf 를 비교해서 차이점을 알려줘`}
      </CodeBlock>

      <h2>결과를 파일로 저장하기</h2>
      <p>Claude의 분석 결과를 파일로 저장하고 싶다면:</p>
      <CodeBlock language="text" filename="Claude Code 대화">
{`방금 분석한 내용을 "연차조항_분석결과.md" 파일로 저장해줘`}
      </CodeBlock>
      <p>
        Claude가 직접 파일을 만들어줍니다. 폴더에서 확인할 수 있습니다.
      </p>

      <Warning>
        <p>
          Claude가 파일을 만들거나 수정할 때는 <strong>"Allow?"</strong>라고 물어봅니다.
          내용을 확인하고 <code>y</code>(yes)를 입력하면 실행됩니다.
          원하지 않으면 <code>n</code>(no)을 입력하면 됩니다. 안전합니다.
        </p>
      </Warning>

      <BeforeAfter
        scenario="취업규칙 연차 조항 검토"
        before="100페이지 취업규칙을 처음부터 읽으며 연차 관련 조항을 수동으로 찾음. 40분 소요."
        after='Claude Code에 "취업규칙에서 연차 관련 조항 찾아줘" 한 마디. 10초 완료.'
        result="40분 → 10초. 누락 없이 모든 관련 조항을 찾아냅니다."
      />

      <h2>대화 끝내기</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`/exit

또는 Ctrl + C`}
      </CodeBlock>

      <TryThis>
        <p>지금 바로 실습해 보세요:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            업무 폴더(문서가 있는 폴더)에서 터미널을 엽니다
            <CodeBlock language="bash">{`cd ~/Desktop/업무\nclaude`}</CodeBlock>
          </li>
          <li>
            "이 폴더에 뭐가 있어?"라고 물어봅니다
          </li>
          <li>
            아무 문서 하나를 골라 "이거 요약해줘"라고 요청합니다
          </li>
          <li>
            결과를 파일로 저장해 달라고 합니다
          </li>
        </ol>
        <p className="mt-2">
          파일이 없다면, 아무 텍스트 파일이라도 만들어서 시도해 보세요.
          메모장에 아무 내용이나 적고 저장한 뒤 Claude에게 읽어달라고 하면 됩니다.
        </p>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 1-4: 권한 모드 이해 — 안전하게 사용하기
  // ─────────────────────────────────────────
  "1-4": (
    <>
      <h2>Claude가 마음대로 하면 어쩌죠?</h2>
      <p>
        걱정 마세요. Claude Code에는 <strong>3가지 안전 모드</strong>가 있습니다.
        자동차의 기어처럼, 상황에 따라 바꿔가며 사용하면 됩니다.
      </p>

      <h2>세 가지 모드 한눈에 보기</h2>

      <h3>1. Ask 모드 (기본값) — "매번 물어봐"</h3>
      <p>
        Claude가 파일을 읽는 건 자유롭게 하지만, <strong>파일을 만들거나 수정할 때는
        반드시 허락</strong>을 구합니다. 처음 사용할 때 가장 안전한 모드입니다.
      </p>
      <CodeBlock language="text" filename="Ask 모드 동작 예시">
{`사용자: 취업규칙에서 연차 조항을 찾아서 별도 파일로 정리해줘

Claude: 취업규칙.docx에서 연차 관련 조항을 찾았습니다.
        "연차조항_정리.md" 파일을 생성하겠습니다.

        Allow? (y/n): _     ← 여기서 y 또는 n을 입력
`}
      </CodeBlock>

      <h3>2. Auto-accept 모드 — "알아서 해줘"</h3>
      <p>
        Claude가 파일 읽기, 쓰기, 명령 실행을 <strong>허락 없이 바로 수행</strong>합니다.
        신뢰할 수 있는 작업(예: 보고서 생성)에 적합합니다.
      </p>
      <CodeBlock language="bash" filename="terminal">
{`# Auto-accept 모드로 시작하기
claude --allowedTools "Edit,Write,Bash"

# 또는 대화 중에 모드 전환
# Shift + Tab을 눌러서 모드를 변경할 수 있습니다`}
      </CodeBlock>

      <h3>3. Plan 모드 — "계획만 세워줘"</h3>
      <p>
        Claude가 파일을 읽고 분석은 하지만, <strong>아무것도 변경하지 않습니다</strong>.
        "어떻게 하면 좋을지" 계획만 알려줍니다. 중요한 문서를 다룰 때 먼저 Plan 모드로
        확인하고, 괜찮으면 실행하는 방식이 안전합니다.
      </p>
      <CodeBlock language="text" filename="Plan 모드 사용">
{`# 대화 중 Shift + Tab으로 Plan 모드 전환

사용자: 급여대장의 4대보험 계산을 전부 다시 해줘

Claude: [Plan 모드] 수정하지 않고 계획만 알려드립니다.
        1. 급여대장.xlsx를 읽겠습니다
        2. 각 직원의 급여에서 4대보험료를 재계산합니다
        3. 기존 값과 비교해서 차이가 있는 항목을 표시합니다
        4. 수정된 급여대장을 새 파일로 저장합니다
        → 실행하려면 Ask 또는 Auto 모드로 전환하세요`}
      </CodeBlock>

      <BeforeAfter
        scenario="중요 문서 수정 작업"
        before="Auto 모드로 바로 실행 → 원본 파일이 변경됨 → 되돌리기 어려움"
        after="Plan 모드로 먼저 확인 → 계획이 맞으면 Ask 모드로 전환 → 하나씩 승인하며 실행"
        result="실수 없이 안전하게 작업. 원본 파일 보호."
      />

      <KeyPoint>
        <p>
          <strong>추천 사용법:</strong> 처음에는 Ask 모드(기본값)로 시작하세요.
          Claude가 물어볼 때마다 내용을 확인하면서 감을 익히면 됩니다.
          익숙해지면 반복적인 작업에 Auto-accept 모드를 사용하고,
          중요한 작업 전에는 Plan 모드로 먼저 확인하세요.
        </p>
      </KeyPoint>

      <h2>허용 도구 설정하기</h2>
      <p>
        특정 도구만 허용하고 싶을 때 <code>--allowedTools</code>를 사용합니다:
      </p>
      <CodeBlock language="bash" filename="terminal">
{`# 파일 읽기만 허용 (수정 불가)
claude --allowedTools "Read,Glob,Grep"

# 파일 읽기 + 쓰기 허용
claude --allowedTools "Read,Write,Edit"

# 모든 도구 허용 (Auto-accept와 유사)
claude --allowedTools "Read,Write,Edit,Bash,Glob,Grep"`}
      </CodeBlock>

      <Warning>
        <p>
          <strong>잘못되면 n 누르면 됩니다.</strong> Ask 모드에서 Claude가 "Allow?"라고
          물어볼 때 <code>n</code>을 입력하면 해당 작업이 취소됩니다.
          이미 실행된 작업도 Claude에게 "방금 한 거 되돌려줘"라고 하면 됩니다.
        </p>
      </Warning>

      <Tip>
        <p>
          <strong>Shift + Tab</strong>으로 대화 중에도 모드를 바꿀 수 있습니다.
          "이 부분은 계획만 보여줘" → Plan 모드,
          "이제 실행해줘" → Ask 모드. 자유롭게 전환하세요.
        </p>
      </Tip>

      <TryThis>
        <p>세 가지 모드를 직접 체험해 보세요:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            기본(Ask) 모드로 Claude를 시작합니다
            <CodeBlock language="bash">{`cd ~/Desktop/업무\nclaude`}</CodeBlock>
          </li>
          <li>"아무 파일 하나 요약해줘"라고 요청 — 파일 읽기는 바로 실행됩니다</li>
          <li>"결과를 파일로 저장해줘"라고 요청 — "Allow?" 질문이 나오면 <code>y</code> 입력</li>
          <li>Shift + Tab을 눌러 Plan 모드로 전환해 봅니다</li>
          <li>"이 폴더의 모든 파일을 분석해줘"라고 요청 — 계획만 보여주는 걸 확인</li>
        </ol>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 2-1: 문서 읽기 — 계약서, 취업규칙, 법령 분석
  // ─────────────────────────────────────────
  "2-1": (
    <>
      <h2>문서 분석, Claude Code의 진짜 힘</h2>
      <p>
        전문직의 핵심 업무는 문서를 읽고 분석하는 것입니다.
        Claude Code는 <strong>수십~수백 페이지 문서를 한 번에 읽고</strong>,
        원하는 정보를 정확하게 뽑아냅니다.
      </p>

      <h2>기본: 문서 읽기와 요약</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`# 문서 전체 요약
@취업규칙.docx 전체 내용을 10줄로 요약해줘

# 특정 주제 검색
@취업규칙.docx 에서 해고 관련 조항을 모두 찾아줘

# PDF 파일도 가능
@근로계약서.pdf 에서 수습 기간과 급여 조건을 정리해줘

# 텍스트 파일도 가능
@법령_근로기준법.txt 에서 연장근로 제한 규정을 찾아줘`}
      </CodeBlock>

      <h2>실전 1: 취업규칙 100페이지 검토</h2>
      <p>
        고객사에서 취업규칙을 보내왔습니다. 100페이지짜리입니다.
        근로기준법 위반 사항이 있는지 검토해야 합니다.
      </p>
      <CodeBlock language="text" filename="Claude Code 대화">
{`@취업규칙_A사.docx 를 근로기준법 기준으로 검토해줘.
특히 다음 항목을 중점적으로 봐줘:
1. 연차휴가 부여 기준이 법정 기준 이상인지
2. 해고 절차가 적법한지
3. 연장근로 관련 규정이 주 12시간을 초과하지 않는지
4. 임금 관련 규정에 차별 조항은 없는지

위반 가능성이 있는 조항은 조항 번호와 함께 표로 정리해줘.`}
      </CodeBlock>

      <BeforeAfter
        scenario="취업규칙 100페이지 법령 위반 검토"
        before="한 페이지씩 읽으며 근로기준법 조문과 대조. 3-4시간 소요. 일부 조항 누락 위험."
        after='Claude Code에 위 명령 한 번. 2-3분이면 모든 조항을 빠짐없이 검토.'
        result="3시간 → 3분. 누락 위험 제로. 검토 보고서까지 자동 생성."
      />

      <h2>실전 2: 여러 문서 비교 분석</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`@계약서_갑안.docx 와 @계약서_을안.docx 를 비교해서
변경된 조항을 표로 정리해줘.
각 변경 사항에 대해 갑(발주처)과 을(수급처) 중
누구에게 유리한 변경인지도 표시해줘.`}
      </CodeBlock>

      <h2>실전 3: 법령 조문 분석</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`@근로기준법.txt 에서 퇴직금 관련 조문을 모두 찾아줘.
각 조문에 대해:
1. 조문 번호와 원문
2. 핵심 내용 1줄 요약
3. 실무에서 자주 문제되는 포인트
를 정리해줘.`}
      </CodeBlock>

      <h2>실전 4: 폴더 전체 문서 일괄 분석</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`이 폴더에 있는 모든 .docx 파일을 읽고,
각 문서의 제목, 페이지 수, 핵심 내용 2줄을 표로 정리해줘.
결과를 "문서목록_요약.md" 파일로 저장해줘.`}
      </CodeBlock>

      <KeyPoint>
        <p>
          Claude Code는 .docx, .pdf, .txt, .hwp(한글)은 물론이고,
          .csv, .xlsx(엑셀) 파일도 읽을 수 있습니다.
          <strong>파일 형식을 구분할 필요 없이</strong> 그냥 "@파일명"으로 지정하면 됩니다.
        </p>
      </KeyPoint>

      <Tip>
        <p>
          문서가 너무 길어서 한 번에 분석이 어려울 때는,
          "1장~5장까지만 먼저 분석해줘"처럼 범위를 나눠서 요청할 수 있습니다.
        </p>
      </Tip>

      <TryThis>
        <p>실제 업무 문서로 실습해 보세요:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>업무 폴더에서 가장 긴 문서를 골라봅니다</li>
          <li>
            Claude Code에 요약을 요청합니다
            <CodeBlock language="bash">{`cd ~/Desktop/업무\nclaude`}</CodeBlock>
          </li>
          <li>"@문서명 전체 내용을 요약해줘"</li>
          <li>"여기서 [특정 키워드] 관련 내용만 뽑아줘"</li>
          <li>"결과를 파일로 저장해줘"</li>
        </ol>
        <p className="mt-2">
          직접 해보면, 몇 시간 걸리던 문서 검토가 몇 분이면 끝나는 걸 체감하실 겁니다.
        </p>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 2-2: 문서 작성 — 의견서, 보고서, 안내문 생성
  // ─────────────────────────────────────────
  "2-2": (
    <>
      <h2>읽기 다음은 쓰기</h2>
      <p>
        문서를 분석했으면, 이제 새 문서를 만들 차례입니다.
        Claude Code는 <strong>빈 파일에서 시작해 완성된 문서</strong>를 만들어줍니다.
        서식, 구조, 내용까지 한국어로 지시하면 됩니다.
      </p>

      <h2>기본: 문서 초안 생성</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`다음 내용으로 법률 의견서 초안을 작성해줘:
- 의뢰인: 홍길동 (A회사 근무)
- 쟁점: 부당해고 여부
- 사실관계: 2024년 3월 15일 해고 통보, 해고 사유서 미교부
- 형식: 제목, 사안의 개요, 쟁점 분석, 결론 순서

파일명: "의견서_홍길동_부당해고.md"로 저장해줘.`}
      </CodeBlock>

      <h2>실전 1: 기존 템플릿 활용</h2>
      <p>
        이미 만들어둔 템플릿이 있다면, Claude에게 그 형식을 따르라고 하면 됩니다:
      </p>
      <CodeBlock language="text" filename="Claude Code 대화">
{`@템플릿_의견서.docx 의 서식과 구조를 따라서
새로운 의견서를 작성해줘.

내용:
- 사건: 김철수 퇴직금 미지급
- 입사일: 2020.01.01, 퇴사일: 2024.06.30
- 월 급여: 350만원
- 쟁점: 퇴직금 산정 시 상여금 포함 여부

파일명: "의견서_김철수_퇴직금.md"로 저장.`}
      </CodeBlock>

      <h2>실전 2: 안내문 작성</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`고객사 직원들에게 보낼 연차 사용 촉진 안내문을 작성해줘.

조건:
- 수신: 전 직원
- 발신: 인사팀
- 내용: 잔여 연차 사용 촉진, 미사용 시 소멸 안내
- 근거 법령: 근로기준법 제61조
- 톤: 공손하지만 명확하게
- A4 1장 분량

"연차사용촉진_안내문.md"로 저장해줘.`}
      </CodeBlock>

      <h2>실전 3: 분석 결과를 보고서로</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`@급여대장_2024.xlsx 를 분석해서 다음 보고서를 만들어줘:

제목: "2024년 인건비 분석 보고서"
포함 항목:
1. 월별 총 인건비 추이
2. 부서별 인건비 비교
3. 4대보험 사용자 부담금 총액
4. 전년 대비 증감 (있으면)

표와 수치를 포함하고, "인건비_분석_2024.md"로 저장.`}
      </CodeBlock>

      <BeforeAfter
        scenario="의뢰인 의견서 초안 작성"
        before="빈 문서에서 시작. 서식 맞추고, 법령 찾고, 쟁점 정리. 2-3시간 소요."
        after='사실관계와 쟁점만 정리해서 Claude에게 전달. 5분이면 초안 완성.'
        result="2시간 → 5분. 초안 위에 전문가 검토만 추가하면 완성."
      />

      <KeyPoint>
        <p>
          Claude가 만든 문서는 <strong>초안</strong>입니다.
          전문가로서의 최종 검토와 수정은 반드시 필요합니다.
          하지만 빈 문서에서 시작하는 것과, 80% 완성된 초안에서 시작하는 것은
          하늘과 땅 차이입니다.
        </p>
      </KeyPoint>

      <Tip>
        <p>
          <strong>마크다운(.md) vs 워드(.docx)</strong>: Claude Code는 기본적으로
          마크다운 형식으로 파일을 만듭니다. 마크다운은 메모장에서도 읽을 수 있고,
          나중에 워드나 한글로 변환하기도 쉽습니다.
        </p>
      </Tip>

      <Warning>
        <p>
          의견서나 계약서 같은 법률 문서는 반드시 전문가가 검토하세요.
          Claude의 초안은 구조와 참고 법령을 빠르게 잡아주지만,
          <strong>최신 판례나 구체적 사실관계 판단</strong>은 전문가의 몫입니다.
        </p>
      </Warning>

      <TryThis>
        <p>직접 문서를 만들어 보세요:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Claude Code를 시작합니다</li>
          <li>
            간단한 안내문부터 시작합니다
            <CodeBlock language="text">{`직원들에게 보낼 연말정산 안내문을 만들어줘.
필요 서류 목록과 제출 기한을 포함해줘.
"연말정산_안내문.md"로 저장.`}</CodeBlock>
          </li>
          <li>생성된 파일을 열어서 내용을 확인합니다</li>
          <li>"두 번째 문단을 좀 더 공손하게 수정해줘" 같은 수정 요청도 해봅니다</li>
        </ol>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 2-3: 엑셀/CSV 분석 — 급여대장, 매출 데이터
  // ─────────────────────────────────────────
  "2-3": (
    <>
      <h2>엑셀 파일, 열지 않고 분석하기</h2>
      <p>
        급여대장, 매출 데이터, 거래 내역... 엑셀 파일을 열어서 하나하나 확인하는 대신,
        Claude Code에게 <strong>통째로 읽히고 분석</strong>시킬 수 있습니다.
      </p>

      <h2>기본: 엑셀/CSV 파일 읽기</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`# 엑셀 파일 내용 확인
@급여대장_2024.xlsx 내용을 보여줘

# CSV 파일 분석
@거래내역.csv 에서 총 거래 건수와 합계 금액을 알려줘

# 특정 시트 지정
@급여대장_2024.xlsx 의 "3월" 시트에서 총 인건비를 계산해줘`}
      </CodeBlock>

      <h2>실전 1: 급여 계산 오류 검출</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`@급여대장_3월.xlsx 에서 다음을 확인해줘:

1. 국민연금: 기준소득월액의 4.5%가 맞는지
2. 건강보험: 보수월액의 3.545%가 맞는지
3. 고용보험: 월급여의 0.9%가 맞는지
4. 소득세: 간이세액표 기준으로 맞는지

틀린 항목이 있으면 직원 이름, 항목, 현재값, 올바른 값을
표로 정리해줘.`}
      </CodeBlock>

      <BeforeAfter
        scenario="50명 급여대장 4대보험 검증"
        before="직원 50명의 4대보험을 하나씩 계산기로 검증. 2시간 소요. 눈 아픔."
        after='Claude Code에 위 명령 한 번. 1분이면 모든 오류 검출.'
        result="2시간 → 1분. 계산 실수 제로. 오류 목록 자동 정리."
      />

      <h2>실전 2: 데이터 통계 및 요약</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`@매출_2024.csv 에서 다음 분석을 해줘:

1. 월별 매출 합계와 추이
2. 상위 10개 거래처 (매출 기준)
3. 월 평균 매출과 표준편차
4. 전월 대비 증감률

결과를 "매출분석_2024.md"로 저장해줘.`}
      </CodeBlock>

      <h2>실전 3: 두 파일 비교</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`@급여대장_2월.xlsx 와 @급여대장_3월.xlsx 를 비교해서:
1. 신규 입사자 (3월에 추가된 사람)
2. 퇴사자 (2월에 있고 3월에 없는 사람)
3. 급여 변동자 (급여가 바뀐 사람, 변동 금액 포함)
를 정리해줘.`}
      </CodeBlock>

      <h2>실전 4: CSV 파일 직접 가공</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`@거래내역_원본.csv 에서:
1. "날짜" 열을 YYYY-MM-DD 형식으로 통일해줘
2. "금액" 열에서 음수인 행만 필터링해줘
3. 결과를 "환불_거래내역.csv" 새 파일로 저장해줘`}
      </CodeBlock>

      <KeyPoint>
        <p>
          Claude Code는 엑셀 파일을 <strong>직접 읽고 분석</strong>합니다.
          파이썬 코드를 짜거나 엑셀 함수를 알 필요가 없습니다.
          "이 엑셀에서 이런 걸 찾아줘"라고 한국어로 말하면 됩니다.
        </p>
      </KeyPoint>

      <Warning>
        <p>
          <strong>개인정보 주의:</strong> 급여대장에는 주민등록번호, 계좌번호 등
          개인정보가 포함되어 있습니다. Claude Code는 데이터를 Anthropic 서버로
          전송하므로, 회사 보안 정책을 확인하세요.
          필요하면 개인정보 열을 삭제한 사본으로 작업하세요.
        </p>
      </Warning>

      <TryThis>
        <p>엑셀 파일로 실습해 보세요:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>업무용 엑셀 파일(또는 아무 CSV 파일)을 준비합니다</li>
          <li>
            Claude Code를 시작하고 분석을 요청합니다
            <CodeBlock language="text">{`@파일명.xlsx 내용을 요약해줘.
총 몇 행이고, 각 열이 무엇인지 알려줘.`}</CodeBlock>
          </li>
          <li>"여기서 합계를 계산해줘" 또는 "오류를 찾아줘" 요청</li>
          <li>결과를 새 파일로 저장해 봅니다</li>
        </ol>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 2-4: 이미지 분석 — 스캔 문서, 캡처 화면
  // ─────────────────────────────────────────
  "2-4": (
    <>
      <h2>사진도 읽어줍니다</h2>
      <p>
        스캔한 문서, 스크린샷, 심지어 손으로 쓴 메모까지 —
        Claude Code는 <strong>이미지를 보고 내용을 이해</strong>할 수 있습니다.
        별도의 OCR 프로그램이 필요 없습니다.
      </p>

      <h2>이미지 전달하는 방법</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`# 방법 1: @ 기호로 이미지 파일 지정
@급여명세서_스캔.png 에서 텍스트를 추출해줘

# 방법 2: 스크린샷을 폴더에 넣고 분석
@캡처화면.jpg 에 보이는 오류 메시지가 뭔지 알려줘

# 방법 3: 여러 이미지 한꺼번에
@영수증1.jpg @영수증2.jpg @영수증3.jpg
세 장의 영수증 금액을 합산해줘`}
      </CodeBlock>

      <h2>실전 1: 스캔 문서 텍스트 추출</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`@근로계약서_스캔.jpg 에서 텍스트를 추출해줘.
특히 다음 항목을 정확하게 뽑아줘:
1. 근로자 이름
2. 계약 기간
3. 급여 금액
4. 근무 시간

추출한 내용을 표로 정리해줘.`}
      </CodeBlock>

      <h2>실전 2: 화면 캡처 분석</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`@4대보험_화면캡처.png 를 봐줘.
국민연금 EDI 화면인데, 신고 내역이 맞는지 확인해줘.
@급여대장_3월.xlsx 의 데이터와 비교해서
차이가 있는 항목을 알려줘.`}
      </CodeBlock>

      <h2>실전 3: 손글씨/메모 분석</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`@회의메모.jpg 손글씨 메모 사진이야.
내용을 텍스트로 옮기고, 핵심 결정사항을 정리해줘.
"회의록_정리.md" 파일로 저장해줘.`}
      </CodeBlock>

      <BeforeAfter
        scenario="스캔 계약서 30건 데이터 추출"
        before="스캔 이미지를 하나씩 열어서 수동으로 읽고 엑셀에 입력. 하루 종일."
        after='Claude Code에 "이 폴더의 스캔 파일에서 계약 조건을 추출해줘" 한 마디. 30분.'
        result="하루 → 30분. 타이핑 실수도 없음."
      />

      <KeyPoint>
        <p>
          Claude Code는 이미지를 <strong>직접 보고 이해</strong>합니다.
          텍스트뿐 아니라 표, 그래프, 도장, 서명 등도 인식합니다.
          다만 매우 흐리거나 해상도가 낮은 이미지는 정확도가 떨어질 수 있으니,
          가능하면 선명한 이미지를 사용하세요.
        </p>
      </KeyPoint>

      <Tip>
        <p>
          <strong>Windows에서 스크린샷 찍기:</strong> <code>Win + Shift + S</code>로
          화면 일부를 캡처할 수 있습니다. 캡처한 이미지를 업무 폴더에 저장한 뒤
          Claude Code에게 보여주면 됩니다.
        </p>
      </Tip>

      <TryThis>
        <p>이미지 분석을 직접 해보세요:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>아무 문서의 사진을 찍거나, 화면을 캡처합니다</li>
          <li>이미지 파일을 업무 폴더에 저장합니다</li>
          <li>
            Claude Code에서 분석을 요청합니다
            <CodeBlock language="text">{`@캡처화면.png 에 뭐가 보여? 내용을 정리해줘.`}</CodeBlock>
          </li>
          <li>추출된 텍스트가 정확한지 원본과 비교해 봅니다</li>
        </ol>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 3-1: CLAUDE.md 만들기 — 나만의 AI 비서 세팅
  // ─────────────────────────────────────────
  "3-1": (
    <>
      <h2>매번 같은 말 반복하기 지치셨죠?</h2>
      <p>
        Claude Code를 쓸 때마다 "나는 노무사야", "의견서는 이 형식으로 써줘",
        "숫자는 천 단위 콤마 넣어줘"를 반복하고 있진 않나요?
      </p>
      <p>
        <strong>CLAUDE.md</strong> 파일 하나 만들어두면, Claude가 매번
        알아서 기억합니다. 새 비서에게 업무 인수인계서를 주는 것과 같습니다.
      </p>

      <h2>CLAUDE.md란?</h2>
      <p>
        업무 폴더에 <code>CLAUDE.md</code>라는 이름의 파일을 만들어두면,
        Claude Code가 그 폴더에서 시작할 때 <strong>자동으로 읽고</strong> 내용을 따릅니다.
      </p>

      <KeyPoint>
        <p>
          CLAUDE.md = <strong>AI에게 주는 업무 매뉴얼</strong>입니다.
          "나는 누구고, 이 업무는 뭐고, 이렇게 해줘"를 적어두면
          매번 설명할 필요가 없어집니다.
        </p>
      </KeyPoint>

      <h2>Step 1: CLAUDE.md 파일 만들기</h2>
      <p>터미널에서 Claude Code를 실행하고, 직접 만들어달라고 하면 됩니다:</p>
      <CodeBlock language="text" filename="Claude Code 대화">
{`이 폴더에 CLAUDE.md 파일을 만들어줘.
내용은 다음과 같아:

# 업무 규칙

## 나는 누구인가
- 공인노무사 사무실 소속
- 주요 업무: 급여 관리, 4대보험, 취업규칙 검토, 노동 자문

## 문서 작성 규칙
- 의견서는 "사안의 개요 → 쟁점 분석 → 결론" 순서로 작성
- 날짜 형식: YYYY.MM.DD
- 금액 표시: 천 단위 콤마, 원 단위까지
- 법령 인용 시 조문 번호 반드시 명시

## 4대보험 요율 (2024년)
- 국민연금: 4.5% (근로자)
- 건강보험: 3.545% (근로자)
- 장기요양: 건강보험의 12.81%
- 고용보험: 0.9% (근로자)`}
      </CodeBlock>

      <h2>Step 2: 직접 파일로 만드는 방법</h2>
      <p>터미널 명령어로 직접 만들 수도 있습니다:</p>
      <CodeBlock language="bash" filename="terminal">
{`# 업무 폴더로 이동
cd ~/Desktop/업무

# CLAUDE.md 파일 확인 (이미 있는지)
ls CLAUDE.md

# Claude Code로 만들기 (가장 쉬운 방법)
claude "이 폴더에 CLAUDE.md 파일을 만들어줘. 내가 노무사라는 것과 기본 업무 규칙을 적어줘."`}
      </CodeBlock>

      <h2>실전 예시: 노무사 사무실 CLAUDE.md</h2>
      <CodeBlock language="markdown" filename="CLAUDE.md">
{`# 노무사 사무실 업무 규칙

## 역할
- 공인노무사 사무실의 AI 업무 보조
- 주요 고객사: 제조업, IT, 서비스업 중소기업

## 문서 작성 기준
- 의견서 구조: 사안의 개요 → 관련 법령 → 쟁점 분석 → 결론
- 안내문 톤: 공손하지만 명확하게
- 보고서: 표와 수치를 적극 활용

## 법령 기준
- 근로기준법, 근로자퇴직급여보장법, 고용보험법 등 최신 기준 적용
- 법령 인용 시 "근로기준법 제OO조 제O항" 형식

## 급여 계산 규칙
- 통상임금: 기본급 + 고정수당 (비고정적 수당 제외)
- 퇴직금: 30일분 이상의 평균임금
- 연장근로: 통상임금의 150%
- 야간근로(22시~06시): 통상임금의 150%
- 휴일근로: 통상임금의 150%

## 4대보험 요율 (2024년)
| 항목 | 근로자 | 사용자 |
|------|--------|--------|
| 국민연금 | 4.5% | 4.5% |
| 건강보험 | 3.545% | 3.545% |
| 장기요양 | 건강보험의 12.81% | 건강보험의 12.81% |
| 고용보험 | 0.9% | 0.9~1.65% |
| 산재보험 | - | 업종별 상이 |

## 주의사항
- 금액 계산은 원 단위까지 정확하게
- 법령 변경 시 반드시 최신 기준 확인
- 개인정보(주민번호, 계좌번호) 포함 파일 취급 주의`}
      </CodeBlock>

      <BeforeAfter
        scenario="매일 아침 Claude Code 시작"
        before="매번 '나는 노무사야, 의견서는 이 형식으로...' 설명. 첫 5분 낭비."
        after="CLAUDE.md가 있으니 시작하자마자 바로 업무 시작. Claude가 규칙을 이미 알고 있음."
        result="매일 5분 절약. 한 달이면 2시간. 실수도 줄어듦."
      />

      <h2>CLAUDE.md가 적용되는 범위</h2>
      <CodeBlock language="text" filename="폴더 구조">
{`업무/
├── CLAUDE.md          ← 이 폴더에서 claude 실행 시 자동 적용
├── 급여/
│   ├── CLAUDE.md      ← 급여 폴더에서 실행 시 이것도 함께 적용
│   └── 급여대장.xlsx
├── 취업규칙/
│   └── 취업규칙_A사.docx
└── 계약서/
    └── 계약서_v1.pdf`}
      </CodeBlock>

      <Tip>
        <p>
          하위 폴더에도 CLAUDE.md를 만들 수 있습니다.
          상위 폴더의 CLAUDE.md와 하위 폴더의 CLAUDE.md가 모두 적용됩니다.
          예: "업무/CLAUDE.md"는 공통 규칙, "업무/급여/CLAUDE.md"는 급여 전용 규칙.
        </p>
      </Tip>

      <Warning>
        <p>
          CLAUDE.md에 <strong>비밀번호나 API 키</strong>를 적지 마세요.
          Claude Code가 읽는 파일이므로, 업무 규칙과 형식 지정만 적는 것이 안전합니다.
        </p>
      </Warning>

      <TryThis>
        <p>지금 바로 CLAUDE.md를 만들어 보세요:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            업무 폴더에서 Claude Code를 시작합니다
            <CodeBlock language="bash">{`cd ~/Desktop/업무\nclaude`}</CodeBlock>
          </li>
          <li>"CLAUDE.md 파일을 만들어줘"라고 요청합니다</li>
          <li>위의 노무사 예시를 참고해서 자신의 직업과 업무 규칙을 알려줍니다</li>
          <li>Claude Code를 종료(<code>/exit</code>)했다가 다시 시작해봅니다</li>
          <li>"내 업무 규칙이 뭐야?"라고 물어보면 CLAUDE.md 내용을 답합니다</li>
        </ol>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 3-2: 실전 CLAUDE.md — 직군별 템플릿
  // ─────────────────────────────────────────
  "3-2": (
    <>
      <h2>복사해서 바로 쓰는 CLAUDE.md</h2>
      <p>
        각 직군에 맞는 CLAUDE.md 템플릿을 준비했습니다.
        자신의 직업에 맞는 템플릿을 <strong>복사해서 업무 폴더에 저장</strong>하면 됩니다.
        필요한 부분만 수정하세요.
      </p>

      <h2>1. 노무사 CLAUDE.md</h2>
      <CodeBlock language="markdown" filename="CLAUDE.md (노무사)">
{`# 공인노무사 업무 규칙

## 역할
- 공인노무사 사무실 AI 보조
- 업무 영역: 급여 관리, 4대보험, 취업규칙, 노동사건 자문

## 문서 작성 기준
- 의견서: 사안의 개요 → 관련 법령 → 쟁점 분석 → 결론
- 안내문: 공손하지만 명확한 톤
- 날짜: YYYY.MM.DD / 금액: #,##0원

## 급여 계산
- 통상임금 = 기본급 + 고정수당
- 퇴직금 = 30일분 이상 평균임금
- 연장/야간/휴일: 통상임금의 150%

## 4대보험 (2024)
- 국민연금 4.5% / 건강보험 3.545% / 장기요양 12.81%
- 고용보험 0.9% / 산재보험 업종별

## 주의사항
- 법령 인용 시 조문 번호 필수
- 개인정보 파일 취급 주의`}
      </CodeBlock>

      <h2>2. 변호사 CLAUDE.md</h2>
      <CodeBlock language="markdown" filename="CLAUDE.md (변호사)">
{`# 법률사무소 업무 규칙

## 역할
- 법률사무소 AI 리서치 보조
- 업무 영역: 민사/형사 소송, 계약서 검토, 법률 의견서

## 문서 작성 기준
- 소장: 청구취지 → 청구원인 → 입증방법 → 첨부서류
- 준비서면: 사실관계 → 법리 → 주장 요지
- 의견서: 질의 요지 → 관련 법령 → 판례 검토 → 결론
- 판례 인용: "대법원 YYYY. MM. DD. 선고 XXXX다XXXXX 판결"

## 법령 검색 우선순위
1. 현행 법령 (법제처 기준)
2. 대법원 판례
3. 하급심 판례
4. 학설/문헌

## 주의사항
- 판례 번호는 반드시 정확하게 인용
- "~할 수 있다"와 "~해야 한다"를 구분하여 사용
- 의뢰인에게 불리한 쟁점도 반드시 언급`}
      </CodeBlock>

      <h2>3. 회계사 CLAUDE.md</h2>
      <CodeBlock language="markdown" filename="CLAUDE.md (회계사)">
{`# 회계법인 업무 규칙

## 역할
- 회계법인 AI 분석 보조
- 업무 영역: 재무제표 분석, 감사, 세무 자문

## 문서 작성 기준
- 감사보고서: K-IFRS 기준, 적정/한정/부적정/의견거절
- 재무분석: 유동비율, 부채비율, ROE, ROA 등 핵심 지표 포함
- 금액 표시: 천원 단위, 억원 단위 구분 명확히

## 계정과목 기준
- 한국채택국제회계기준(K-IFRS) 적용
- 일반기업회계기준은 별도 명시 시 적용

## 핵심 체크포인트
- 전기 대비 20% 이상 변동 항목 자동 플래그
- 특수관계자 거래 별도 표시
- 주석 사항 누락 여부 확인

## 주의사항
- 금액 계산 시 원 단위까지 검증
- 회계 기준 변경 사항 반영 여부 확인`}
      </CodeBlock>

      <h2>4. 세무사 CLAUDE.md</h2>
      <CodeBlock language="markdown" filename="CLAUDE.md (세무사)">
{`# 세무사 사무실 업무 규칙

## 역할
- 세무사 사무실 AI 보조
- 업무 영역: 종합소득세, 부가가치세, 법인세, 원천징수

## 문서 작성 기준
- 세무 의견서: 쟁점 → 관련 세법 → 유권해석/판례 → 결론
- 신고서 검토: 체크리스트 형태로 항목별 확인

## 세율 기준 (2024)
### 종합소득세
- 1,400만 이하: 6% / ~5,000만: 15% / ~8,800만: 24%
- ~1.5억: 35% / ~3억: 38% / ~5억: 40% / ~10억: 42% / 10억 초과: 45%

### 부가가치세
- 일반과세: 10%
- 간이과세: 업종별 1.5~4%

## 주요 체크포인트
- 세금계산서 적격 여부
- 필요경비 인정 범위
- 가산세 적용 여부
- 신고/납부 기한 준수

## 주의사항
- 세법 개정 시 경과규정 확인
- 금액 계산은 원 단위, 세액은 10원 미만 절사`}
      </CodeBlock>

      <h2>5. 의사/병원 CLAUDE.md</h2>
      <CodeBlock language="markdown" filename="CLAUDE.md (의사/병원)">
{`# 병원 행정 업무 규칙

## 역할
- 병원 행정 AI 보조
- 업무 영역: 진료비 청구, 보험 심사, 행정 문서, 통계

## 문서 작성 기준
- 진단서: 의학 용어 + 한글 병기
- 소견서: 객관적 소견 → 진단 → 향후 치료 계획
- 회신서: 질의 내용 → 의학적 소견 → 결론

## 보험 청구 기준
- 건강보험 요양급여 기준 적용
- 비급여 항목 별도 명시
- 진료코드(KCD) 정확히 기재

## 통계 분석
- 월별 진료 건수, 진료비, 내원 환자 수
- 진료과별/질환별 통계
- 전월 대비, 전년 동월 대비 비교

## 주의사항
- 환자 개인정보 보호 (의료법 준수)
- 의학적 판단은 담당 의사의 최종 확인 필수`}
      </CodeBlock>

      <KeyPoint>
        <p>
          이 템플릿들은 <strong>시작점</strong>입니다.
          자신의 실제 업무 방식에 맞게 수정하세요.
          특히 자주 쓰는 서식, 자주 참조하는 법령, 고객사 특이사항 등을
          추가하면 Claude가 더 정확하게 도와줍니다.
        </p>
      </KeyPoint>

      <BeforeAfter
        scenario="CLAUDE.md 없이 vs 있을 때"
        before='"의견서 써줘" → Claude가 일반적인 형식으로 작성. 매번 수정 필요.'
        after='"의견서 써줘" → CLAUDE.md의 규칙대로 내 사무실 형식에 맞춰 작성. 바로 사용 가능.'
        result="수정 시간 80% 감소. 일관된 품질 유지."
      />

      <TryThis>
        <p>자신에게 맞는 템플릿을 설치해 보세요:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>위 템플릿 중 자신의 직업에 가장 가까운 것을 선택합니다</li>
          <li>복사 버튼을 누릅니다</li>
          <li>
            Claude Code에서 파일을 만듭니다
            <CodeBlock language="text">{`다음 내용으로 CLAUDE.md 파일을 만들어줘:
(복사한 내용을 붙여넣기)`}</CodeBlock>
          </li>
          <li>자신의 업무에 맞게 내용을 수정합니다</li>
          <li>Claude Code를 재시작하고 "내 업무 규칙이 뭐야?"라고 테스트합니다</li>
        </ol>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 3-3: Auto Memory — Claude가 알아서 기억하는 것
  // ─────────────────────────────────────────
  "3-3": (
    <>
      <h2>CLAUDE.md는 내가 적고, Memory는 Claude가 적습니다</h2>
      <p>
        CLAUDE.md는 내가 직접 작성하는 업무 매뉴얼입니다.
        <strong>Auto Memory</strong>는 Claude가 대화 중에 배운 것을
        스스로 기억해두는 기능입니다.
      </p>
      <p>
        예를 들어 "앞으로 보고서에 날짜를 꼭 넣어줘"라고 한 번 말하면,
        Claude가 그걸 기억하고 다음 세션에서도 적용합니다.
      </p>

      <h2>Memory 확인하기</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`# 현재 저장된 기억 보기
/memory`}
      </CodeBlock>
      <p>
        <code>/memory</code> 명령을 입력하면, Claude가 지금까지 기억하고 있는
        내용이 표시됩니다. 이 내용은 <code>~/.claude/CLAUDE.md</code> 파일에 저장됩니다.
      </p>

      <h2>Memory가 저장되는 곳</h2>
      <CodeBlock language="text" filename="Memory 저장 위치">
{`# 사용자 레벨 (모든 프로젝트에 적용)
~/.claude/CLAUDE.md

# 프로젝트 레벨 (해당 폴더에서만 적용)
~/Desktop/업무/CLAUDE.md          ← 내가 직접 만든 것
~/Desktop/업무/.claude/CLAUDE.md  ← Claude가 자동으로 추가한 것`}
      </CodeBlock>

      <h2>Memory 추가하기</h2>
      <p>대화 중에 자연스럽게 기억시킬 수 있습니다:</p>
      <CodeBlock language="text" filename="Claude Code 대화">
{`# 방법 1: 직접 기억시키기
앞으로 의견서 작성할 때 항상 "이상 끝." 으로 마무리해줘. 이거 기억해둬.

# 방법 2: 선호도 표현
나는 표를 좋아해. 분석 결과는 항상 표로 정리해줘.

# 방법 3: 업무 맥락 알려주기
우리 사무실 주요 고객사는 A전자, B물류, C건설이야.
고객사 이름이 나오면 알아서 매칭해줘.`}
      </CodeBlock>

      <h3>Memory 편집하기</h3>
      <CodeBlock language="bash" filename="terminal">
{`# 사용자 레벨 메모리 직접 편집
# Windows
notepad ~/.claude/CLAUDE.md

# Mac
open ~/.claude/CLAUDE.md`}
      </CodeBlock>

      <KeyPoint>
        <p>
          <strong>CLAUDE.md vs Auto Memory 차이:</strong>
        </p>
        <ul className="space-y-1 mt-2">
          <li><strong>CLAUDE.md</strong> — 내가 직접 작성. 체계적인 업무 규칙. 프로젝트 폴더에 위치.</li>
          <li><strong>Auto Memory</strong> — Claude가 대화 중 학습. 선호도, 습관 등. 자동 저장.</li>
          <li><strong>함께 사용</strong>하면 가장 효과적입니다. CLAUDE.md로 큰 규칙을 잡고, Memory로 세부 선호를 쌓아가세요.</li>
        </ul>
      </KeyPoint>

      <BeforeAfter
        scenario="Claude에게 선호도 반영"
        before='매번 "표로 정리해줘", "날짜 넣어줘", "한글로 써줘" 반복. 매 대화마다 3-4번.'
        after="한 번만 말하면 Claude가 기억. 다음 세션부터 자동 적용."
        result="반복 지시 제로. 점점 더 나를 잘 아는 AI가 됨."
      />

      <Warning>
        <p>
          Auto Memory에 잘못된 정보가 저장될 수 있습니다.
          가끔 <code>/memory</code>로 확인하고, 틀린 내용이 있으면
          직접 파일을 열어서 수정하세요.
        </p>
      </Warning>

      <TryThis>
        <p>Memory 기능을 직접 체험해 보세요:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            Claude Code를 시작합니다
            <CodeBlock language="bash">{`claude`}</CodeBlock>
          </li>
          <li><code>/memory</code>를 입력해서 현재 기억을 확인합니다</li>
          <li>"앞으로 분석 결과는 항상 표로 정리해줘. 기억해둬."라고 말합니다</li>
          <li>Claude Code를 종료하고 다시 시작합니다</li>
          <li>아무 분석을 요청해봅니다 — 표로 정리하는지 확인!</li>
        </ol>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 4-1: 스킬이란? — /명령어 하나로 복잡한 작업을
  // ─────────────────────────────────────────
  "4-1": (
    <>
      <h2>매번 같은 지시를 반복하고 있다면</h2>
      <p>
        "취업규칙 검토해줘. 근로기준법 기준으로. 연차, 해고, 임금 부분 중심으로.
        표로 정리해줘. 위반 가능성 있는 거 표시해줘."
      </p>
      <p>
        이런 긴 지시를 매번 입력하고 있지 않나요?
        <strong>스킬</strong>을 만들면 <code>/취업규칙검토</code> 한 단어로 끝납니다.
      </p>

      <h2>스킬 = 저장된 지시사항</h2>
      <p>
        사무실에 비유하면, 스킬은 <strong>업무 절차서</strong>입니다.
        신입 직원에게 "이 절차서대로 해"라고 하듯이,
        Claude에게 "이 스킬대로 해"라고 하는 겁니다.
      </p>

      <KeyPoint>
        <p>
          스킬은 <strong>코딩이 아닙니다</strong>.
          마크다운 파일에 한국어로 "이렇게 해줘"라고 적으면 끝입니다.
          프로그래밍을 전혀 몰라도 만들 수 있습니다.
        </p>
      </KeyPoint>

      <h2>빌트인 스킬 사용해 보기</h2>
      <p>Claude Code에는 기본 스킬이 내장되어 있습니다:</p>
      <CodeBlock language="text" filename="Claude Code 대화">
{`# 파일 변경 사항을 Git에 저장 (개발자용)
/commit

# 코드 리뷰 (개발자용)
/review-pr

# 초기화 — 프로젝트에 맞는 CLAUDE.md 자동 생성
/init`}
      </CodeBlock>

      <h2>스킬 파일의 구조</h2>
      <p>스킬은 <code>.claude/skills/</code> 폴더 안에 마크다운 파일로 저장됩니다:</p>
      <CodeBlock language="text" filename="폴더 구조">
{`업무/
├── CLAUDE.md
└── .claude/
    └── skills/
        ├── 취업규칙검토.md    → /취업규칙검토
        ├── 급여계산.md        → /급여계산
        └── 의견서작성.md      → /의견서작성`}
      </CodeBlock>

      <h3>스킬 파일 기본 형태</h3>
      <CodeBlock language="markdown" filename=".claude/skills/문서요약.md">
{`---
name: 문서요약
description: 문서를 읽고 핵심 내용을 요약합니다
---

# 문서 요약 스킬

## 실행 절차
1. $ARGUMENTS 에 지정된 파일을 읽습니다
2. 핵심 내용을 5줄 이내로 요약합니다
3. 주요 키워드를 뽑아 태그로 정리합니다
4. 결과를 "요약_[원본파일명].md" 로 저장합니다

## 출력 형식
- 제목: 원본 문서 제목
- 요약: 5줄 이내
- 키워드: #태그 형태
- 중요도: 상/중/하`}
      </CodeBlock>

      <Tip>
        <p>
          <code>$ARGUMENTS</code>는 스킬 실행 시 뒤에 붙이는 추가 정보입니다.
          예: <code>/문서요약 취업규칙.docx</code>에서 "취업규칙.docx"가 $ARGUMENTS에 들어갑니다.
        </p>
      </Tip>

      <BeforeAfter
        scenario="취업규칙 검토 요청"
        before='"취업규칙 검토해줘. 근로기준법 기준으로. 연차, 해고, 임금..." 매번 긴 지시문 입력.'
        after="/취업규칙검토 취업규칙_A사.docx — 한 줄이면 끝."
        result="입력 시간 90% 감소. 매번 동일한 품질의 검토 결과."
      />

      <TryThis>
        <p>스킬의 개념을 체험해 보세요:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            Claude Code에서 빌트인 스킬을 실행합니다
            <CodeBlock language="text">{`/init`}</CodeBlock>
          </li>
          <li>Claude가 자동으로 CLAUDE.md를 생성하는 과정을 봅니다</li>
          <li>
            다음 강의에서 나만의 스킬을 직접 만들어 봅니다
          </li>
        </ol>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 4-2: 첫 스킬 만들기 — /요약, /검토, /보고서
  // ─────────────────────────────────────────
  "4-2": (
    <>
      <h2>나만의 스킬, 5분이면 만듭니다</h2>
      <p>
        스킬을 만드는 건 정말 간단합니다.
        폴더를 만들고, 마크다운 파일 하나를 작성하면 끝입니다.
      </p>

      <h2>Step 1: 스킬 폴더 만들기</h2>
      <CodeBlock language="bash" filename="terminal">
{`# 업무 폴더로 이동
cd ~/Desktop/업무

# .claude/skills 폴더 만들기
mkdir -p .claude/skills

# 폴더 확인
ls .claude/skills/`}
      </CodeBlock>

      <h2>Step 2: 스킬 파일 작성하기</h2>
      <p>Claude Code에게 만들어달라고 하는 게 가장 쉽습니다:</p>
      <CodeBlock language="text" filename="Claude Code 대화">
{`다음 스킬 파일을 만들어줘:

파일 경로: .claude/skills/문서요약.md

내용:
---
name: 문서요약
description: 문서를 읽고 핵심을 요약합니다
---

# 문서 요약

## 할 일
1. $ARGUMENTS 에 지정된 파일을 읽어
2. 전체 내용을 5줄로 요약해
3. 핵심 키워드 5개를 뽑아
4. "요약_[파일명].md" 로 저장해

## 출력 형식
### [문서 제목]
**요약:** (5줄)
**키워드:** #태그1 #태그2 ...
**페이지 수:** N페이지
**작성일:** YYYY.MM.DD`}
      </CodeBlock>

      <h2>Step 3: 스킬 실행하기</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`# 만든 스킬 실행
/문서요약 취업규칙.docx

# 다른 파일에도 바로 적용
/문서요약 계약서_v1.pdf

# 여러 파일에 순서대로 적용
/문서요약 보고서_1월.docx`}
      </CodeBlock>

      <h2>실전 스킬 예제: /검토</h2>
      <CodeBlock language="markdown" filename=".claude/skills/검토.md">
{`---
name: 검토
description: 문서를 법적 관점에서 검토합니다
---

# 법적 검토 스킬

## 할 일
1. $ARGUMENTS 파일을 읽어
2. 다음 관점에서 검토해:
   - 법령 위반 가능성
   - 불명확한 표현
   - 누락된 필수 조항
   - 불리한 조건
3. 각 이슈에 대해:
   - 위치 (조항 번호)
   - 문제점
   - 관련 법령
   - 수정 제안
4. 결과를 "검토_[파일명].md" 로 저장

## 심각도 분류
- 🔴 즉시 수정 필요 (법 위반)
- 🟡 수정 권장 (리스크 있음)
- 🟢 참고 사항 (개선하면 좋음)`}
      </CodeBlock>

      <h2>실전 스킬 예제: /보고서</h2>
      <CodeBlock language="markdown" filename=".claude/skills/보고서.md">
{`---
name: 보고서
description: 데이터를 분석해서 보고서를 생성합니다
---

# 보고서 생성 스킬

## 할 일
1. $ARGUMENTS 파일을 읽어
2. 데이터를 분석해서 다음 보고서를 작성해:

## 보고서 구조
### 1. 요약 (Executive Summary)
- 핵심 수치 3개
- 주요 발견 사항

### 2. 상세 분석
- 항목별 분석 (표 활용)
- 전기 대비 증감

### 3. 이슈 및 조치 필요 사항
- 이상값 또는 오류
- 권장 조치

### 4. 첨부
- 원본 데이터 출처
- 분석 기준

결과를 "보고서_[파일명]_[날짜].md" 로 저장해.`}
      </CodeBlock>

      <BeforeAfter
        scenario="주간 업무 보고서 작성"
        before="매주 같은 형식의 보고서를 처음부터 작성. 형식 맞추는 데만 30분."
        after="/보고서 주간데이터.xlsx — 1분이면 형식 완벽한 보고서 완성."
        result="30분 → 1분. 형식은 항상 일관적. 내용 검토에만 집중."
      />

      <KeyPoint>
        <p>
          스킬의 핵심은 <strong>반복되는 패턴을 저장</strong>하는 것입니다.
          "매번 같은 방식으로 하는 일"이 있다면, 그게 스킬로 만들 후보입니다.
        </p>
      </KeyPoint>

      <Warning>
        <p>
          스킬 파일에서 <code>---</code> 사이의 name과 description은
          <strong>슬래시 명령어 이름</strong>과 설명이 됩니다.
          name에 공백이나 특수문자는 넣지 마세요.
        </p>
      </Warning>

      <TryThis>
        <p>첫 번째 스킬을 직접 만들어 보세요:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            스킬 폴더를 만듭니다
            <CodeBlock language="bash">{`cd ~/Desktop/업무\nmkdir -p .claude/skills`}</CodeBlock>
          </li>
          <li>Claude Code를 시작합니다</li>
          <li>위의 /문서요약 스킬 내용을 복사해서 "이 스킬을 만들어줘"라고 요청합니다</li>
          <li><code>/문서요약 아무파일.docx</code>로 실행해 봅니다</li>
          <li>결과가 마음에 들지 않으면 스킬 파일을 수정합니다</li>
        </ol>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 4-3: 실전 스킬 5개 — 복사해서 바로 쓰세요
  // ─────────────────────────────────────────
  "4-3": (
    <>
      <h2>바로 쓸 수 있는 실전 스킬 5개</h2>
      <p>
        각 스킬을 <strong>복사해서 <code>.claude/skills/</code> 폴더에 저장</strong>하면
        바로 사용할 수 있습니다. 자신의 업무에 맞게 수정하세요.
      </p>

      <h2>1. /급여계산 — 급여 명세서 자동 생성</h2>
      <CodeBlock language="markdown" filename=".claude/skills/급여계산.md">
{`---
name: 급여계산
description: 기본 정보로 급여를 계산하고 명세서를 생성합니다
---

# 급여 계산 스킬

## 입력
$ARGUMENTS 에서 다음 정보를 확인:
- 이름, 기본급, 고정수당, 연장근로시간, 부양가족 수

또는 파일이 지정되면 해당 파일에서 정보를 읽어.

## 계산 절차
1. **통상시급** = (기본급 + 고정수당) / 209시간
2. **연장수당** = 통상시급 x 1.5 x 연장근로시간
3. **총 지급액** = 기본급 + 고정수당 + 연장수당

### 4대보험 공제
4. 국민연금 = 총 지급액 x 4.5% (10원 미만 절사)
5. 건강보험 = 총 지급액 x 3.545% (10원 미만 절사)
6. 장기요양 = 건강보험 x 12.81% (10원 미만 절사)
7. 고용보험 = 총 지급액 x 0.9% (10원 미만 절사)

### 소득세
8. 근로소득 간이세액표 기준으로 소득세 계산
9. 지방소득세 = 소득세 x 10%

### 실지급액
10. 실지급액 = 총 지급액 - 4대보험 - 소득세 - 지방소득세

## 출력
결과를 표로 정리하고 "급여명세서_[이름]_[월].md" 로 저장.`}
      </CodeBlock>

      <h2>2. /취업규칙검토 — 법 위반 자동 체크</h2>
      <CodeBlock language="markdown" filename=".claude/skills/취업규칙검토.md">
{`---
name: 취업규칙검토
description: 취업규칙을 근로기준법 기준으로 검토합니다
---

# 취업규칙 검토 스킬

## 할 일
$ARGUMENTS 파일(취업규칙)을 읽고 아래 항목을 검토해.

## 검토 항목
1. **근로시간** — 주 40시간, 연장 12시간 한도 준수 여부
2. **휴일/휴가** — 주휴일, 연차 부여 기준, 생리휴가, 출산휴가
3. **임금** — 최저임금 이상, 통상임금 산정, 퇴직금 규정
4. **해고** — 정당한 사유, 30일 전 해고예고, 해고사유서 교부
5. **징계** — 이중징계 금지, 징계 절차의 적정성
6. **근로계약** — 필수 기재사항 포함 여부
7. **모성보호** — 임산부 야간/휴일근로 제한, 육아휴직

## 출력 형식
| 조항 | 내용 | 관련 법령 | 위반 여부 | 수정 제안 |
각 항목에 대해 위 형식으로 표 작성.

심각도: 🔴 법 위반 / 🟡 개선 권고 / 🟢 적정

결과를 "취업규칙검토_[파일명].md" 로 저장.`}
      </CodeBlock>

      <h2>3. /판례요약 — 판례 핵심 정리</h2>
      <CodeBlock language="markdown" filename=".claude/skills/판례요약.md">
{`---
name: 판례요약
description: 판례를 읽고 핵심을 구조화하여 정리합니다
---

# 판례 요약 스킬

## 할 일
$ARGUMENTS 파일(판례 전문)을 읽고 아래 형식으로 정리해.

## 출력 형식

### 판례 정보
- **사건번호:** (예: 대법원 2023다12345)
- **선고일:** YYYY.MM.DD
- **사건 유형:** (예: 부당해고, 임금, 산재 등)

### 사실관계 (3-5줄)
당사자 관계와 핵심 사실을 시간 순서로.

### 쟁점
번호를 매겨서 각 쟁점 1줄 요약.

### 법원 판단
각 쟁점에 대한 법원의 판단을 요약.

### 판결 결과
원고 승/패, 핵심 결론 1줄.

### 실무 시사점
이 판례가 실무에 주는 영향 2-3줄.

결과를 "판례요약_[사건번호].md" 로 저장.`}
      </CodeBlock>

      <h2>4. /세금계산 — 소득세/4대보험 계산</h2>
      <CodeBlock language="markdown" filename=".claude/skills/세금계산.md">
{`---
name: 세금계산
description: 급여 또는 소득에 대한 세금을 계산합니다
---

# 세금 계산 스킬

## 입력
$ARGUMENTS 에서 다음 정보를 확인:
- 소득 유형 (근로소득/사업소득/기타소득)
- 금액
- 부양가족 수 (근로소득인 경우)

## 계산 (근로소득)
1. 근로소득 간이세액표 기준 소득세
2. 지방소득세 = 소득세 x 10%
3. 4대보험:
   - 국민연금: 4.5%
   - 건강보험: 3.545%
   - 장기요양: 건강보험 x 12.81%
   - 고용보험: 0.9%

## 계산 (사업소득)
1. 원천징수: 수입금액 x 3%
2. 지방소득세: 원천징수액 x 10%

## 계산 (기타소득)
1. 필요경비: 수입금액 x 60% (또는 실제 경비)
2. 원천징수: 소득금액 x 20%
3. 지방소득세: 원천징수액 x 10%

## 출력
항목별 금액을 표로 정리.
공제 총액과 실수령액(또는 실지급액) 명시.`}
      </CodeBlock>

      <h2>5. /계약서검토 — 계약서 리스크 분석</h2>
      <CodeBlock language="markdown" filename=".claude/skills/계약서검토.md">
{`---
name: 계약서검토
description: 계약서의 리스크를 분석하고 수정안을 제시합니다
---

# 계약서 검토 스킬

## 할 일
$ARGUMENTS 파일(계약서)을 읽고 다음을 분석해.

## 검토 항목
1. **계약 당사자** — 명칭, 대표자, 주소 기재 여부
2. **계약 기간** — 시작일/종료일, 자동 갱신 조항
3. **대금/보수** — 금액, 지급 시기, 지급 방법
4. **의무와 책임** — 각 당사자 의무의 균형
5. **위약금/손해배상** — 과도한 위약금 여부
6. **해지 조건** — 일방 해지 가능 여부, 해지 시 정산
7. **분쟁 해결** — 관할 법원, 중재 조항
8. **기밀 유지** — 범위와 기간의 적정성
9. **기타** — 불명확한 표현, 빠진 조항

## 출력 형식
| 항목 | 현재 내용 | 리스크 | 수정 제안 |

리스크 등급: 🔴 높음 / 🟡 중간 / 🟢 낮음

결과를 "계약서검토_[파일명].md" 로 저장.`}
      </CodeBlock>

      <KeyPoint>
        <p>
          이 5개 스킬은 <strong>시작점</strong>입니다.
          실제 사용하면서 "이것도 추가했으면", "이 부분은 빼도 되겠는데"
          하는 부분을 수정해 나가세요. 스킬은 마크다운 파일이라
          언제든 쉽게 수정할 수 있습니다.
        </p>
      </KeyPoint>

      <TryThis>
        <p>스킬 5개를 한 번에 설치해 보세요:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            스킬 폴더를 확인합니다
            <CodeBlock language="bash">{`cd ~/Desktop/업무\nmkdir -p .claude/skills\nls .claude/skills/`}</CodeBlock>
          </li>
          <li>위 스킬 중 자신의 업무에 맞는 것을 선택합니다</li>
          <li>Claude Code에서 "이 내용으로 스킬 파일을 만들어줘"라고 요청합니다</li>
          <li>
            설치한 스킬을 실행해 봅니다
            <CodeBlock language="text">{`/취업규칙검토 취업규칙_A사.docx`}</CodeBlock>
          </li>
          <li>결과를 보고 스킬 파일의 내용을 자신의 필요에 맞게 수정합니다</li>
        </ol>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 4-4: 스킬 공유하기 — 사무실 동료와 함께 쓰기
  // ─────────────────────────────────────────
  "4-4": (
    <>
      <h2>좋은 스킬은 함께 쓸 때 더 좋습니다</h2>
      <p>
        내가 만든 <code>/취업규칙검토</code> 스킬이 잘 동작한다면,
        같은 사무실 동료도 쓸 수 있으면 좋겠죠?
        스킬 공유는 <strong>파일 복사만큼 간단</strong>합니다.
      </p>

      <h2>프로젝트 레벨 vs 사용자 레벨</h2>
      <CodeBlock language="text" filename="스킬 저장 위치">
{`# 프로젝트 레벨 — 이 폴더에서만 사용
~/Desktop/업무/.claude/skills/취업규칙검토.md

# 사용자 레벨 — 모든 폴더에서 사용
~/.claude/skills/취업규칙검토.md`}
      </CodeBlock>

      <KeyPoint>
        <p>
          <strong>프로젝트 레벨</strong>은 특정 업무 폴더에서만 동작합니다.
          <strong>사용자 레벨</strong>은 어디서든 동작합니다.
          자주 쓰는 범용 스킬은 사용자 레벨에, 특정 업무 전용 스킬은 프로젝트 레벨에 두세요.
        </p>
      </KeyPoint>

      <h2>방법 1: 폴더 복사 (가장 간단)</h2>
      <CodeBlock language="bash" filename="terminal">
{`# 내 스킬 폴더를 USB나 공유 폴더로 복사
cp -r .claude/skills/ /공유폴더/claude-skills/

# 동료가 자기 업무 폴더에 붙여넣기
# (동료 컴퓨터에서)
cp -r /공유폴더/claude-skills/ ~/Desktop/업무/.claude/skills/`}
      </CodeBlock>

      <h2>방법 2: 공유 드라이브 활용</h2>
      <CodeBlock language="text" filename="Google Drive / OneDrive / Dropbox">
{`# 공유 폴더에 스킬 저장
공유드라이브/사무실_공통/claude-skills/
├── 취업규칙검토.md
├── 급여계산.md
├── 판례요약.md
└── 계약서검토.md

# 동료들이 각자 복사해서 사용
# 또는 심볼릭 링크로 연결 (고급)`}
      </CodeBlock>

      <h2>방법 3: Claude에게 시키기</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`# 스킬 내용을 보고 동일하게 만들어달라고 요청
다음 내용으로 .claude/skills/취업규칙검토.md 파일을 만들어줘:
(스킬 내용 붙여넣기)`}
      </CodeBlock>

      <h2>팀 전체 표준 스킬 관리</h2>
      <CodeBlock language="text" filename="팀 스킬 관리 구조">
{`사무실_공유/
├── claude-skills/           ← 팀 공통 스킬
│   ├── 취업규칙검토.md
│   ├── 급여계산.md
│   └── 계약서검토.md
├── claude-templates/        ← CLAUDE.md 템플릿
│   ├── 노무사.md
│   └── 변호사.md
└── README.md               ← 사용법 안내`}
      </CodeBlock>

      <Tip>
        <p>
          사무실에서 여러 사람이 같은 스킬을 사용하면,
          <strong>업무 품질이 균일해집니다</strong>.
          신입 직원도 베테랑과 같은 형식으로 문서를 검토할 수 있습니다.
        </p>
      </Tip>

      <BeforeAfter
        scenario="신입 직원 업무 인수인계"
        before="업무 절차를 하나하나 가르치고, 문서 형식을 교정. 2-3주 소요."
        after='스킬 폴더를 복사해주면 /취업규칙검토, /급여계산 바로 사용. 첫 날부터 동일 품질.'
        result="인수인계 기간 80% 단축. 일관된 업무 품질."
      />

      <TryThis>
        <p>스킬 공유를 연습해 보세요:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            현재 스킬을 사용자 레벨로 복사합니다
            <CodeBlock language="bash">{`mkdir -p ~/.claude/skills\ncp .claude/skills/문서요약.md ~/.claude/skills/`}</CodeBlock>
          </li>
          <li>다른 폴더로 이동해서 해당 스킬이 동작하는지 확인합니다</li>
          <li>
            동료에게 공유할 스킬을 별도 폴더에 정리합니다
            <CodeBlock language="bash">{`mkdir -p ~/공유스킬\ncp .claude/skills/*.md ~/공유스킬/`}</CodeBlock>
          </li>
        </ol>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 5-1: MCP란? — Claude에 눈과 손 달아주기
  // ─────────────────────────────────────────
  "5-1": (
    <>
      <h2>Claude의 한계: 내 컴퓨터만 봅니다</h2>
      <p>
        지금까지 Claude Code는 <strong>내 컴퓨터의 파일</strong>만 다룰 수 있었습니다.
        이메일을 읽거나, 캘린더를 확인하거나, 웹사이트를 검색하는 건 할 수 없었죠.
      </p>
      <p>
        <strong>MCP(Model Context Protocol)</strong>를 연결하면,
        Claude에게 Gmail, Google Calendar, Notion, 웹 브라우저 등
        외부 서비스를 사용할 수 있는 <strong>눈과 손</strong>을 달아줍니다.
      </p>

      <h2>레고 블록처럼 연결합니다</h2>
      <p>
        MCP는 레고 블록 같은 개념입니다. 기본 Claude Code 위에
        원하는 기능 블록을 꽂으면 됩니다:
      </p>
      <CodeBlock language="text" filename="MCP 블록 예시">
{`Claude Code (기본)
  + Gmail MCP        → 이메일 읽기/쓰기
  + Calendar MCP     → 일정 확인/추가
  + Notion MCP       → 문서/DB 관리
  + Browser MCP      → 웹 검색/조회
  + Slack MCP        → 메시지 읽기/보내기`}
      </CodeBlock>

      <KeyPoint>
        <p>
          MCP = <strong>Claude와 외부 서비스를 연결하는 다리</strong>입니다.
          한 번 연결하면, Claude에게 "이메일 확인해줘", "내일 일정 뭐야?"라고
          말하는 것만으로 해당 서비스를 사용할 수 있습니다.
        </p>
      </KeyPoint>

      <h2>MCP 연결하는 기본 명령어</h2>
      <CodeBlock language="bash" filename="terminal">
{`# MCP 서버 추가하기 (기본 형태)
claude mcp add [이름] [서버주소]

# 현재 연결된 MCP 목록 보기
claude mcp list

# MCP 서버 제거하기
claude mcp remove [이름]`}
      </CodeBlock>

      <h2>Desktop App vs CLI</h2>
      <CodeBlock language="text" filename="두 가지 연결 방법">
{`# 방법 1: CLI (터미널에서 명령어로)
claude mcp add gmail-mcp npx @anthropic/gmail-mcp

# 방법 2: Desktop App (GUI로 클릭)
Claude Desktop App → 설정 → Connectors → 원하는 서비스 클릭`}
      </CodeBlock>

      <Tip>
        <p>
          <strong>Desktop App의 Connectors</strong>를 사용하면
          코드 입력 없이 클릭만으로 MCP를 연결할 수 있습니다.
          Gmail, Google Calendar 등 인기 서비스는 Connectors에서
          원클릭으로 연결됩니다.
        </p>
      </Tip>

      <BeforeAfter
        scenario="아침 업무 시작"
        before="Gmail 열기 → 이메일 확인 → 캘린더 확인 → Notion 확인 → 각각 30분"
        after='"오늘 이메일 요약해줘, 일정 알려줘, Notion 할일 보여줘" 한 마디. 1분.'
        result="30분 → 1분. 여러 서비스를 한 곳에서 관리."
      />

      <Warning>
        <p>
          MCP로 외부 서비스를 연결하면, Claude가 해당 서비스의 데이터에 접근합니다.
          <strong>민감한 정보가 있는 서비스</strong>는 신중하게 연결하세요.
          Gmail을 연결하면 Claude가 이메일을 읽을 수 있게 된다는 뜻입니다.
        </p>
      </Warning>

      <TryThis>
        <p>MCP의 개념을 이해했다면:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            현재 연결된 MCP 목록을 확인합니다
            <CodeBlock language="bash">{`claude mcp list`}</CodeBlock>
          </li>
          <li>아직 아무것도 연결되어 있지 않을 겁니다 — 정상입니다</li>
          <li>다음 강의에서 Gmail을 첫 번째로 연결해 봅시다</li>
        </ol>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 5-2: Gmail 연동 — 이메일 확인과 초안 작성
  // ─────────────────────────────────────────
  "5-2": (
    <>
      <h2>Claude가 이메일을 읽어줍니다</h2>
      <p>
        Gmail MCP를 연결하면, Claude에게 "오늘 온 이메일 요약해줘"라고 하면
        <strong>받은 편지함을 직접 확인</strong>하고 요약해줍니다.
        답장 초안까지 작성해줄 수 있습니다.
      </p>

      <h2>Step 1: Gmail MCP 연결</h2>
      <h3>방법 A: Desktop App (추천)</h3>
      <CodeBlock language="text" filename="Desktop App">
{`Claude Desktop App 실행
→ 설정(⚙️) 클릭
→ Connectors 탭
→ Gmail 찾기
→ "Connect" 클릭
→ Google 계정으로 로그인
→ 권한 허용`}
      </CodeBlock>

      <h3>방법 B: CLI (터미널)</h3>
      <CodeBlock language="bash" filename="terminal">
{`# Gmail MCP 추가
claude mcp add gmail -- npx -y @anthropic/gmail-mcp

# 연결 확인
claude mcp list`}
      </CodeBlock>

      <h2>Step 2: 이메일 읽기</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`# 오늘 받은 메일 요약
오늘 받은 이메일을 요약해줘

# 특정 발신자 메일 찾기
김변호사에게서 온 메일 중 최근 것 3개를 보여줘

# 주제로 검색
"취업규칙" 관련 이메일을 찾아서 정리해줘

# 읽지 않은 메일만
안 읽은 메일이 몇 개야? 중요한 것부터 요약해줘`}
      </CodeBlock>

      <h2>Step 3: 이메일 분류 및 요약</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`오늘 받은 메일을 다음 기준으로 분류해줘:
1. 긴급 (오늘 중 회신 필요)
2. 중요 (이번 주 내 처리)
3. 참고 (읽기만 하면 됨)
4. 스팸/광고

각 메일에 대해 발신자, 제목, 핵심 내용 1줄로 정리해줘.`}
      </CodeBlock>

      <h2>Step 4: 답장 초안 작성</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`김철수 팀장에게서 온 "3월 급여 확인 요청" 메일에 답장을 써줘.

내용:
- 3월 급여 정산 완료했음
- 수정 사항: 연장수당 15만원 추가 반영
- 첨부파일로 수정된 급여명세서를 보낼 예정
- 톤: 공손하고 간결하게`}
      </CodeBlock>

      <BeforeAfter
        scenario="아침 이메일 확인 루틴"
        before="Gmail 열기 → 50개 메일 하나씩 읽기 → 중요한 것 구분 → 40분 소요"
        after='"오늘 이메일 긴급순으로 분류해줘" 한 마디. 2분이면 전체 파악.'
        result="40분 → 2분. 중요한 메일을 놓치지 않음."
      />

      <KeyPoint>
        <p>
          Claude는 이메일을 <strong>읽기</strong>와 <strong>초안 작성</strong>만 합니다.
          자동으로 메일을 보내지는 않습니다. 초안을 확인하고
          직접 발송 버튼을 누르는 건 항상 사람의 몫입니다.
        </p>
      </KeyPoint>

      <Warning>
        <p>
          Gmail 연동 시 Claude가 이메일 내용에 접근합니다.
          <strong>업무용 계정</strong>으로 연결하고,
          개인 계정은 신중하게 결정하세요.
        </p>
      </Warning>

      <TryThis>
        <p>Gmail을 연결하고 실습해 보세요:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Desktop App 또는 CLI로 Gmail MCP를 연결합니다</li>
          <li>
            Claude Code에서 이메일을 확인합니다
            <CodeBlock language="text">{`오늘 받은 메일 중 가장 중요한 3개를 알려줘`}</CodeBlock>
          </li>
          <li>아무 메일에 대해 답장 초안을 작성해 달라고 합니다</li>
          <li>초안 내용이 마음에 드는지 확인합니다</li>
        </ol>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 5-3: 캘린더 + Notion — 일정과 사건 관리
  // ─────────────────────────────────────────
  "5-3": (
    <>
      <h2>일정과 업무를 한 곳에서 관리</h2>
      <p>
        Google Calendar로 일정을 확인하고, Notion으로 업무 기록을 관리하는 분들이 많습니다.
        두 서비스를 Claude에 연결하면, <strong>대화 한 번으로 일정 확인부터
        업무 기록까지</strong> 할 수 있습니다.
      </p>

      <h2>Google Calendar 연결하기</h2>

      <h3>Desktop App (추천)</h3>
      <CodeBlock language="text" filename="Desktop App">
{`Claude Desktop App → 설정 → Connectors
→ Google Calendar 찾기 → Connect 클릭
→ Google 계정 로그인 → 권한 허용`}
      </CodeBlock>

      <h3>CLI</h3>
      <CodeBlock language="bash" filename="terminal">
{`# Google Calendar MCP 추가
claude mcp add google-calendar -- npx -y @anthropic/google-calendar-mcp

# 연결 확인
claude mcp list`}
      </CodeBlock>

      <h2>캘린더 사용 예시</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`# 오늘 일정 확인
오늘 일정이 뭐가 있어?

# 이번 주 일정 요약
이번 주 일정을 요일별로 정리해줘

# 빈 시간 찾기
이번 주에 2시간짜리 미팅 잡을 수 있는 시간대를 찾아줘

# 일정 추가
내일 오후 2시에 "A사 취업규칙 검토 미팅" 일정을 추가해줘. 1시간.`}
      </CodeBlock>

      <h2>Notion 연결하기</h2>

      <h3>Desktop App (추천)</h3>
      <CodeBlock language="text" filename="Desktop App">
{`Claude Desktop App → 설정 → Connectors
→ Notion 찾기 → Connect 클릭
→ Notion 계정 로그인 → 공유할 페이지 선택 → 허용`}
      </CodeBlock>

      <h3>CLI</h3>
      <CodeBlock language="bash" filename="terminal">
{`# Notion MCP 추가
claude mcp add notion -- npx -y @anthropic/notion-mcp

# 연결 확인
claude mcp list`}
      </CodeBlock>

      <h2>Notion 사용 예시</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`# 페이지 검색
Notion에서 "급여 관리" 관련 페이지를 찾아줘

# 데이터베이스 조회
Notion의 "고객사 목록" 데이터베이스에서 계약 만료일이 이번 달인 고객을 찾아줘

# 새 항목 추가
Notion의 "업무 일지" 데이터베이스에 오늘 처리한 업무를 추가해줘:
- 제목: A사 급여 정산
- 상태: 완료
- 비고: 연장수당 수정 반영`}
      </CodeBlock>

      <h2>캘린더 + Notion 조합 워크플로우</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`오늘 일정을 확인하고,
각 미팅에 대한 준비사항을 Notion에서 찾아서 정리해줘.

형식:
- 09:00 A사 미팅 → Notion "A사" 페이지에서 최근 이슈 요약
- 14:00 B사 자문 → Notion "B사" 페이지에서 미해결 질의 목록`}
      </CodeBlock>

      <BeforeAfter
        scenario="아침 업무 준비"
        before="캘린더 열기 → 일정 확인 → Notion에서 관련 자료 찾기 → 각각 15분, 총 30분"
        after='"오늘 일정과 관련 Notion 자료를 정리해줘" 한 마디. 3분.'
        result="30분 → 3분. 미팅 전 준비가 완벽해짐."
      />

      <KeyPoint>
        <p>
          여러 MCP를 동시에 연결하면 <strong>서비스 간 연결</strong>이 가능합니다.
          "이메일에서 미팅 요청을 찾아서 캘린더에 추가하고, Notion에 기록해줘"
          같은 복합 작업도 가능해집니다.
        </p>
      </KeyPoint>

      <TryThis>
        <p>캘린더와 Notion을 연결해 보세요:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Google Calendar MCP를 연결합니다 (Desktop App 추천)</li>
          <li>
            오늘 일정을 확인합니다
            <CodeBlock language="text">{`오늘 일정을 알려줘`}</CodeBlock>
          </li>
          <li>Notion도 연결하고 "할 일 목록을 보여줘"라고 요청합니다</li>
          <li>두 서비스를 조합한 요청을 해봅니다</li>
        </ol>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 5-4: 브라우저 연동 — 판례 검색, 법령 조회 자동화
  // ─────────────────────────────────────────
  "5-4": (
    <>
      <h2>Claude가 직접 웹을 검색합니다</h2>
      <p>
        브라우저 MCP를 연결하면, Claude가 <strong>웹 브라우저를 직접 열어서</strong>
        정보를 검색하고 결과를 가져올 수 있습니다.
        판례 검색, 법령 조회, 정부 사이트 조회 등을 자동화할 수 있습니다.
      </p>

      <h2>브라우저 MCP 연결하기</h2>
      <CodeBlock language="bash" filename="terminal">
{`# Playwright MCP (추천 — 안정적)
claude mcp add playwright -- npx -y @anthropic/playwright-mcp

# 또는 Chrome MCP (Chrome 확장 프로그램 필요)
# Desktop App → Connectors → Chrome 연결

# 연결 확인
claude mcp list`}
      </CodeBlock>

      <h2>웹 검색 기본</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`# 일반 웹 검색
"부당해고 최신 판례 2024" 검색해줘

# 특정 사이트 방문
법제처 사이트(law.go.kr)에서 근로기준법 제23조를 찾아줘

# 검색 결과 정리
"통상임금 판례"를 검색해서 최근 5건을 표로 정리해줘`}
      </CodeBlock>

      <h2>실전 1: 판례 검색 자동화</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`대법원 종합법률정보(glaw.scourt.go.kr)에서
"통상임금 정기상여금" 관련 판례를 검색해줘.

최근 3년간 판례 중에서:
1. 사건번호
2. 선고일
3. 핵심 판시사항 1줄
을 표로 정리해줘.`}
      </CodeBlock>

      <h2>실전 2: 법령 조회</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`법제처(law.go.kr)에서 근로기준법을 검색하고,
최근 개정 사항을 확인해줘.
개정된 조문 번호와 시행일, 변경 내용을 정리해줘.`}
      </CodeBlock>

      <h2>실전 3: 정부 사이트 조회</h2>
      <CodeBlock language="text" filename="Claude Code 대화">
{`고용노동부(moel.go.kr)에서 최저임금 관련 최신 고시를 찾아줘.
2024년, 2025년 최저임금 시급과 월급(209시간 기준)을 비교해줘.`}
      </CodeBlock>

      <BeforeAfter
        scenario="판례 검색 업무"
        before="대법원 사이트 접속 → 키워드 입력 → 판례 하나씩 클릭 → 요약 정리. 1시간."
        after='"통상임금 관련 최신 판례 5건 정리해줘" 한 마디. 5분.'
        result="1시간 → 5분. 검색 범위도 더 넓고, 정리 형식도 일관적."
      />

      <KeyPoint>
        <p>
          브라우저 MCP를 사용하면 Claude가 <strong>실시간으로 웹을 검색</strong>합니다.
          Claude의 학습 데이터에 없는 최신 정보도 가져올 수 있습니다.
          다만 모든 웹사이트가 완벽하게 작동하는 건 아니므로,
          중요한 정보는 직접 사이트에서 확인하세요.
        </p>
      </KeyPoint>

      <Warning>
        <p>
          일부 웹사이트는 자동 접근을 차단할 수 있습니다.
          로그인이 필요한 사이트(예: 유료 판례 DB)는
          브라우저 MCP로 접근이 어려울 수 있습니다.
        </p>
      </Warning>

      <TryThis>
        <p>브라우저 연동을 실습해 보세요:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            Playwright MCP를 연결합니다
            <CodeBlock language="bash">{`claude mcp add playwright -- npx -y @anthropic/playwright-mcp`}</CodeBlock>
          </li>
          <li>Claude Code를 시작합니다</li>
          <li>
            간단한 검색을 해봅니다
            <CodeBlock language="text">{`"2024년 최저임금"을 검색하고 결과를 알려줘`}</CodeBlock>
          </li>
          <li>업무와 관련된 검색을 해봅니다 (판례, 법령, 고시 등)</li>
        </ol>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 6-1: 비대화형 모드 — 자동 실행의 기초
  // ─────────────────────────────────────────
  "6-1": (
    <>
      <h2>대화 없이 바로 실행</h2>
      <p>
        지금까지는 <code>claude</code>를 실행해서 대화 모드로 사용했습니다.
        <strong>비대화형 모드</strong>에서는 명령 한 줄로 바로 결과를 받습니다.
        대화 창을 열 필요 없이, 명령 → 결과. 끝.
      </p>

      <h2>기본 사용법: claude -p</h2>
      <CodeBlock language="bash" filename="terminal">
{`# -p는 "print" 모드. 결과만 출력하고 종료.
claude -p "오늘 날짜를 알려줘"

# 파일 분석도 가능
claude -p "@취업규칙.docx 핵심 내용을 3줄로 요약해줘"

# 여러 파일 동시에
claude -p "@급여대장.xlsx 에서 총 인건비를 계산해줘"`}
      </CodeBlock>

      <h2>파이프(|)로 데이터 전달하기</h2>
      <p>
        다른 명령어의 결과를 Claude에게 넘겨줄 수 있습니다:
      </p>
      <CodeBlock language="bash" filename="terminal">
{`# CSV 파일 내용을 Claude에게 전달
cat 매출데이터.csv | claude -p "이 데이터를 분석해줘"

# 파일 목록을 Claude에게 전달
ls -la | claude -p "이 파일 목록에서 가장 큰 파일 3개를 알려줘"

# 로그 파일 분석
cat error.log | claude -p "오류 패턴을 분석하고 해결방법을 제안해줘"`}
      </CodeBlock>

      <h2>결과를 파일로 저장하기</h2>
      <CodeBlock language="bash" filename="terminal">
{`# 분석 결과를 파일로 저장
claude -p "@취업규칙.docx 연차 조항을 분석해줘" > 연차분석.md

# CSV 분석 결과를 파일로
cat 급여대장.csv | claude -p "오류를 찾아줘" > 급여오류_보고서.md

# 여러 파일 연속 처리
for file in *.docx; do
  claude -p "@$file 핵심 내용을 요약해줘" > "요약_$file.md"
done`}
      </CodeBlock>

      <h2>실전: 일괄 처리 스크립트</h2>
      <CodeBlock language="bash" filename="일괄처리.sh">
{`#!/bin/bash
# 폴더의 모든 계약서를 자동 검토하는 스크립트

echo "계약서 일괄 검토를 시작합니다..."

for file in 계약서_*.pdf; do
  echo "검토 중: $file"
  claude -p "@$file 에서 위약금 조항과 해지 조건을 찾아 정리해줘" \
    > "검토_$file.md"
done

echo "모든 검토가 완료되었습니다."
echo "결과 파일:"
ls 검토_*.md`}
      </CodeBlock>

      <BeforeAfter
        scenario="계약서 10건 일괄 검토"
        before="Claude Code 대화 모드에서 하나씩 분석. 10번 반복. 1시간."
        after="위 스크립트 한 번 실행. 자동으로 10건 검토. 10분."
        result="1시간 → 10분. 사람이 하는 일: 스크립트 실행 버튼 누르기."
      />

      <KeyPoint>
        <p>
          비대화형 모드의 핵심은 <strong>자동화</strong>입니다.
          스크립트에 넣거나, 스케줄러와 연결하면
          사람이 없어도 Claude가 일을 합니다.
          다음 강의(Desktop App)에서 정해진 시간에 자동 실행하는 법을 배웁니다.
        </p>
      </KeyPoint>

      <Tip>
        <p>
          <code>claude -p</code> 뒤의 명령어를 따옴표로 감싸는 걸 잊지 마세요.
          따옴표 안에 큰따옴표가 필요하면 작은따옴표를 바깥에 쓰거나,
          <code>\"</code>로 이스케이프합니다.
        </p>
      </Tip>

      <TryThis>
        <p>비대화형 모드를 직접 써보세요:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            간단한 명령부터 시작합니다
            <CodeBlock language="bash">{`claude -p "안녕, 오늘 날짜 알려줘"`}</CodeBlock>
          </li>
          <li>
            파일 분석을 해봅니다
            <CodeBlock language="bash">{`claude -p "@아무파일.txt 요약해줘"`}</CodeBlock>
          </li>
          <li>
            결과를 파일로 저장합니다
            <CodeBlock language="bash">{`claude -p "@아무파일.txt 요약해줘" > 요약결과.md`}</CodeBlock>
          </li>
          <li>저장된 파일을 열어서 확인합니다</li>
        </ol>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 6-2: Desktop App 활용 — 스케줄, 커넥터, 미리보기
  // ─────────────────────────────────────────
  "6-2": (
    <>
      <h2>터미널 없이 GUI로 사용하기</h2>
      <p>
        Claude Code Desktop App을 사용하면 터미널 없이도
        <strong>클릭만으로</strong> Claude Code의 모든 기능을 사용할 수 있습니다.
        특히 스케줄(예약 실행)과 커넥터(서비스 연결) 기능이 강력합니다.
      </p>

      <h2>Desktop App 설치</h2>
      <CodeBlock language="text" filename="설치 방법">
{`# claude.ai/download 에서 다운로드
# Windows: .exe 파일 실행
# Mac: .dmg 파일 열어서 Applications에 드래그

# 또는 이미 CLI가 설치되어 있다면:
claude app install`}
      </CodeBlock>

      <h2>스케줄 기능: 정해진 시간에 자동 실행</h2>
      <p>
        매일 아침 8시에 이메일을 요약하고, 오늘 일정을 정리하는 작업을
        자동으로 실행할 수 있습니다:
      </p>
      <CodeBlock language="text" filename="Desktop App 스케줄 설정">
{`Desktop App → Schedules(스케줄) 탭
→ "New Schedule" 클릭

이름: 아침 브리핑
시간: 매일 오전 8:00
명령: 오늘 받은 이메일을 요약하고, 오늘 일정을 알려줘.
      긴급한 건은 별도로 표시해줘.
      결과를 "브리핑_오늘날짜.md" 로 저장해줘.`}
      </CodeBlock>

      <h2>커넥터: 클릭으로 서비스 연결</h2>
      <CodeBlock language="text" filename="Desktop App 커넥터">
{`Desktop App → Connectors(커넥터) 탭

연결 가능한 서비스 목록:
✅ Gmail — 이메일 읽기/쓰기
✅ Google Calendar — 일정 관리
✅ Notion — 문서/DB 관리
✅ Slack — 메시지
✅ GitHub — 코드 저장소
... 계속 추가 중

각 서비스 옆의 "Connect" 클릭 → 로그인 → 완료`}
      </CodeBlock>

      <h2>실전: 아침 브리핑 자동화</h2>
      <CodeBlock language="text" filename="아침 브리핑 스케줄 예시">
{`# 스케줄 이름: 출근 브리핑
# 실행 시간: 평일 오전 7:50
# 실행 내용:

다음을 순서대로 해줘:

1. Gmail에서 어젯밤~오늘 아침 사이 온 메일을 확인하고
   긴급/중요/참고로 분류해줘

2. Google Calendar에서 오늘 일정을 확인해줘

3. 결과를 다음 형식으로 정리해줘:
   ## 오늘의 브리핑 (날짜)
   ### 긴급 메일
   ### 오늘 일정
   ### 주요 할일

4. "브리핑_오늘날짜.md" 파일로 저장해줘`}
      </CodeBlock>

      <BeforeAfter
        scenario="매일 아침 업무 시작"
        before="출근 → 이메일 확인(20분) → 캘린더 확인(5분) → 할일 정리(10분). 총 35분."
        after="출근하면 브리핑 파일이 이미 준비됨. 읽는 데 3분."
        result="35분 → 3분. 아침마다 30분 절약. 월 10시간 이상."
      />

      <KeyPoint>
        <p>
          Desktop App의 스케줄 기능은 <strong>"AI 비서가 출근 전에
          미리 일해놓는 것"</strong>과 같습니다. 한 번 설정해두면
          매일 자동으로 실행됩니다.
        </p>
      </KeyPoint>

      <Tip>
        <p>
          Desktop App이 없어도 Windows 작업 스케줄러나 Mac의 cron으로
          <code>claude -p "명령어"</code>를 예약 실행할 수 있습니다.
          하지만 Desktop App이 훨씬 편합니다.
        </p>
      </Tip>

      <TryThis>
        <p>Desktop App을 설치하고 스케줄을 만들어 보세요:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            Desktop App을 설치합니다
            <CodeBlock language="text">{`claude.ai/download 에서 다운로드 → 설치`}</CodeBlock>
          </li>
          <li>Connectors에서 Gmail을 연결합니다</li>
          <li>Schedules에서 테스트 스케줄을 만듭니다 (5분 후 실행)</li>
          <li>스케줄이 실행되는지 확인합니다</li>
        </ol>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 6-3: 원격 접속과 웹 — 폰에서도, 어디서든
  // ─────────────────────────────────────────
  "6-3": (
    <>
      <h2>사무실 밖에서도 Claude Code 사용하기</h2>
      <p>
        사무실 컴퓨터에서 돌아가는 Claude Code에 <strong>폰이나 다른 컴퓨터</strong>에서
        접속할 수 있습니다. 또는 <strong>claude.ai/code</strong>에서
        웹 브라우저만으로 Claude Code를 사용할 수도 있습니다.
      </p>

      <h2>방법 1: Remote Control (원격 제어)</h2>
      <p>
        사무실 컴퓨터에서 Claude Code 세션을 열어두면,
        다른 기기에서 같은 세션에 접속할 수 있습니다:
      </p>
      <CodeBlock language="bash" filename="사무실 컴퓨터 (terminal)">
{`# 사무실에서 Claude Code 시작
claude

# 대화 중 원격 접속 시작
/remote

# 화면에 URL이 표시됩니다
# Remote URL: https://claude.ai/remote/abc123
# 이 URL을 폰이나 다른 컴퓨터에서 열면 됩니다`}
      </CodeBlock>

      <CodeBlock language="text" filename="폰이나 다른 컴퓨터">
{`# 브라우저에서 위 URL을 엽니다
https://claude.ai/remote/abc123

# 사무실 컴퓨터의 Claude Code 세션에 접속됩니다
# 파일 시스템은 사무실 컴퓨터의 것을 사용합니다`}
      </CodeBlock>

      <h2>방법 2: Claude Code on Web</h2>
      <p>
        별도의 설치 없이, 웹 브라우저에서 Claude Code를 사용할 수 있습니다:
      </p>
      <CodeBlock language="text" filename="웹 브라우저">
{`# 브라우저에서 접속
https://claude.ai/code

# 클라우드 환경에서 Claude Code가 실행됩니다
# 파일 업로드 → 분석 → 결과 다운로드 가능`}
      </CodeBlock>

      <h2>방법 3: 장시간 작업 모니터링</h2>
      <CodeBlock language="bash" filename="terminal">
{`# 큰 작업을 시작하고 원격으로 확인하기
claude -p "이 폴더의 모든 계약서를 검토해줘" &

# 작업 상태 확인
claude sessions list

# 특정 세션에 다시 접속
claude sessions resume [세션ID]`}
      </CodeBlock>

      <BeforeAfter
        scenario="외출 중 급한 문서 확인"
        before="사무실로 돌아가야 함. 또는 동료에게 전화해서 확인 요청. 1시간 소요."
        after="폰에서 Remote URL 접속 → 사무실 컴퓨터의 파일을 Claude로 확인. 2분."
        result="1시간 → 2분. 어디서든 사무실 컴퓨터에 접근."
      />

      <KeyPoint>
        <p>
          <strong>Remote Control</strong>은 사무실 컴퓨터가 켜져 있어야 합니다.
          <strong>Claude Code on Web</strong>은 인터넷만 있으면 어디서든 사용 가능하지만,
          사무실 컴퓨터의 파일에는 접근할 수 없습니다.
          용도에 따라 선택하세요.
        </p>
      </KeyPoint>

      <Tip>
        <p>
          장시간 작업(예: 100건 계약서 검토)을 걸어두고 퇴근한 뒤,
          다음 날 결과만 확인하는 방식도 가능합니다.
          <code>claude sessions list</code>로 완료 여부를 확인하세요.
        </p>
      </Tip>

      <Warning>
        <p>
          원격 접속 URL은 <strong>다른 사람에게 공유하지 마세요</strong>.
          URL을 아는 사람은 누구나 사무실 컴퓨터의 Claude Code 세션에
          접속할 수 있습니다.
        </p>
      </Warning>

      <TryThis>
        <p>원격 접속을 체험해 보세요:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            컴퓨터에서 Claude Code를 시작하고 /remote를 입력합니다
            <CodeBlock language="text">{`claude\n/remote`}</CodeBlock>
          </li>
          <li>표시된 URL을 폰 브라우저에서 엽니다</li>
          <li>폰에서 컴퓨터의 파일을 분석해 달라고 요청해 봅니다</li>
          <li>
            또는 claude.ai/code를 방문해서 웹 버전을 체험합니다
          </li>
        </ol>
      </TryThis>
    </>
  ),

  // ─────────────────────────────────────────
  // 6-4: 전체 워크플로우 통합 — 나만의 AI 사무실
  // ─────────────────────────────────────────
  "6-4": (
    <>
      <h2>모든 것을 하나로 연결합니다</h2>
      <p>
        지금까지 배운 모든 기능을 조합하면,
        <strong>출근하면 브리핑이 준비되어 있는 AI 사무실</strong>을 만들 수 있습니다.
        CLAUDE.md + 스킬 + MCP + 스케줄, 네 가지를 연결하면 됩니다.
      </p>

      <h2>전체 구성도</h2>
      <CodeBlock language="text" filename="AI 사무실 구성">
{`┌─────────────────────────────────────┐
│           나의 AI 사무실              │
├─────────────────────────────────────┤
│                                     │
│  📋 CLAUDE.md (업무 규칙)            │
│  → 직업, 문서 형식, 계산 기준        │
│                                     │
│  ⚡ 스킬 (반복 업무 자동화)           │
│  → /급여계산 /취업규칙검토 /판례요약  │
│                                     │
│  🔌 MCP (외부 서비스 연결)           │
│  → Gmail + Calendar + Notion        │
│                                     │
│  ⏰ 스케줄 (자동 실행)               │
│  → 매일 아침 8시 브리핑 생성         │
│                                     │
└─────────────────────────────────────┘`}
      </CodeBlock>

      <h2>실전 시나리오: 노무사의 하루</h2>

      <h3>07:50 — 자동 아침 브리핑</h3>
      <CodeBlock language="text" filename="스케줄 자동 실행">
{`[자동 실행] 아침 브리핑 스케줄

1. Gmail 확인 → 긴급 메일 3건 발견
2. Calendar 확인 → 오늘 미팅 2건
3. 결과를 "브리핑_2024-03-15.md"로 저장

── 출근하면 이 파일이 이미 준비되어 있음 ──`}
      </CodeBlock>

      <h3>09:00 — 출근, 브리핑 확인</h3>
      <CodeBlock language="text" filename="Claude Code 대화">
{`# 자동 생성된 브리핑 파일 확인
@브리핑_2024-03-15.md 보여줘

# 긴급 메일에 대해 답장 초안 작성
긴급 메일 1번(A사 급여 문의)에 대해 답장을 써줘.
3월 급여는 정상 처리되었고, 연장수당은 15일에 별도 지급 예정이라고.`}
      </CodeBlock>

      <h3>10:00 — 스킬로 업무 처리</h3>
      <CodeBlock language="text" filename="Claude Code 대화">
{`# 스킬 실행으로 빠르게 업무 처리
/취업규칙검토 취업규칙_B사.docx

/급여계산 이름:김철수 기본급:3000000 고정수당:500000 연장:20시간

/계약서검토 용역계약서_C사.pdf`}
      </CodeBlock>

      <h3>14:00 — 미팅 준비</h3>
      <CodeBlock language="text" filename="Claude Code 대화">
{`오늘 14시 D사 미팅 관련해서:
1. Notion에서 D사 관련 기록을 찾아줘
2. 이전에 검토한 D사 취업규칙 파일을 요약해줘
3. 미팅 아젠다를 만들어줘`}
      </CodeBlock>

      <h3>17:00 — 퇴근 전 정리</h3>
      <CodeBlock language="text" filename="Claude Code 대화">
{`오늘 처리한 업무를 정리해서 Notion 업무일지에 추가해줘:
1. B사 취업규칙 검토 완료
2. 김철수 급여 계산 완료
3. C사 용역계약서 검토 완료
4. D사 미팅 - 취업규칙 수정 사항 협의`}
      </CodeBlock>

      <BeforeAfter
        scenario="노무사의 하루 업무"
        before="이메일 확인 40분 + 급여계산 2시간 + 취업규칙 검토 3시간 + 문서 작성 2시간 = 7시간"
        after="브리핑 확인 3분 + 스킬 실행 30분 + 문서 검토 1시간 + 미팅 준비 10분 = 2시간"
        result="7시간 → 2시간. 남는 5시간은 전문적 판단과 고객 상담에 집중."
      />

      <h2>단계별 구축 가이드</h2>
      <CodeBlock language="text" filename="AI 사무실 구축 순서">
{`Week 1: 기초 설정
  ✅ Claude Code 설치
  ✅ CLAUDE.md 작성 (3-1 강의)
  ✅ 기본 대화 연습 (1-3 강의)

Week 2: 스킬 설정
  ✅ 자주 하는 업무 3개를 스킬로 만들기 (4-2 강의)
  ✅ 스킬 테스트 및 수정

Week 3: MCP 연결
  ✅ Gmail 연결 (5-2 강의)
  ✅ Calendar 연결 (5-3 강의)
  ✅ 필요하면 Notion, 브라우저 추가

Week 4: 자동화
  ✅ 아침 브리핑 스케줄 설정 (6-2 강의)
  ✅ 비대화형 모드 활용 (6-1 강의)
  ✅ 전체 워크플로우 점검`}
      </CodeBlock>

      <KeyPoint>
        <p>
          AI 사무실은 <strong>한 번에 완성하는 것이 아닙니다</strong>.
          먼저 CLAUDE.md부터 만들고, 하나씩 스킬을 추가하고,
          익숙해지면 MCP를 연결하세요. 4주면 완전한 AI 사무실이 됩니다.
        </p>
      </KeyPoint>

      <Tip>
        <p>
          가장 중요한 것은 <strong>매일 조금씩 사용하는 것</strong>입니다.
          처음에는 파일 요약 한 건부터 시작해서,
          점점 복잡한 업무를 맡겨보세요. 한 달이면 업무 방식이 완전히 바뀝니다.
        </p>
      </Tip>

      <TryThis>
        <p>나만의 AI 사무실 계획을 세워보세요:</p>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            현재 진행 상황을 점검합니다
            <CodeBlock language="bash">{`# CLAUDE.md 있는지 확인
ls CLAUDE.md

# 스킬 폴더 확인
ls .claude/skills/

# MCP 연결 상태 확인
claude mcp list`}</CodeBlock>
          </li>
          <li>아직 설정 안 된 것 중 하나를 오늘 설정합니다</li>
          <li>
            내일 아침에 쓸 브리핑 명령어를 미리 만들어 봅니다
            <CodeBlock language="bash">{`claude -p "오늘 할 일 목록을 만들어줘" > 할일_오늘.md`}</CodeBlock>
          </li>
          <li>위의 "AI 사무실 구축 순서"를 참고해서 4주 계획을 세웁니다</li>
        </ol>
        <p className="mt-2">
          <strong>축하합니다!</strong> 이 강의를 모두 마치셨습니다.
          이제 여러분은 Claude Code를 활용해 업무를 혁신할 준비가 되었습니다.
          매일 조금씩, 꾸준히 사용해 보세요!
        </p>
      </TryThis>
    </>
  ),
};
