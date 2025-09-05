"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
    const [openItems, setOpenItems] = useState<boolean[]>([false, false, false]);

    const faqs = [
        {
            question: "코딩을 전혀 모르는데, 따라갈 수 있을까요?",
            answer: "네, 가능합니다! 입문자 기준으로 기초부터 차근차근 알려드립니다."
        },
        {
            question: "온라인/오프라인 중 어떻게 진행되나요?",
            answer: "학습 효율을 위해 오프라인으로만 진행됩니다."
        },
        {
            question: "개인 일정으로 수업에 빠지게 되면 어떻게 되나요?",
            answer: "병원 진료, 면접, 예비군 등 개인 일정으로 수업에 빠지게 된다면 증빙 서류 제출 시 출결 정정이 가능하도록 하고 있습니다! 더불어 빠진 부분에 대해 개인 교습을 진행하고 수업 진도를 따라갈 수 있도록 도와드립니다."
        },
        {
            question: "KDT 수강 이력이 있는데 또 수강해도 괜찮은가요?",
            answer: "이전 KDT 과정 수강 이력이 있다면 신청이 가능합니다만, 자비 부담금이 발생됩니다. 해당 자비 부담금은 고용센터를 통해 확인하시면 됩니다."
        },
        {
            question: "과정 신청 후 절차가 어떻게 되나요?",
            answer: "신청 페이지에서 과정 신청이 완료가 되면 매니저가 순차적으로 개별 연락을 드리고 있습니다! 2~3 영업 일 이내에 매니저가 연락을 드리나 과정에 따라 기간이 소요 될 수 있으니 참고 바랍니다."
        }
        
    ];

    const toggleItem = (index: number) => {
        setOpenItems(prev => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <section id="faq" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center border-b border-pink-400 pb-2 mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white"> 자주 묻는 질문</h3>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="bg-white/10 rounded-lg overflow-hidden hover:bg-white/15 transition-colors duration-300"
                        >
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                            >
                                <h4 className="font-semibold text-lg text-white pr-4">{faq.question}</h4>
                                <ChevronDown 
                                    className={`w-5 h-5 text-pink-400 transition-transform duration-300 ${
                                        openItems[index] ? 'rotate-180' : 'rotate-0'
                                    }`}
                                />
                            </button>
                            <div 
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    openItems[index] 
                                        ? 'max-h-32 opacity-100' 
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-6 pb-6">
                                    <p className="text-sm text-gray-300">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
