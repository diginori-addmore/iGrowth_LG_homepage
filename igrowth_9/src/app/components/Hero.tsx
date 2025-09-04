import HeroCards from "./HeroCards";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center pt-40 pb-20 bg-gradient-to-b from-gray-700 to-black">
        {/* TODO: Hero 이미지 배경 */}
        <h1 className="text-2xl md:text-3xl font-extrabold leading-tight text-pink-500">
          LG U+ Why Not SW Camp <br />
          <span className="text-white text-5xl block mt-4">
            클라우드 기반 빅데이터 분석 & 서비스 개발 과정 9기
          </span>
        </h1>
        <p className="mt-6 text-lg text-white">
          Why Not? 지금이 AI Transformation의 시작 <br />
          : 바이브 코딩으로 배우고, 생성형 AI로 더 빠르게 성장하자!
        </p>
        
        {/* 지원하기와 카카오톡 상담 버튼 */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="https://igrowth.recruit.roundhr.com/c/RWTJ5MAHQN/apply"
            className="px-8 py-4 bg-pink-600 text-white rounded-lg shadow-lg hover:bg-pink-700 transition-colors duration-300 font-bold text-lg"
          >
            지원하기
          </a>
          <a
            href="https://pf.kakao.com/_lTcxcG/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-yellow-400 text-black rounded-lg shadow-lg hover:bg-yellow-500 transition-colors duration-300 font-bold text-lg"
          >
            카카오톡 상담
          </a>
        </div>

        <HeroCards />
      </section>
    </>
  );
}