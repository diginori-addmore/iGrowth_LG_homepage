"use client";

import HeroCards from "./HeroCards";

export default function Hero() {
  return (
    <>
      {/* 모바일 화면을 위해 섹션의 상단(pt) 및 하단(pb) 여백을 조정합니다. */}
      <section id="apply" className="flex flex-col items-center justify-center text-center pt-28 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-gray-700 to-black">
        {/* TODO: Hero 이미지 배경 */}

        {/* 모바일에서 제목 폰트 크기를 반응형으로 조정합니다. */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight text-pink-500 px-4">
            LG U+ Why Not SW Camp <br />
          <span className="text-white text-2xl sm:text-3xl md:text-4xl block mt-2 md:mt-4">
            실무 + 클라우드 빅데이터 분석 &<br />
            서비스 개발 과정
          </span>
        </h1>

        {/* 모바일에서 본문 폰트 크기와 상단 여백을 조정합니다. */}
        <p className="mt-4 md:mt-6 text-base sm:text-lg text-white max-w-2xl px-4">
          🚫 무니만 실무형 강의 아님<br />
          🔥 프로젝트 수주 & 실무 & 경력 빌드업 과정!<br />
          👨‍🏫 네이버 출신 강사 + ✨ 카카오 출신 멘토와 함께<br />
          💼 실제 고객 비용 지급 + 📜 경력 증명서 발급<br />
          🇰🇷 국내 유일! 🎓 강의 + 💻 실무 동시 제공<br />
        </p>

        {/* 지원하기와 카카오톡 상담 버튼 */}
        {/* 모바일에서 버튼 상단 여백을 조정합니다. */}
        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="https://igrowth.recruit.roundhr.com/c/RWTJ5MAHQN/apply"
            // 버튼에 호버 효과를 추가하여 사용자 경험을 개선합니다.
            className="px-8 py-4 bg-pink-600 text-white rounded-lg shadow-lg hover:bg-pink-700 transition-all duration-300 font-bold text-lg transform hover:scale-105"
          >
            후회 말고 지원하기
          </a>
          <a
            href="https://pf.kakao.com/_lTcxcG/chat"
            target="_blank"
            rel="noopener noreferrer"
            // 버튼에 호버 효과를 추가하여 사용자 경험을 개선합니다.
            className="px-8 py-4 bg-yellow-400 text-black rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 font-bold text-lg transform hover:scale-105"
          >
            카카오톡 상담
          </a>
        </div>

        {/* HeroCards 컴포넌트를 다시 활성화합니다. */}
        <HeroCards />
      </section>
    </>
  );
}
