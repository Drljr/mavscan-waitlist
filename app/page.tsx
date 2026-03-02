import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturesSection from "@/app/components/home/FeaturesSection";
import HowItWorks from "@/components/how-it-works";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";
import WaitlistForm from "@/app/components/waitlist/WaitlistForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Header />
      <Hero />
      <section className="scroll-mt-24 py-24 px-6 bg-white" id="features">
        <div className="max-w-6xl mx-auto">
          <FeaturesSection />
        </div>
      </section>
      <HowItWorks />

      {/* Waitlist form — after How it works */}
      <section className="scroll-mt-24 py-24 px-6 bg-gray-50/50" id="waitlist-form">
        <div className="mx-auto max-w-3xl space-y-8 px-4 md:px-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#008AFF]">
              Join the waitlist
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-gray-900">
              Get ready to scan smarter.
            </h2>
            <p className="mt-2 text-gray-600">
              Answer a few quick questions so we can tailor MAVSCAN to your needs.
            </p>
          </div>
          <WaitlistForm
            showHeader={false}
            className="flex flex-col gap-6"
          />
        </div>
      </section>

      <FAQ />

      <FinalCTA />
      <Footer />
    </main>
  );
}
