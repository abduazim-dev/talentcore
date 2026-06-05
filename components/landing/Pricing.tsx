"use client"
type Prices = {
    most: boolean
    team: string
    tariff: string
    price: string | number
    employes: string
    opportunities: string[]
}

const teams: Prices[] = [
    {
        most: false,
        team: "Kichik jamoalar uchun",
        tariff: "Starter",
        price: 150,
        employes: "50 tagacha xodim — asosiy HR va maosh imkoniyatlari.",
        opportunities: [
            "50 tagacha xodim",
            "Xodimlarni qo'shish va boshqarish",
            "Asosiy maosh hisoblash (INPS 12% + soliq 15%)",
            "Bo'limlar va lavozimlar",
            "Xodim profili va hujjatlar",
            "Email xabarnomalar",
            "1 HR Admin",
            "Email orqali qo'llab-quvvatlash",
        ],
    },
    {
        most: true,
        team: "O'rta jamoalar uchun",
        tariff: "Growth",
        price: 350,
        employes: "200 tagacha xodim — barcha imkoniyatlar + hisobotlar + SSO.",
        opportunities: [
            "200 tagacha xodim",
            "Starter dagi barcha imkoniyatlar",
            "Kengaytirilgan hisobotlar va analitika",
            "Mehnat ta'tili va davomatni boshqarish",
            "Mukofot va jarima tizimi",
            "SSO (Single Sign-On)",
            "3 HR Admin + cheksiz Menejer",
            "Onboarding va offboarding jarayonlari",
            "Prioritet qo'llab-quvvatlash",
        ],
    },
    {
        most: false,
        team: "Katta korporatsiyalar uchun",
        tariff: "Enterprise",
        price: "Muzokarali",
        employes: "500+ xodim — maxsus SLA, dedicated server va custom integratsiyalar.",
        opportunities: [
            "Cheksiz xodim",
            "Growth dagi barcha imkoniyatlar",
            "Dedicated server va maxsus sozlamalar",
            "Custom integratsiyalar (1C, ERP va boshqalar)",
            "Maxsus SLA shartnoma",
            "Cheksiz HR Admin va Menejer",
            "Maxsus hisobotlar va dashboard",
            "API kirish huquqi",
            "24/7 qo'llab-quvvatlash",
            "O'qitish va onboarding yordam",
        ],
    },
]

const CheckIcon = () => (
    <svg className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
)

const Pricing = () => {
    return (
        <section id="narxlar" className="mt-30 text-center mb-24 px-4">
            <p className="text-[#60A5FA] text-sm font-semibold uppercase tracking-widest">
                narxlar
            </p>
            <h2 className="text-[28px] sm:text-[41px] font-extrabold mt-2 leading-tight">
                Kompaniyangiz hajmiga mos tariflar
            </h2>
            <p className="text-[#7A8A9E] mt-4 text-base">
                Hamma tariflar uchun 3 oy bepul sinov.
            </p>

            <div className="flex justify-center mt-6">
                <div className="px-5 py-3 w-fit border flex flex-col sm:flex-row gap-3 sm:gap-8 items-center border-[#6366F140] bg-custom-gradient-muted rounded-xl">
                    <span className="font-bold flex items-center justify-center px-4 h-7 rounded-full bg-custom-gradient-rgba text-sm whitespace-nowrap">
                        🎉 EARLY ACCESS
                    </span>
                    <p className="text-[#7A8A9E] text-sm text-center sm:text-left">
                        Hozir ro'yxatdan o'tsangiz birinchi{' '}
                        <span className="text-[#C4B5FD] font-semibold">3 oy 20% chegirma</span>{' '}
                        + barcha early access bonuslarni olasiz!
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 text-left px-0 sm:px-8 lg:px-16 mt-10 gap-5">
                {teams.map(({ most, team, tariff, price, employes, opportunities }) => (
                    <div
                        key={tariff}
                        className={`
                            relative p-7 rounded-[20px] flex flex-col
                            transition-all duration-300 ease-in-out cursor-default
                            ${most
                                ? 'bg-[#1E2A45] border-2 border-[#3B82F6] shadow-[0_0_40px_rgba(59,130,246,0.15)] scale-[1.02]'
                                : 'bg-[#FFFFFF08] border border-[#FFFFFF12] hover:border-[#3B82F640] hover:bg-[#FFFFFF0D] hover:shadow-[0_0_30px_rgba(59,130,246,0.07)] hover:-translate-y-1'
                            }
                        `}
                    >
                        {most && (
                            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                <span className="bg-[#3B82F6] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg">
                                    ⭐ Eng mashhur
                                </span>
                            </div>
                        )}

                        <div className="mb-5">
                            <p className="text-[#7A8A9E] text-sm mb-1">{team}</p>
                            <h2 className={`font-extrabold text-2xl ${most ? 'text-[#60A5FA]' : 'text-white'}`}>
                                {tariff}
                            </h2>
                        </div>

                        <div className="mb-2">
                            {price === 'Muzokarali' ? (
                                <h3 className="font-bold text-3xl text-white">Muzokarali</h3>
                            ) : (
                                <h3 className="font-bold text-3xl text-white">
                                    {price},000{' '}
                                    <span className="text-sm text-[#7A8A9E] font-normal">UZS / oy</span>
                                </h3>
                            )}
                        </div>

                        <p className="text-[#7A8A9E] text-sm mb-6 leading-relaxed">{employes}</p>

                        <div className="border-t border-[#FFFFFF10] mb-5" />

                        {/* Opportunities */}
                        <ul className="flex flex-col gap-2.5 flex-1">
                            {opportunities.map(item => (
                                <li key={item} className="flex items-start gap-2.5 text-sm text-[#A8B8CC]">
                                    <CheckIcon />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            className={`
                                mt-7 w-full py-3 text-base font-bold rounded-xl
                                transition-all duration-200 ease-in-out
                                ${most
                                    ? 'bg-[#3B82F6] text-white hover:bg-[#2563EB] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] active:scale-[0.98]'
                                    : 'border border-[#3B82F659] text-[#93C5FD] hover:bg-[#3B82F610] hover:border-[#3B82F6] active:scale-[0.98]'
                                }
                            `}
                        >
                            {tariff === 'Enterprise' ? "Bog'lanish" : "Boshlash"}
                        </button>
                    </div>
                ))}
            </div>

            <p className="text-[#7A8A9E] text-xs mt-8">
                Kredit karta talab qilinmaydi · Istalgan vaqt bekor qilish mumkin
            </p>
        </section>
    )
}

export default Pricing