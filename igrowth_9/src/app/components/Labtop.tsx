export default function Labtop() {
    return (
        <section className="relative flex items-center justify-center bg-gradient-to-b from-white to-pink-200 pt-0 pb-16 px-8 overflow-hidden gap-x-0 -mt-2">

            {/* 왼쪽 이미지 */}
            <div className="flex-1 flex justify-end items-end overflow-hidden pr-32">
                {/* TODO: 이미지 교체 */}
                <img
                    src="/labtop.png"
                    alt="랩탑"
                    className="h-48 object-contain"
                // translate-y-6
                />
            </div>

            {/* 오른쪽 텍스트 */}
            <div className="flex-1 flex flex-col justify-center items-start text-left pl-0">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    교육용 <span className="text-pink-500">고성능 노트북 무료 </span>지원
                </h2>
                <p className="text-lg text-gray-600">
                    i7-13620H / RAM 32GB / RTX 4060
                </p>
            </div>

        </section>
    )
}