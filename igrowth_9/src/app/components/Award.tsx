"use client";

import React from 'react';

export default function Award() {
    return (
        // relative와 overflow-hidden을 추가하여 배경 이미지의 기준점과 영역을 설정합니다.
        <section className="relative bg-[#020204] text-white py-40 px-6 overflow-hidden">

            {/* 새로운 배경 이미지: z-0으로 맨 뒤에 배치 */}
            <div className="absolute bottom-0 left-0 right-0 h-3/4 z-0 opacity-70">
                <img
                    src="/award_effect.png"
                    alt="Abstract background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 기존 콘텐츠를 z-10으로 설정하여 배경 이미지 위에 오도록 합니다. */}
            <div className="container mx-auto max-w-5xl relative z-10">

                {/* 제목 섹션 */}
                <div className="text-center mb-16">
                    <h3 className="text-xl font-bold text-pink-500 mb-2">
                        대외적으로 인정받은 교육 과정
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        우수 훈련기관 수상 이력
                    </h2>
                </div>

                {/* 이미지 레이아웃 섹션 */}
                <div className="flex flex-col items-center gap-8">

                    {/* 첫 번째 가로 이미지 */}
                    <div className="w-full md:w-4/5 transform transition-transform duration-300 hover:scale-105">
                        <img
                            src="/award1.jpg"
                            alt="Award 1"
                            className="w-full h-auto shadow-2xl border-2 border-yellow-800"
                        />
                    </div>

                    {/* 두 번째 가로 이미지 */}
                    <div className="w-full md:w-4/5 transform transition-transform duration-300 hover:scale-105">
                        <img
                            src="/award2.jpg"
                            alt="Award 2"
                            className="w-full h-auto shadow-2xl border-2 border-yellow-800"
                        />
                    </div>

                    {/* 세 개의 정사각형 이미지 */}
                    <div className="flex flex-col md:flex-row justify-center gap-8 w-full mt-8">
                        <div className="w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105">
                            <img
                                src="/awarded_01.jpg"
                                alt="Award 3"
                                className="w-full h-auto shadow-2xl border-2 border-yellow-800 aspect-square object-cover"
                            />
                        </div>
                        <div className="w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105">
                            <img
                                src="/awarded_02.jpg"
                                alt="Award 4"
                                className="w-full h-auto shadow-2xl border-2 border-yellow-800 aspect-square object-cover"
                            />
                        </div>
                        <div className="w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105">
                            <img
                                src="/awarded_03.jpg"
                                alt="Award 5"
                                className="w-full h-auto shadow-2xl border-2 border-yellow-800 aspect-square object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* 홍보 문구 섹션 */}
                <div className="text-center mt-20">
                    <p className="text-2xl md:text-3xl font-semibold text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        수많은 수상 경력이 증명하는<br />
                        <span className="text-pink-400">체계적이고 전문적인 교육 시스템</span>을 경험하세요.
                    </p>
                </div>

            </div>
        </section>
    );
}
