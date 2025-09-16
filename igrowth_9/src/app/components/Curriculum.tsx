"use client";
import { useState } from "react";
import { Rocket, CheckCircle, Award, ChevronDown } from "lucide-react";

export default function FullCurriculum() {
    const [activePhase, setActivePhase] = useState(0);
    const [activeCategory, setActiveCategory] = useState(0);

    const phases = [
        {
            title: "PHASE 0",
            subtitle: "준비",
            content: {
                heading: "PHASE 0: 실전 AI & 빅데이터 취업 시장 항공뷰",
                info: "가짜와 진짜를 판별하고 진짜 취업에 필요한 로드맵 제안",
                sections: [
                    {
                        icon: CheckCircle,
                        subheading: "실 프로젝트 요구사항",
                        details: ["- 가상이 아닌 진짜 고객이 발주한 프로젝트로 요구사항 분석", "현직 카카오, 넷마블 개발자와 함께 프로젝트 분석"],
                    },
                    {
                        icon: CheckCircle,
                        subheading: "Quick-Review",
                        details: ["- 요구사항 분석을 통해 무엇을 어떻게 배워야 하는지 수강생 스스로 학습 플랜 수립 with 현직자 멘토링"]
                    },
                    {
                        icon: CheckCircle,
                        subheading: "프로토타입 개발",
                        details: ["- 현직 개발자들과 함께 페이코딩을 통해 프로토타이핑 프로젝트 수행 및 경력 증명서 발급 및 작업비용 수령"]
                    },
                ],
            },
        },
        {
            title: "PHASE 1",
            subtitle: "훈련과정(정규교과)",
            content: {
                heading: "PHASE 1: 정규교과",
                info: "기초부터 탄탄히 교육해 나갑니다",
                sections: [
                    { icon: CheckCircle, subheading: "기초역량교육", details: [] },
                    {
                        icon: CheckCircle,
                        subheading: "Step 1",
                        details: [
                            "- 빅데이터 및 클라우드 기초 : AWS, GCP, BASS(vercel,fly.io) 등 실습 및 클라우드 이해",
                            "- Python 프로그래밍 기초 : 책에 나온 이론보단 실무에서 당장 쓸 수 있는 것 부터 & 수강생 모두의 수준에 맞춰 파이썬 기초 마스터",
                            "- SQL 기초 : 현업에서 많이 사용되는 mySQL 부터 클라우드형 supabase 까지, 실무와 협업에 필요한 실전 SQL 학습"],
                    },
                    {
                        icon: CheckCircle,
                        subheading: "Step 2",
                        details: [
                            "- Python을 활용한 데이터 분석 : 캐시슬라이드, 라인, 클러바, 네이버 검색, 네이버 쇼핑 경력자가 알려주는 실전 데이터 분석",
                            "- 클라우드 기반 데이터 처리/저장/관리기술 : 아파치 제플린 에반젤리스트, 데이터야놀자 창립멤버 경력의 강사가 알려주는 ETL 의 모든 것, 국내 최대 데이터 파이프라인 구축/운영 경험 전수",
                            "- 클라우드 기반 빅데이터 분석 및 시각화 : 라인게임 어뷰징 밴 처리 사례로 알아보는 빅데이터 분석 및 시각화",
                        ],
                    },
                    {
                        icon: CheckCircle,
                        subheading: "Step 3",
                        details: ["- 클라우드 기반 빅데이터 분석 및 시각화 - supabase metabae 기반 리텐션 매출 대시보드 BI 시각화"]
                    },
                ],
            },
        },
        {
            title: "PHASE 2",
            subtitle: "훈련과정(프로젝트)",
            content: {
                heading: "PHASE 2: 프로젝트",
                info: "학습 내용에 기반 실 고객이 있는 프로젝트를 진행",
                sections: [
                    {
                        icon: Rocket, subheading: "[프로젝트 1] 애자일 기반 MVP 서비스 개발",
                        details: [
                            "- 네이버 출신 25년차 강사 + 카카오 출신 20년차 멘토(정구범)와 함께 서비스 분석",
                            "- 국내 유일 가상의 고객이 아닌 실 고객과 업무 미팅 통한 요구사항 도출",
                            "- 빅데이터를 적용한 서비스 클라우드 배포",
                            "- 실 고객 계약 금액에 따른 팀별 지원금 수령 및 경력증명서 발급",
                        ]
                    },

                    {
                        icon: Rocket, subheading: "[프로젝트 2] 서비스 데이터 분석 적용 및 고도화",
                        details: [
                            "- 서비스 유입, 클릭, 효과 측정을 위한 데이터 파이프라인 구축",
                            "- 수집된 데이터 기반 실 고객 데이터를 이용한 데이터 분석 및 가설 수립",
                            "- A/B 테스트를 통한 가설 실험 및 고도화 제안 포트폴리오 작성",
                            "- 다양한 클라우드 배포전략(카나리 배포등) 통한 고객 반응 수집 및 롤백 전략",
                            "- 실 고객 계약 금액에 따른 팀별 지원금 수령 및 경력증명서 발급",
                        ]
                    },
                    {
                        icon: Rocket, subheading: "[프로젝트 3] 실 서비스 개발",
                        details: [
                            "- GCP, BAAS, AWS 등 다양한 클라우드 특성에 따른 비용 최적화 및 운영 노하우",
                            "- 대규모 파이프라인을 위한 Apache Airflow 및 Apache Zepplin 에반젤리스 직강 Zepplin & Spark & Hadoop 구성 및 운영",
                            "- MLOps, AIOps 를 통한 서비스 고도화 및 서비스 발전 및 시장대응 전략 구성",
                            "- 실 고객 계약 금액에 따른 팀별 지원금 수령 및 경력증명서 발급",
                        ]
                    },
                ],
            }
        },
        {
            title: "PHASE 3",
            subtitle: "JUMP UP",
            content: {
                heading: "PHASE 3: JUMP UP",
                info: "상용화 및 창업 연계",
                sections: [
                    {
                        icon: Award, subheading: "애자일 회고",
                        details: [
                            "- 네이버, 카카오 애자일 코치 초빙 회고 진행",
                            "- 회사에서 원하는 팀워크 및 팀빌딩 워크샵",
                            "- 프로젝트 성공/실패 요인 분석에 따른 JUMP UP 플랜 수립"]
                    },
                    {
                        icon: Award, subheading: "팀 빌딩",
                        details: [
                            "- KDT 해커톤 출전을 위한 멘토링",
                            "- 청년 창업 연계 컨설팀 및 사업계획서 작성 지원",
                            "- AI 국책과제 도전 및 스타트업 팁스 도전 & 창업 및 사무공간 지원"]
                    },
                    {
                        icon: Award, subheading: "취업 연계",
                        details: [
                            "- 데이터야놀자 & 노안콘 연사 및 협력 멘토링 100인 1:1 취업 컨설팅",
                            "- 멘토링단 중 채용기업 인재 추천 및 추천서 작성",
                            "- 노안콘, 데이터야놀자, 파이콘 ... 국내 유명 오픈소스 커뮤니티 연결 및 자원봉사 연결 - 네트워킹 역량 증대"
                        ]
                    },
                ],
            },
        },
    ];

    const categories = ["기초 학습", "Python 데이터 분석", "빅데이터", "AI & 고급 데이터", "프로젝트"];
    const buttonsByCategory = [
        [
            { title: "인프라 및 클라우드 개요", detail: ["Linux 개요", "가상화 기술", "VI, 실전 리눅스 명령어 / WSL", "컨테이너 및 Docker", "AWS/Google 클라우드"] },
            { title: "빅데이터 기술 개요", detail: ["생성형 AI 소개", "Prometheus & Grafana (모니터링)"] },
            { title: "Python 기초", detail: ["변수, 자료형", "조건문, 반복문", "입출력, 함수, 람다", "모듈 / 패키지 / 클래스", "내장함수, 표준 라이브러리"] },
            { title: "데이터베이스 기초", detail: ["데이터 및 데이터베이스 개념 이해", "데이터베이스 설치 및 실습", "SQL 기본 및 심화", "성능 튜닝"] }
        ],
        [
            { title: "Python 기반 확률 및 통계", detail: ["확률과 확률변수", "조건부 확률과 독립", "통계적 추론", "선형대수, 벡터와 행렬", "상관분석, 회귀분석", "AI 통계"] },
            { title: "데이터 수집", detail: ["웹 구조 이해 및 웹 데이터 크롤링", "대량 CSV, JSON 파일 로딩 및 파싱", "API 활용 CSV, JSON 데이터 수집", "DB to DB 수집"] },
            { title: "데이터 처리 및 분석", detail: ["Pandas, Numpy, 데이터 정제 및 전처리", "선형대수, 상관분석, 회귀분석, 신경망 기초", "AI 기반 코드 생성 및 데이터 분석 자동화 실습", "비즈니스 문제 해결을 위한 AI 툴 활용법", "바이브코딩을 활용한 웹 개발 연동"] },
        ],
        [
            { title: "빅데이터 처리 / 저장 / 관리 기술", detail: ["AirFlow를 활용한 워크플로우 관리", "ElasticSearch & Logstash & Kibana", "Hadoop & Hive", "AWS 데이터 파이프라인"] },
            { title: "빅데이터 분석 및 시각화", detail: ["Presto / Trino / AWS Athena 기반 빅데이터 처리", "BI Tool 기반의 데이터 시각화"] },
            { title: "Hybrid 데이터 분석 / 시각화", detail: ["EDA, EDW 기반 데이터 처리", "데이터 분석 및 workflow 생성", "Report 및 Dashboard 개발", "Web / App 연계 데이터 분석 서비스 개발"] },
        ],
        [
            { title: "머신러닝 / 딥러닝", detail: ["주요 머신러닝 모델, 주요 분류 평가지표", "데이터 인코딩, 하이퍼 파라미터 최적화", "인공신경망, 합성곱 신경망(CNN)", "일고리즘 성능 향상", "이미지 / 영상 딥러닝 실습", "AI 챗봇(LLM)을 활용한 코딩 및 디버깅 실습", "AI 기반 코드 추천 및 자동 완성 기능 활용"] },
            { title: "바이브코딩 및 생성형 AI 모델 활용", detail: ["사례 기반 ML / DL", "AI 기반 서비스 개발을 위한 파이썬 라이브러리", "AI Agent : LLM, LangChain, RAG, MCP, ADK, A2A, LangGraph"] },
            { title: "ML / DL 기반 서비스 개발", detail: ["MLOps", "ML / DL 모델 개념 및 활용 사례", "FastAPI 활용 서비스 개발", "클라우드 배포"] },
        ],
        [
            { title: "AI 활용 서비스 기획 / 설계", detail: ["문제 정의 및 상세 주제 설정", "생성형 AI 활용한 자료조사 및 벤치마킹", "아이디어 도출 및 서비스 시나리오 작성", "요구사항 도출 및 수행 단계 수립", "WBS 작성 및 Prototype 개발"] },
            { title: "미니 프로젝트 : 분석 및 예측", detail: ["프로젝트 정의 및 요구사항 정의", "데이터 정의 및 수집", "데이터 전처리 (중복 데이터, 이상치 제거 등)", "데이터 분석 및 모델 개발", "결과 도출 및 모델 평가"] },
            { title: "인공지능 활용 빅테크 혁신 프로젝트", detail: ["문제 정의 및 계획 수립", "데이터 정의 및 수집 / 라벨링", "데이터 전처리 (중복 데이터, 이상치 제거 등)", "모델 개발 및 튜닝 (데이터 훈련 및 디버깅", "결과 도출 및 모델 평가"] },
        ]
    ];

    const [openButtons, setOpenButtons] = useState(
        buttonsByCategory.map(cat => cat.map(() => false))
    );

    const toggleButton = (catIdx: number, btnIdx: number) => {
        setOpenButtons(prev => {
            const newState = prev.map(inner => [...inner]);
            newState[catIdx][btnIdx] = !newState[catIdx][btnIdx];
            return newState;
        });
    };

    return (
        <>
            {/* === 첫 번째 Curriculum Section === */}
            {/* 모바일: py-16 px-4 / 데스크톱: py-20 px-6 */}
            <section id="curriculum" className="bg-gradient-to-b from-pink-400 via-pink-500 to-gray-900 py-16 px-4 md:py-20 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-sm md:text-xl font-bold text-white mb-2">LG U⁺ Why Not SW Camp 만의</h2>
                    {/* 모바일: text-4xl / 데스크톱: text-5xl */}
                    <p className="text-3xl md:text-5xl font-bold text-white">초고속 실력 향상 커리큘럼</p>
                </div>

                {/* 모바일: flex-col / 데스크톱: flex-row */}
                <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-8">
                    {/* 좌측 버튼 - 모바일: w-full / 데스크톱: w-1/4 */}
                    <div className="flex flex-col gap-4 w-full md:w-1/4">
                        {phases.map((phase, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActivePhase(idx)}
                                className={`transition-colors duration-200 text-white px-4 py-3 rounded-lg text-left ${activePhase === idx ? "bg-white text-black font-bold" : "bg-transparent border border-white/50" // 모바일에서 버튼 구분을 위해 border 추가
                                    }`}
                            >
                                <div className={`text-sm md:text-lg font-semibold ${activePhase === idx ? "text-black" : "text-white"}`}>
                                    {phase.title}
                                </div>
                                <div className={`text-xs md:text-sm ${activePhase === idx ? "text-black" : "text-white"}`}>{phase.subtitle}</div>
                            </button>
                        ))}
                    </div>

                    {/* 우측 컨텐츠 */}
                    <div className="flex-1 bg-white/10 rounded-xl p-6 min-h-[460px] text-white">
                        <h3 className="text-xl md:text-2xl font-bold mb-6">{phases[activePhase].content.heading}</h3>
                        <div className="space-y-6">
                            {phases[activePhase].content.sections.map((sec, idx) => {
                                const Icon = sec.icon;
                                return (
                                    // 모바일: grid-cols-1 / 데스크톱: grid-cols-3
                                    <div key={idx} className="pb-4 border-b border-white/30 last:border-0 grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 items-start">
                                        <div className="flex items-start gap-2">
                                            <Icon className="w-5 h-5 text-yellow-300 mt-1 flex-shrink-0" />
                                            <h4 className="text-sm md:text-lg font-semibold">{sec.subheading}</h4>
                                        </div>
                                        <div className="md:col-span-2">
                                            <ul className="text-xs md:text-lg space-y-1 text-gray-200">
                                                {sec.details.map((d, i) => (
                                                    <li key={i}>{d}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* === 두 번째 Extra Section === */}
            {/* 모바일: py-16 px-4 / 데스크톱: py-20 px-6 */}
            <section className="py-16 px-4 md:py-20 md:px-6 text-white bg-gray-900 min-h-[700px]">
                {/* 모바일: text-3xl / 데스크톱: text-4xl */}
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">상세 교육 과정</h2>

                {/* 카테고리 탭 (모바일 스크롤 가능) */}
                <div className="overflow-x-auto flex gap-6 justify-start md:justify-center mb-4">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveCategory(idx)}
                            className={`px-4 py-2 whitespace-nowrap transition-all ${activeCategory === idx
                                ? "font-bold text-orange-400 border-b-2 border-orange-400"
                                : "text-gray-400 hover:text-white opacity-70"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="border-b border-gray-600 mb-8"></div>

                {/* 버튼 목록 */}
                <div className="flex flex-wrap justify-start gap-4 items-start max-w-5xl mx-auto">
                    {buttonsByCategory[activeCategory].map((btn, idx) => (
                        // 모바일: w-full / 데스크톱: w-[300px]
                        <div
                            key={idx}
                            className={`w-full md:w-[300px] p-4 rounded-lg bg-white/10 cursor-pointer transition-all duration-300 min-h-[60px] ${openButtons[activeCategory][idx] ? "shadow-xl" : "hover:shadow-md"
                                }`}
                            onClick={() => toggleButton(activeCategory, idx)}
                        >
                            <div className="flex justify-between items-center">
                                <p className="font-semibold">{btn.title}</p>
                                <ChevronDown
                                    className={`w-5 h-5 transition-transform duration-300 ${openButtons[activeCategory][idx] ? "rotate-180" : "rotate-0"
                                        }`}
                                />
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openButtons[activeCategory][idx]
                                    ? "max-h-60 mt-2 opacity-100"
                                    : "max-h-0 mt-0 opacity-0"
                                    }`}
                            >
                                {Array.isArray(btn.detail) ? (
                                    <ul className="list-disc list-outside pl-5 space-y-1 text-sm text-gray-300">
                                        {btn.detail.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-sm text-gray-300">{btn.detail}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
