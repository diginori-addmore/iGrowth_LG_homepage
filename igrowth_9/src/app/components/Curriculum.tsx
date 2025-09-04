"use client";
import { useState } from "react";

export default function Curriculum() {
    const [activePhase, setActivePhase] = useState(0);

    const phases = [
        {
            title: "Phase 0",
            subtitle: "준비",
            content: (
                <>
                    <h3 className="text-2xl font-bold mb-2">Phase 0: 기초 준비</h3>
                    <p className="text-white mb-2">프로그래밍 기본과 환경 설정, Git/GitHub 사용법 학습</p>
                    <ul className="list-disc pl-5 text-white">
                        <li>HTML, CSS, JavaScript 기본</li>
                        <li>Node.js 및 패키지 관리</li>
                        <li>버전 관리 기초</li>
                    </ul>
                </>
            )
        },
        {
            title: "Phase 1",
            subtitle: "훈련과정(정규교과)",
            content: (
                <>
                    <h3 className="text-2xl font-bold mb-2">Phase 1: 프론트엔드</h3>
                    <p className="text-white mb-2">React와 Next.js를 활용한 웹 애플리케이션 개발</p>
                    <ul className="list-disc pl-5 text-white">
                        <li>컴포넌트 기반 개발 이해</li>
                        <li>TailwindCSS로 스타일링</li>
                        <li>API 연동과 상태 관리</li>
                    </ul>
                </>
            )
        },
        {
            title: "Phase 2",
            subtitle: "훈련과정(프로젝트)",
            content: (
                <>
                    <h3 className="text-2xl font-bold mb-2">Phase 2: 백엔드 & DB</h3>
                    <p className="text-white mb-2">FastAPI, Node.js를 활용한 서버 구축과 데이터베이스 연동</p>
                    <ul className="list-disc pl-5 text-white">
                        <li>REST API 설계 및 구현</li>
                        <li>PostgreSQL / MongoDB 연동</li>
                        <li>인증과 권한 관리</li>
                    </ul>
                </>
            )
        },
        {
            title: "Phase 3",
            subtitle: "평가",
            content: (
                <>
                    <h3 className="text-2xl font-bold mb-2">Phase 3: 프로젝트 완성</h3>
                    <p className="text-white mb-2">실제 서비스 배포까지 진행하며 포트폴리오 완성</p>
                    <ul className="list-disc pl-5 text-white">
                        <li>프로젝트 구조 설계</li>
                        <li>배포 및 운영</li>
                        <li>팀 협업 경험</li>
                    </ul>
                </>
            )
        }
    ];

    return (
        <section className="bg-gradient-to-b from-orange-400 via-orange-800 to-gray-900 py-20 px-6">
            {/* 상단 홍보 문구 */}
            <div className="text-center mb-12">
                <h2 className="text-xl font-bold text-white mb-2">LG U+ Why Not SW Camp 만의</h2>
                <p className="text-5xl font-bold text-white">초고속 실력 향상 커리큘럼</p>
            </div>

            {/* 버튼 + 컨텐츠 영역 */}
            <div className="flex max-w-6xl mx-auto gap-8">
                {/* 좌측 버튼 */}
                <div className="flex flex-col gap-4 w-1/4">
                    {phases.map((phase, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActivePhase(idx)}
                            className={`transition-colors duration-200 text-white px-4 py-3 rounded-lg text-left ${activePhase === idx
                                ? "bg-white text-black font-bold"
                                : "bg-transparent"
                                }`}
                        >
                            <div className={`text-lg font-semibold ${activePhase === idx ? "text-black" : "text-white"}`}>{phase.title}</div>
                            <div className={`text-sm ${activePhase === idx ? "text-black" : "text-white"}`}>
                                {phase.subtitle}
                            </div>
                        </button>
                    ))}
                </div>

                {/* 우측 컨텐츠 */}
                <div className="flex-1 bg-white/10 rounded-xl p-6 min-h-[300px]">
                    {phases[activePhase].content}
                </div>
            </div>
        </section >
    );
}
