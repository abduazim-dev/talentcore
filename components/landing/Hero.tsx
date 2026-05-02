import { FaYoutube } from "react-icons/fa"
const Hero = () => {
    return (
        <section className="px-24 mt-25 flex gap-15 items-center">
            <div>
                <div className="px-[15px] py-[6px] items-center gap-2 inline-flex rounded-full border border-[#3B82F647] animate-[fadeUp_0.7s_ease_forwards] [animation-delay:0.1s]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#3B82F6]"></span>
                    <span className="text-[#93C5FD] text-sm">HR boshqaruvning yangi davri</span>
                </div>
                <h1 className="text-[57px] font-extrabold animate-[fadeUp_0.7s_ease_forwards] [animation-delay:0.25s]  leading-[70px] mt-[25px]">Scale Your Team, <br />
                    <span className="bg-[linear-gradient(97.07deg,#60A5FA_0%,#818CF8_50%,#A78BFA_100%)] bg-clip-text text-transparent">
                        Not Your Paperwork.
                    </span></h1>
                <p className="w-105 text-[#7A8A9E] leading-7 mt-5 animate-[fadeUp_0.7s_ease_forwards] [animation-delay:0.4s]">TalentCore — xodimlar, maosh, ta'tillar, overtime va yollash
                    jarayonlarini bir joyda boshqarish uchun zamonaviy HR
                    platformasi. O'zbekiston uchun yaratilgan.</p>
                <div className="flex gap-[14px] mt-[38px] animate-[fadeUp_0.7s_ease_forwards] [animation-delay:0.55s]">
                    <button className="px-[30px] py-[17px] cursor-pointer font-bold bg-[linear-gradient(104.23deg,#3B82F6_0%,#6366F1_100%)] rounded-[11px] hover:opacity-80">Start 1 Month Free ✦</button>
                    <button className="px-[30px] flex py-[17px] cursor-pointer rounded-[11px] items-center gap-2 border border-white hover:bg-white/10"><span className="w-8 items-center flex px-2 rounded-full bg-[#3B82F6] h-8"><FaYoutube className="text-5 text-[#EFF6FF]"/></span> Watch Demo</button>
                </div>
            </div>
            <img src="/adminDash.png" className="w-1/2 mt-10 animate-[float_4s_ease-in-out_infinite]" alt="admin dashboard" />
        </section>
    )
}

export default Hero