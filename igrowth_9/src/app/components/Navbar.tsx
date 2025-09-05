export default function Navbar() {
    return (
        <nav className="flex z-20 justify-between items-center px-6 py-4 bg-white shadow-md fixed w-full z-10">
            <div className="text-2xl font-bold text-pink-500">LG U+</div>
            <ul className="hidden md:flex gap-6 text-gray-700">
                <li><a href="#features">특징</a></li>
                <li><a href="#curriculum">커리큘럼</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#apply">지원하기</a></li>
            </ul>
        </nav>
    );
}
