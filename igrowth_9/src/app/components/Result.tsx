"use client";

import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// 블로그 후기 카드 데이터
const reviewData = [
    {
        img: "/igrowth.webp",
        text: "기초는 쌓였고, 이제는\n'써먹는 법'을 익힐 차례",
        link: "https://velog.io/@kangte/LG-U-Why-Not-SW-CAMP-6%EA%B8%B0-4%EC%9B%94-5%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0"
    },
    {
        img: "/igrowth.webp",
        text: "배우고 쓰고 도전하며,\n익숙해지고 단단해지는 중",
        link: "https://velog.io/@muneuy311/LG-U-Why-Not-SW-CAMP-7%EA%B8%B0-11%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0"
    },
    {
        img: "/igrowth.webp",
        text: "처음 접한 클라우드,\n낯섦 속에서 흐름 잡기",
        link: "https://velog.io/@pminsang/%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%EB%82%B4-%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%B2%98%EB%A6%AC-%EB%B0%8F-%EC%84%9C%EB%B9%84%EC%8A%A4%EA%B0%9C%EB%B0%9C-%EA%B3%B5%EB%B6%80-7.147.18"
    },
    {
        img: "/igrowth.webp",
        text: "서툰 협업이었으나 함께 부딪히며\n진짜 팀워크를 배웠다.",
        link: "https://velog.io/@baehj0907/LG-U-Why-Not-SW-Camp-7%EA%B8%B0-7%EC%9B%94-3%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0"
    },
    {
        img: "/igrowth.webp",
        text: "보이는 것에 그치지 않고,\n의미를 찾는 데이터 여정을 시작하다.",
        link: "https://velog.io/@iriseverywhere/LG-U-Why-Not-SW-Camp-7%EA%B8%B0-%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0-qs40sayl"
    },
    {
        img: "/igrowth.webp",
        text: "머릿속 지식을 코드로,\n코드에서 프로젝트로 확장하는 중",
        link: "https://velog.io/@whtjsdud54/LG-U-Why-Not-SW-Camppython-6%EC%9B%94-2%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0%EB%A1%9D"
    },
];

// 프로젝트 결과물 카드 데이터 (상단 7개)
const projectDataTop = [
    { img: "/proj_01.png", link: "https://github.com/whynotsw-camp/wh01-3rd-1team-CounselingHelp" },
    { img: "/proj_02.png", link: "https://github.com/whynotsw-camp/wh01-3rd-2team-DOD" },
    { img: "/proj_03.png", link: "https://github.com/whynotsw-camp/wh01-3rd-3team-UTIDAL" },
    { img: "/proj_04.png", link: "https://github.com/whynotsw-camp/wh01-3rd-4team-DATARO" },
    { img: "/proj_05.png", link: "https://github.com/whynotsw-camp/wh01-3rd-5team-GrandmaBae" },
    { img: "/proj_06.png", link: "https://github.com/whynotsw-camp/wh02-3rd-1team-CHEONGYAGI" },
    { img: "/proj_07.png", link: "https://github.com/whynotsw-camp/wh02-3rd-2team-YNW" },
];

// 프로젝트 결과물 카드 데이터 (하단 7개)
const projectDataBottom = [
    { img: "/proj_08.png", link: "https://github.com/whynotsw-camp/wh02-3rd-3team-SHC" },
    { img: "/proj_09.png", link: "https://github.com/whynotsw-camp/wh02-3rd-4team-YCJ" },
    { img: "/proj_10.png", link: "https://github.com/whynotsw-camp/wh03-3rd-Ateam-BorderCollies" },
    { img: "/proj_11.png", link: "https://github.com/whynotsw-camp/wh03-3rd-Bteam-Short-U" },
    { img: "/proj_12.png", link: "https://github.com/whynotsw-camp/wh05-3rd-Pteam" },
    { img: "/proj_13.png", link: "https://github.com/whynotsw-camp/wh05-3rd-JungSung" },
    { img: "/proj_14.png", link: "https://github.com/whynotsw-camp/wh05-3rd-CHteam-JOB" },
];


// 무한 루프를 위해 데이터를 복제합니다.
const extendedReviews = [...reviewData, ...reviewData];
const extendedProjectsTop = [...projectDataTop, ...projectDataTop];
const extendedProjectsBottom = [...projectDataBottom, ...projectDataBottom];


