export default function HeroCards() {
    const cards = [
        { title: "모집일정", line1: "~2025.09.07 (일요일)", line2: "# 사전학습제공" },
        { title: "교육일정", line1: "2025.09.16 ~ 2026.04.03", line2: "총 1,040시간 / 09:00 ~ 18:00" },
        { title: "교육장소", line1: "아이그로스 노량진 캠퍼스", line2: "" },
    ];

    return (
        <section className="mt-20 flex flex-col items-center gap-4 px-6">
            {/* 위쪽 3개 카드 */}
            <div className="flex justify-center gap-7">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-200 rounded-lg shadow-md p-5 flex flex-col items-center justify-center text-center w-80 hover:shadow-2xl transition-shadow duration-300"
                    >
                        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-700 bg-clip-text text-transparent">
                            {card.title}
                        </h3>
                        <p className="text-gray-700 font-bold text-xl">{card.line1}</p>
                        <p className="text-gray-500 mt-1 font-semibold">{card.line2}</p>
                    </div>
                ))}
            </div>

            {/* 밑에 2개 길쭉한 카드 */}
            <div className="relative border border-gray-200 
            bg-gray-200
            rounded-lg shadow-md mt-5 p-4 w-full 
            hover:shadow-2xl transition-shadow duration-300 h-35">

                {/* 텍스트와 이미지 영역 */}
                <div className="flex justify-between items-end h-full p-4">

                    {/* 왼쪽 텍스트 */}
                    <div className="text-left">
                        <h3 className="text-xl font-bold text-black">총 교육비</h3>
                        <h3 className="text-3xl font-bold flex items-end gap-2">
                            <span className="text-gray-500 line-through">18,876,000원</span>
                            <span className="text-4xl text-pink-600">전액무료!</span>
                        </h3>
                    </div>

                    {/* 오른쪽 이미지 */}
                    <img src="/card.png" alt="카드" className="w-[27%] object-contain absolute bottom-0 right-10" />

                </div>

            </div>

            <div className="border border-gray-200 
            bg-gray-200
            rounded-lg shadow-md p-6 
            hover:shadow-2xl transition-shadow duration-300 w-full">

                {/* 상단 문구 */}
                <h3 className="text-3xl font-bold text-center mb-8 
                bg-gradient-to-r from-red-900 via-orange-400 to-red-900 
                bg-clip-text text-transparent">
                    수강생들만을 위한 특별한 혜택
                </h3>

                {/* 6개 이미지 + 설명 */}
                <div className="grid grid-cols-6 gap-6 px-8 mb-6">
                    {[
                        { src: "/img1.png", label: "훈련장려금 월 최대\n816,000원 지급" },
                        { src: "/img2.png", label: "현직자 특강 및\n멘토링" },
                        { src: "/img3.png", label: "고성능 노트북\n무료 대여" },
                        { src: "/img4.png", label: "1:1 맞춤 취업 컨설팅" },
                        { src: "/img5.png", label: "자격증 취득 지원" },
                        { src: "/img6.png", label: "오프라인 학습 및\n회의공간 제공" },
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <img src={item.src} alt={item.label} className="w-16 h-16 object-contain" />
                            <p className="mt-3 text-s font-bold text-gray-700 text-center whitespace-pre-line">{item.label}</p>
                        </div>
                    ))}
                </div>

            </div>


        </section>
    );
}
