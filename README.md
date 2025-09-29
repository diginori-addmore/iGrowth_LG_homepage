# LG U+ 연계 Why Not SW Camp 랜딩 페이지

![Why Not SW Camp](https://whynotcamp.igrowth.kr/open_graph.png)

## 프로젝트 소개

국내 유일 AI 경력 증명서 발급 부트캠프인 **Why Not SW Camp**의 공식 랜딩 페이지입니다.

교육과 동시에 실무 이력을 만들어 200% 취업률을 목표로 하는 LG U+ 연계 부트캠프를 소개합니다.

**배포 URL**: https://whynotcamp.igrowth.kr/

## 주요 기능

-  **고급 사용자 분석**: Amplitude를 통한 실시간 사용자 행동 추적 및 세션 리플레이
-  **반응형 디자인**: 모바일/태블릿/데스크톱 완벽 대응
-  **마케팅 통합**: Google Tag Manager, Meta Pixel 연동으로 종합적인 추적
-  **성능 최적화**: Next.js 15 + Turbopack으로 빠른 개발 및 빌드
-  **한국어 최적화**: Pretendard 폰트로 깔끔한 한글 타이포그래피
-  **실시간 이벤트 추적**: 사용자 활동 시간, 클릭, 스크롤 등 상세 분석

##  기술 스택

### Frontend
- **Framework**: Next.js 15.5.2 (App Router)
- **Language**: TypeScript 5
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 3.4.17

### Analytics & Marketing
- **사용자 분석**: Amplitude Analytics Browser 2.23.6, Google Analytics
- **세션 리플레이**: Amplitude Session Replay Plugin 1.22.11
- **광고 추적**: Google Tag Manager, Meta Pixel
- **아이콘**: Lucide React 0.542.0

### Development Tools
- **Build Tool**: Turbopack (Next.js 내장)
- **Code Quality**: ESLint 9, TypeScript
- **Package Manager**: pnpm (권장)
- **Font**: Pretendard 5.2.5 (한국어 최적화)

##  설치 및 실행

### 환경 요구사항
- Node.js 18.0.0 이상
- pnpm (권장) 또는 npm

### 설치
```bash
# 저장소 클론
git clone https://github.com/your-org/iGrowth_LG_homepage.git
cd iGrowth_LG_homepage/igrowth_9

# 의존성 설치
pnpm install

# 환경 변수 설정 (선택사항)
# Amplitude API 키는 이미 analytics.ts에 설정되어 있음
```

### 실행
```bash
# 개발 서버 시작 (Turbopack 사용)
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 서버 시작
pnpm start

# 코드 품질 검사
pnpm lint
```

개발 서버는 http://localhost:3000 에서 확인할 수 있습니다.

##  프로젝트 구조

```
iGrowth_LG_homepage/
├── igrowth_9/                    # 메인 Next.js 애플리케이션
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/       # UI 컴포넌트
│   │   │   │   ├── Hero.tsx     # 메인 히어로 섹션 (지원 정보)
│   │   │   │   ├── Features.tsx # 부트캠프 특징 소개
│   │   │   │   ├── Curriculum.tsx # 커리큘럼 상세 정보
│   │   │   │   ├── Teacher.tsx  # 강사진 소개
│   │   │   │   ├── Result.tsx   # 교육 성과 및 후기
│   │   │   │   ├── Apply.tsx    # 지원하기 CTA 버튼
│   │   │   │   ├── FAQ.tsx      # 자주 묻는 질문
│   │   │   │   ├── events.tsx   # 사용자 활동 추적 시스템
│   │   │   │   └── ...
│   │   │   ├── layout.tsx       # 루트 레이아웃 (SEO, 분석 도구)
│   │   │   ├── page.tsx         # 메인 페이지 구성
│   │   │   ├── providers.tsx    # Context Providers
│   │   │   └── AmplitudeInit.tsx # Amplitude 초기화
│   │   ├── lib/
│   │   │   └── analytics.ts     # Amplitude 설정 및 헬퍼
│   │   └── globals.css          # 전역 스타일
│   ├── public/                  # 정적 파일
│   │   ├── images/             # 이미지 에셋
│   │   └── favicon.png         # 파비콘
│   ├── package.json            # 프로젝트 설정
│   ├── tailwind.config.js      # Tailwind 설정
│   └── next.config.ts          # Next.js 설정
└── README.md                   # 이 파일
```

##  주요 컴포넌트 및 기능

###  사용자 분석 시스템
- **`events.tsx`**: 실시간 사용자 활동 추적
  - 마우스 움직임, 키보드 입력, 스크롤 감지
  - 실제 활성 시간 계산 (탭 전환, 비활성 시간 제외)
  - 성능 최적화를 위한 이벤트 스로틀링
- **`analytics.ts`**: Amplitude 통합 및 이벤트 관리
  - 자동 페이지뷰 추적
  - 사용자 속성 관리
  - 세션 리플레이 기능

###  메인 페이지 섹션
- **`Hero`**: 메인 비주얼, 모집 일정, 지원 버튼
- **`Features`**: 6가지 핵심 혜택 (훈련장려금, 멘토링, 노트북 대여 등)
- **`Curriculum`**: 상세 교육 과정 및 일정
- **`Teacher`**: 네이버, LG 출신 강사진 소개
- **`Result`**: 수료생 성과 및 취업 현황
- **`Apply`**: 지원하기 및 카카오톡 상담 CTA

###  마케팅 도구 통합
- **Google Tag Manager**: 포괄적인 이벤트 추적
- **Meta Pixel**: 페이스북 광고 최적화
- **버튼 클릭 추적**: 지원하기, 상담하기 등 주요 액션 모니터링

##  배포

### Vercel (권장)
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### 기타 플랫폼
- **Netlify**: `pnpm build` 후 `out` 폴더 배포
- **AWS**: S3 + CloudFront 또는 EC2
- **기타**: Docker 컨테이너화 가능

##  성능 최적화

-  **Turbopack**: 기존 Webpack 대비 10배 빠른 개발 환경
-  **이미지 최적화**: Next.js Image 컴포넌트 활용
-  **반응형 이미지**: 디바이스별 최적화된 해상도 제공
-  **지연 로딩**: 뷰포트 진입 시점에 컨텐츠 로드
-  **분석 최적화**: 이벤트 스로틀링으로 성능 영향 최소화

##  개발 가이드

### 코드 스타일
- **ESLint**: Next.js 권장 설정 사용
- **TypeScript**: 엄격한 타입 체크 활성화
- **Tailwind**: 유틸리티 클래스 기반 스타일링

### 컴포넌트 구조
```typescript
// 컴포넌트 예시
export default function ComponentName() {
  return (
    <section className="responsive-classes">
      {/* 컴포넌트 내용 */}
    </section>
  );
}
```

### 이벤트 추적 추가
```typescript
import { useActivityTracker } from './events';

export default function NewComponent() {
  const { trackButtonClick } = useActivityTracker();

  const handleClick = () => {
    trackButtonClick({
      button_name: "버튼명",
      page_url: window.location.href,
      referrer: document.referrer || "(direct)",
      section: "섹션명"
    });
  };
}
```

##  문제 해결

### 일반적인 문제
1. **빌드 오류**: `pnpm clean && pnpm install` 후 재시도
2. **타입 오류**: `npx tsc --noEmit`로 타입 체크
3. **스타일 미적용**: Tailwind 설정 및 CSS 임포트 확인
4. **Amplitude 연동**: analytics.ts 파일의 API 키 설정 확인

### 성능 최적화
- 개발 모드에서 느린 경우: Turbopack 사용 확인 (`--turbopack` 플래그)
- 빌드 시간 단축: `.next` 폴더 삭제 후 재빌드

##  연락처 및 지원

- **프로젝트 관련 문의**: [기술팀 연락처]
- **부트캠프 상담**: [카카오톡 상담](https://pf.kakao.com/_lTcxcG/chat)
- **지원하기**: [지원 페이지](https://igrowth.recruit.roundhr.com/c/RWTJ5MAHQN/apply)

##  라이선스

이 프로젝트는 [라이선스명]에 따라 라이선스가 부여됩니다.

---

**Why Not SW Camp** - 국내 유일 AI 경력 증명서 발급 부트캠프
*교육과 동시에 실무 이력 만들기, 200% 취업률 달성*
