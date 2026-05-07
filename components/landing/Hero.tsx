import { FaYoutube } from "react-icons/fa"
import Image from "next/image"

const Hero = () => {
    return (
        <section className="relative px-24 pt-30 flex justify-between items-center overflow-hidden min-h-[85vh]">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_500px_at_20%_50%,rgba(59,130,246,0.12),transparent_70%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_400px_400px_at_75%_30%,rgba(99,102,241,0.10),transparent_70%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_300px_300px_at_80%_80%,rgba(167,139,250,0.08),transparent_60%)]" />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="relative z-10">
                <div className="px-[15px] py-[6px] items-center gap-2 inline-flex rounded-full border border-[#3B82F647] bg-[#3B82F6]/8 backdrop-blur-sm animate-fade-up [animation-delay:0.1s]">
                    <span className="w-2 h-2 rounded-full bg-[#3B82F6] shadow-[0_0_6px_#3B82F6] animate-pulse" />
                    <span className="text-[#93C5FD] font-semibold text-sm">HR boshqaruvning yangi davri</span>
                </div>

                <h1 className="text-[52px] font-extrabold leading-[1.15] tracking-tight mt-6 animate-fade-up [animation-delay:0.25s]">
                    Jamoangizni o'stirish,<br />
                    <span className="bg-[linear-gradient(97.07deg,#60A5FA_0%,#818CF8_50%,#A78BFA_100%)] bg-clip-text text-transparent">
                        qog'ozbozlik emas.
                    </span>
                </h1>

                <p className="max-w-[440px] text-[#7A8A9E] leading-7 mt-5 text-[15px] animate-fade-up [animation-delay:0.4s]">
                    TalentCore — xodimlar, maosh, ta'tillar, overtime va yollash
                    jarayonlarini bir joyda boshqarish uchun zamonaviy HR
                    platformasi. O'zbekiston uchun yaratilgan.
                </p>

                <div className="flex gap-3 mt-9 animate-fade-up [animation-delay:0.55s]">
                    <button className="px-7 py-[15px] cursor-pointer font-bold text-sm bg-[linear-gradient(104.23deg,#3B82F6_0%,#6366F1_100%)] rounded-[11px] hover:opacity-80 hover:-translate-y-px transition-all">
                        1 Oy Bepul Boshlash ✦
                    </button>
                    <button className="px-7 flex py-[15px] cursor-pointer rounded-[11px] items-center gap-2.5 border border-white/15 hover:bg-white/[0.07] hover:-translate-y-px transition-all">
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#3B82F6] shrink-0">
                            <FaYoutube className="text-[14px] text-[#EFF6FF]" />
                        </span>
                        Demo Ko'rish
                    </button>
                </div>
            </div>
            <div className="relative z-10 flex justify-end animate-fade-up [animation-delay:0.3s]">
                <div className="relative">
                    <div className="absolute -inset-10 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),transparent_70%)] blur-2xl pointer-events-none" />
                    <Image
                        src="/adminDash.jpeg"
                        alt="admin dashboard"
                        width={0}
                        height={0}
                        style={{ width: "580px", height: "auto" }}
                        sizes="580px"
                        priority
                        className="hidden md:flex relative z-10 rounded-2xl border border-white/8 shadow-[0_0_0_1px_rgba(99,102,241,0.15),0_40px_80px_rgba(0,0,0,0.5)] animate-[float_4s_ease-in-out_infinite] mix-blend-lighten"
                    />
                </div>
            </div>

        </section>
    )
}

export default Hero