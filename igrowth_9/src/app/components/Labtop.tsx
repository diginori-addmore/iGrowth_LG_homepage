export default function Labtop() {
    return (
        <section className="relative flex items-center justify-center bg-gradient-to-b from-gray-100 to-pink-200 py-16 px-8 overflow-hidden">

            {/* 왼쪽 이미지 */}
            <div className="flex-1 flex justify-center items-end overflow-hidden">
                {/* TODO: 이미지 교체 */}
                <img
                    src="/labtop.png"
                    alt="랩탑"
                    className="w-3/4 object-cover"
                // translate-y-6
                />
            </div>

            {/* 오른쪽 텍스트 */}
            <div className="flex-1 flex flex-col justify-center items-start text-left px-4">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    교육용 고성능 노트북 무료 지원
                </h2>
                <p className="text-lg text-gray-600">
                    i7(CPU세대도 기입 바람) / RAM 32GB / NVIDIA 4060
                </p>
            </div>

        </section>
    )
}