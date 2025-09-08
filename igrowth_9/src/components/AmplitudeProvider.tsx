'use client';

import { useEffect } from 'react';
import { initAmplitude } from '@/lib/amplitude';

interface AmplitudeProviderProps {
  children: React.ReactNode;
}

export default function AmplitudeProvider({ children }: AmplitudeProviderProps) {
  useEffect(() => {
    // Amplitude 초기화
    initAmplitude();
  }, []);

  return <>{children}</>;
}
