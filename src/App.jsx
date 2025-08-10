
import React, { useState } from "react";

/**
 * Replace the entire contents of your App.jsx with this file.
 * - Tailwind required.
 * - Update the SECOND_NUMBER placeholder below.
 * - Make sure your index.html has:
 *   <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
 */

export default function App() {
  return (
    <div className="min-h-[100svh] bg-white text-neutral-900 overflow-x-hidden">
      <NavBar />
      <main id="top">
        <Hero />
        <ServiceGrid />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="text-xl font-extrabold tracking-tight">
          Cousins Cleanouts
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="hover:opacity-80">Services</a>
          <a href="#pricing" className="hover:opacity-80">Pricing</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
          <a
            href="tel:+17153047663"
            className="inline-flex items-center rounded-2xl border px-4 py-2 font-semibold"
          >
            Call: (715) 304-7663
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl border px-3 py-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
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
          <div className="space-y-3 pt-4">
            <a href="tel:+17153047663" className="block w-full rounded-2xl border px-4 py-3 text-center font-semibold">
              Call (715) 304-7663
            </a>

            {/* TEXT BOTH NUMBERS — put your second number below */}
            <div className="grid grid-cols-2 gap-3">
              <a href="sms:+17153047663" className="rounded-2xl border px-4 py-3 text-center font-semibold">
                Text (7663)
              </a>
              <a href="sms:REPLACE_WITH_SECOND_NUMBER" className="rounded-2xl border px-4 py-3 text-center font-semibold">
                Text (2nd line)
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 grid gap-8 md:grid-cols-2 items-center min-h-[60svh] py-10 sm:py-16">
        <div className="space-y-4">
          <h1 className="text-[clamp(28px,6vw,56px)] font-extrabold leading-tight">
            Need it gone today?
          </h1>
          <p className="text-[clamp(14px,3.8vw,18px)] leading-relaxed">
            Same-day junk removal across the Chippewa Valley. Transparent pricing. We handle the heavy lifting—fast.
          </p>

          {/* Mobile-friendly CTAs */}
          <div className="grid grid-cols-1 sm:flex gap-3 sm:gap-4">
            <a
              href="tel:+17153047663"
              className="w-full sm:w-auto rounded-2xl bg-black text-white px-6 py-3 text-center font-semibold"
            >
              Call (715) 304-7663
            </a>
            <a
              href="#pricing"
              className="w-full sm:w-auto rounded-2xl border px-6 py-3 text-center font-semibold"
            >
              View Pricing
            </a>
          </div>

          {/* Optional: two-text buttons in hero */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <a href="sms:+17153047663" className="rounded-xl border px-4 py-2 text-center text-sm font-semibold">Text (7663)</a>
            <a href="sms:REPLACE_WITH_SECOND_NUMBER" className="rounded-xl border px-4 py-2 text-center text-sm font-semibold">Text (2nd)</a>
          </div>
        </div>

        {/* If you had a hero image, keep it responsive. No “Recent Jobs” gallery here. */}
        <div className="aspect-video md:aspect-[4/3] w-full rounded-2xl bg-white border grid place-items-center">
          <span className="text-sm opacity-70 px-4 text-center">
            (Optional hero photo or short explainer—kept responsive & lightweight)
          </span>
        </div>
      </div>
    </section>
  );
}

function ServiceGrid() {
  const services = [
    "Garage & basement cleanouts",
    "Furniture & appliance haul-away",
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
            <div key={title} className="rounded-2xl border p-5 sm:p-6">
              <h3 className="font-semibold text-lg">{title}</h3>
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
    <section id="pricing" className="py-10 sm:py-16 bg-neutral-50">
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
      className={`rounded-2xl border p-6 sm:p-7 ${
        highlight ? "bg-white shadow-xl" : "bg-white"
      }`}
    >
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="text-3xl font-extrabold mt-2">{price}</div>
      <p className="text-sm mt-2 opacity-80">{desc}</p>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <a href="tel:+17153047663" className="rounded-xl border px-4 py-2 text-center font-semibold">
          Call
        </a>
        <a href="sms:+17153047663" className="rounded-xl bg-black text-white px-4 py-2 text-center font-semibold">
          Text
        </a>
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
          <div className="rounded-2xl border p-5 sm:p-6">
            <p className="opacity-90">
              Send us a couple photos and your zip code. We’ll confirm a price and time.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <a href="sms:+17153047663" className="rounded-xl border px-4 py-3 text-center font-semibold">
                Text Photos (7663)
              </a>
              <a href="sms:REPLACE_WITH_SECOND_NUMBER" className="rounded-xl border px-4 py-3 text-center font-semibold">
                Text Photos (2nd)
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <a href="tel:+17153047663" className="rounded-xl border px-4 py-3 text-center font-semibold">Call</a>
              <a href="mailto:hello@cousins-cleanouts.com" className="rounded-xl border px-4 py-3 text-center font-semibold">Email</a>
            </div>
          </div>

          <div className="rounded-2xl border p-5 sm:p-6">
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
              <button className="rounded-2xl bg-black text-white px-6 py-3 font-semibold">
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

function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pointer-events-none">
      <div className="mx-auto max-w-screen-sm px-4 pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-2 gap-3 bg-white/90 backdrop-blur rounded-2xl border p-3 shadow-xl mb-3 pointer-events-auto">
          <a href="tel:+17153047663" className="rounded-xl border px-3 py-3 text-center text-sm font-semibold">Call</a>
          <a href="sms:+17153047663" className="rounded-xl bg-black text-white px-3 py-3 text-center text-sm font-semibold">Text</a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm opacity-80">© {new Date().getFullYear()} Cousins Cleanouts. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#services" className="hover:opacity-80">Services</a>
          <a href="#pricing" className="hover:opacity-80">Pricing</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
        </div>
      </div>
    </footer>
  );
}
