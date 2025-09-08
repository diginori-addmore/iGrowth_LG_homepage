import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView, trackEvent, identifyUser, setUserGroup } from '@/lib/amplitude';

// Amplitude 훅
export const useAmplitude = () => {
  const pathname = usePathname();

  // 페이지 뷰 자동 추적
  useEffect(() => {
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname]);

  return {
    trackEvent,
    identifyUser,
    setUserGroup,
    trackPageView,
  };
};

// 특정 이벤트 추적을 위한 훅
export const useTrackEvent = () => {
  return {
    trackEvent,
  };
};

// 사용자 식별을 위한 훅
export const useUserTracking = () => {
  return {
    identifyUser,
    setUserGroup,
  };
};
