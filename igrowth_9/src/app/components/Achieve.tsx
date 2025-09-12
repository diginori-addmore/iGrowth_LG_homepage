import React from 'react';

export default function PromoPage() {
    return (
        // 전체 화면을 차지하는 메인 컨테이너
        <div className="relative flex items-center justify-center h-[25vh] md:h-[50vh] w-full overflow-hidden bg-gradient-to-br from-black via-gray-800 to-pink-700">

            {/* 색종이 효과 컨테이너 */}
            <div className="confetti-container">
                {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="confetti"></div>
                ))}
            </div>


            {/* 텍스트 컨테이너 */}
            <div className="text-center z-10">
                <p className="text-yellow-500 text-sm md:text-2xl mt-4 mb-5">
                    국내유일! 전체 교육과정 수료 시
                </p>
                <h1 className="text-3xl md:text-7xl font-bold text-white leading-tight mb-4">
                    수강생 전원 경력증명서
                    <br />
                    <span className="text-pink-500 text-4xl md:text-8xl">
                        100%
                    </span>
                    {' '} {/* 공백 추가 */}
                    발급!
                </h1>
            </div>

        </div>
    );
}