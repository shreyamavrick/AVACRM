import React, { useEffect, useRef, useState } from "react";

/* ---------- IMPORTED SVG ICONS ---------- */
import icon1 from "../../assets/p.svg";
import icon2 from "../../assets/g.svg";
import icon3 from "../../assets/d.svg";
import icon4 from "../../assets/go.svg";
import icon5 from "../../assets/s.svg";

/* ---------- SLIDES DATA ---------- */
const slides = [
  {
    id: 1,
    title: "Track Your Productivity",
    subtitle:
      "View revenue projections and get insightful reports on your team's productivity.",
    img: icon1,
  },
  {
    id: 2,
    title: "Go Live Now!",
    subtitle:
      "Start your productivity journey in just 30 minutes and get instant results.",
    img: icon2,
  },
  {
    id: 3,
    title: "Do Things Your Way!",
    subtitle:
      "Create multiple pipelines and add custom fields to suit your business workflow.",
    img: icon3,
  },
  {
    id: 4,
    title: "Get Organized!",
    subtitle:
      "Import leads, manage contacts, deals, tasks and notes effortlessly.",
    img: icon4,
  },
  {
    id: 5,
    title: "Save Time",
    subtitle:
      "Avoid duplicate entries and use smart lists to filter your important data.",
    img: icon5,
  },
];

/* ---------- MAIN COMPONENT ---------- */
export default function FeaturesVerticalSliderFinal() {
  const CARD_HEIGHT = 320;
  const [index, setIndex] = useState(0);
  const wrapperRef = useRef(null);
  const [paused, setPaused] = useState(false);

  /* Set slide heights on mount */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.style.height = `${slides.length * CARD_HEIGHT}px`;

    Array.from(wrapper.children).forEach((child) => {
      child.style.height = `${CARD_HEIGHT}px`;
      child.style.boxSizing = "border-box";
      child.style.padding = "20px";
    });

    wrapper.style.transform = `translateY(-${index * CARD_HEIGHT}px)`;
  }, []);

  /* Update slide on index change */
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.style.transition = "transform 0.45s ease";
    wrapper.style.transform = `translateY(-${index * CARD_HEIGHT}px)`;
  }, [index]);

  /* Autoplay */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setIndex((i) => (i + 1) % slides.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="max-w-7xl mx-auto px-10 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        {/* LEFT TEXT */}
        <div className="lg:col-span-5 ml-8">
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 leading-tight">
            Streamline and Grow Your <br />
            Sales With AVACRM
          </h2>

          <p className="text-slate-600 mb-8 max-w-md">
            AVACRM helps you identify the right sales opportunities & supports your
            sales efforts to maximize success.
          </p>

          <button className="px-6 py-3 bg-[#1C8ECE] text-white rounded-full hover:bg-[#0b6fa3]">
            Explore Pricing →
          </button>
        </div>

        {/* RIGHT SLIDER */}
        <div
          className="lg:col-span-7 relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* BLUE CARD */}
          <div className="bg-[#1C8ECE] rounded-xl p-8 h-[320px] overflow-hidden">
            <div className="relative" style={{ height: `${CARD_HEIGHT}px` }}>
              <div ref={wrapperRef} className="flex flex-col w-full">

                {slides.map((s) => (
                  <article key={s.id} className="flex flex-col items-start text-left gap-4">

                    {/* ICON */}
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-16 h-16 object-contain"
                      draggable="false"
                    />

                    {/* TITLE */}
                    <h3 className="text-3xl font-semibold text-white">
                      {s.title}
                    </h3>

                    {/* SUBTITLE */}
                    <p className="text-white max-w-xl leading-6">
                      {s.subtitle}
                    </p>
                  </article>
                ))}

              </div>
            </div>
          </div>

          {/* UP BUTTON */}
          <button
            onClick={prev}
            className="absolute left-[-28px] top-[15%] w-12 h-12 bg-white border border-blue-300 rounded-full shadow-md"
          >
            ↑
          </button>

          {/* DOWN BUTTON */}
          <button
            onClick={next}
            className="absolute right-[-28px] top-[55%] w-12 h-12 bg-white border border-blue-300 rounded-full shadow-md"
          >
            ↓
          </button>
        </div>
      </div>
    </section>
  );
}
