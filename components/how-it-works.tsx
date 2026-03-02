export default function HowItWorks() {
  const steps = [
    { number: "1", title: "Download App", description: "Get MAVSCAN from your app store for free" },
    { number: "2", title: "Point & Scan", description: "Use your camera to scan product barcodes" },
    { number: "3", title: "Instant Results", description: "Get real-time verification results immediately" },
    { number: "4", title: "Shop Safely", description: "Make informed purchasing decisions with confidence" },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-[#008AFF] mb-2">How it works</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Simple, fast, and secure</h2>
          <p className="text-xl text-gray-600">4 easy steps to shop with confidence</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-[#008AFF]/10 rounded-full flex items-center justify-center text-2xl font-bold text-[#008AFF] mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
