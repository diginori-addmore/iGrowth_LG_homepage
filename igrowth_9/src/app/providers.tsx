'use client';

import { useEffect } from 'react';
import { amplitudeInit, track } from '@/lib/analytics';
import { usePathname, useSearchParams } from 'next/navigation';

type Props = { children: React.ReactNode };

export default function Providers({ children }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // 최초 1회 Amplitude 초기화
  useEffect(() => {
    amplitudeInit();
  }, []);

  // 라우트 변경 시 페이지 조회 이벤트(원하면 제거 가능: defaultTracking.pageViews가 이미 켜져 있음)
  useEffect(() => {
    if (!pathname) return;
    track('Page Viewed', {
      pathname,
      search: searchParams?.toString() || '',
    });
  }, [pathname, searchParams]);

  return <>{children}</>;
}
