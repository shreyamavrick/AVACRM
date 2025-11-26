import React, { useEffect, useRef, useState } from "react";

/* ---------- AvaOne Testimonials (6 Slides) ---------- */
const testimonials = [
  {
    id: 1,
    name: "Girish Konkar",
    role: "Senior Manager",
    quote:
      "AvaOne has elevated our productivity tracking. Reports are insightful, customization is seamless, and the platform gives us full control over our data.",
    initials: "GK",
    bg: "bg-yellow-300",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Head of Sales",
    quote:
      "Lead response time dropped remarkably after using AvaOne. The automation and workflow visibility made our team more efficient than ever.",
    initials: "PS",
    bg: "bg-yellow-400",
  },
  {
    id: 3,
    name: "Aman Verma",
    role: "Founder",
    quote:
      "AvaOne helped us streamline our sales operations. Quick deployment and powerful reporting made it a perfect fit for our growing business.",
    initials: "AV",
    bg: "bg-yellow-300",
  },
  {
    id: 4,
    name: "Sneha Nair",
    role: "Operations Lead",
    quote:
      "The onboarding support was exceptional. AvaOne integrated smoothly with our systems and the team adopted it instantly.",
    initials: "SN",
    bg: "bg-yellow-400",
  },
  {
    id: 5,
    name: "Rahul Gupta",
    role: "Product Manager",
    quote:
      "We saved countless hours using AvaOne’s smart filters and automation tools. It has significantly improved our internal processes.",
    initials: "RG",
    bg: "bg-yellow-300",
  },
  {
    id: 6,
    name: "Meera Joshi",
    role: "Growth Lead",
    quote:
      "AvaOne synced our marketing and sales workflows perfectly. The analytics boosted our decision-making like never before.",
    initials: "MJ",
    bg: "bg-yellow-400",
  },
];

/* ---------- Avatar Component ---------- */
function Avatar({ initials, bg }) {
  return (
    <div
      className={`w-32 h-32 md:w-40 md:h-40 rounded-xl flex items-center justify-center ${bg} shadow-md`}
    >
      <span className="text-3xl md:text-4xl font-bold text-slate-800">
        {initials}
      </span>
    </div>
  );
}

/* ---------- MAIN SLIDER (Compact Premium) ---------- */
export default function TestimonialSliderPremium() {
  const [index, setIndex] = useState(0);
  const wrapperRef = useRef(null);
  const SLIDE_COUNT = testimonials.length;

  /* Set slide widths on mount */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.style.width = `${SLIDE_COUNT * 100}%`;

    Array.from(wrapper.children).forEach((child) => {
      child.style.width = `${100 / SLIDE_COUNT}%`;
    });

    wrapper.style.transform = `translateX(-${(index * 100) / SLIDE_COUNT}%)`;
  }, []);

  /* Update on index change */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.style.transition = "transform 500ms cubic-bezier(.22,.82,.56,1)";
    wrapper.style.transform = `translateX(-${(index * 100) / SLIDE_COUNT}%)`;
  }, [index]);

  /* Continuous autoplay (NO PAUSE ON HOVER) */
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDE_COUNT);
    }, 4500);

    return () => clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + SLIDE_COUNT) % SLIDE_COUNT);
  const next = () => setIndex((i) => (i + 1) % SLIDE_COUNT);

  return (
    <section className="w-full bg-yellow-100 py-14">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-extrabold text-slate-900 mb-10">
          Loved by Growing Businesses
        </h2>

        <div className="relative">

          {/* LEFT ARROW */}
          {/* <button
            onClick={prev}
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 shadow-md border border-blue-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M12.7 14.7a1 1 0 01-1.4 0L7 10.4a1 1 0 010-1.4l4.3-4.3a1 1 0 111.4 1.4L9.4 9.9l3.3 3.3a1 1 0 010 1.5z" />
            </svg>
          </button> */}

          {/* RIGHT ARROW */}
          {/* <button
            onClick={next}
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-700 shadow-md border border-blue-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7.3 5.3a1 1 0 011.4 0L13 9.6a1 1 0 010 1.4l-4.3 4.3a1 1 0 11-1.4-1.4L10.6 11 7.3 7.7a1 1 0 010-1.4z" />
            </svg>
          </button> */}

          {/* VIEWPORT */}
          <div className="overflow-hidden">
            <div ref={wrapperRef} className="flex w-full">

              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / SLIDE_COUNT}%` }}
                >
                  {/* CARD */}
                  <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row gap-8">

                    {/* Avatar */}
                    <Avatar initials={t.initials} bg={t.bg} />

                    {/* Testimonial Text */}
                    <div className="flex-1 relative">

                      {/* Decorative quote (small, subtle) */}
                      <svg
                        className="absolute right-2 top-0 opacity-10 w-16 h-16 hidden md:block text-yellow-600"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M7 7h5v6H7zM12 7h5v6h-5z" />
                      </svg>

                      <p className="text-base md:text-lg text-slate-700 mb-4 leading-relaxed">
                        {t.quote}
                      </p>

                      <h3 className="text-xl font-bold text-slate-900">{t.name}</h3>
                      <p className="text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
                  i === index ? "bg-slate-900 scale-110" : "bg-slate-500/40"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
