"use client";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // 컴포넌트가 마운트되었는지 확인
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // 스크롤 위치에 따라 버튼 표시/숨김
    useEffect(() => {
        if (!isMounted) return;

        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [isMounted]);

    // 맨 위로 스크롤
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // 마운트되지 않았으면 아무것도 렌더링하지 않음
    if (!isMounted) {
        return null;
    }

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="맨 위로 이동"
                >
                    <ChevronUp className="w-6 h-6" />
                </button>
            )}
        </>
    );
}
