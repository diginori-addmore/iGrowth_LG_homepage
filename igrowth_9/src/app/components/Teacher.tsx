"use client";

import React from 'react';

// 실제 애플리케이션에서는 이 데이터를 API로부터 받아올 수 있습니다.
const teacherData = {
    name: "민경국 강사님",
    title: "22년 경력 전 네이버/라인플러스 핵심 빅데이터 프로젝트 전문가\n대규모 IT 서비스 데이터 시스템 설계 및 운영 노하우 보유",
    bio: "효과적인 소개 멘트",
    career: [
        "NAVER 전사 파이프라인 통합 구축",
        "Clova BI 지표 ETL",
        "B-TV 가족 분류 광고 타게팅",
        "캐시슬라이드 광고 타게팅 AWS 구축",
        "퍼블릭 클라우드(AWS, GCP) 및 프라이빗 클라우드(LINE VERDA, nCloud) 기반 빅데이터 플랫폼 구축 운영",
        "지자체, 반도체, 국정원 ,교육, 게임, 광고, 메신저, 포털 등 다양한 도메인 경험",
        "유지보수 엔지니어, 컨설팅, 사업관리, 창업, 스타트업, 애자일코치 등 다양한 역할 경험",
        "데이터 파이프라인, BI분석, 이상 탐지 등 실제 프로젝트 기반의 실습 중심 강의 진행"
    ],
};

export default function Teacher() {
    return (
        // 모바일: py-16 px-4 / 데스크톱: py-40 px-6
        <section className="bg-white text-gray-800 py-16 px-4 md:py-40 md:px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-pink-500">강사진 소개</h2>
                    <p className="text-base md:text-lg text-gray-600 mt-4">최고의 전문가가 여러분의 성장을 이끌어갑니다.</p>
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

                        <div>
                            <h4 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">주요 경력</h4>
                            <ul className="space-y-3 text-gray-600">
                                {teacherData.career.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="w-5 h-5 text-pink-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
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