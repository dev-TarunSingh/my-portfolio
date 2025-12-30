import React from "react";

const testimonials = [
  {
    name: "karan Sethi — Founder",
    // role: "Founder, Acme Co",
    quote:
      "Tarun turned our idea into a polished product in 6 weeks, increased conversions by 28% and gained new clients.",
  },
  {
    name: "R. Patel — CTO",
    // role: "CTO, BetaApps",
    quote:
      "Reliable, proactive, and focused on user experience — great partner for retainers.",
  },
  {
    name: "S. Kumar — Product Lead",
    // role: "Product Lead, StartX",
    quote: "Delivered high-quality front-end work and improved app performance.",
  },
  
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mt-12 py-12 scroll-mt-28">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-semibold text-center mb-6">What clients say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow">
              <div className="text-xl font-medium mb-3">"{t.quote}"</div>
              <div className="text-sm text-gray-500">{t.name}  {t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
