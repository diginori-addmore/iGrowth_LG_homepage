"use client";

import React, { useState, useEffect, useRef } from 'react';
import Apply from "./Apply";

// 강의실 이미지 데이터
const classroomData = [
    {
        id: 1,
        title: "세미나실",
        description: "설명문구기입",
        imgSrc: "pic_04.webp"
    },
    {
        id: 2,
        title: "스터디룸",
        description: "설명문구기입",
        imgSrc: "pic_05.webp"
    },
    {
        id: 3,
        title: "열람실",
        description: "설명문구기입",
        imgSrc: "pic_06.webp"
    },
    {
        id: 4,
        title: "강의실",
        description: "설명문구기입",
        imgSrc: "pic_07.webp"
    },
    {
        id: 5,
        title: "강의실",
        description: "설명문구기입",
        imgSrc: "pic_08.webp"
    },
    {
        id: 6,
        title: "1:1 멘토링 룸",
        description: "설명문구기입",
        imgSrc: "pic_09.webp"
    },
];

export default function Classroom() {
    const [activeIndex, setActiveIndex] = useState(0);
    const timeoutRef = useRef<number | null>(null);

    // 자동 슬라이드 기능
    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = window.setTimeout(
            () => setActiveIndex((prevIndex) => (prevIndex + 1) % classroomData.length),
            3000 // 3초마다 이미지 변경
        );

        return () => {
            resetTimeout();
        };
    }, [activeIndex]);

    const handleThumbnailHover = (index: number) => {
        resetTimeout(); // 자동 슬라이드 정지
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        // 마우스를 떼면 다시 자동 슬라이드 시작
        timeoutRef.current = window.setTimeout(
            () => setActiveIndex((prevIndex) => (prevIndex + 1) % classroomData.length),
            3000
        );
    };

    const activeImage = classroomData[activeIndex];

    return (
        <section className="bg-white text-gray-800 py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                {/* 제목 섹션 */}
                <div className="text-center mb-16">
                    <h3 className="text-lg md:text-xl font-bold text-pink-500 mb-2">최적의 학습 환경</h3>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">쾌적하고 몰입도 <br className='md:hidden' />높은 교육 공간</h2>
                </div>

                {/* 메인 이미지 뷰어 (A) - 모바일 높이를 h-[20rem]으로 수정 */}
                <div className="relative w-full max-w-[53rem] mx-auto h-[15rem] sm:h-[24rem] md:h-[30rem] rounded-2xl overflow-hidden shadow-2xl mb-8">
                    {/* 이미지 */}
                    <img
                        key={activeImage.id} // key를 변경하여 fade-in 효과를 트리거
                        src={activeImage.imgSrc}
                        alt={activeImage.title}
                        className="w-full h-full object-cover animate-fade-in"
                    />

                    {/* 이미지 제목 (상단) */}
                    <div className="absolute top-0 left-0 w-full p-2 md:p-4 bg-black bg-opacity-40">
                        <h4 className="text-lg md:text-xl font-bold text-white text-center">{activeImage.title}</h4>
                    </div>

                    {/* 이미지 설명 (하단 그라데이션)
                    <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-white via-white/90 to-transparent p-6 flex items-end">
                        <p className="text-gray-800 text-sm md:text-lg">{activeImage.description}</p>
                    </div> */}
                </div>

                {/* 썸네일 갤러리 (B) - 모바일 그리드 레이아웃으로 변경 */}
                <div
                    className="grid grid-cols-3 gap-2 md:flex md:justify-center md:gap-4 max-w-[53rem] mx-auto"
                    onMouseLeave={handleMouseLeave}
                >
                    {classroomData.map((item, index) => (
                        <div
                            key={item.id}
                            // 모바일: 그리드에 맞춰 w-full, 4:3 비율 / 데스크톱: 고정 크기
                            className="w-full aspect-[2:1] md:w-32 md:h-24 md:aspect-auto rounded-lg overflow-hidden cursor-pointer"
                            onMouseEnter={() => handleThumbnailHover(index)}
                        >
                            <img
                                src={item.imgSrc}
                                alt={item.title}
                                className={`w-full h-full object-cover transition-all duration-300 ${activeIndex === index ? 'border-4 border-pink-500 opacity-100' : 'opacity-60 hover:opacity-100'}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* Tailwind CSS 애니메이션을 위한 스타일 */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fadeIn 0.8s ease-in-out;
                }
            `}</style>
            <Apply />
        </section>
    );
}

