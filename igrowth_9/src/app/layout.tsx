import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script"; // ⬅️ 누락된 import 추가
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "LG U+ 연계 | Why Not SW Camp",
  description:
    "국내 유일 AI 경력 증명서 발급 부트캠프! 교육과 동시에 실무 이력 만들고 200% 취업하기",
  openGraph: {
    title: "국내 유일 AI 경력 증명서 발급 부트캠프",
    description: "IT 교육의 새로운 패러다임, 100% 실무 이력 만들기",
    images: [
      {
        url: "https://whynotcamp.igrowth.kr/open_graph.png",
        width: 1200,
        height: 630,
      },
    ],
    url: "https://whynotcamp.igrowth.kr/",
    siteName: "LG U+ Why Not SW Camp",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className="dark">
      <head>
        {/* Amplitude CDN 스크립트 */}
        <Script
          src="https://cdn.amplitude.com/script/32f81f14fe0c7e676f05f6e336770d91.js"
          strategy="afterInteractive"
        />
        {/* ⚠️ sessionReplay 플러그인 미로딩 시 아래 add 호출은 주석 처리하세요 */}
        <Script id="amplitude-init" strategy="afterInteractive">
          {`
            try {
              // window.amplitude 전제: 위 CDN 로드 완료
              // window.sessionReplay가 없다면 아래 줄은 주석 처리하세요.
              // window.amplitude.add(window.sessionReplay.plugin({ sampleRate: 1 }));

              window.amplitude.init('32f81f14fe0c7e676f05f6e336770d91', {
                fetchRemoteConfig: true,
                autocapture: {
                  attribution: true,
                  fileDownloads: true,
                  formInteractions: true,
                  pageViews: true,
                  sessions: true,
                  elementInteractions: true,
                  networkTracking: true,
                  webVitals: true,
                  frustrationInteractions: true
                }
              });
            } catch (e) {
              console.error('Amplitude init failed:', e);
            }
          `}
        </Script>
      </head>
      <body className="font-sans bg-white text-gray-900">
        {/* ⬇️ GTM은 body 안 최상단으로 이동 */}
        <GoogleTagManager gtmId={"GTM-N3F9ZPDK"} />
        {children}
      </body>
    </html>
  );
}
