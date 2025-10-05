export default function Location() {
    return (
        <section id="location-info" className="py-10 bg-gray-50 scroll-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">교육장소 상세위치</h2>
                </div>
                <div className="mt-16 grid gap-12 items-start">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-gray-200 pb-4">아이그로스 노량진 캠퍼스</h3>
                        <p className="mt-2 text-gray-700">서울특별시 동작구 노량진로 114, 6층 (청탑학원, 1층 CU 편의점)</p>
                        <div className="mt-4">
                            <img src="/images/location.webp" alt="교육장소 지도" className="rounded-md w-full h-auto object-cover" />
                        </div>
                        <div className="mt-6 text-gray-600 space-y-2">
                            <p><strong>지하철:</strong> 1호선/9호선 노량진역 6번 출구에서 도보 1분</p>
                            <p><strong>버스:</strong> 노량진수산시장.CTS기독교TV 중앙버스차로 정류장 바로 앞 (정류장 번호 : 20009, 20010)<br />
                            간선버스(파랑색) 150, 360, 507, 605, 640, 641, 650<br />
                            지선버스(녹색) 5531, 6211, 6411, 6515, 8641<br />
                            마을버스 동작01, 동작03, 동작08, 동작13</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
