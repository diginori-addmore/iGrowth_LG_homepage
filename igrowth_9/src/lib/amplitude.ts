import { init, track, identify, setUserId, setGroup } from '@amplitude/analytics-browser';

// Amplitude 초기화
export const initAmplitude = () => {
  const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
  
  if (!apiKey) {
    console.warn('Amplitude API key is not set');
    return;
  }

  init(apiKey, {
    defaultTracking: {
      pageViews: true,
      sessions: true,
      formInteractions: true,
      fileDownloads: true,
    },
    logLevel: process.env.NODE_ENV === 'development' ? 'debug' : 'error',
  });
};

// 이벤트 추적
export const trackEvent = (eventName: string, eventProperties?: Record<string, any>) => {
  track(eventName, eventProperties);
};

// 사용자 식별
export const identifyUser = (userId: string, userProperties?: Record<string, any>) => {
  setUserId(userId);
  if (userProperties) {
    identify(userProperties);
  }
};

// 그룹 설정
export const setUserGroup = (groupType: string, groupName: string) => {
  setGroup(groupType, groupName);
};

// 페이지 뷰 추적
export const trackPageView = (pageName: string, pageProperties?: Record<string, any>) => {
  track('Page View', {
    page_name: pageName,
    ...pageProperties,
  });
};

// 버튼 클릭 추적
export const trackButtonClick = (buttonName: string, buttonLocation?: string, additionalProperties?: Record<string, any>) => {
  track('Button Click', {
    button_name: buttonName,
    button_location: buttonLocation,
    ...additionalProperties,
  });
};

// 폼 제출 추적
export const trackFormSubmit = (formName: string, formData?: Record<string, any>) => {
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
