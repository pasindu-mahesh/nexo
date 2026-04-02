"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "How can we measure the effectiveness of your marketing solution?",
    answer:
      "We track campaign KPIs such as qualified leads, conversion rate, ROAS, and customer acquisition cost. You receive regular performance reports with clear next-step recommendations.",
  },
  {
    question:
      "Can you provide me with examples of successful digital marketing campaigns you've run for other clients?",
    answer:
      "Yes. During discovery, we share relevant case studies based on your industry, growth stage, and goals so you can see practical outcomes and benchmarks.",
  },
  {
    question: "How soon can I start seeing SEO results?",
    answer:
      "Most businesses begin to see measurable movement in 3 to 6 months, depending on competition, current site health, and publishing consistency.",
  },
  {
    question: "How much involvement is required from our business?",
    answer:
      "We keep your team involved where it matters most: strategic approvals, brand direction, and key business context. Execution is handled by us.",
  },
  {
    question: "What are your specialities?",
    answer:
      "We specialize in growth marketing, SEO, conversion-focused website design, paid media strategy, and high-performance brand positioning.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f3f4f4] px-6 py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6 lg:pt-4">
          <span className="inline-flex rounded-full bg-[#ffeceb] px-4 py-2 text-xs font-medium tracking-wide text-[#ff4d4f]">
            Frequently Asked Questions
          </span>

          <h2 className="max-w-md text-4xl font-medium leading-tight text-[#111111] md:text-5xl">
            Got any <em className="font-serif italic">questions?</em> we&apos;re here to <em className="font-serif italic">help</em>
          </h2>

          <p className="max-w-sm text-base leading-8 text-[#3a3a3a]">
            Unsure of what solutions best fit your needs? don&apos;t hesitate to reach out!
          </p>

          <button
            type="button"
            className="inline-flex rounded-full bg-[#ff514f] px-9 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#f24745]"
          >
            Get a Quote
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#e8eaeb] bg-[#eef1f1]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="border-b border-[#dde1e2] last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg leading-snug text-[#1e1e1e]">{item.question}</span>
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e4e8e8] text-lg font-medium text-[#ff4d4f]">
                    {isOpen ? "-" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-7 text-[#4c4c4c]">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}