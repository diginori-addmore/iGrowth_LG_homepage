"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from 'react';
import handleApplyClick from "./Apply";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('');
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        // IntersectionObserver를 생성하여 각 섹션을 감시합니다.
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.5 }); // 섹션이 50% 이상 보일 때 활성화

        // 감시할 섹션들을 선택합니다.
        const sections = document.querySelectorAll('#apply, #features, #curriculum, #faq');
        sections.forEach(section => observer.current?.observe(section));

        // 컴포넌트가 언마운트될 때 observer를 정리합니다.
        return () => {
            sections.forEach(section => observer.current?.unobserve(section));
        };
    }, []);


    // 맨 위로 스크롤하는 함수
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const getNavItemClass = (sectionId: string) => {
        return `relative flex items-center h-full px-5 py-2 transition-colors duration-150 ${activeSection === sectionId ? 'text-white font-bold' : 'text-gray-700'
            }`;
    };

    return (
        <nav className="flex z-20 justify-between items-center px-6 bg-white shadow-md fixed w-full h-16">
            <button
                onClick={scrollToTop}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                aria-label="맨 위로 이동"
            >
                <Image src="/LG.jpg" alt="LG U+" width={50} height={40} />
                <span className="text-base font-bold text-black-500">Why Not SW Camp</span>
            </button>
            {/* ul 태그에 h-full을 추가하여 navbar 높이를 채우도록 함 */}
            <ul className="hidden md:flex items-center h-full pr-5">
                {['apply', 'features', 'curriculum', 'faq'].map((item) => {
                    const text = {
                        apply: '개요',
                        features: '특징',
                        curriculum: '커리큘럼',
                        faq: 'FAQ',
                    }[item]!;

                    return (
                        <li key={item} className="h-full">
                            <a href={`#${item}`} className={getNavItemClass(item)}>
                                <span
                                    className={`absolute inset-x-0 top-0 h-full bg-pink-500 transition-transform duration-500 ease-in-out -z-10 ${activeSection === item ? 'scale-y-100' : 'scale-y-0'
                                        }`}
                                    style={{ transformOrigin: 'top' }}
                                ></span>
                                <span className="relative z-10">{text}</span>
                            </a>
                        </li>
                    );
                })}
                <li className="h-full flex items-center">
                    <a href="https://igrowth.recruit.roundhr.com/c/RWTJ5MAHQN/apply"
                        onClick={handleApplyClick}
                        className="font-extrabold text-yellow-500 hover:text-yellow-600 transition-colors duration-200 pl-4">
                        지원하기
                    </a>
                </li>
            </ul>
        </nav>
    );
}
