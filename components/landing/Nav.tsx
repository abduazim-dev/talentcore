"use client"
import { useEffect, useState } from "react";

interface NavLink {
    label: string;
    href: string;
}

const NAV_LINKS: NavLink[] = [
    { label: "Imkoniyatlar", href: "#imkoniyatlar" },
    { label: "Qanday ishlaydi", href: "#jarayon" },
    { label: "Narxlar", href: "#narxlar" },
    { label: "Taqqoslash", href: "#taqqoslash" },
] as const;

const GRADIENT_TEXT =
    "bg-linear-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent";
const GRADIENT_BTN =
    "bg-linear-to-r from-blue-500 to-indigo-500 shadow-[0px_0px_18px_0px_#6366F159]";

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => { document.body.style.overflow = "unset" }
    }, [isOpen])

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div>
            <nav
                className={`fixed top-0 inset-x-0 z-50 px-6 md:px-24 py-4 flex justify-between items-center transition-all duration-300
            ${scrolled ? "bg-[#0A0F1E]/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"}
        `}
            >
                <a href="/" className={`text-[22px] font-bold ${GRADIENT_TEXT}`}>
                    TalentCore
                </a>
                <ul className="hidden md:flex gap-8 list-none m-0 p-0">
                    {NAV_LINKS.map(({ label, href }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className="text-[#7A8A9E] hover:text-white transition-colors duration-200 text-sm"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex gap-3 items-center">
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="/login"
                            className="text-[#7A8A9E] hover:text-white transition-colors duration-200 text-sm"
                        >
                            Kirish
                        </a>

                        <a
                            href="/register"
                            className={` px-5 py-2 rounded-[9px] text-sm font-semibold text-white ${GRADIENT_BTN} hover:opacity-90 transition-opacity cursor-pointer`}
                        >
                            Bepul boshlash
                        </a>
                    </div>

                    <button className="cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <span>{isOpen ? "✕" : "☰"}</span>
                    </button>
                </div>
            </nav>
            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 top-[68px] bg-[#0A0F1E] z-40 flex flex-col md:hidden animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="flex flex-col items-center justify-center h-full px-8 pb-20"> {/* pb-20 tugmani biroz tepaga ko'taradi */}

                        {/* Linklar guruhi */}
                        <div className="flex flex-col items-center gap-4 w-full mb-8">
                            {NAV_LINKS.map(({ label, href }) => (
                                <a
                                    key={label}
                                    className="animate-fade-up w-full text-center py-3 text-lg text-[#7A8A9E] hover:text-white transition-colors"
                                    href={href}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {label}
                                </a>
                            ))}

                            <a
                                href="/login"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center py-3 text-lg text-[#7A8A9E] hover:text-white"
                            >
                                Kirish
                            </a>
                        </div>
                        <a
                            href="/register"
                            onClick={() => setIsOpen(false)}
                            className={`w-full text-center py-4 rounded-xl text-white font-bold text-lg ${GRADIENT_BTN}`}
                        >
                            Bepul boshlash
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Nav;