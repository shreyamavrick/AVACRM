// src/components/TrustedBy.jsx
import React from "react";
import IPAC from "../../assets/1.png";
import SarthakFoundtion from "../../assets/2.png";
import SmileFoundation from "../../assets/3.png";
import Graminpays from "../../assets/4.png";
import Astitva from "../../assets/5.png";

import KamlaTravels from "../../assets/6.png";
import GR from "../../assets/7.png";
import CaVakeel from "../../assets/8.png";
import VaahanSuraksha from "../../assets/9.png";
import CMK from "../../assets/10.png";

const partners = [
  { src: IPAC, alt: "IPAC" },
  { src: SarthakFoundtion, alt: "Sarthak Foundation" },
  { src: SmileFoundation, alt: "Smile Foundation" },
  { src: CaVakeel, alt: "CA Vakeel" },
  { src: Astitva, alt: "Astitva" },

  { src: KamlaTravels, alt: "Kamla Travels" },
  { src: GR, alt: "GR" },
  { src: Graminpays, alt: "Graminpays" },
  { src: VaahanSuraksha, alt: "Vaahan Suraksha" },
  { src: CMK, alt: "CMK" },
];

export default function TrustedBy() {
  return (
    <section className="w-full bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-slate-900">
          Trusted by <span className="text-sky-600"></span> Growing Businesses
        </h2>

        {/* Logo Grid */}
        <div className="mt-10">
          <div
            className="
              grid 
              grid-cols-2
              sm:grid-cols-3 
              md:grid-cols-5
              gap-y-8 gap-x-4
              items-center
              justify-items-center
            "
          >
            {partners.map((p, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="
                    max-h-16 md:max-h-20 lg:max-h-24
                    object-contain
                    transition-transform duration-300 ease-out
                    transform
                    hover:scale-110 focus:scale-110
                    focus:outline-none focus:ring-2 focus:ring-sky-300 rounded
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
