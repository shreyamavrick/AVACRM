import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import icon1 from "../../assets/p.svg";
import icon2 from "../../assets/g.svg";
import icon3 from "../../assets/d.svg";
import icon4 from "../../assets/go.svg";
import icon5 from "../../assets/s.svg";

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

export default function FeaturesVerticalSliderFinal() {
  const getCardHeight = () => (window.innerWidth < 640 ? 260 : 320);

  const [index, setIndex] = useState(0);
  const [cardHeight, setCardHeight] = useState(
    typeof window !== "undefined" ? getCardHeight() : 320
  );
  const wrapperRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const touchStartY = useRef(null);
  const touchCurrentY = useRef(null);

  useEffect(() => {
    const applyHeights = () => {
      const h = getCardHeight();
      setCardHeight(h);

      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      wrapper.style.height = `${slides.length * h}px`;

      Array.from(wrapper.children).forEach((child) => {
        child.style.height = `${h}px`;
        child.style.boxSizing = "border-box";
      });

      wrapper.style.transition = "transform 0.4s ease";
      wrapper.style.transform = `translateY(-${index * h}px)`;
    };

    applyHeights();
    window.addEventListener("resize", applyHeights);
    return () => window.removeEventListener("resize", applyHeights);
  }, [index]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.style.transition = "transform 0.45s ease";
    wrapper.style.transform = `translateY(-${index * cardHeight}px)`;
  }, [index, cardHeight]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        setIndex((i) => (i + 1) % slides.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  const prev = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);

  const next = () => setIndex((i) => (i + 1) % slides.length);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
    touchCurrentY.current = e.touches[0].clientY;
    setPaused(true);
  };

  const handleTouchMove = (e) => {
    touchCurrentY.current = e.touches[0].clientY;
    const dy = touchCurrentY.current - touchStartY.current;

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.style.transition = "transform 0s";
    wrapper.style.transform = `translateY(${
      -index * cardHeight + dy
    }px)`;
  };

  const handleTouchEnd = () => {
    const dy = touchCurrentY.current - touchStartY.current;
    setPaused(false);

    const threshold = cardHeight * 0.18;

    if (dy < -threshold) next();
    else if (dy > threshold) prev();
    else {
      const wrapper = wrapperRef.current;
      if (wrapper) {
        wrapper.style.transition = "transform 0.35s ease";
        wrapper.style.transform = `translateY(-${index * cardHeight}px)`;
      }
    }

    touchStartY.current = null;
    touchCurrentY.current = null;
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        <div className="lg:col-span-5 lg:pl-8 flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 mb-4 leading-tight">
            Streamline and Grow Your <br />
            Sales With AVACRM
          </h2>

          <p className="text-slate-600 mb-6 max-w-md mx-auto lg:mx-0">
            AVACRM helps you identify the right sales opportunities &
            supports your sales efforts to maximize success.
          </p>

          <Link
  to="/pricing"
  className="px-6 py-3 bg-[#1C8ECE] text-white rounded-full hover:bg-[#0b6fa3] mx-auto lg:mx-0 inline-flex items-center justify-center"
  aria-label="Explore pricing"
>
  Explore Pricing →
</Link>

        </div>

        <div
          className="lg:col-span-7 relative flex flex-col items-stretch"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="bg-[#1C8ECE] rounded-xl overflow-hidden mx-auto w-full"
            style={{ maxWidth: 720 }}
          >
            <div
              className="relative w-full"
              style={{
                height: `${cardHeight}px`,
                minHeight: `${cardHeight}px`,
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                ref={wrapperRef}
                className="flex flex-col w-full"
                aria-live="polite"
              >
                {slides.map((s) => (
                  <article
                    key={s.id}
                    className="
                      flex flex-col items-start text-left gap-3 text-white
                      px-6 sm:px-10 lg:pl-12 lg:pr-6
                    "
                    style={{
                      minHeight: `${cardHeight}px`,
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-14 h-14 object-contain mb-2"
                      draggable="false"
                      loading="lazy"
                    />

                    <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                      {s.title}
                    </h3>

                    <p className="text-white max-w-xl leading-6 text-sm sm:text-base">
                      {s.subtitle}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden sm:flex lg:absolute lg:inset-y-0 lg:left-0 lg:right-0 lg:pointer-events-none">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="pointer-events-auto absolute left-[-46px] top-1/4 w-12 h-12 bg-white border border-blue-300 rounded-full shadow-md flex items-center justify-center"
            >
              <span className="text-slate-700 font-bold select-none">↑</span>
            </button>

            <button
              onClick={next}
              aria-label="Next slide"
              className="pointer-events-auto absolute right-[-46px] top-1/2 w-12 h-12 bg-white border border-blue-300 rounded-full shadow-md flex items-center justify-center"
            >
              <span className="text-slate-700 font-bold select-none">↓</span>
            </button>
          </div>
          
          <div className="mt-4 flex items-center justify-center gap-3 sm:hidden">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-10 h-10 bg-white border border-blue-300 rounded-full shadow flex items-center justify-center"
            >
              ↑
            </button>

            <button
              aria-label="Slide status"
              className="px-3 py-2 bg-white/10 text-white rounded-full border border-white/20 text-xs"
            >
              {index + 1}/{slides.length}
            </button>

            <button
              onClick={next}
              aria-label="Next slide"
              className="w-10 h-10 bg-white border border-blue-300 rounded-full shadow flex items-center justify-center"
            >
              ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
