"use client";

import React from 'react';

export default function Labtop() {
    return (
        // 모바일에서는 수직(flex-col), 데스크톱에서는 수평(md:flex-row)으로 레이아웃 변경
        // 화면 크기에 따라 여백(padding, gap) 조정
        <section className="relative flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-white to-pink-200 py-16 px-4 md:px-8 gap-8">

            {/* 왼쪽 이미지 */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-left">
                <img
                    src="/labtop.png"
                    alt="랩탑"
                    // 모바일과 데스크톱에서 이미지 높이 조정
                    className="h-40 md:h-60 object-contain"
                />
            </div>

            {/* 오른쪽 텍스트 */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    교육용 <span className="text-pink-500">고성능 노트북 무료 </span>지원
                </h2>
                <p className="text-base md:text-lg text-gray-600">
                    i7-13620H / RAM 32GB / RTX 4060
                </p>
            </div>

        </section>
    )
}