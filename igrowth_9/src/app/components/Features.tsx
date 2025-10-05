"use client";

import React from 'react';

export default function Features() {
    const features = [
        {
            img: "/images/features/feature1.webp",
            title: "기초 실습 & 프로젝트",
            description: (
                <>
                    <span className="text-pink-600 font-bold">초보자와 비전공자</span>도 네이버 출신 강사와 함께
                    <br className="md:hidden" />실전에서 쓰는 실무 역량을 쌓을 수 있습니다
                </>
            )
        },
        {
            img: "/images/features/feature2.webp",
            title: "AI & 데이터 분석",
            description: (
                <>
                    실무 데이터 분석과 <span className="text-pink-600 font-bold">AI 서비스 개발</span>
                    <br />
                    능력을 갖춘 인재로 성장합니다.
                </>
            )
        },
        {
            img: "/images/features/feature3.webp",
            title: "현업 프로젝트 경험",
            description: (
                <>
                    직접 기업에서 수주한 <span className="text-pink-600 font-bold">3회+ 프로젝트</span>로
                    <br />
                    실전 역량 및 경력있는 개발자로 <br />
                    만들어 드립니다
                </>
            )
        },
        {
            img: "/images/features/feature4.webp",
            title: "빠른 역량 향상",
            description: (
                <>
                    <span className="text-pink-600 font-bold">최신 바이브 코딩</span> 기법을 알려드립니다.
                    <br />
                    실전 경험이 없는 가짜 바이브 코딩이<br />
                    아닌 진짜를 배우세요.
                </>
            )
        }
    ];

    return (
        <section id="features" className="py-16 px-4 md:py-20 md:px-6 bg-gradient-to-b from-pink-100 to-white">
            <h2 className="text-sm md:text-2xl font-bold text-center mt-10 mb-3 text-pink-500">
                왜 LG U⁺ Why Not SW Camp 인가요?
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                누구든 실무 수행 경력의 <br className="md:hidden" />개발자로 만들어 드립니다
            </h2>

            {/* 모바일: 1열 -> sm: 2열 -> md: 4열 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {features.map((feature, idx) => (
                    <div key={idx} className="text-center">
                        {/* 이미지 박스 */}
                        <div className="w-full h-64 rounded-xl overflow-hidden shadow-sm mb-4">
                            <img
                                src={feature.img}
                                alt={feature.title}
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        {/* 텍스트 영역 */}
                        <h3 className="text-center md:text-left text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-center md:text-left text-gray-500 font-medium mb-10">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
