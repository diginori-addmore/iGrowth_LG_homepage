export default function Features() {
    return (
        <section id="features" className="py-20 px-6 bg-white">
            <h2 className="text-3xl font-bold text-center mb-12">왜 WhyNotCamp인가? + 디자인, 내용개선 필요</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="p-6 border rounded-xl shadow-sm text-center">
                    {/* TODO: 아이콘 */}
                    <h3 className="text-xl font-semibold mb-2">실무 프로젝트</h3>
                    <p className="text-gray-600">
                        현업과 유사한 환경에서 팀 프로젝트를 진행하며 실전 감각을 기릅니다.
                    </p>
                </div>
                <div className="p-6 border rounded-xl shadow-sm text-center">
                    {/* TODO: 아이콘 */}
                    <h3 className="text-xl font-semibold mb-2">전문 멘토링</h3>
                    <p className="text-gray-600">
                        업계 전문가의 1:1 코드 리뷰와 커리어 코칭을 제공합니다.
                    </p>
                </div>
                <div className="p-6 border rounded-xl shadow-sm text-center">
                    {/* TODO: 아이콘 */}
                    <h3 className="text-xl font-semibold mb-2">취업 지원</h3>
                    <p className="text-gray-600">
                        포트폴리오 완성과 모의 인터뷰, 기업 매칭까지 이어드립니다.
                    </p>
                </div>
            </div>
        </section>
    );
}
