"use client";

import HeroCards from "./HeroCards";

export default function Hero() {
  return (
    <>
      <section
        id="apply"
        className="flex flex-col items-center justify-center text-center pt-28 pb-16 md:pt-40 md:pb-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #4A5568 0%, #000000 100%)", // gray-700에서 black으로 그라데이션
        }}
      >
        {/* 배경 이미지와 그라데이션 오버레이 */}
        <div
          className="absolute top-0 left-0 w-full z-0
             h-[28%] sm:h-[30%] md:h-[60%]
             bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: "url('/lgup_exhi.jpg')",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)"
          }}
        ></div>

        {/* 어두운 오버레이도 이미지와 동일하게 높이를 조절합니다. */}
        <div
          className="absolute top-0 left-0 w-full z-0 bg-black opacity-10
             h-[28%] sm:h-[30%] md:h-[60%]"
        ></div>


        {/* 모바일에서 제목 폰트 크기를 반응형으로 조정합니다. */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight text-pink-500 px-4 relative z-10">
          LG U+ Why Not SW Camp <br />
          <span className="text-white text-3xl sm:text-4xl md:text-5xl block mt-2 md:mt-4">
            클라우드 빅데이터 분석 &<br />
            실무 기반 서비스 개발 과정
          </span>
        </h1>

        {/* 모바일에서 본문 폰트 크기와 상단 여백을 조정합니다. */}
        <p className="mt-4 md:mt-6 text-base text-sm sm:text-lg text-white max-w-2xl px-4 relative z-10">
          <br />
          프로젝트 수주 & 실무 & 경력 빌드업 과정!<br />
          네이버 출신 강사 + 카카오 출신 멘토와 함께<br />
          경력 증명서 + 수료증 발급<br />
          국내 유일! 강의 + 실무 경험 제공<br />
        </p>

        <div className="mt-8 md:mt-12 flex flex-row justify-center gap-4 relative z-10">
          <a
            href="https://igrowth.recruit.roundhr.com/c/RWTJ5MAHQN/apply"
            className="px-8 py-4 bg-pink-600 text-white rounded-lg shadow-lg hover:bg-pink-700 transition-all duration-300 font-bold text-lg transform hover:scale-105"
          >
            지원하기
          </a>
          <a
            href="https://pf.kakao.com/_lTcxcG/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-yellow-400 text-black rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 font-bold text-lg transform hover:scale-105"
          >
            카카오톡 상담
          </a>
        </div>

        <HeroCards />
      </section>
    </>
  );
}