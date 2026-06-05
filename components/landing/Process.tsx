type Step = {
    id: number
    icon: string
    label: string
    descr: string
}

const steps: Step[] = [
    {
        id: 1, label: "Tezkor onboarding", icon: "🚀", descr: "Kompaniyangizni ro'yxatdan o'tkazing va bir tugma bilan barcha xodimlar ma'lumotlarini import qiling — Excel yoki CSV orqali."
    },
    {
        id: 2, label: "Avtomatik sinxronlash", icon: "🔄", descr: "Tizim avtomatik ravishda barcha bo'limlar, rollar va maosh ma'lumotlarini sinxronlaydi — real vaqt rejimida va xatosiz."
    },
    {
        id: 3, label: "Boshqaruvni qo'lga oling", icon: "🎯", descr: "Dashboard orqali xodimlar, maosh va hisobotlarni bir joydan kuzating — hamma narsa tayyor."
    }
]

const Process = () => {
    return (
        <section id="jarayon" className="text-center pt-20 sm:pt-30 px-4 sm:px-6">
            <p className="text-[#60A5FA] text-sm font-semibold uppercase tracking-widest">Jarayon</p>
            <h2 className="text-[28px] sm:text-[41px] font-extrabold mt-2">3 qadamda ishni boshlang</h2>
            <p className="text-[#7A8A9E] mt-4">Murakkab sozlamalar yo'q. 15 daqiqada tayyorsiz.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 px-4 sm:px-12 md:px-24 lg:px-50 mt-12 sm:mt-16 gap-6">
                {steps.map(step => (
                    <div
                        className="cursor-pointer relative flex flex-col items-center rounded-[20px] px-6 pt-10 pb-8 bg-[#FFFFFF08] border border-[#FFFFFF12] hover:border-[#3B82F6]/40 hover:bg-[#FFFFFF0D] transition-all duration-300"
                        key={step.id}
                    >
                        <span className="absolute top-[-14px] bg-[linear-gradient(104.56deg,#3B82F6_0%,#6366F1_100%)] text-[11px] font-semibold px-3 py-1 uppercase rounded-full tracking-wider">
                            Qadam 0{step.id}
                        </span>

                        <span className="w-16 h-16 text-2xl flex items-center justify-center bg-[#8B5CF61F] rounded-[18px] mb-5">
                            {step.icon}
                        </span>

                        <h3 className="font-bold text-xl mb-3">{step.label}</h3>
                        <p className="text-[#7A8A9E] text-sm leading-relaxed">{step.descr}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Process