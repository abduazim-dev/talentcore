"use client"

import { useEffect, useState } from "react"

type Bonus = {
    id: number
    title: string
    icon: string
    descr: string
    priceFake: string
}

const bonuses: Bonus[] = [
    {
        id: 1,
        title: "3 Oy Bepul Premium",
        descr: "Barcha premium imkoniyatlar — Payroll, Overtime, SSO, API, Analytics — hech qanday to'lovsiz. Karta ham talab etilmaydi.",
        icon: "🆓",
        priceFake: "1.350.000"
    },
    {
        id: 2,
        title: "Shaxsiy Onboarding Menejer",
        descr: "Sizga maxsus onboarding mutaxassisi biriktiriladi. U kompaniyangizni TalentCorega ko'chirish jarayonini boshidan oxirigacha boshqaradi.",
        icon: "👨‍💼",
        priceFake: "500.000"
    },
    {
        id: 3,
        title: "Bepul Excel Migration",
        descr: "Mavjud Excel yoki boshqa tizimdan barcha ma'lumotlarni biz o'zimiz ko'chirib beramiz. Siz hech narsa qilmaysiz.",
        icon: "📊",
        priceFake: "300.000"
    }
]

const DEADLINE = new Date("2026-06-01T00:00")

type TimeLeft = {
    days: number,
    hours: number,
    mins: number
}

type TimeUnit = {
    label: string,
    value: keyof TimeLeft
}

const EarlyAccess = () => {
    const [mounted, setMounted] = useState(false)
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, mins: 0 })

    const timeUnits: TimeUnit[] = [
        { label: "Kun", value: "days" },
        { label: "Soat", value: 'hours' },
        { label: "Daqiqa", value: 'mins' }
    ]

    useEffect(() => {
        setMounted(true)
        const tick = () => {
            const diff = DEADLINE.getTime() - Date.now()
            if (diff <= 0) return
            setTimeLeft({
                days: Math.floor(diff / 86400000),
                hours: Math.floor((diff % 86400000) / 3600000),
                mins: Math.floor((diff % 3600000) / 60000)
            })
        }
        tick()
        const interval = setInterval(tick, 1000)
        return () => clearInterval(interval)
    }, [])

    if (!mounted) return null

    return (
        <section className="max-w-[1200px] mx-auto px-4 pt-30">
            <div className="p-6 md:p-14 border rounded-2xl border-[#6366F14D] bg-custom-gradient relative overflow-hidden">
                {/* Background Glow - Dizaynni boyitish uchun */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F59E0B10] blur-[100px] rounded-full -mr-32 -mt-32"></div>

                {/* Badge */}
                <div className="px-4 py-1.5 items-center gap-2 inline-flex rounded-full border border-[#F59E0B] animate-fade-up">
                    <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse"></span>
                    <span className="text-[#F59E0B] text-[10px] md:text-xs font-bold tracking-widest uppercase">🎁 Early Access Bonuslar</span>
                </div>

                {/* Hero Content & Timer */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mt-8">
                    <div className="max-w-2xl">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                            Birinchi 100 ta kompaniyaga <br />
                            <span className="text-[#F59E0B]"> maxsus sovg'alar!</span>
                        </h1>
                        <p className="text-[#7A8A9E] leading-7 mt-4 text-sm md:text-base">
                            TalentCore hali yangi loyiha. Siz bilan birga o'sishni xohlaymiz —
                            shu sababli dastlabki mijozlarimizga boshqa platformalarda
                            pullik bo'lgan xizmatlarni mutlaqo bepul taqdim etamiz.
                        </p>
                    </div>

                    {/* Timer */}
                    <div className="w-full lg:w-auto px-6 py-5 bg-[#00000066] backdrop-blur-md text-center border border-[#FBBF2433] rounded-2xl">
                        <span className="text-[#FCD34D] font-medium text-sm">🔥 Taklif tugashiga:</span>
                        <div className="flex mt-3 justify-center gap-2">
                            {timeUnits.map((item, index) => (
                                <div key={item.label} className="flex gap-2 items-center">
                                    <div className="flex flex-col items-center">
                                        <span className="text-2xl md:text-3xl bg-[#FFFFFF0F] py-2 px-3 rounded-lg border border-[#FFFFFF1A] font-bold font-mono">
                                            {String(timeLeft[item.value]).padStart(2, "0")}
                                        </span>
                                        <span className="text-[#4A5568] text-[10px] mt-1 uppercase tracking-wider">{item.label}</span>
                                    </div>
                                    {index < timeUnits.length - 1 && (
                                        <span className="text-[#FCD34D] font-bold text-2xl mb-6">:</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {bonuses.map(bonus => (
                        <div
                            key={bonus.id}
                            className="group p-6 flex flex-col rounded-2xl border border-[#FFFFFF14] bg-[#FFFFFF05] hover:border-[#F59E0B4D] hover:bg-[#F59E0B05] transition-all duration-500"
                        >
                            <span className="text-5xl group-hover:scale-110 transition-transform duration-500 origin-left">
                                {bonus.icon}
                            </span>
                            <div className="px-3 py-1 text-[10px] font-bold mt-8 w-fit rounded-full text-[#FCD34D] border border-[#FBBF2440] bg-[#FBBF2410]">
                                BONUS #{bonus.id}
                            </div>
                            <h2 className="text-xl mt-4 font-bold group-hover:text-[#F59E0B] transition-colors">
                                {bonus.title}
                            </h2>
                            <p className="mt-3 text-[#7A8A9E] text-sm leading-relaxed mb-6">
                                {bonus.descr}
                            </p>

                            <div className="mt-auto pt-6 border-t border-[#FFFFFF0A] flex items-center justify-between">
                                <span className="line-through text-[#4A5568] text-xs">
                                    {bonus.priceFake} UZS
                                </span>
                                <span className="text-[#34D399] font-bold">BEPUL</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="mt-12 flex justify-center">
                    <button className="group relative bg-linear-to-r from-[#F59E0B] to-[#EF4444] shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] px-10 py-4 font-bold rounded-xl text-white transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:scale-95 whitespace-nowrap">
                        <span className="flex items-center gap-3">
                            🎁 Bonusni qo'lga olish
                            <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default EarlyAccess