import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "LG U+ 연계 | Why Not SW Camp",
    description: "LG U+ Why Not SW Camp 신청 페이지",

    openGraph: {
        title: "LG U+ Why Not SW Camp",
        description: "부트캠프의 새로운 패러다임, 100% 실무 이력 만들기",
        images: [
            {
                url: "https://whynotcamp.igrowth.kr/open_graph.png",
                width: 1200,
                height: 630,
            },
        ],
        url: "https://whynotcamp.igrowth.kr/",
        siteName: "LG U+ Why Not SW Camp",
        type: "website"
    }
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ko" className='dark'>
            <body className="font-sans bg-white text-gray-900">
                {children}
            </body>
        </html>
    );
}

