"use client"

import { useEffect, useRef, useState } from "react"

type Fields = {
    id: number
    icon: string
    title: string
    descr: string
    consistency: string
}

const companyAdapted: Fields[] = [
    { id: 1, icon: "💻", title: "IT Companies", descr: "Dasturchilar va texnik jamoalar uchun. Sprint kuzatish, overtime boshqaruvi va developer KPIlari.", consistency: "📈 Real-time developer KPI tracking" },
    { id: 2, icon: "🎓", title: "Educational Centers", descr: "O'quv markazlari va universitetlar uchun. O'qituvchi jadvallarini va to'lovlarni avtomatlashtirib bering.", consistency: "📅 Teacher schedule & payroll auto" },
    { id: 3, icon: "🏪", title: "Retail Chains", descr: "Ko'p filiallar, smenali ish jadvali va savdo xodimlarining KPI va maosh boshqaruvi.", consistency: "🏬 Multi-branch shift management" },
    { id: 4, icon: "🏭", title: "Manufacturing", descr: "Ishlab chiqarish sexlari, ish vaqti kuzatish, texnika xavfsizligi hujjatlari va davomati.", consistency: "⚙️ Factory attendance & safety docs" },
]

const AdaptedIndustries = () => {
    const [visible, setVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.15 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="px-6 sm:px-16 lg:px-24 mt-40">
            {/* Header */}
            <p
                className={`text-[#60A5FA] text-sm font-semibold uppercase tracking-widest transition-all duration-500
                    ${visible ? "animate-fade-up" : "opacity-0 translate-y-4"}`}
            >
                Sohalarga moslashgan
            </p>

            <h1
                className={`text-[28px] sm:text-[41px] font-extrabold mt-2 transition-all duration-500 delay-100
                    ${visible ? "animate-fade-up" : "opacity-0 translate-y-4"}`}
            >
                Har bir sanoat uchun mo'ljallangan
            </h1>

            <p
                className={`text-[#7A8A9E] max-w-lg mt-4 transition-all duration-500 delay-150
                    ${visible ? "animate-fade-up" : "opacity-0 translate-y-4"}`}
            >
                Har bir soha o'ziga xos talablarga ega. TalentCore ularning hammasini qamrab oladi.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {companyAdapted.map(({ id, icon, title, descr, consistency }, index) => (
                    <div
                        key={id}
                        className={`group relative bg-[#FFFFFF08] border border-[#FFFFFF12] flex flex-col py-7 px-6 rounded-xl
                            cursor-pointer overflow-hidden
                            transition-all duration-500 hover:border-[#3B82F640] hover:bg-[#FFFFFF0F] hover:-translate-y-1
                            ${visible ? "animate-fade-up" : "opacity-0 translate-y-6"}`}
                        style={{ transitionDelay: visible ? `${200 + index * 80}ms` : "0ms" }}
                    >
                        {/* Hover glow */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                            bg-[radial-gradient(ellipse_at_top_left,#3B82F610_0%,transparent_60%)]" />

                        {/* Icon */}
                        <span className="w-13 h-13 text-2xl bg-[#3B82F61F] rounded-xl mb-5 flex justify-center items-center
                            transition-transform duration-300 group-hover:scale-110">
                            {icon}
                        </span>

                        <h2 className="text-xl font-bold mb-2">{title}</h2>
                        <p className="text-[#7A8A9E] mb-5 text-sm leading-relaxed flex-1">{descr}</p>

                        {/* Badge */}
                        <span className="inline-flex items-center gap-1.5 bg-[#3B82F612] border border-[#3B82F626]
                            py-1.5 px-3 text-xs rounded-lg text-[#60A5FA] font-medium w-fit
                            transition-colors duration-300 group-hover:bg-[#3B82F620] group-hover:border-[#3B82F640]">
                            {consistency}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AdaptedIndustries