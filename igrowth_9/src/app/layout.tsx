import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
    title: "LG U+ 연계 | Why Not SW Camp",
    description: "Why Not SW Camp 랜딩페이지",

    openGraph: {
        title: "LG U+ Why Not SW Camp(openGraph title)",
        description: "부트캠프의 새로운 패러다임, 100% 실무 이력 만들기(openGraph description",
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
            <GoogleTagManager gtmId={'GTM-N3F9ZPDK'} />
            <body className="font-sans bg-white text-gray-900">
                {children}
            </body>
        </html>
    );
}