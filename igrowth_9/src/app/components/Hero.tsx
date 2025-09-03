import HeroCards from "./HeroCards";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center pt-60 pb-20 bg-gradient-to-b from-gray-700 to-black">
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
        {/* 버튼 영역은 일단 주석 처리 */}
        {/* <div className="mt-8 flex gap-4">
        <a
          href="#apply"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700"
        >
          지금 지원하기
        </a>
        <a
          href="#curriculum"
          className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50"
        >
          커리큘럼 보기
        </a>
      </div> */}

        <HeroCards />
      </section>
    </>
  );
}