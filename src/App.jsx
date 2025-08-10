import React, { useState } from "react";

/**
 * App.jsx — Branded, mobile-first
 * - Tailwind CSS required
 * - Drop this in as a full replacement for your current App.jsx
 * - Add /public/logo.svg and /public/hero.jpg (or adjust paths below)
 * - Replace SECOND_NUMBER with your second text number when ready
 */

// Brand palette (using Tailwind arbitrary colors)
const BRAND = {
  primary: "#f97316", // orange-500 vibe (bold)
  primaryDark: "#ea580c", // deeper orange
  ink: "#0f172a", // slate-900
  earth: "#14532d", // green-900 feel
  sand: "#f7f3ef", // warm light bg
};

export default function App() {
  return (
    <div className="min-h-[100svh] bg-white text-neutral-900 overflow-x-hidden">
      <NavBar />
      <main id="top">
        <Hero />
        <TrustBar />
        <ServiceGrid />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

function LogoMark({ className = "h-8 w-auto" }) {
  // If you already have /public/logo.svg, swap this <svg> for:
  // return <img src="/logo.svg" alt="Cousins Cleanouts" className={className} loading="eager" />
  return (
    <svg viewBox="0 0 120 32" className={className} aria-label="Cousins Cleanouts logo">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor={BRAND.primary} />
          <stop offset="1" stopColor={BRAND.primaryDark} />
        </linearGradient>
      </defs>
      <rect rx="6" width="36" height="24" y="4" fill="url(#g)" />
      <path d="M7 20l6-6 4 4 9-9 3 3-12 12-4-4-3 3z" fill="white" />
      <text x="44" y="22" fontFamily="ui-sans-serif, system-ui" fontWeight="800" fontSize="16" fill="#0f172a">
        Cousins <tspan fill={BRAND.primary}>Cleanouts</tspan>
      </text>
    </svg>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label="Go to top">
          <LogoMark className="h-8 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="hover:opacity-80">Services</a>
          <a href="#pricing" className="hover:opacity-80">Pricing</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
          <a
            href="tel:+17153047663"
            className="inline-flex items-center rounded-2xl border px-4 py-2 font-semibold"
            style={{ borderColor: BRAND.primary, color: BRAND.primary }}
          >
            Call: (715) 304-7663
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl border px-3 py-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
          style={{ borderColor: BRAND.primary, color: BRAND.primary }}
        >
          ☰
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-80 max-w-[85%] transition-transform duration-300 bg-white shadow-2xl md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          <button
            className="rounded-xl border px-3 py-2"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            Close ✕
          </button>
          <a href="#services" className="block text-lg" onClick={() => setOpen(false)}>Services</a>
          <a href="#pricing" className="block text-lg" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#contact" className="block text-lg" onClick={() => setOpen(false)}>Contact</a>
          <div className="space-y-3 pt-2">
            <CTAButtons row />
            <TwoTextButtons />
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image with a warm gradient wash */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            `linear-gradient(to bottom right, ${BRAND.sand}, rgba(255,255,255,0.6)), url('/hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 grid gap-8 md:grid-cols-2 items-center min-h-[68svh] py-10 sm:py-16">
        <div className="space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border"
               style={{ borderColor: BRAND.earth, color: BRAND.earth }}>
            Local • Licensed • Insured
          </div>
          <h1 className="text-[clamp(30px,6vw,60px)] font-extrabold leading-tight text-neutral-900">
            Need it <span style={{ color: BRAND.primary }}>gone today</span>?
          </h1>
          <p className="text-[clamp(14px,3.7vw,18px)] leading-relaxed max-w-prose">
            Same-day junk removal across the Chippewa Valley. Upfront pricing. We handle the heavy lifting—fast.
          </p>

          <div className="grid grid-cols-1 sm:flex gap-3 sm:gap-4">
            <a
              href="tel:+17153047663"
              className="w-full sm:w-auto rounded-2xl px-6 py-3 text-center font-semibold shadow"
              style={{ backgroundColor: BRAND.primary, color: "white" }}
            >
              Call (715) 304-7663
            </a>
            <a
              href="#pricing"
              className="w-full sm:w-auto rounded-2xl border px-6 py-3 text-center font-semibold"
              style={{ borderColor: BRAND.primary, color: BRAND.primary }}
            >
              View Pricing
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <a href="sms:+17153047663" className="rounded-xl border px-4 py-2 text-center text-sm font-semibold"
               style={{ borderColor: BRAND.earth, color: BRAND.earth }}>Text (7663)</a>
            <a href="sms:SECOND_NUMBER" className="rounded-xl border px-4 py-2 text-center text-sm font-semibold"
               style={{ borderColor: BRAND.earth, color: BRAND.earth }}>Text (2nd)</a>
          </div>
        </div>

        <div className="aspect-video md:aspect-[4/3] w-full rounded-2xl bg-white border grid place-items-center shadow-sm">
          <span className="text-sm opacity-70 px-4 text-center">
            Add /public/hero.jpg for a branded photo (crew + dump trailer). Image scales cleanly on phones.
          </span>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="py-6" style={{ background: BRAND.sand }}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 flex flex-wrap items-center justify-center gap-4 text-sm">
        <Badge>Same‑Day Service</Badge>
        <Badge>Upfront Pricing</Badge>
        <Badge>No Job Too Small</Badge>
        <Badge>Locally Owned</Badge>
      </div>
    </section>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 border font-medium"
          style={{ borderColor: BRAND.primary, color: BRAND.ink }}>{children}</span>
  );
}

function ServiceGrid() {
  const services = [
    "Garage & basement cleanouts",
    "Furniture & appliance haul‑away",
    "Yard waste & storm debris",
    "Construction debris",
    "Shed / tenant cleanouts",
    "Dump trailer rentals",
  ];

  return (
    <section id="services" className="py-10 sm:py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">What we handle</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((title) => (
            <div key={title} className="rounded-2xl border p-5 sm:p-6 bg-white shadow-sm">
              <h3 className="font-semibold text-lg" style={{ color: BRAND.ink }}>{title}</h3>
              <p className="text-sm mt-2 opacity-80">
                Fast pickup. Upfront pricing. We do the lifting.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-10 sm:py-16" style={{ background: BRAND.sand }}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Simple, transparent pricing</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <Card
            title="Minimum Pickup"
            price="$XX"
            desc="Small items or a few bags. Quick in and out."
          />
          <Card
            title="Half Trailer"
            price="$XX"
            desc="Perfect for room cleanouts and bulky items."
            highlight
          />
          <Card
            title="Full Trailer"
            price="$XX"
            desc="Renovations, big cleanouts, storm debris."
          />
        </div>

        <p className="text-sm opacity-80 mt-4">
          Prices include labor & disposal. Additional fees may apply for mattresses, tires, TVs, paint, and hazardous items.
        </p>
      </div>
    </section>
  );
}

function Card({ title, price, desc, highlight }) {
  return (
    <div
      className={`rounded-2xl border p-6 sm:p-7 bg-white ${highlight ? "shadow-xl" : "shadow-sm"}`}
      style={{ borderColor: highlight ? BRAND.primary : "#e5e7eb" }}
    >
      <h3 className="font-semibold text-lg" style={{ color: BRAND.ink }}>{title}</h3>
      <div className="text-3xl font-extrabold mt-2" style={{ color: BRAND.primary }}>{price}</div>
      <p className="text-sm mt-2 opacity-80">{desc}</p>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <a href="tel:+17153047663" className="rounded-xl border px-4 py-2 text-center font-semibold"
           style={{ borderColor: BRAND.primary, color: BRAND.primary }}>Call</a>
        <a href="sms:+17153047663" className="rounded-xl px-4 py-2 text-center font-semibold"
           style={{ backgroundColor: BRAND.primary, color: "white" }}>Text</a>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-10 sm:py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Get a quick quote</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border p-5 sm:p-6 bg-white shadow-sm">
            <p className="opacity-90">
              Send us a couple photos and your ZIP code. We'll confirm a price and time.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <a href="sms:+17153047663" className="rounded-xl border px-4 py-3 text-center font-semibold"
                 style={{ borderColor: BRAND.earth, color: BRAND.earth }}>Text Photos (7663)</a>
              <a href="sms:SECOND_NUMBER" className="rounded-xl border px-4 py-3 text-center font-semibold"
                 style={{ borderColor: BRAND.earth, color: BRAND.earth }}>Text Photos (2nd)</a>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <a href="tel:+17153047663" className="rounded-xl border px-4 py-3 text-center font-semibold"
                 style={{ borderColor: BRAND.primary, color: BRAND.primary }}>Call</a>
              <a href="mailto:hello@cousins-cleanouts.com" className="rounded-xl border px-4 py-3 text-center font-semibold"
                 style={{ borderColor: BRAND.primary, color: BRAND.primary }}>Email</a>
            </div>
          </div>

          <div className="rounded-2xl border p-5 sm:p-6 bg-white shadow-sm">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We’ll reach out ASAP.");
              }}
              className="grid gap-4"
            >
              <input className="rounded-xl border px-4 py-3" placeholder="Name" required />
              <input className="rounded-xl border px-4 py-3" placeholder="Phone" required />
              <input className="rounded-xl border px-4 py-3" placeholder="ZIP code" required />
              <textarea className="rounded-xl border px-4 py-3 min-h-28" placeholder="What do you need removed?" />
              <button className="rounded-2xl px-6 py-3 font-semibold" style={{ backgroundColor: BRAND.primary, color: "white" }}>
                Request Quote
              </button>
            </form>
            <p className="text-xs opacity-70 mt-3">
              Submitting this form authorizes us to contact you about your request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTAButtons({ row }) {
  return (
    <div className={`grid ${row ? "grid-cols-2" : "grid-cols-1"} gap-3`}>
      <a href="tel:+17153047663" className="rounded-2xl border px-4 py-3 text-center font-semibold"
         style={{ borderColor: BRAND.primary, color: BRAND.primary }}>Call</a>
      <a href="sms:+17153047663" className="rounded-2xl px-4 py-3 text-center font-semibold"
         style={{ backgroundColor: BRAND.primary, color: "white" }}>Text</a>
    </div>
  );
}

function TwoTextButtons() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <a href="sms:+17153047663" className="rounded-2xl border px-4 py-3 text-center font-semibold"
         style={{ borderColor: BRAND.earth, color: BRAND.earth }}>Text (7663)</a>
      <a href="sms:SECOND_NUMBER" className="rounded-2xl border px-4 py-3 text-center font-semibold"
         style={{ borderColor: BRAND.earth, color: BRAND.earth }}>Text (2nd line)</a>
    </div>
  );
}

function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pointer-events-none">
      <div className="mx-auto max-w-screen-sm px-4 pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-2 gap-3 bg-white/90 backdrop-blur rounded-2xl border p-3 shadow-xl mb-3 pointer-events-auto">
          <a href="tel:+17153047663" className="rounded-xl border px-3 py-3 text-center text-sm font-semibold"
             style={{ borderColor: BRAND.primary, color: BRAND.primary }}>Call</a>
          <a href="sms:+17153047663" className="rounded-xl px-3 py-3 text-center text-sm font-semibold"
             style={{ backgroundColor: BRAND.primary, color: "white" }}>Text</a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <LogoMark className="h-6 w-auto" />
          <p className="text-sm opacity-80">© {new Date().getFullYear()} Cousins Cleanouts. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#services" className="hover:opacity-80">Services</a>
          <a href="#pricing" className="hover:opacity-80">Pricing</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
        </div>
      </div>
    </footer>
  );
}
