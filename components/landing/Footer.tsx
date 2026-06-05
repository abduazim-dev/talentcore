import Link from "next/link";

const navLinks = [
  { label: "Bosh sahifa", href: "#hero" },
  { label: "Imkoniyatlar", href: "#imkoniyatlar" },
  { label: "Jarayon", href: "#jarayon" },
  { label: "Sohalar", href: "#sohalar" },
  { label: "Erta kirish", href: "#erta-kirish" },
];

const socialLinks = [
  {
    label: "Telegram",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 4.5L2.5 11l7 2.5M21.5 4.5L14 19.5l-4.5-6M21.5 4.5L9.5 13.5m0 0v6l3-3" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#09090f] text-[#e8e6f0] overflow-hidden">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-violet-500/60 to-transparent" />

      {/* Background radial glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[260px] rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">

        {/* ── Mobile: ustma-ust | md+: yonma-yon ── */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-white/[0.07]">

          {/* Logo */}
          <Link
            href="#hero"
            className="inline-flex items-center gap-2.5 group self-center md:self-auto shrink-0"
          >
            <div className="w-9 h-9 rounded-[10px] bg-linear-to-br from-violet-500 to-violet-400 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-shadow duration-300">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="white">
                <path d="M10 2L3 6v8l7 4 7-4V6L10 2zm0 2.18L15.1 7 10 9.82 4.9 7 10 4.18zM4.5 8.6l5 2.88v5.12L4.5 13.7V8.6zm6.5 8v-5.12l5-2.88v5.1L11 16.6z" />
              </svg>
            </div>
            <span className="font-bold text-[19px] tracking-tight bg-linear-to-r from-white to-violet-200 bg-clip-text text-transparent">
              TalentCore
            </span>
          </Link>

          <nav
            className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row items-center gap-x-5 gap-y-3 md:gap-x-6 md:gap-y-0"
            aria-label="Footer navigatsiya"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] text-white/45 hover:text-violet-300 transition-colors duration-200 text-center md:text-left"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex gap-2.5 justify-center md:justify-end shrink-0">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-[9px] border border-white/10 bg-white/4 flex items-center justify-center text-white/40 hover:text-violet-300 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Bottom: copyright ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6">
          <p className="text-[13px] text-white/25 text-center sm:text-left">
            © 2025 TalentCore <span className="text-violet-500/50">·</span> O'zbekiston
          </p>
          <p className="text-[13px] text-white/20 text-center sm:text-right">
            O'zbek uchun yaratilgan HR platformasi
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer