"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How accurate is the verification process?",
      answer:
        "MAVSCAN uses advanced AI and manufacturer databases to achieve 99.9% accuracy in product authentication. We continuously update our database with the latest product information.",
    },
    {
      question: "Is my data safe with MAVSCAN?",
      answer:
        "Yes, we use bank-level encryption and never share your personal data. All scans are processed securely, and we comply with international data protection regulations.",
    },
    {
      question: "Does it work offline?",
      answer:
        "The Pro and Business plans include offline mode, allowing you to scan products and verify results even without an internet connection.",
    },
    {
      question: "What products can I verify?",
      answer:
        "Currently, you can verify cosmetics, health products, and beverages. We're constantly expanding to include more product categories.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-[#008AFF] mb-2">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">Frequently Asked</h2>
          <p className="text-xl text-gray-600">Everything you need to know</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:border-[#008AFF]/40 transition-colors"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="p-6 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <span
                  className={`text-2xl text-[#008AFF] transition-transform flex-shrink-0 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </div>
              {openIndex === i && (
                <div className="px-6 pb-6 pt-0 text-gray-600 border-t border-gray-100">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
