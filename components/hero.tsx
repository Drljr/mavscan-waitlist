"use client";

import Image from "next/image";
import WaitlistProgress from "@/app/components/WaitlistProgress";

export default function Hero() {
  return (
    <section className="flex flex-col gap-10 py-20 px-6 lg:flex-row lg:items-start lg:justify-between">
      <div className="mx-auto max-w-6xl w-full">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          {/* Content — codebase color scheme */}
          <div className="space-y-6 lg:max-w-3xl min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700">
              <span className="inline-block h-2 w-2 rounded-full bg-[#008AFF]" />
              Join the MAVSCAN early access waitlist
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight bg-gradient-to-r from-gray-900 to-[#008AFF] bg-clip-text text-transparent">
              Verify Authenticity, Protect Your Health
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Mavscan is the ultimate app to authenticate cosmetics, health products, and beverages. Scan barcodes,
              verify serial numbers, and ensure product safety.
            </p>

            <WaitlistProgress />

            <div className="flex flex-col gap-3 sm:flex-row pt-2">
              <a
                href="#waitlist-form"
                className="inline-flex items-center justify-center rounded-2xl bg-[#008AFF] px-5 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-[#0077e6] hover:scale-[1.01]"
              >
                Join the Waitlist
              </a>
            </div>
          </div>

          {/* Logo — right side */}
          <div className="hidden md:flex md:items-center md:justify-center lg:pt-24">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-[#008AFF]/10 blur-2xl" />
              <Image
                src="/mavscan logo.jpg"
                alt="MAVSCAN Logo"
                width={280}
                height={280}
                className="relative rounded-3xl border border-gray-200 shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
