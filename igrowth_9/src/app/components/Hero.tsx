"use client";

import * as amplitude from "@amplitude/analytics-browser";
import HeroCards from "./HeroCards";
import Apply from "./Apply";

export default function Hero() {


  return (
    <>
      <section
        id="apply"
        className="flex flex-col items-center justify-center text-center pt-28 pb-16 md:pt-40 md:pb-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #4A5568 0%, #000000 100%)",
        }}
      >
        {/* 배경 이미지 */}
        <div
          className="absolute top-0 left-0 w-full z-0 h-[28%] sm:h-[30%] md:h-[60%] bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: "url('/lgup_exhi.jpg')",
            maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 100%)",
          }}
        />
        {/* 어두운 오버레이 */}
        <div className="absolute top-0 left-0 w-full z-0 bg-black opacity-10 h-[28%] sm:h-[30%] md:h-[60%]" />

        {/* 제목 */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight text-pink-500 px-4 relative z-10">
          LG U+ Why Not SW Camp <br />
          <span className="text-white text-3xl sm:text-4xl md:text-5xl block mt-2 md:mt-4">
            클라우드 빅데이터 분석 &<br />
            실무 기반 서비스 개발 과정
          </span>
        </h1>

        {/* 설명 */}
        <p className="mt-4 md:mt-6 text-base text-sm sm:text-lg text-white max-w-2xl px-4 relative z-10">
          <br />
          프로젝트 수주 & 실무 & 경력 빌드업 과정!
          <br />
          네이버 출신 강사 + 카카오 출신 멘토와 함께
          <br />
          국내 유일! 강의와 실무 경험 동시 제공!
          <br />
        </p>
        <Apply />

        <HeroCards />
      </section>
    </>
  );
}
