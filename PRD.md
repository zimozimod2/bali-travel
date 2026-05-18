\# 📄 발리 사누르 여행 힐링 랜딩 페이지 PRD (Product Requirement Document)



\## 1. 프로젝트 개요

\* \*\*프로젝트명:\*\* 발리 사누르 힐링 여행 홍보 랜딩 페이지\[cite: 2]

\* \*\*여행 테마:\*\* 힐링, 휴식, 여유로운 여행\[cite: 2]

\* \*\*주요 타겟:\*\* 일상에서 벗어나 온전한 쉼과 평온함을 원하는 여행자\[cite: 2]

\* \*\*핵심 목적:\*\* 상담 신청을 위한 고객 정보(이름, 연락처, 연령대) 수집\[cite: 2]



\## 2. 핵심 카피 및 톤앤매너

\* \*\*메인 슬로건:\*\* "쉼표가 필요한 당신에게, 가장 발리다운 평온함을 선물합니다."\[cite: 2]

\* \*\*디자인 톤앤매너:\*\* 사누르의 모래사장과 바다를 연상시키는 \*\*베이지 \& 파스텔 블루\*\* 기반의 따뜻하고 차분한 무드\[cite: 2]

\* \*\*테마 모드:\*\* 사용자의 시각적 편의를 위한 라이트모드 / 다크모드 토글 제공\[cite: 2]



\## 3. 페이지 구조 및 핵심 콘텐츠 (Section 구성)

1\. \*\*Hero Section (최상단 비주얼):\*\* 사누르의 한적한 해변/리조트 이미지 비주얼 + 메인 슬로건 + 라이트/다크모드 토글 버튼 (상단 우측 고정)\[cite: 2]

2\. \*\*Special Benefits Section (특별 혜택):\*\* 이번 여행 상품을 통해서만 제공되는 차별화된 힐링 혜택 안내\[cite: 2]

3\. \*\*Review Section (여행자 후기):\*\* 실제 사누르를 다녀온 여행자들의 힐링 후기를 담은 \*\*좌우 슬라이더(캐러셀)\*\*\[cite: 2]

4\. \*\*Process Section (상담 프로세스):\*\* 신청 후 상담이 진행되는 과정 안내 (예: 신청 -> 맞춤 컨설팅 -> 여행 출발)\[cite: 2]

5\. \*\*CTA/Lead Form Section (상담 신청 폼):\*\* 이름, 연락처, 연령대 입력란 + '상담 신청하기' 버튼\[cite: 2]



\## 4. 주요 기능 및 사용자 경험 (UX)

\* \*\*스크롤 애니메이션:\*\* 스크롤 시 콘텐츠가 부드럽게 위로 떠오르는 Fade-in 효과 적용\[cite: 2]

\* \*\*인터랙티브 슬라이더:\*\* 후기 섹션에서 유저가 마우스 드래그나 버튼 클릭으로 부드럽게 후기를 넘겨볼 수 있는 기능\[cite: 2]

\* \*\*다크모드 전환:\*\* 모드 변경 시 눈이 편안한 딥 블루/다크 베이지 톤으로 부드럽게 색상 전환\[cite: 2]

2️⃣ TRD.md 파일 만들기

동일한 방식으로 아래 코드를 복사하여 파일명을 TRD.md로 저장하세요.



Markdown

\# 🛠️ 발리 사누르 여행 힐링 랜딩 페이지 TRD (Technical Requirement Document)



\## 1. 기술 스택 및 환경

\* \*\*Frontend:\*\* HTML5, CSS3, Vanilla JavaScript (ES6+)\[cite: 1]

\* \*\*라이브러리 사용 여부:\*\* 외부 라이브러리(Swiper, ScrollMagic 등) 없이 \*\*Pure Vanilla Code\*\*로 구현하여 최적의 로딩 속도와 경량화 확보\[cite: 1]

\* \*\*디자인 시스템:\*\* CSS Custom Properties (Variables) 기반 색상 테마 관리\[cite: 1]



\## 2. 프로젝트 디렉토리 구조

```text

sanur-landing/

├── index.html

├── css/

│   └── style.css

└── js/

&#x20;   └── main.js

```\[cite: 1]



\## 3. 기능별 세부 구현 기술 사양



\### A. 다크모드/라이트모드 토글 (Theme Switcher)

\* \*\*메커니즘:\*\* `<body>` 태그에 `data-theme="dark"` 속성을 추가/제거하는 방식으로 구현\[cite: 1]

