"use client";

import { Fragment, useState } from "react";
import { FiCheck, FiMinus, FiChevronDown } from "react-icons/fi";

// ─── Types ───────────────────────────────────────────────────────────────────

type PlanKey = "excel" | "starter" | "growth" | "enterprise";

interface Feature {
  name: string;
  excel: boolean | string;
  starter: boolean | string;
  growth: boolean | string;
  enterprise: boolean | string;
}

interface Category {
  title: string;
  features: Feature[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const PLANS: {
  key: PlanKey;
  name: string;
  price: string;
  sub: string;
  highlight: boolean;
  isLegacy: boolean;
}[] = [
    {
      key: "excel",
      name: "Excel",
      price: "Bepul",
      sub: "Lekin vaqtingiz yo'qoladi",
      highlight: false,
      isLegacy: true,
    },
    {
      key: "starter",
      name: "Starter",
      price: "150 000 UZS",
      sub: "/ oyiga",
      highlight: false,
      isLegacy: false,
    },
    {
      key: "growth",
      name: "Growth",
      price: "350 000 UZS",
      sub: "/ oyiga",
      highlight: true,
      isLegacy: false,
    },
    {
      key: "enterprise",
      name: "Enterprise",
      price: "Kelishiladi",
      sub: "Maxsus narx",
      highlight: false,
      isLegacy: false,
    },
  ];

const CATEGORIES: Category[] = [
  {
    title: "Xodimlar boshqaruvi",
    features: [
      { name: "Xodimlar soni", excel: "Qo'lda", starter: "50 tagacha", growth: "500 tagacha", enterprise: "Cheksiz" },
      { name: "Rollar tizimi", excel: false, starter: true, growth: true, enterprise: true },
      { name: "Onboarding flow", excel: false, starter: false, growth: true, enterprise: true },
      { name: "JShShIR profili", excel: "Qo'lda", starter: true, growth: true, enterprise: true },
      { name: "Bulk import", excel: false, starter: false, growth: true, enterprise: true },
    ],
  },
  {
    title: "Maosh va soliqlar",
    features: [
      { name: "Maosh hisoblash", excel: "Formulalar", starter: true, growth: true, enterprise: true },
      { name: "INPS 12% avtomatik", excel: false, starter: true, growth: true, enterprise: true },
      { name: "Daromad solig'i 15%", excel: false, starter: true, growth: true, enterprise: true },
      { name: "Maosh tarixi", excel: "Fayl arxivi", starter: "3 oy", growth: "1 yil", enterprise: "Cheksiz" },
      { name: "Avans to'lovi", excel: false, starter: false, growth: true, enterprise: true },
      { name: "Ko'p valyuta", excel: false, starter: false, growth: false, enterprise: true },
    ],
  },
  {
    title: "Davomat va vaqt",
    features: [
      { name: "Davomat hisobi", excel: "Qo'lda", starter: true, growth: true, enterprise: true },
      { name: "Ta'til so'rovi", excel: false, starter: true, growth: true, enterprise: true },
      { name: "Ish jadvali", excel: false, starter: false, growth: true, enterprise: true },
      { name: "GPS joylashuv", excel: false, starter: false, growth: false, enterprise: true },
    ],
  },
  {
    title: "Hisobotlar",
    features: [
      { name: "Asosiy hisobotlar", excel: "Qo'lda", starter: true, growth: true, enterprise: true },
      { name: "Export (PDF/Excel)", excel: "Faqat Excel", starter: false, growth: true, enterprise: true },
      { name: "API kirish", excel: false, starter: false, growth: false, enterprise: true },
      { name: "1C integratsiya", excel: false, starter: false, growth: false, enterprise: true },
    ],
  },
  {
    title: "Qo'llab-quvvatlash",
    features: [
      { name: "Email support", excel: false, starter: true, growth: true, enterprise: true },
      { name: "Telegram support", excel: false, starter: false, growth: true, enterprise: true },
      { name: "Shaxsiy menejer", excel: false, starter: false, growth: false, enterprise: true },
    ],
  },
];

// ─── CellValue ────────────────────────────────────────────────────────────────

function CellValue({ value, isLegacy }: { value: boolean | string; isLegacy: boolean }) {
  if (typeof value === "boolean") {
    if (value) {
      return (
        <span
          className={[
            "inline-flex items-center justify-center w-7 h-7 rounded-full",
            isLegacy
              ? "bg-yellow-500/10 text-yellow-600"
              : "bg-emerald-500/10 text-emerald-400",
          ].join(" ")}
        >
          <FiCheck size={15} />
        </span>
      );
    }
    return (
      <span className="inline-flex items-center justify-center text-slate-700">
        <FiMinus size={15} />
      </span>
    );
  }

  return (
    <span
      className={[
        "text-[12px] sm:text-[15px] font-medium",
        isLegacy ? "text-yellow-700" : "text-slate-400",
      ].join(" ")}
    >
      {value}
    </span>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const CompareRates=()=> {
  const [open, setOpen] = useState<Record<string, boolean>>(
    Object.fromEntries(CATEGORIES.map((c) => [c.title, true]))
  );

  function toggle(title: string) {
    setOpen((prev) => ({ ...prev, [title]: !prev[title] }));
  }

  return (
    <section id="taqqoslash" className="mt-12 text-center py-16 px-4 md:py-24 md:px-8 max-w-[1160px] mx-auto">

      <p className="text-[#60A5FA] text-sm font-semibold uppercase tracking-widest">Taqqoslash</p>
      <h2 className="text-[28px] sm:text-[41px] font-extrabold mt-2">Excel yoki Talentcore</h2>
      <p className="text-[#7A8A9E] mt-4 mb-7"> Qo'lda ishlash uchun to'lanadigan narx ko'rinmas — vaqt, xato va stress.</p>

      <div className="overflow-x-auto rounded-2xl border border-white/7 bg-[rgba(10,10,20,0.75)] backdrop-blur-xl">
        <table className="w-full border-collapse" style={{ tableLayout: "fixed" }}>

          <colgroup>
            <col style={{ width: "30%" }} />
            <col style={{ width: "17.5%" }} />
            <col style={{ width: "17.5%" }} />
            <col style={{ width: "17.5%" }} />
            <col style={{ width: "17.5%" }} />
          </colgroup>

          <thead>
            <tr>
              <th className="p-6 border-b border-white/7" />

              {PLANS.map((plan) => (
                <th
                  key={plan.key}
                  scope="col"
                  className={[
                    "px-2 sm:px-4 pt-4 sm:pt-5 pb-5 sm:pb-6 text-center align-bottom border-b border-white/7 border-l border-l-white/5",
                    plan.isLegacy && "bg-yellow-500/4 border-l-yellow-500/15 border-r border-r-yellow-500/15",
                    plan.highlight && "bg-indigo-500/6 border-l-indigo-400/20 border-r border-r-indigo-400/20",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >

                  {plan.highlight && (
                    <span className="inline-block text-[11px] font-semibold tracking-wide px-3 py-0.5 rounded-full mb-3 text-indigo-400 bg-indigo-400/14 border border-indigo-400/28">
                      Mashhur
                    </span>
                  )}
                  {plan.isLegacy && (
                    <span className="inline-block text-[11px] font-semibold tracking-wide px-3 py-0.5 rounded-full mb-3 text-yellow-700 bg-yellow-500/12 border border-yellow-500/25">
                      Eski usul
                    </span>
                  )}

                  <span className="block text-[15px] sm:text-[20px] font-bold text-slate-100 mb-1.5">
                    {plan.name}
                  </span>

                  <span
                    className={[
                      "block text-[13px] sm:text-[17px] font-semibold mb-1",
                      plan.isLegacy ? "text-yellow-700" : "text-indigo-400",
                    ].join(" ")}
                  >
                    {plan.price}
                  </span>

                  <span className="hidden sm:block text-[13px] text-slate-600">{plan.sub}</span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {CATEGORIES.map((cat) => {
              const isOpen = open[cat.title];
              return (
                <Fragment key={cat.title}>
                  <tr
                    key={`cat-${cat.title}`}
                    onClick={() => toggle(cat.title)}
                    role="button"
                    aria-expanded={isOpen}
                    className="cursor-pointer select-none group"
                  >
                    <td
                      colSpan={5}
                      className="border-t border-white/7 group-hover:bg-white/2.5 transition-colors"
                    >
                      <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5">
                        <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-slate-600">
                          {cat.title}
                        </span>
                        <FiChevronDown
                          size={15}
                          className={[
                            "text-slate-700 shrink-0 transition-transform duration-200",
                            isOpen ? "rotate-180" : "",
                          ].join(" ")}
                        />
                      </div>
                    </td>
                  </tr>

                  {isOpen &&
                    cat.features.map((f) => (
                      <tr
                        key={f.name}
                        className="hover:bg-white/2 transition-colors"
                      >

                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-[14px] sm:text-[16px] text-slate-300 border-t border-white/4">
                          {f.name}
                        </td>

                        {PLANS.map((plan) => (
                          <td
                            key={plan.key}
                            className={[
                              "px-1 sm:px-3 py-3 sm:py-4 text-center border-t border-white/4 border-l border-l-white/4",
                              plan.isLegacy && "bg-yellow-500/3 border-l-yellow-500/10 border-r border-r-yellow-500/10",
                              plan.highlight && "bg-indigo-500/4 border-l-indigo-400/10 border-r border-r-indigo-400/10",
                            ]
                              .filter(Boolean)
                              .join(" ")}
                          >
                            <CellValue value={f[plan.key]} isLegacy={plan.isLegacy} />
                          </td>
                        ))}
                      </tr>
                    ))}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

    </section>
  );
}

export default CompareRates