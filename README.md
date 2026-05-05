# DoItList1
your better than yesterday

단순한 일 관리와 깔끔한UI와 직관적인 UX를 제공하는REACT기반의 To List 애플리케이션입니다.

MainLanding:애니메이션 효과가 적용된 진입 화면
toDo Dashboard 컴포넌트 기반으로 설계된 효율적인 할 일 관리 대시보드

주요기능 KeyFeatures
직관적인 투두 관리
- create:할일 이름과 상세 메모를 분리하여 입력 가능(엔터키 등록 지원)
- read: all,active,completed 필터링 기능 제공
- update:쟈ㅜ앶.ㅔ개ㅡㅔㅅfmf ghkfdydgkdu dlfmarhk apahfmf wmrtl tnwjd rksmd
- delete: 실수 방지를 위한 삭제 확인 팝업(confirm)기능

  사용자 경험최적화
- 상태유지:Localstorage를 활용하여 브라우저를 새로고침해도 데이터가 보존됩니다.
- 반응형 디자인: 모바일과 데스크톱 환경 모두 최적화된 레이아웃으로 생성했습니다.
- 조건부 렌더링: 완료된 항목은 스타일 변화(Line-through)와 투명도 조절로 시각적으로 상태의 확인이 가능하도록 설계했습니다.

  컴포넌트 기반 설계
  - TodoInput:입력 로직 및 유효성 검사 담당
  - TodoItem:개별 아이템의 수정/삭제/토글 액션 담당
  - TodoFilter: 필터링 상태 관리

사용 기술
- Language:javaScript
- Libary:React.js
- Styling:CSS3(Flexbox,KeyframeAnimations)
- Tools:GitHun,VS Code,from Coadsandbox

  프로젝트 구조
  src/
  - Abb.js  메인 화면 전환 로직
  - app.js  투두 리스트의 핵심 상태 관리 및 데이터 처리
  - TodoInput.js  신규 할 일 추가 컴포넌트
  - TodoItem.js  할 일 카드 및 수정/삭제, 기능 컴포넌트
  - TodoFilter.js  필터 버튼 컴포넌트
  - styles.css  메인 페이지 및 전역 애니메이션 스타일
  - style2.css  투두 리스트 및 컴포넌트 상세 스타일


  시작하기
  1. 저장소 클론
  bash
  git clone https://github.com/사용자아이디/저장소이름.git
  2. 의존성 설치 및 실행
  Bash
  npm install
  npm start

