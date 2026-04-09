const testimonials = [
  {
    name: "Lewie Diaz",
    role: "Managing Director, Cambridge College of Business",
    quote:
      "Anush is an honest, solution-centric, focused and creative marketing professional who has provided us with excellent service over the past few months",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80&fit=crop&crop=faces",
  },
  {
    name: "Rui Owase San",
    role: "Director, Daiki Axis Environment (Pvt) Ltd",
    quote:
      "Daiki Axis needed an improved website, better SEO rankings and wanted to generate more leads through digital. We reached out to Ladder Global to help us achieve this, and I must say they have done an exceptional job in helping our brand accomplish all of these goals and generate a reasonable no of leads via digital.",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=80&q=80&fit=crop&crop=faces",
  },
  {
    name: "Roshan Senaratne",
    role: "Managing Director, Home Makers",
    quote:
      "Ladder Global has blended with our team and company culture showing impeccable results and improvements in sales from the inception. They studied and understood our company and project portfolio classification to create a successful digital marketing platform that is monitored daily.",
    avatar:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?w=80&q=80&fit=crop&crop=faces",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f4f5f7] px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#111111] md:text-5xl">What our clients say</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#4a4f55]">
            Here&apos;s what some of our customers from across the globe have to say about our team,
            our Digital Marketing services, and outcomes.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-2xl border border-[#e3e6ea] bg-white p-8 text-center shadow-sm"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="mx-auto h-14 w-14 rounded-full object-cover"
              />
              <h3 className="mt-5 text-2xl font-semibold text-[#111111]">{testimonial.name}</h3>
              <p className="mt-2 min-h-[56px] text-sm leading-7 text-[#6b7280]">{testimonial.role}</p>
              <p className="mt-2 text-lg text-[#f59e0b]" aria-label="5 out of 5 stars">
                ★★★★★
              </p>
              <p className="mt-5 text-base leading-8 text-[#23272f]">{testimonial.quote}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-4" aria-hidden="true">
          <span className="h-1.5 w-10 rounded-full bg-[#111111]" />
          <span className="h-1.5 w-10 rounded-full bg-[#d5d9dd]" />
          <span className="h-1.5 w-10 rounded-full bg-[#d5d9dd]" />
          <span className="h-1.5 w-10 rounded-full bg-[#d5d9dd]" />
        </div>
      </div>
    </section>
  );
}