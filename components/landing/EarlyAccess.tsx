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

const EarlyAccess = () => {
    return (
        <section className="max-w-[1200px] mx-auto">
            <div className="p-14 border rounded-2xl border-[#6366F14D]">
                <div className="px-[15px] py-[6px] items-center gap-2 inline-flex rounded-full border border-[#F59E0B] animate-[fadeUp_0.7s_ease_forwards] [animation-delay:0.1s]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#F59E0B]"></span>
                    <span className="text-[#F59E0B] text-xs font-bold">🎁 EARLY ACCESS BONUSLAR</span>
                </div>
                <div>
                    <h1 className="text-4xl font-extrabold mt-3">Birinchi 100 ta kompaniyaga <br />
                        <span className="text-[#F59E0B]"> maxsus sovg'alar!</span></h1>
                </div>
                <p className="max-w-lg text-[#7A8A9E] leading-7 mt-3">TalentCore hali yangi loyiha. Siz bilan birga o'sishni xohlaymiz —
                    shu sababli dastlabki mijozlarimizga boshqa HR SaaS'larda
                    pulga sotiluvchi imkoniyatlarni mutlaqo bepul taqdim etamiz.</p>
                <div className="grid grid-cols-3 gap-4 mt-10 ">
                    {bonuses.map(bonus => (
                        <div className="px-[22px] flex flex-col rounded-2xl  border border-[#FFFFFF14] pt-7 pb-11 bg-[#00000040]" key={bonus.id}>
                            <span className="text-4xl">{bonus.icon}</span>
                            <div className="px-[9px] py-[2px] text-[10px] font-bold mt-7 w-fit rounded-full text-[#FCD34D] border border-[#FBBF2440]">BONUS #{bonus.id}</div>
                            <h2 className="text-xl mt-3 font-bold">{bonus.title}</h2>
                            <p className="mt-2 text-[#7A8A9E]">{bonus.descr}</p>
                            <div className="mt-4 flex items-center gap-2">
                                <span className="line-through text-[#4A5568] text-[14px]">{bonus.priceFake} UZS qiymati</span>
                                <span className="text-[#34D399] text-xl font-bold">→ BEPUL</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pt-4 mx-auto flex justify-center">
                    <button className="bg-[linear-gradient(99.68deg,#F59E0B_0%,#EF4444_100%)] shadow-[0px_4px_16px_0px_#0000004D,0px_0px_24px_0px_#F59E0B66] px-8 py-3 font-bold rounded-xl" >🎁 Bonusni qo'lga olish →</button>
                </div>
            </div>
        </section>
    )
}

export default EarlyAccess