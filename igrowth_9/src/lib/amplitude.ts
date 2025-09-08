import * as amplitude from '@amplitude/analytics-browser'
const { init, track, identify: sendIdentify, setUserId, setGroup, Identify } = amplitude
import { sessionReplayPlugin } from '@amplitude/plugin-session-replay-browser' // ⭐ 추가
import { LogLevel } from '@amplitude/analytics-types'



let initialized = false // ✅ 중복 init 방지
type Dict<T = unknown> = Record<string, T>
type NonNullPrimitive = string | number | boolean
type ListPrimitive = string | number
type PropValue = NonNullPrimitive | ListPrimitive[]


// Amplitude 초기화
export const initAmplitude = () => {
    if (initialized) return  // ✅ 중복 init 차단 (추가)
    const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY

    if (!apiKey) {
        console.warn('Amplitude API key is not set')
        return
    }

    init(apiKey, undefined, {
        defaultTracking: {
            pageViews: true,       // 페이지뷰 자동 추적
            sessions: true,        // 세션 자동 추적
            formInteractions: true,// 폼 자동 추적
            fileDownloads: true,   // 파일 다운로드 자동 추적
        },
        fetchRemoteConfig: true, // 콘솔 원격 설정 반영 (Autocapture)
        autocapture: true,       // Autocapture 직접 활성화
        logLevel: process.env.NODE_ENV === 'development' ? LogLevel.Debug : LogLevel.Error, // ✅
    })
    // Session Replay 플러그인 등록 (모듈 API 사용)

    initialized = true
}


// 이벤트 추적
export const trackEvent = (eventName: string, eventProperties?: Dict) => {
    track(eventName, eventProperties);
};

// 사용자 식별
export const identifyUser = (userId: string, userProperties?: Dict<PropValue>) => {
    setUserId(userId)
    if (userProperties && Object.keys(userProperties).length > 0) {
        const id = new Identify()
        Object.entries(userProperties).forEach(([k, v]) => {
            const isPrim =
                typeof v === 'string' || typeof v === 'number' 
            const isPrimArray =
                Array.isArray(v) &&
                v.every(i => typeof i === 'string' || typeof i === 'number' )
            if (isPrim) {
                id.set(k, v as NonNullPrimitive)
            } else if (isPrimArray) {
                id.set(k, v as ListPrimitive[]) // string[] | number[] 로 한정
            } else if (v === null) {
                // null은 set 불가 → 필요 시 언셋하거나 스킵
                // id.unset(k) // 언셋 원하면 주석 해제
                // 아니면 아무 것도 하지 않음(스킵)
            }
            // 객체 등 다른 타입은 무시(필요 시 JSON.stringify로 변환하는 정책 추가 가능)
        })
        sendIdentify(id)
    }
}

// 그룹 설정
export const setUserGroup = (groupType: string, groupName: string) => {
    setGroup(groupType, groupName);
};

// 페이지 뷰 추적
export const trackPageView = (pageName: string, pageProperties?: Dict) => {
    track('Page View', {
        page_name: pageName,
        ...pageProperties,
    });
};

// 버튼 클릭 추적
export const trackButtonClick = (buttonName: string, buttonLocation?: string, additionalProperties?: Dict) => {
    track('Button Click', {
        button_name: buttonName,
        button_location: buttonLocation,
        ...additionalProperties,
    });
};

// 폼 제출 추적
export const trackFormSubmit = (formName: string, formData?: Dict) => {
    track('Form Submit', {
        form_name: formName,
        ...formData,
    });
};

// 파일 다운로드 추적
export const trackFileDownload = (fileName: string, fileType?: string, fileSize?: number) => {
    track('File Download', {
        file_name: fileName,
        file_type: fileType,
        file_size: fileSize,
    });
};
