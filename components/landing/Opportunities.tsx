"use client"
import { useState } from "react"

type Features = {
    icon: string
    title: string
    descr: string
}

type Tabs = {
    id: number
    label: string
    features: Features[]
}

const opportunities: Tabs[] = [
    {
        id: 1,
        label: "👤 HR Asosiy",
        features: [
            {
                icon: "👥",
                title: "Xodim Boshqaruvi",
                descr: "Barcha xodimlar ma'lumotlari, hujjatlar, lavozimlar va bo'limlarni markazlashtirilgan tizimda saqlang."
            },
            {
                icon: "📅",
                title: "Ta'til & Davomat",
                descr: "Ta'til so'rovlari, tasdiqlash flow, balans kuzatish va kalendar — xodim va menejer uchun alohida panel."
            },
            {
                icon: "📋",
                title: "Yollash Moduli",
                descr: "Vakansiyalar, arizalar, suhbat rejalashtirish va onboarding — to'liq recruitment pipeline bir joyda."
            },
            {
                icon: "📚",
                title: "LMS — O'quv Moduli",
                descr: "Kurslar, vazifalar va sertifikatlar. Jamoa o'qish progressini real vaqtda kuzating."
            },
            {
                icon: "🤝",
                title: "1:1 Uchrashuvlar",
                descr: "Menejer-xodim individual uchrashuvlarini rejalashtiring, mavzularni belgilang va natijalarni saqlang."
            },
            {
                icon: "📢",
                title: "Ichki Xabarlar",
                descr: "E'lonlar va shaxsiy xabarlar — barcha ichki kommunikatsiya bir platformada."
            }
        ]
    },
    {
        id: 2,
        label: "💰 Moliya",
        features: [
            {
                icon: "💵",
                title: "Ish Haqi Hisoblash",
                descr: "Oylik maosh, bonus va ushlab qolishlarni avtomatik hisoblang. UZS va USD qo'llab-quvvatlanadi."
            },
            {
                icon: "🧾",
                title: "O'zbekiston Soliqlari",
                descr: "INPS 12% va daromad solig'i 15% avtomatik hisoblanadi. JShShIR maydonlari to'liq qo'llab-quvvatlanadi."
            },
            {
                icon: "📄",
                title: "Maosh Slip",
                descr: "Har bir xodim o'z oylik maosh slipini ko'radi — hisob-kitob, ushlab qolishlar va to'lov tarixi."
            },
            {
                icon: "⏱️",
                title: "Qo'shimcha Ish Vaqti",
                descr: "Overtime so'rovlari, tasdiqlash va avtomatik hisoblash — alohida modul sifatida ishlaydi."
            },
            {
                icon: "📊",
                title: "Bo'lim Xarajatlari",
                descr: "Bo'limlar bo'yicha maosh xarajatlarini kuzating va tahlil qiling."
            },
            {
                icon: "📈",
                title: "Moliyaviy Hisobotlar",
                descr: "Davrlar bo'yicha to'lov hisobotlari — PDF formatida yuklab olish imkoniyati bilan."
            }
        ]
    },
    {
        id: 3,
        label: "📊 Tahlil",
        features: [
            {
                icon: "📈",
                title: "HR Dashboard",
                descr: "Xodimlar soni, davomat, bo'sh lavozimlar — barcha asosiy KPI'lar bir ekranda."
            },
            {
                icon: "🎯",
                title: "Samaradorlik Baholash",
                descr: "360° baholash tizimi: xodimlarni belgilang, natijalarni kuzating va eng yaxshilarni aniqlang."
            },
            {
                icon: "📉",
                title: "Kadrlar Aylanmasi",
                descr: "Ishdan ketish sabablarini tahlil qiling. Offboarding jarayoni va exit interview natijalari."
            },
            {
                icon: "🗂️",
                title: "Audit Log",
                descr: "Tizimda barcha harakatlar qayd etiladi — kim, qachon, nima qilganini kuzating."
            },
            {
                icon: "📅",
                title: "Sprint & Vazifalar",
                descr: "Menejer jamoasi uchun sprint rejalashtirish va vazifa kuzatuvi — progress real vaqtda ko'rinadi."
            },
            {
                icon: "🗓️",
                title: "Ish Jadvali",
                descr: "Xodimning oylik ish jadvali, ta'til kunlari va ish vaqti bir kalendarda."
            }
        ]
    },
    {
        id: 4,
        label: "🔧 Texnik",
        features: [
            {
                icon: "🔗",
                title: "API Integratsiya",
                descr: "Tashqi tizimlar bilan REST API orqali integratsiya. So'rovlar soni, tezlik va xatolar real vaqtda kuzatiladi."
            },
            {
                icon: "🔑",
                title: "SSO Qo'llab-quvvatlash",
                descr: "Yagona tizimga kirish (Single Sign-On) — xodimlar bitta hisob orqali barcha modullarga kiradi."
            },
            {
                icon: "🛡️",
                title: "Rol Asosida Kirish",
                descr: "Super Admin, HR Admin, Menejer va Xodim — har bir rol faqat o'z ma'lumotlarini ko'radi."
            },
            {
                icon: "⚙️",
                title: "Tizim Sozlamalari",
                descr: "Kompaniya ma'lumotlari, bo'limlar, lavozimlar va tizim parametrlarini markazdan boshqaring."
            },
            {
                icon: "📱",
                title: "PWA — Mobil Ishlash",
                descr: "Alohida ilova o'rnatmasdan telefonda to'liq ishlaydi. Barcha panellar mobil qurilmalar uchun moslashgan."
            },
            {
                icon: "🔔",
                title: "Bildirishnomalar",
                descr: "Ta'til tasdiqlash, maosh kuni, vazifa muddati — muhim voqealar haqida avtomatik xabar."
            }
        ]
    }
]

