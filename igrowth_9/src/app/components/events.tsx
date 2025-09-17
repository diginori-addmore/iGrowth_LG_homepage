"use client";

// Amplitude 이벤트 추적을 위한 사용자 활동 분석 컴포넌트
// 실제 사용자가 페이지에서 활동하는 시간과 행동을 정확하게 측정합니다

import { useEffect, useRef, useCallback } from 'react';
import { track } from '@/lib/analytics';

// 버튼 클릭 이벤트 데이터 타입
interface ButtonClickEvent {
  button_name: string;        // 클릭된 버튼 이름 (예: "지원하기", "카카오톡 상담")
  redirect_url?: string;      // 이동할 URL (선택적)
  page_url: string;          // 현재 페이지 URL
  referrer: string;          // 이전 페이지 URL 또는 "(direct)"
  section: string;           // 페이지 섹션 (예: "hero")
}

// 페이지 활동 데이터 타입 - 실제 사용자 참여도 측정
interface PageActivityEvent {
  page_title: string;               // 페이지 제목
  page_url: string;                // 페이지 URL
  referrer: string;                // 유입 경로
  active_time_seconds: number;     // 실제 활동한 시간(초) - 마우스/키보드 활동 기준
  total_mouse_movements: number;   // 마우스 움직임 총 횟수
  total_scroll_distance: number;   // 스크롤한 총 거리(픽셀)
  total_clicks: number;            // 클릭 총 횟수
  total_keystrokes: number;        // 키보드 입력 총 횟수
}

/**
 * 사용자 활동 추적 훅
 *
 * 실제 사용자가 페이지에서 활동하는 시간과 행동을 정밀하게 측정합니다.
 * 단순히 페이지가 열려있는 시간이 아니라, 마우스 움직임, 키보드 입력,
 * 스크롤 등의 실제 활동을 기준으로 "진짜 활성 시간"을 계산합니다.
 */