export default function Result() {
    // Refs for all three carousels
    const reviewTrackRef = useRef<HTMLDivElement | null>(null);
    const projectTopTrackRef = useRef<HTMLDivElement | null>(null);
    const projectBottomTrackRef = useRef<HTMLDivElement | null>(null);

    // Refs for animation state
    const animationFrameId = useRef<number | null>(null);
    const reviewPosition = useRef(0);
    const projectTopPosition = useRef(0);
    const projectBottomPosition = useRef(0);

    // Refs for review carousel controls
    const reviewSpeed = useRef(1);
    const reviewDirection = useRef(-1);

    useEffect(() => {
        const animate = () => {
            // 1. Animate Review Carousel
            reviewPosition.current += reviewSpeed.current * reviewDirection.current;
            if (reviewTrackRef.current) {
                const trackWidth = reviewTrackRef.current.scrollWidth / 2;
                if (reviewDirection.current === -1 && Math.abs(reviewPosition.current) >= trackWidth) {
                    reviewPosition.current = 0;
                }
                if (reviewDirection.current === 1 && reviewPosition.current > 0) {
                    reviewPosition.current = -trackWidth;
                }
                reviewTrackRef.current.style.transform = `translateX(${reviewPosition.current}px)`;
            }

            // 2. Animate Top Project Carousel (moves right)
            projectTopPosition.current += 0.7 * 1;
            if (projectTopTrackRef.current) {
                const trackWidth = projectTopTrackRef.current.scrollWidth / 2;
                if (projectTopPosition.current >= 0) {
                    projectTopPosition.current = -trackWidth;
                }
                projectTopTrackRef.current.style.transform = `translateX(${projectTopPosition.current}px)`;
            }

            // 3. Animate Bottom Project Carousel (moves left)
            projectBottomPosition.current += 0.7 * -1;
            if (projectBottomTrackRef.current) {
                const trackWidth = projectBottomTrackRef.current.scrollWidth / 2;
                if (Math.abs(projectBottomPosition.current) >= trackWidth) {
                    projectBottomPosition.current = 0;
                }
                projectBottomTrackRef.current.style.transform = `translateX(${projectBottomPosition.current}px)`;
            }

            animationFrameId.current = requestAnimationFrame(animate);
        };

        animationFrameId.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    const handlePress = (newDirection: number, newSpeed: number) => {
        reviewDirection.current = newDirection;
        reviewSpeed.current = newSpeed;
    };

    const handleRelease = () => {
        reviewDirection.current = -1;
        reviewSpeed.current = 1;
    };

    return (
        <section className="bg-gradient-to-b from-white to-pink-200 py-20 px-6">
            {/* === 블로그 후기 섹션 === */}
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h3 className="text-xl font-bold text-pink-500 mb-2">&lsquo;진짜&rsquo; 후기에서 나타나는 강의 만족도</h3>
                    <h2 className="text-4xl md:text-5xl py-2 font-bold text-gray-900">수료생들의</h2>
                    <h2 className="text-4xl md:text-5xl py-2 font-bold text-gray-900">꾸밈없는 생생한 블로그 후기</h2>
                </div>
                <div className="relative w-full overflow-hidden group">
                    <div ref={reviewTrackRef} className="flex gap-8 py-6" style={{ willChange: 'transform' }}>
                        {extendedReviews.map((review, index) => (
                            <a key={index} href={review.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-[320px] h-[280px] rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                                <div className="relative w-full h-4/5 bg-white flex items-center justify-center p-4">
                                    <img src={review.img} alt="Igrowth image" className="absolute inset-0 w-full h-full object-cover filter blur-sm opacity-80" />
                                    <h4 className="relative z-10 text-xl font-bold text-gray-800 text-center whitespace-pre-line">{review.text}</h4>
                                </div>
                                <div className="w-full h-1/5 bg-gray-800 flex items-center justify-between px-5">
                                    <span className="text-white font-semibold">자세히 보기</span>
                                    <ArrowRight className="w-5 h-5 text-white" />
                                </div>
                            </a>
                        ))}
                    </div>
                    {/* Controls */}
                    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button onMouseDown={() => handlePress(1, 2.5)} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={() => handlePress(1, 2.5)} onTouchEnd={handleRelease} className="bg-white/70 hover:bg-white rounded-full p-3 shadow-md">
                            <ChevronLeft className="w-6 h-6 text-gray-800" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button onMouseDown={() => handlePress(-1, 2.5)} onMouseUp={handleRelease} onMouseLeave={handleRelease} onTouchStart={() => handlePress(-1, 2.5)} onTouchEnd={handleRelease} className="bg-white/70 hover:bg-white rounded-full p-3 shadow-md">
                            <ChevronRight className="w-6 h-6 text-gray-800" />
                        </button>
                    </div>
                </div>
            </div>

            {/* === 프로젝트 결과물 섹션 === */}
            <div className="container mx-auto max-w-7xl mt-40">
                <div className="text-center mb-16">
                    <h3 className="text-xl font-bold text-pink-500 mb-2">훈련생 포트폴리오</h3>
                    <h2 className="text-4xl md:text-5xl py-2 font-bold text-gray-900">아이디어와 기술력이 담긴</h2>
                    <h2 className="text-4xl md:text-5xl py-2 font-bold text-gray-900">프로젝트 결과물</h2>
                </div>
                <div className="w-full overflow-hidden space-y-1">
                    <div ref={projectTopTrackRef} className="flex gap-8 py-6" style={{ willChange: 'transform' }}>
                        {extendedProjectsTop.map((project, index) => (
                            <a key={`top-${index}`} href={project.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-[320px] h-[240px] rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                                <div className="w-full h-4/5 bg-white">
                                    <img src={project.img} alt={`Project image ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                                <div className="w-full h-1/5 bg-gray-800 flex items-center justify-between px-5">
                                    <span className="text-white font-semibold">자세히 보기</span>
                                    <ArrowRight className="w-5 h-5 text-white" />
                                </div>
                            </a>
                        ))}
                    </div>
                    <div ref={projectBottomTrackRef} className="flex gap-8 py-6" style={{ willChange: 'transform' }}>
                        {extendedProjectsBottom.map((project, index) => (
                            <a key={`bottom-${index}`} href={project.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 w-[320px] h-[240px] rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                                <div className="w-full h-4/5 bg-white">
                                    <img src={project.img} alt={`Project image ${index + 8}`} className="w-full h-full object-cover" />
                                </div>
                                <div className="w-full h-1/5 bg-gray-800 flex items-center justify-between px-5">
                                    <span className="text-white font-semibold">자세히 보기</span>
                                    <ArrowRight className="w-5 h-5 text-white" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}