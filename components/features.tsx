export default function Features() {
  const features = [
    {
      icon: "📱",
      title: "Quick Scanning",
      description: "Point and shoot to instantly verify product authenticity with our advanced AI",
    },
    {
      icon: "🔍",
      title: "Serial Number Verification",
      description: "Cross-reference with manufacturer databases to ensure legitimacy",
    },
    {
      icon: "🛡️",
      title: "Security Alerts",
      description: "Get real-time notifications about counterfeit threats in your area",
    },
    {
      icon: "💾",
      title: "Product History",
      description: "View complete supply chain information for any product",
    },
    {
      icon: "🌍",
      title: "Global Database",
      description: "Access our comprehensive database of verified products worldwide",
    },
    {
      icon: "⚙️",
      title: "Smart Integration",
      description: "Seamlessly integrates with your favorite shopping apps",
    },
  ]

  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-300">Everything you need to shop with confidence</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-slate-800/50 p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-4 block">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
