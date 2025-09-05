"use client";

import React from 'react';

// 박스에 들어갈 데이터
const supportData = [
    {
        title: "수강 중",
        details: [
            "선도기업 현직자 특강",
            "프로젝트 진행 시 기술 자문",
            "공모전, 해커톤 진행 시 멘토링 지원",
            "포트폴리오 및 이력서 자소서 특강",
            "1:1 취업 컨설팅 진행"
        ],
    },
    {
        title: "수료 후",
        details: [
            "입사 지원 서류 1:1 컨설팅",
            "포트폴리오 1:1 컨설팅",
            "기술면접 컨설팅"
        ],
    },
];

export default function Job() {
    return (
        // 모바일 화면을 위해 섹션의 좌우(px) 및 하단(pb) 여백을 조정합니다.
        <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 pb-24 md:pb-40">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 md:mb-16">
                    {/* 모바일에서 소제목 폰트 크기를 살짝 줄입니다. */}
                    <h3 className="text-lg sm:text-xl font-bold text-pink-500 mb-2">끝나도 끝난 게 아니다. 취업의 그 날까지</h3>
                    {/* 모바일에서 메인 제목 폰트 크기를 반응형으로 조정합니다. */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">성공적인 취업을 위한 A to Z</h2>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
                    {supportData.map((item, index) => (
                        <div key={index} className="w-full md:w-2/5 flex flex-col rounded-xl overflow-hidden shadow-lg">
                            {/* 상단: 제목 부분 */}
                            <div className="bg-pink-400 p-4">
                                {/* 모바일에서 박스 제목 폰트 크기를 조정합니다. */}
                                <h4 className="text-xl sm:text-2xl font-bold text-center">{item.title}</h4>
                            </div>

                            {/* 하단: 내용 부분 */}
                            <div className="bg-white/5 p-6 sm:p-8 h-full">
                                <ul className="space-y-4">
                                    {item.details.map((detail, i) => (
                                        <li key={i} className="flex items-start text-gray-300">
                                            <svg className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
