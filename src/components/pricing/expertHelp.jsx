// src/components/ExpertHelpSection.jsx
import React from "react";
import ExpertImg from "../../assets/CRM.png"; 

export default function ExpertHelpSection() {
  return (
    <section
      className="w-full"
      style={{
        background:
          "linear-gradient(180deg, rgba(28,142,206,0.03) 0%, rgba(249,186,28,0.02) 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT - IMAGE */}
          <div className="flex justify-center md:justify-start">
            <img
              src={ExpertImg}
              alt="AVACRM Expert Assistance"
              className="w-full max-w-md rounded-2xl shadow-lg object-cover"
              loading="lazy"
            />
          </div>

          {/* RIGHT - CONTENT */}
          <div className="text-slate-900 max-w-md">
            <h3 className="text-2xl sm:text-3xl font-semibold leading-snug">
              Maximize Your Success with <br />
              <span className="font-bold">AVACRM Expert Assistance</span>
            </h3>

            <p className="mt-3 text-sm sm:text-base text-slate-700">
              AVACRM is designed to simplify and accelerate your sales processes — 
              and our team ensures you get the best out of every feature from day one.
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-700">
              Our onboarding specialists guide you through setup, customization, and workflow 
              configuration to match your business needs perfectly.
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-700">
              One-time expert onboarding sessions are available for a nominal fee of{" "}
              <span className="font-semibold text-slate-900">INR 25,000</span>.
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-700">
              Need ongoing assistance? Book additional 3-hour deep-dive sessions at{" "}
              <span className="font-semibold text-slate-900">INR 5,000</span> each.
            </p>

            {/* SINGLE BUTTON */}
            <a
              href="/login"
              className="inline-block mt-6 px-6 py-3 rounded-full bg-[#1C8ECE] text-white font-medium shadow-md hover:bg-[#1477aa] transition"
            >
              Login to Get Started →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
