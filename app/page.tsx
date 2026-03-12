"use client";

import { useMemo, useState } from "react";

export default function CarDetailingDemoWebsite() {
  const [page, setPage] = useState("home");

  const services = useMemo(
    () => [
      {
        title: "Interior Detailing",
        image:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
        description:
          "Deep cleans the cabin to remove dust, light stains, and buildup from seats, mats, dashboard, trim, and hard-to-reach areas. Great for restoring a fresher feel inside the car.",
        smallMedium: "$158",
        large: "$188",
        includes: [
          "Vacuuming of seats, carpets, and boot",
          "Wipe-down of dashboard, panels, and console",
          "Light stain treatment and interior refresh",
          "Glass cleaning and finishing touches",
        ],
      },
      {
        title: "Exterior Wash Package",
        image:
          "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80",
        description:
          "A thorough exterior clean designed to safely remove dirt, road grime, brake dust, and light contaminants while bringing back gloss and a crisp, clean finish.",
        smallMedium: "$88",
        large: "$108",
        includes: [
          "Pre-rinse and foam wash",
          "Tyre, rim, and wheel arch cleaning",
          "Drying and paint-safe finishing",
          "Tyre shine and exterior wipe-down",
        ],
      },
      {
        title: "1-Step Paint Correction",
        image:
          "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80",
        description:
          "A paint enhancement service that uses a single polishing stage to reduce light swirls, haze, and minor surface defects while boosting gloss and color depth.",
        smallMedium: "$188",
        large: "$238",
        includes: [
          "Paint inspection and prep wash",
          "Single-stage machine polish",
          "Improves shine and removes light imperfections",
          "Ideal for cars needing a visual refresh",
        ],
      },
      {
        title: "2-Step Paint Correction",
        image:
          "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
        description:
          "A more intensive correction process using compounding and polishing to remove heavier swirl marks, oxidation, and paint defects for a sharper, glossier finish.",
        smallMedium: "$358",
        large: "$458",
        includes: [
          "Full prep wash and decontamination",
          "Cutting stage to reduce deeper defects",
          "Refining polish for gloss and clarity",
          "Best for neglected or heavily swirled paint",
        ],
      },
      {
        title: "Ceramic Coating",
        image:
          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
        description:
          "Adds a durable protective layer over the paint to improve gloss, repel water, reduce dirt sticking, and make routine maintenance easier over time.",
        smallMedium: "$688",
        large: "$888",
        includes: [
          "Surface prep and paint cleansing",
          "Professional-grade ceramic application",
          "Hydrophobic protection and deeper gloss",
          "Easier washing and better long-term finish protection",
        ],
      },
    ],
    []
  );

  const reviews = [
    {
      name: "Marcus T.",
      stars: 5,
      text: "Booked the 2-step correction and the paint looked dramatically clearer after the job. Great communication and very professional finish.",
    },
    {
      name: "Alicia L.",
      stars: 5,
      text: "Interior detail was excellent. The cabin felt fresh, clean, and much newer. Would definitely book again.",
    },
    {
      name: "Daniel K.",
      stars: 5,
      text: "Ceramic coating gave the car a deep gloss and washing it after that became much easier. Good value for the result.",
    },
  ];

  const navButton = (key: string, label: string) => (
    <button
      onClick={() => setPage(key)}
      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
        page === key
          ? "bg-slate-900 text-white"
          : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
              <svg viewBox="0 0 64 64" className="h-8 w-8 text-slate-900" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 39h40" />
                <path d="M18 39l3-10c1-3 3-5 6-5h10c5 0 9 2 12 6l4 9" />
                <path d="M22 24l5-5h10l8 5" />
                <circle cx="21" cy="40" r="5" />
                <circle cx="47" cy="40" r="5" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-black tracking-tight">company name</p>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Car detailing demo</p>
            </div>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {navButton("home", "Services")}
            {navButton("reviews", "Reviews")}
            {navButton("contact", "Contact")}
          </nav>
        </div>
      </header>

      {page === "home" && (
        <main>
          <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-1 text-sm text-slate-600 shadow-sm">
                Premium detailing website demo
              </div>
              <h1 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
                Premium car care services that make your vehicle look showroom ready.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                This demo site showcases a professional detailing business with clearly segmented service boxes, pricing for different vehicle sizes, reviews, and a contact page.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setPage("contact")}
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5"
                >
                  Book a Service
                </button>
                <button
                  onClick={() => setPage("reviews")}
                  className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Read Reviews
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-700 p-2 shadow-2xl">
              <div className="rounded-[1.6rem] bg-white p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm text-slate-500">Featured service</p>
                  <h2 className="mt-2 text-2xl font-bold">2-Step Paint Correction</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Designed for vehicles with visible swirl marks, haze, and oxidation that need a stronger correction and gloss recovery.
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                      <p className="text-sm text-slate-500">Small / Medium</p>
                      <p className="mt-1 text-2xl font-bold">$358</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                      <p className="text-sm text-slate-500">Large</p>
                      <p className="mt-1 text-2xl font-bold">$458</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 pb-20">
            <div className="mb-8 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Services</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                Service packages segmented into clear boxes
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                  <img src={service.image} alt={service.title} className="h-56 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold tracking-tight">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Small / Medium</p>
                        <p className="mt-1 text-2xl font-black">{service.smallMedium}</p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Large</p>
                        <p className="mt-1 text-2xl font-black">{service.large}</p>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-2 text-sm text-slate-700">
                      {service.includes.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {page === "reviews" && (
        <main className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Customer Reviews</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">What customers are saying</h2>
            <p className="mt-4 text-slate-600">
              Add your real Google, Instagram, or WhatsApp testimonials here when using this demo for a real business.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.name} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-lg">{"★".repeat(review.stars)}</div>
                <p className="mt-4 text-sm leading-7 text-slate-700">“{review.text}”</p>
                <p className="mt-6 text-sm font-semibold text-slate-900">{review.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <button
              onClick={() => setPage("home")}
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
            >
              Back to Services
            </button>
          </div>
        </main>
      )}

      {page === "contact" && (
        <main className="mx-auto max-w-5xl px-6 py-16">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Get in touch with company name</h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              This contact page is built for enquiries and bookings. Replace the placeholders below with the company’s actual details.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <a href="https://wa.me/6586885329" className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 transition hover:bg-slate-100">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Email</p>
                <p className="mt-3 text-lg font-bold">+65 86885329</p>
                <p className="mt-2 text-sm text-slate-600">Tap to start a WhatsApp conversation with the business.</p>
              </a>

              <a href="tel:+6586885329" className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 transition hover:bg-slate-100">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Phone</p>
                <p className="mt-3 text-lg font-bold">+65 8688 5329</p>
                <p className="mt-2 text-sm text-slate-600">Ideal for fast booking and availability checks.</p>
              </a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 transition hover:bg-slate-100">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Instagram</p>
                <p className="mt-3 text-lg font-bold">Open Instagram</p>
                <p className="mt-2 text-sm text-slate-600">Opens the Instagram homepage where clients can find the business profile.</p>
              </a>
            </div>

            <div className="mt-10">
              <button
                onClick={() => setPage("home")}
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
              >
                Back to Services
              </button>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
