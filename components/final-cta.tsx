export default function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto bg-[#008AFF] rounded-3xl p-12 md:p-16 text-center shadow-xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to shop safely?</h2>
        <p className="text-lg text-white/95 mb-8">
          Join thousands of smart shoppers protecting themselves from counterfeit products
        </p>
        <a
          href="#waitlist-form"
          className="inline-block px-8 py-4 bg-white text-[#008AFF] font-bold rounded-2xl hover:bg-gray-100 hover:scale-[1.02] transition-all"
        >
          Join the Waitlist Now
        </a>
      </div>
    </section>
  );
}
