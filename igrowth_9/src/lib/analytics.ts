'use client';

import {
  init, add, track, identify, setUserId, Identify,
} from '@amplitude/analytics-browser';
import type { Types } from '@amplitude/analytics-browser';
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser';

let inited = false;

/** Amplitude가 허용하는 primitive/배열로 정규화 */
type NonNullPrimitive = string | number | boolean;
// 배열은 boolean 제외 (Amplitude는 string|number 배열만 허용)
type AmpArray = Array<string | number>;
type AmpValue = NonNullPrimitive | AmpArray;

/** unknown → Amplitude 허용값으로 변환 (허용 불가면 undefined 반환 = skip) */
function normalizeAmpValue(v: unknown): AmpValue | undefined {
    if (v === null || v === undefined) return undefined;
    const t = typeof v;
    if (t === 'string' || t === 'number' || t === 'boolean') {
    return v as NonNullPrimitive;
    }
    if (Array.isArray(v)) {
    // 배열은 string|number만 허용 (boolean은 제외)
    const arr = v.filter(
    (x): x is string | number => typeof x === 'string' || typeof x === 'number'
    );
    return arr.length ? arr : undefined;
    }
    return undefined;
    }

export function amplitudeInit() {
  if (inited) return;

  add(sessionReplayPlugin({ sampleRate: 1 }));

  const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!;
  const config: Types.BrowserOptions = {
    fetchRemoteConfig: true,
    autocapture: {
      pageViews: true,
      sessions: true,
      fileDownloads: true,
      formInteractions: true,
      elementInteractions: true,
      webVitals: true,
      attribution: true,
    },
  };
  init(apiKey, config);
  inited = true;
}

/** 사용자 속성 일괄 set */
export function setUserProps(props: Record<string, unknown>) {
  const id = new Identify();
  (Object.entries(props) as Array<[string, unknown]>).forEach(([k, v]) => {
    if (v === null) {
      id.unset(k); // null은 unset 처리
      return;
    }
    const val = normalizeAmpValue(v);
    if (val !== undefined) id.set(k, val);
  });
  identify(id);
} // ← 빠졌던 닫는 중괄호 추가

/** 이미 값 있으면 보존(setOnce) */
export function setUserPropsOnce(props: Record<string, unknown>) {
  const id = new Identify();
  (Object.entries(props) as Array<[string, unknown]>).forEach(([k, v]) => {
    if (v === null) {
      // setOnce엔 unset 개념 없음 → 스킵
      return;
    }
    const val = normalizeAmpValue(v);
    if (val !== undefined) id.setOnce(k, val);
  });
  identify(id);
}

/** 숫자 속성 증가(add) */
export function addToUserProps(props: Record<string, number>) {
  const id = new Identify();
  (Object.entries(props) as Array<[string, number]>).forEach(([k, v]) => {
    id.add(k, v);
  });
  identify(id);
}

export { track, setUserId };
