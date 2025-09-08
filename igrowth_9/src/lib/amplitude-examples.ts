// Amplitude 사용 예시 모음

import { trackEvent, identifyUser, setUserGroup, trackPageView, trackButtonClick, trackFormSubmit, trackFileDownload } from './amplitude';

// 1. 기본 이벤트 추적
export const exampleBasicTracking = () => {
  // 간단한 이벤트 추적
  trackEvent('User Action', {
    action_type: 'click',
    page: 'homepage'
  });

  // 복잡한 이벤트 추적
  trackEvent('Course Interest', {
    course_name: 'SW Camp',
    interest_level: 'high',
    user_type: 'student',
    source: 'hero_section'
  });
};

// 2. 사용자 식별
export const exampleUserIdentification = () => {
  // 사용자 ID 설정
  identifyUser('user_12345', {
    name: '홍길동',
    email: 'hong@example.com',
    age: 25,
    occupation: 'student',
    interests: ['programming', 'data_analysis']
  });

  // 그룹 설정
  setUserGroup('course', 'sw_camp_2024');
  setUserGroup('cohort', 'spring_batch');
};

// 3. 페이지 뷰 추적
export const examplePageTracking = () => {
  trackPageView('/course-details', {
    course_id: 'sw_camp_2024',
    course_category: 'programming',
    page_type: 'course_detail'
  });
};

// 4. 버튼 클릭 추적
export const exampleButtonTracking = () => {
  trackButtonClick('Apply Now', 'hero_section', {
    course_name: 'SW Camp',
    button_color: 'pink',
    user_segment: 'new_visitor'
  });
};

// 5. 폼 제출 추적
export const exampleFormTracking = () => {
  trackFormSubmit('Application Form', {
    form_type: 'course_application',
    course_name: 'SW Camp',
    completion_time: 120, // 초 단위
    fields_completed: 8,
    total_fields: 10
  });
};

// 6. 파일 다운로드 추적
export const exampleFileDownloadTracking = () => {
  trackFileDownload('course_syllabus.pdf', 'pdf', 2048000); // 2MB
};

// 7. 비즈니스 이벤트 추적 예시
export const exampleBusinessEvents = () => {
  // 코스 조회
  trackEvent('Course Viewed', {
    course_id: 'sw_camp_2024',
    course_name: 'SW Camp',
    view_duration: 45, // 초
    source: 'search'
  });

  // 지원 시작
  trackEvent('Application Started', {
    course_id: 'sw_camp_2024',
    application_step: 'personal_info',
    user_type: 'new_user'
  });

  // 지원 완료
  trackEvent('Application Completed', {
    course_id: 'sw_camp_2024',
    completion_time: 600, // 10분
    application_id: 'app_12345'
  });

  // 상담 요청
  trackEvent('Consultation Requested', {
    consultation_type: 'kakao_chat',
    course_interest: 'sw_camp_2024',
    user_question: 'curriculum_details'
  });
};

// 8. 사용자 여정 추적
export const exampleUserJourney = () => {
  // 첫 방문
  trackEvent('First Visit', {
    referrer: 'google',
    landing_page: '/',
    device_type: 'mobile'
  });

  // 페이지 탐색
  trackEvent('Page Navigation', {
    from_page: '/',
    to_page: '/course-details',
    navigation_method: 'button_click'
  });

  // 세션 종료
  trackEvent('Session End', {
    session_duration: 300, // 5분
    pages_viewed: 3,
    actions_taken: ['view_course', 'click_apply']
  });
};
