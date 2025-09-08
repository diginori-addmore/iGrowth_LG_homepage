import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
    title: "LG U+ 연계 | Why Not SW Camp",
    description: "Why Not SW Camp 랜딩페이지",
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