export function useActivityTracker() {
  // useRef를 사용하여 리렌더링 없이 상태 추적
  const activityRef = useRef({
    startTime: Date.now(),          // 페이지 진입 시간
    lastActivityTime: Date.now(),   // 마지막 활동 시간
    totalActiveTime: 0,             // 총 활성 시간 (밀리초)
    isActive: false,                // 현재 활성 상태 여부
    mouseMovements: 0,              // 마우스 움직임 카운터
    scrollDistance: 0,              // 스크롤 거리 누적
    clicks: 0,                      // 클릭 카운터
    keystrokes: 0,                  // 키 입력 카운터
    mouseMoveThrottle: false,       // 마우스 이벤트 스로틀링 플래그
    scrollThrottle: false,          // 스크롤 이벤트 스로틀링 플래그
  });

  /**
   * 활동 추적 데이터 초기화
   * 새 페이지 진입 시 또는 수동으로 리셋할 때 사용
   */
  const resetActivity = useCallback(() => {
    const now = Date.now();
    activityRef.current = {
      ...activityRef.current,
      startTime: now,
      lastActivityTime: now,
      totalActiveTime: 0,
      isActive: true,              // 리셋 시 활성 상태로 시작
      mouseMovements: 0,
      scrollDistance: 0,
      clicks: 0,
      keystrokes: 0,
    };
  }, []);

  /**
   * 사용자 활동 기록
   * 마우스, 키보드, 스크롤 등의 활동이 감지될 때마다 호출
   * 10초 이내의 연속된 활동만 "실제 활성 시간"으로 계산
   */
  const recordActivity = useCallback(() => {
    const now = Date.now();
    const ref = activityRef.current;

    if (!ref.isActive) {
      // 비활성 상태에서 활동 재개
      ref.isActive = true;
      ref.lastActivityTime = now;
    } else {
      const timeSinceLastActivity = now - ref.lastActivityTime;
      // 50초 이내의 활동만 연속된 활동으로 간주
      // 50초 초과 시 사용자가 자리를 비웠다고 판단
      if (timeSinceLastActivity <= 50000) {
        ref.totalActiveTime += timeSinceLastActivity;
      }
      ref.lastActivityTime = now;
    }
  }, []);

  /**
   * 마우스 움직임 이벤트 핸들러
   * 100ms 스로틀링으로 과도한 이벤트 발생 방지
   */
  const handleMouseMove = useCallback(() => {
    // 스로틀링: 100ms 내 중복 이벤트 무시
    if (activityRef.current.mouseMoveThrottle) return;
    activityRef.current.mouseMoveThrottle = true;

    setTimeout(() => {
      activityRef.current.mouseMoveThrottle = false;
    }, 100); // 100ms 스로틀링

    activityRef.current.mouseMovements++;
    recordActivity(); // 활동 시간 기록
  }, [recordActivity]);

  /**
   * 스크롤 이벤트 핸들러
   * 100ms 스로틀링으로 성능 최적화
   * 주의: 현재 스크롤 위치를 누적하므로 실제 스크롤 거리와 다를 수 있음
   */
  const handleScroll = useCallback(() => {
    // 스로틀링: 100ms 내 중복 이벤트 무시
    if (activityRef.current.scrollThrottle) return;
    activityRef.current.scrollThrottle = true;

    setTimeout(() => {
      activityRef.current.scrollThrottle = false;
    }, 100);

    // TODO: 실제 스크롤 거리 계산 로직 개선 필요
    activityRef.current.scrollDistance += Math.abs(window.scrollY);
    recordActivity(); // 활동 시간 기록
  }, [recordActivity]);

  /**
   * 클릭 이벤트 핸들러
   * 모든 클릭 (버튼, 링크, 일반 요소 등) 추적
   */
  const handleClick = useCallback(() => {
    activityRef.current.clicks++;
    recordActivity(); // 활동 시간 기록
  }, [recordActivity]);

  /**
   * 키보드 입력 이벤트 핸들러
   * 모든 키 입력 (타이핑, 방향키, 기능키 등) 추적
   */
  const handleKeyPress = useCallback(() => {
    activityRef.current.keystrokes++;
    recordActivity(); // 활동 시간 기록
  }, [recordActivity]);

  /**
   * 페이지 가시성 변경 이벤트 핸들러
   * 탭 전환, 창 최소화 등으로 페이지가 보이지 않을 때 비활성 처리
   */
  const handleVisibilityChange = useCallback(() => {
    if (document.hidden) {
      // 페이지가 숨겨짐 (다른 탭으로 이동, 창 최소화 등)
      activityRef.current.isActive = false;
    } else {
      // 페이지가 다시 보임 - 활동 재개
      recordActivity();
    }
  }, [recordActivity]);

  /**
   * 현재까지의 활동 데이터를 수집하여 반환
   * Amplitude로 전송할 데이터 구조로 포맷팅
   */
  const getActivityData = useCallback((): PageActivityEvent => {
    const ref = activityRef.current;
    const now = Date.now();

    // 현재 활성 상태라면 마지막 활동 시간까지 포함
    if (ref.isActive) {
      const timeSinceLastActivity = now - ref.lastActivityTime;
      if (timeSinceLastActivity <= 50000) {
        ref.totalActiveTime += timeSinceLastActivity;
      }
    }

    return {
      page_title: document.title,
      page_url: window.location.href,
      referrer: document.referrer || "(direct)",
      active_time_seconds: Math.round(ref.totalActiveTime / 1000), // 밀리초를 초로 변환
      total_mouse_movements: ref.mouseMovements,
      total_scroll_distance: Math.round(ref.scrollDistance),
      total_clicks: ref.clicks,
      total_keystrokes: ref.keystrokes,
    };
  }, []);

  // 컴포넌트 마운트 시 이벤트 리스너 설정 및 추적 시작
  useEffect(() => {
    // 활동 추적 초기화
    resetActivity();

    // 페이지 진입 시점 이벤트 전송 (기본 페이지뷰)
    track("Page View", {
      page_title: document.title,
      page_url: window.location.href,
      referrer: document.referrer || "(direct)",
    });

    // 사용자 활동 감지를 위한 이벤트 리스너 등록
    // passive: true 옵션으로 성능 최적화
    document.addEventListener('mousemove', handleMouseMove, { passive: true });   // 마우스 움직임
    document.addEventListener('scroll', handleScroll, { passive: true });         // 스크롤
    document.addEventListener('click', handleClick, { passive: true });           // 클릭
    document.addEventListener('keydown', handleKeyPress, { passive: true });      // 키보드 입력
    document.addEventListener('visibilitychange', handleVisibilityChange);        // 탭 전환 감지

    // 페이지 이탈 시 최종 활동 데이터 전송
    const handleBeforeUnload = () => {
      const activityData = getActivityData();
      // 1초 이상 활동한 경우만 데이터 전송 (너무 짧은 방문 제외)
      if (activityData.active_time_seconds > 0) {
        track("Page Activity", activityData);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // 컴포넌트 언마운트 시 클린업 함수
    return () => {
      // 모든 이벤트 리스너 제거 (메모리 누수 방지)
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);

      // 컴포넌트 언마운트 시에도 최종 활동 데이터 전송
      // (SPA에서 페이지 전환 시 beforeunload가 발생하지 않을 수 있음)
      const activityData = getActivityData();
      if (activityData.active_time_seconds > 0) {
        track("Page Activity", activityData);
      }
    };
  }, [resetActivity, handleMouseMove, handleScroll, handleClick, handleKeyPress, handleVisibilityChange, getActivityData]);

  // 외부에서 사용할 수 있는 함수들 반환
  return {
    // 버튼 클릭 이벤트 추적 함수
    trackButtonClick: (eventData: ButtonClickEvent) => track("Button Clicked", eventData),
    // 현재 활동 데이터 조회 함수
    getActivityData,
    // 활동 추적 초기화 함수
    resetActivity,
  };
}

/**
 * 전역 이벤트 추적 컴포넌트
 *
 * layout.tsx에서 사용하여 모든 페이지에서 자동으로 활동 추적 시작
 * 실제 UI는 렌더링하지 않고 이벤트 추적만 수행
 */
export default function EventTracker() {
  useActivityTracker(); // 훅 실행하여 이벤트 추적 시작
  return null;         // UI 렌더링 없음
}