"use client";
import Image from "next/image";

export default function Navbar() {
    // 맨 위로 스크롤하는 함수
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <nav className="flex z-20 justify-between items-center px-6 py-4 bg-white shadow-md fixed w-full z-10">
            {/* <Image src="/logo.png" alt="LG U+" width={100} height={40} /> */}
            <button 
                onClick={scrollToTop}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                aria-label="맨 위로 이동"
            >
                <Image src="/logo.png" alt="LG U+" width={100} height={40} />
                <span className="text-base font-bold text-black-500">Why Not SW Camp</span>
            </button>
            <ul className="hidden md:flex gap-6 text-gray-700">
                <li><a href="#features">특징</a></li>
                <li><a href="#curriculum">커리큘럼</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#apply">지원하기</a></li>
            </ul>
        </nav>
    );
}
