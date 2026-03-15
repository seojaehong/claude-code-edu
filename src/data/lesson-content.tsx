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
};