const Opportunities = () => {
    const [activeTab, setActiveTab] = useState(1)
    const currentFeatures = opportunities.find(tab => tab.id === activeTab)?.features ?? []

    return (
        <section className="text-center pt-30 px-4">
            <p className="text-[#60A5FA] text-sm font-semibold uppercase tracking-widest">Imkoniyatlar</p>
            <h1 className="text-[28px] sm:text-[41px] font-extrabold mt-2">Sizga kerakli barcha HR vositalar</h1>
            <p className="text-[#7A8A9E] mt-4">Bir tizimda — maosh, ta'til, yollash, o'qish va ko'proq.</p>  {/* ✅ rang tuzatildi */}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10 max-w-2xl mx-auto">  {/* ✅ responsive */}
                {opportunities.map(({ id, label }) => (
                    <button
                        key={id}
                        onClick={() => setActiveTab(id)}
                        className={`px-4 py-2 rounded-[10px] border transition-all duration-200 cursor-pointer
                    ${activeTab === id
                                ? "border-[#3B82F659] bg-[#3B82F620] text-[#93C5FD]"
                                : "bg-[#FFFFFF0A] border-[#FFFFFF12] text-[#7A8A9E] hover:border-[#3B82F6] hover:text-[#93C5FD]"
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div
                key={activeTab}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 max-w-6xl mx-auto animate-fade-up"
            >
                {currentFeatures.map(({ icon, title, descr }) => (
                    <div
                        key={title}
                        className="flex cursor-pointer flex-col p-7 rounded-[14px] text-left bg-[#FFFFFF0A] border border-[#FFFFFF08] hover:border-[#3B82F640] transition-all duration-200"
                    >
                        <span className="w-12 h-12 mb-3 rounded-xl flex items-center justify-center bg-[#8B5CF626] text-[19px]">
                            {icon}
                        </span>
                        <h2 className="font-bold text-xl mb-3">{title}</h2>
                        <p className="text-[#7A8A9E]">{descr}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Opportunities
