import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';
// ⬇️ 클라이언트 Provider
import Providers from './providers';
import { Suspense } from 'react' // ⬅️ 추가
import AmplitudeInit from "./AmplitudeInit";

export const metadata: Metadata = {
  title: 'LG U+ 연계 | Why Not SW Camp',
  description: '국내 유일 AI 경력 증명서 발급 부트캠프! 교육과 동시에 실무 이력 만들고 200% 취업하기',
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: '국내 유일 AI 경력 증명서 발급 부트캠프',
    description: 'IT 교육의 새로운 패러다임, 100% 실무 이력 만들기',
    images: [{ url: 'https://whynotcamp.igrowth.kr/open_graph.png', width: 1200, height: 630 }],
    url: 'https://whynotcamp.igrowth.kr/',
    siteName: 'LG U+ Why Not SW Camp',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className="dark">
      <body className="font-sans bg-white text-gray-900">
        <GoogleTagManager gtmId="GTM-N3F9ZPDK" />
        {/* ⬇️ CSR 훅(useSearchParams/usePathname)을 쓰는 트리 전체를 Suspense로 감쌉니다 */}
        <Suspense fallback={null}>
          <AmplitudeInit />
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  )
}