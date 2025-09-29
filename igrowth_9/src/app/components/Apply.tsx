import React from 'react';
import { useActivityTracker } from './events';

export default function Apply() {
    const { trackButtonClick } = useActivityTracker();

    const handleApplyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.href;

        // 버튼 클릭 이벤트 전송
        trackButtonClick({
            button_name: "지원하기",
            redirect_url: href,
            page_url: window.location.href,
            referrer: document.referrer || "(direct)",
            section: "hero",
        });

        // 이벤트 전송 후 페이지 이동
        setTimeout(() => {
            window.location.href = href;
        }, 200);
    };

    const handleKakaoClick = () => {
        trackButtonClick({
            button_name: "카카오톡 상담",
            redirect_url: "https://pf.kakao.com/_lTcxcG/chat",
            page_url: window.location.href,
            referrer: document.referrer || "(direct)",
            section: "hero",
        });
    };

    return (
        <div className="mt-8 md:mt-12 flex flex-row justify-center gap-4 relative z-10">
            <a
                href="https://igrowth.recruit.roundhr.com/c/RWTJ5MAHQN/apply"
                onClick={handleApplyClick}
                className="px-8 py-4 bg-pink-600 text-white rounded-lg shadow-lg hover:bg-pink-700 transition-all duration-300 font-bold text-lg transform hover:scale-105"
            >
                지원하기
            </a>
            <a
                href="https://pf.kakao.com/_lTcxcG/chat"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleKakaoClick}
                className="px-8 py-4 bg-yellow-400 text-black rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 font-bold text-lg transform hover:scale-105"
            >
                카카오톡 상담
            </a>
        </div>
    )
}