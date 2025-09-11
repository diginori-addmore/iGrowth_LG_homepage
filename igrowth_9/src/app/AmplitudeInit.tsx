"use client";

import * as amplitude from "@amplitude/analytics-browser";
import { sessionReplayPlugin } from "@amplitude/plugin-session-replay-browser";
import { useEffect } from "react";

declare global {
  interface Window {
    __AMPLITUDE_INIT__?: boolean;
  }
}

export default function AmplitudeInit() {
  useEffect(() => {
    // 중복 초기화 방지
    if (window.__AMPLITUDE_INIT__) return;
    window.__AMPLITUDE_INIT__ = true;

    // Amplitude 초기화 (하드코딩한 키 사용)
    amplitude.init("32f81f14fe0c7e676f05f6e336770d91", {
      defaultTracking: true, // 페이지뷰/세션 자동 추적
    });

    // ✅ Session Replay 1% 샘플링
    amplitude.add(sessionReplayPlugin({
      sampleRate: 0.01, // 1%
    }));
  }, []);

  return null;
}