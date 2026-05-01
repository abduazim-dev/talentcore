const navlinks: string[] = ["Imkoniyatlar", "Qanday ishlaydi", "Narxlar", "FAQ"]

const Nav = () => {
    return (
        <nav className="px-24 py-4 flex justify-between items-center">
            <span className="text-[22px] font-bold bg-linear-to-r from-[#3B82F6] to-[#818CF8] bg-clip-text text-transparent">
                TalentCore
            </span>
            <div className="flex gap-8">
                {navlinks.map((link) => (
                    <a className="text-[#7A8A9E] hover:text-white transition" href="#" key={link}>{link}</a>
                ))}
            </div>
            <div className="flex gap-3 items-center">
                <a className="hover:text-[#7A8A9E]" href="#">Kirish</a>
                <button className="px-5 py-2 rounded-[9px] font-semibold bg-linear-to-r from-[#3B82F6] to-[#6366F1] shadow-[0px_0px_18px_0px_#6366F159] hover:opacity-90 transition cursor-pointer">Bepul boshlash</button>
            </div>
        </nav>
    )
}

export default Nav