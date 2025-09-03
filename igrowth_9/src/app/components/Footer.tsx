export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 mt-20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="text-lg font-bold">WhyNotCamp</div>
                <p className="text-gray-400 mt-4 md:mt-0">
                    © {new Date().getFullYear()} iGrowth. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
