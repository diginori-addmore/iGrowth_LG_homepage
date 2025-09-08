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
          className="absolute top-0 left-0 w-full h-[37%] bg-cover bg-top bg-no-repeat z-0" // 상단 40% 영역에만 적용
          style={{
            backgroundImage: "url('/lgup_exhi.jpg')", // 여기에 사용할 이미지 경로를 넣어주세요.
            // 이미지가 상단에만 나타나고 하단은 페이드아웃 되도록 마스크 적용
            maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)"
          }}
        ></div>

        {/* 어두운 오버레이를 추가하여 텍스트 가독성을 높입니다. (선택 사항, 필요 없으면 제거) */}
        <div className="absolute top-0 left-0 w-full h-[37%] bg-black opacity-20 z-0"></div> {/* 이미지 영역에만 오버레이 적용 */}

        {/* 기존 콘텐츠는 z-10으로 설정하여 배경 위로 오게 합니다. */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight text-pink-500 px-4 relative z-10">
          LG U+ Why Not SW Camp <br />
          <span className="text-white text-3xl sm:text-4xl md:text-5xl block mt-2 md:mt-4">
            클라우드 기반 빅데이터 분석 & 서비스 개발 과정 9기
          </span>
        </h1>

        <p className="mt-4 md:mt-6 text-base sm:text-lg text-white max-w-2xl px-4 relative z-10">
          바로 경력이 되는 LG U+ 만의 '진짜' 실무 강의를 만나보세요
        </p>

        <p className="mt-4 md:mt-6 text-base sm:text-lg text-white max-w-2xl px-4 relative z-10">
          Why Not SW Camp는 실무형 강의가 아닌 실무 그 자체를 제공합니다. <br />
          실제 현업 프로젝트로 배우고, 팀 단위 협업과 배포까지 경험하며
          수료 후 곧바로 현업에 투입 가능한 개발자로 성장합니다. <br />
          또한, 수료 후 실무 프로젝트 기반 경력 증명서를 수료증과 함께 발급해 드립니다.
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