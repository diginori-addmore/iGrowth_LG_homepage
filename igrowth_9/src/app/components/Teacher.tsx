"use client";

import React from 'react';

// 실제 애플리케이션에서는 이 데이터를 API로부터 받아올 수 있습니다.
const teacherData = {
    name: "민경국 강사님",
    title: "22년 경력 실무에서 검증된 개발자",
    bio: "네이버 출신 개발자로",
    career: [
        "현 디지노리 대표(수강자 실무 프로젝트 경력 증명서 발급)",
        "국내 최대 데이터파이프라인 구축(네이버 쇼핑)",
        "CLOVA AI 개발 참여 및 Naver LINE 어뷰징 분석 빅데이터 플랫폼 개발",
        "캐시슬라이드 및 SKB 광고 타켓팅 개발",
    ],
    aim_title: ["많은 부트캠프가 프로젝트 “흉내”만 내는 데 머무릅니다.", "그러나 우리는 현업에서 바로 인정받을 수 있는 경험을 쌓게 합니다."],
    aim: ["실무형 강의: 개발 환경 세팅, 직접 작성해보는 코드, 바이브코딩, 협업 방식, 문제 해결 중심의 강의",
        "실제 프로젝트 진행: 제출용 모의 과제가 아니라, 실제 실무 프로젝트 기반 진행",
        "경력 증명 지원: 취업 경쟁력 강화를 위해 수료 후, 3가지 경력 기반 증빙서류 제공 예정"
    ],
};

export default function Teacher() {
    return (
        // 모바일: py-16 px-4 / 데스크톱: py-40 px-6
        <section className="bg-white text-gray-800 py-16 px-4 md:py-40 md:px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-lg md:text-xl font-bold pb-5 text-pink-400 mt-4">최고의 전문가가 여러분의 성장을 이끌어갑니다.</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">LG U+ WHY NOT SW CAMP의 강사진 소개</h2>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                    {/* 좌측: 강사 사진 */}
                    {/* 모바일 화면에서 너비를 w-1/2로 수정하여 크기를 줄입니다. */}
                    <div className="w-1/2 sm:w-2/3 md:w-1/3 flex-shrink-0">
                        <img
                            src="/teacher.png"
                            alt={`${teacherData.name} profile picture`}
                            className="w-full h-auto rounded-2xl object-cover"
                        />
                    </div>

                    {/* 우측: 강사 정보 */}
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold text-black">{teacherData.name}</h3>
                        <p className="text-lg md:text-xl font-medium text-gray-700 mt-1 mb-6 whitespace-pre-line">{teacherData.title}</p>

                        <p className="text-gray-600 leading-relaxed mb-8">
                            {teacherData.bio}
                        </p>

                        {/* '주요 경력' 목록 */}
                        <ul className="text-sm md:text-lg space-y-3 text-gray-600 mb-6">
                            {teacherData.career.map((item, index) => (
                                // li를 flex 대신 grid로 변경하여 정렬 문제를 해결합니다.
                                <li key={index} className="grid grid-cols-[auto_1fr] gap-x-3">
                                    <svg className="w-5 h-5 text-pink-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">실무를 그대로 경험하는 교육</h4>

                            <p className="text-gray-600 leading-relaxed mb-8">
                                {teacherData.aim_title.map((line, idx) => (
                                    <span key={idx} className="block">{line}</span>
                                ))}
                            </p>

                            {/* '교육 목표' 목록 */}
                            <ul className="text-sm md:text-lg space-y-3 text-gray-600">
                                {teacherData.aim.map((item, index) => (
                                    // 여기도 동일하게 grid를 적용하여 가독성을 높입니다.
                                    <li key={index} className="grid grid-cols-[auto_1fr] gap-x-3">
                                        <svg className="w-5 h-5 text-pink-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}