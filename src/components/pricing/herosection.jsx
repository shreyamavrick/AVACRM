import React from "react";
import HeroCombined from "../../assets/phero.png";
import { Link } from "react-router-dom";


export default function HeroSection() {
  return (
    <section
      className="w-full pt-24 pb-12 px-4 sm:px-6 lg:px-8 lg:pl-20"
      style={{
        background:
          "linear-gradient(90deg, rgba(249,186,28,0.12) 25%, rgba(28,142,206,0.12) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT */}
          <div className="px-1 sm:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Get the <span className="text-[#1C8ECE]">CRM</span> Your
              <br /> Business Deserves
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-xl">
              Without Overspending - Choose AVACRM!
            </p>

            <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <BulletCheck />
                <div>
                  <strong className="text-gray-900">No User Cost</strong>
                  <div className="text-sm text-gray-600">No Bottlenecks</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <BulletCheck />
                <div>
                  <strong className="text-gray-900">Enterprise-Grade CRM</strong>
                  <div className="text-sm text-gray-600">
                    Grow Big, Without Breaking the Bank
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <BulletCheck />
                <div>
                  <strong className="text-gray-900">
                    Expert CRM Onboarding &amp; Training
                  </strong>
                  <div className="text-sm text-gray-600">
                    Unlock Your Full Potential
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-6 sm:mt-10">
              <div className="mt-6 sm:mt-10">
  <Link
    to="/login"
    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-medium shadow-md"
    style={{ backgroundColor: "#1C8ECE" }}
  >
    Book Your Demo Now
  </Link>
</div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end px-1 sm:px-0">
            <img
              src={HeroCombined}
              alt="Hero image"
              className="rounded-3xl w-full max-w-sm md:max-w-md shadow-xl object-cover mx-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function BulletCheck() {
  return (
    <svg
      className="w-6 h-6 flex-shrink-0 mt-1"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" stroke="#1C8ECE" strokeWidth="2" fill="white" />
      <path
        d="M7.5 12.5l2.5 2.5L16.5 9"
        stroke="#1C8ECE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