\* \*\*CSS 설정:\*\* variables를 활용하여 라이트모드와 다크모드의 색상을 매핑\[cite: 1]

&#x20; ```css

&#x20; :root {

&#x20;   --bg-color: #FDFBF7; /\* 베이지 \*/

&#x20;   --text-color: #2C3E50;

&#x20;   --accent-color: #A8D1E7; /\* 파스텔 블루 \*/

&#x20; }

&#x20; \[data-theme="dark"] {

&#x20;   --bg-color: #1A252F; /\* 딥 블루 \*/

&#x20;   --text-color: #ECF0F1;

&#x20;   --accent-color: #34495E;

&#x20; }

&#x20; 

```\[cite: 1]

\* \*\*JS 로직:\*\* 토글 버튼 클릭 시 `document.body.setAttribute('data-theme', 'dark')` 분기 처리 및 로컬스토리지(`localStorage`)에 유저가 선택한 테마를 저장하여 재방문 시 유지.\[cite: 1]



\### B. 스크롤 Fade-in 애니메이션 (Scroll Effect)

\* \*\*메커니즘:\*\* 성능 최적화를 위해 `window.addEventListener('scroll')` 대신 \*\*`IntersectionObserver` API\*\* 활용\[cite: 1]

\* \*\*CSS 설정:\*\* 애니메이션 대상 요소에 기본 상태(`opacity: 0`, `transform: translateY(30px)`)와 활성화 상태(`.visible`) 정의\[cite: 1]

&#x20; ```css

&#x20; .fade-in-element {

&#x20;   opacity: 0;

&#x20;   transform: translateY(30px);

&#x20;   transition: opacity 0.8s ease, transform 0.8s ease;

&#x20; }

&#x20; .fade-in-element.visible {

&#x20;   opacity: 1;

&#x20;   transform: translateY(0);

&#x20; }

&#x20; 

```\[cite: 1]

\* \*\*JS 로직:\*\* 화면에 요소가 10% 이상 노출될 때 (`threshold: 0.1`) `.visible` 클래스를 추가하도록 옵저버 등록.\[cite: 1]



\### C. 후기 섹션 좌우 슬라이더 (Vanilla JS Carousel)

\* \*\*메커니즘:\*\* CSS `transform: translateX()`와 Flexbox 구조를 결합한 가벼운 슬라이더 구조\[cite: 1]

\* \*\*HTML/CSS 구조:\*\* `slider-container`안에 전체 아이템을 감싸는 `slider-wrapper`를 배치하고, 내부의 `review-card`들을 가로 배치 (`display: flex`)\[cite: 1]

\* \*\*JS 로직:\*\*

&#x20; \* 현재 인덱스(`currentIndex`) 변수 관리\[cite: 1]

&#x20; \* 이전/다음 버튼 클릭 시 인덱스를 증감시키고 `wrapper.style.transform = \\`translateX(-${currentIndex \* 100}%)\\`` 연산 적용\[cite: 1]

&#x20; \* 부드러운 전환을 위해 CSS `transition: transform 0.4s ease-in-out` 부여\[cite: 1]



\### D. 상담 신청 폼 유효성 검사 (Form Validation)

\* \*\*입력 데이터 항목:\*\* 이름(`input\[type="text"]`), 연락처(`input\[type="tel"]`), 연령대(`select`)\[cite: 1]

\* \*\*검사 항목:\*\*

&#x20; \* 모든 필드의 필수 입력값 체크 (`required`)\[cite: 1]

&#x20; \* 연락처 입력 시 정규표현식(Regex)을 이용한 한국 휴대폰 번호 포맷(`/^010-\\d{3,4}-\\d{4}$/`) 검증\[cite: 1]

\* \*\*이벤트 처리:\*\* `form.addEventListener('submit')` 시 기본 동작을 막고(`e.preventDefault()`), 검증 통과 시 콘솔 출력 또는 모의 API 전송 트리거 시각화\[cite: 1]



\## 4. 웹 접근성 및 성능 최적화

\* \*\*Semantic Markup:\*\* 헤더(`<header>`), 섹션(`<section>`), 푸터(`<footer>`), 폼(`<form>`) 등 시맨틱 태그 준수\[cite: 1]

\* \*\*Responsive Design:\*\* CSS 미디어 쿼리(`@media`)를 이용해 모바일, 태블릿, 데스크탑 스크린

