export default function Campus() {
    return (
        <section id="location-pic" className="py-20 lg:py-28 bg-white scroll-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">최적의 학습 환경, <br />캠퍼스를 소개합니다!</h2>
                </header>
                <h2 className="text-xl font-bold p-3">최고의 접근성: 노량진역 도보 1분!</h2>
                <div className="text-lg bg-gray-100 p-3 rounded-lg">
                    <p>수도권 핵심 교통 요지, 노량진역에서 단 1분 거리에 위치하여 <br className="md:hidden" />
                        어디서든 편리하게 찾아올 수 있는 최적의 학습 환경을 제공합니다.
                    </p>
                </div>
                <div className="image-gallery grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="image-item">
                        <img src="/images/campus/pic_01.jpg" alt="노량진역 6번 출구" className="w-full h-64 object-cover rounded-lg" />
                        <div className="image-caption text-center mt-2 font-medium">노량진역 6번 출구</div>
                    </div>
                    <div className="image-item">
                        <img src="/images/campus/pic_02.jpg" alt="캠퍼스 앞 버스정류장" className="w-full h-64 object-cover rounded-lg" />
                        <div className="image-caption text-center mt-2 font-medium">캠퍼스 앞 버스정류장</div>
                    </div>
                    <div className="image-item">
                        <img src="/images/campus/pic_03.jpg" alt="캠퍼스 전경" className="w-full h-64 object-cover rounded-lg" />
                        <div className="image-caption text-center mt-2 font-medium">캠퍼스 전경</div>
                    </div>
                </div>
                <h2 className="text-xl font-bold p-3 mt-12">자유로운 학습 공간: 강의실 & 스터디룸</h2>
                <div className="text-lg bg-gray-100 p-3 rounded-lg">
                    <p>
                        다양한 형태의 학습을 지원하는 스터디룸 제공<br className="md:hidden" />
                    </p>
                    <ul className="mt-4 space-y-2">
                        <li className="list-item">개인 및 그룹 스터디를 위한 최적의 환경</li>
                        <li className="list-item">편안하고 집중력 있는 분위기 조성</li>
                    </ul>
                </div>
                <div className="image-gallery grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="image-item">
                        <img src="/images/campus/pic_04.jpg" alt="6층 스터디룸" className="w-full h-64 object-cover rounded-lg" />
                        <div className="image-caption text-center mt-2 font-medium">스터디룸</div>
                    </div>
                    <div className="image-item">
                        <img src="/images/campus/pic_05.jpg" alt="스터디룸 입구" className="w-full h-64 object-cover rounded-lg" />
                        <div className="image-caption text-center mt-2 font-medium">스터디룸 입구</div>
                    </div>
                    <div className="image-item">
                        <img src="/images/campus/pic_06.jpg" alt="열람실" className="w-full h-64 object-cover rounded-lg" />
                        <div className="image-caption text-center mt-2 font-medium">열람실</div>
                    </div>
                </div>
                <div className="image-gallery grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="image-item">
                        <img src="/images/campus/pic_07.jpg" alt="6층 스터디룸" className="w-full h-64 object-cover rounded-lg" />
                        <div className="image-caption text-center mt-2 font-medium">강의실</div>
                    </div>
                    <div className="image-item">
                        <img src="/images/campus/pic_08.jpg" alt="스터디룸 입구" className="w-full h-64 object-cover rounded-lg" />
                        <div className="image-caption text-center mt-2 font-medium">강의실</div>
                    </div>
                    <div className="image-item">
                        <img src="/images/campus/pic_09.jpg" alt="열람실" className="w-full h-64 object-cover rounded-lg" />
                        <div className="image-caption text-center mt-2 font-medium">상담실</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
