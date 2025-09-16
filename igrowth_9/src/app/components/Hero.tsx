"use client";

import Apply from "./Apply";

export default function Hero() {
  // 혜택 아이콘 데이터
  const benefits = [
    { src: "/images/icons/1.png", label: "훈련장려금 월 최대\n816,000원 지급" },
    { src: "/images/icons/2.png", label: "LG,네이버,카카오 등\n 현직자 특강 및\n멘토링 & 입사 추천서" },
    { src: "/images/icons/3.png", label: "고성능 노트북\n무료 대여" },
    { src: "/images/icons/4.png", label: "1:1 이력서, \n포트폴리오 작성 및\n현직자 책임 추천 제도" },
    { src: "/images/icons/5.png", label: "실무 프로젝트 수행 및\n수료 시 경력증명서 발급" },
    { src: "/images/icons/6.png", label: "오프라인 학습 및\n회의공간 제공" },
  ];

  // 상단 카드 데이터
  const topCards = [
    { title: "모집일정", line1: "~ 2025.09.21 (일요일)", line2: "# 사전 모집 중 !!" },
    { title: "교육일정", line1: "2025.10.21 ~ 2026.05.08", line2: "총 1,040시간 / 09:00 ~ 18:00" },
    { title: "교육장소", line1: "아이그로스 노량진 캠퍼스", line2: "# 네이버 출신 강사 멘토링" },
  ];

  return (
    <section
      id="apply"
      className="flex flex-col items-center justify-center text-center pt-28 pb-16 md:pt-40 md:pb-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #4A5568 0%, #000000ff 100%)",
      }}
    >
      {/* 배경 이미지 */}
      {/* 배경 이미지 (반응형) */}
      {/* 모바일용 배경: lg 사이즈보다 작을 때 보임 */}
      <div
        className="absolute top-0 left-0 w-full z-0 h-[28%] sm:h-[30%] md:h-[80%] lg:hidden"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          // 👇 100%를 85%로 수정하여 경계선을 없앱니다.
          maskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
          filter: 'brightness(1.2)',
        }}
      />
      {/* 데스크톱용 배경: lg 사이즈 이상일 때 보임 */}
      <div
        className="absolute top-0 left-0 w-full z-0 h-[28%] sm:h-[30%] md:h-[80%] hidden lg:block"
        style={{
          backgroundImage: "url('/background.png')",
          backgroundSize: '100% auto',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          // 👇 여기도 동일하게 수정합니다.
          maskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
          filter: 'brightness(1.2)',
        }}
      />
      <div className="absolute top-0 left-0 w-full z-0 bg-black opacity-10 h-[28%] sm:h-[30%] md:h-[60%]" />

      {/* --- 전체 컨테이너 --- */}
      <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
        {/* 제목 (데스크톱 좌정렬) */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight text-pink-500 lg:text-left">
          LG U⁺ Why Not SW Camp
          <span className="text-white text-3xl sm:text-4xl md:text-5xl block mt-2 md:mt-4">
            클라우드 빅데이터 분석 & <br className="mt-2 md:hidden" />
            실무 기반 서비스 개발 과정
          </span>
        </h1>

        {/* --- 데스크톱: 5단 그리드 기반으로 카드 너비 조정 / 모바일: 1단 --- */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* === 왼쪽 통합 카드 (모집/교육/장소) - 데스크톱에서 2칸 차지 --- */}
          <div className="lg:col-span-2 border-2 border-pink-500 bg-gradient-to-br from-gray-600/60 to-gray-900/60 backdrop-blur-sm rounded-lg shadow-lg p-4 md:p-6 flex flex-col justify-around text-center">
            {topCards.map((card, idx) => (
              <div key={idx}>
                {/* 상하 간격 조정을 위해 padding-top/bottom 늘림 */}
                {/* py-5 -> py-2 md:py-5 로 변경하여 모바일 내부 세로 패딩 축소 */}
                <div className="py-2 md:py-5">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-700 bg-clip-text text-transparent">
                    {card.title}
                  </h3>
                  <p className="text-white font-bold text-lg md:text-xl">{card.line1}</p>
                  {/* mb-4 -> mb-2 md:mb-4 로 변경하여 모바일 하단 마진 축소 */}
                  <p className="text-gray-300 mt-1 mb-2 md:mb-4 font-semibold">{card.line2}</p>
                </div>
                {idx < topCards.length - 1 && <hr className="border-gray-400/50" />}
              </div>
            ))}
          </div>

          {/* === 오른쪽 통합 카드 (교육비/혜택) - 데스크톱에서 3칸 차지 === */}
          <div className="lg:col-span-3 border-2 border-pink-500 bg-gradient-to-br from-white to-gray-300/60 backdrop-blur-sm rounded-lg shadow-lg p-6 flex flex-col gap-6">
            {/* 교육비 전액무료 섹션 (전체 좌정렬) */}
            <div className="text-left">
              <h3 className="text-lg sm:text-xl font-bold text-black">총 교육비</h3>
              <h3 className="text-3xl font-bold flex flex-wrap items-end justify-start gap-2">
                <span className="text-gray-500 line-through text-2xl sm:text-3xl">18,876,000원</span>
                <span className="text-3xl sm:text-4xl text-pink-500">전액무료!</span>
              </h3>
            </div>

            <hr className="border-gray-400/50" />

            {/* 특별 혜택 섹션 */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-red-900 via-orange-400 to-red-900 bg-clip-text text-transparent">
                수강생들만을 위한 특별한 혜택
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 px-2 sm:px-8">
                {benefits.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <img src={item.src} alt={item.label.substring(0, 10)} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                    <p className="mt-3 text-sm font-bold text-gray-700 text-center whitespace-pre-line">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- 하단 설명 및 지원하기 버튼 --- */}
        <div className="mt-16">
          <p className="text-base sm:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
            프로젝트 수주 / 실무 / 경력 빌드업 과정!
            <br />
            <span className="text-green-400">네이버</span> 출신 강사 + <span className="text-yellow-400">카카오</span> 출신 멘토와 함께
            <br />
            국내 유일! 강의와 실무 경험 동시 제공!
          </p>
          <Apply />
        </div>
      </div>
    </section>
  );
}