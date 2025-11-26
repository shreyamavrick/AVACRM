import React from "react";
import HeroCombined from "../../assets/phero.png"; 

export default function HeroSection() {
  return (
    <section
      className="w-full py-20"
      style={{
        background:
          "linear-gradient(90deg, rgba(249,186,28,0.12) 25%, rgba(28,142,206,0.12) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
              Get the <span className="text-[#1C8ECE]">CRM</span> Your
              <br /> Business Deserves
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Without Overspending - Choose AVACRM!
            </p>

            <ul className="mt-8 space-y-4 text-gray-700">
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

            <div className="mt-10 flex items-center gap-6">
              <button
                className="inline-flex items-center px-6 py-3 rounded-full text-white font-medium shadow-md"
                style={{ backgroundColor: "#1C8ECE" }}
              >
                Book Your Demo Now
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center ">
            <img
              src={HeroCombined}
              alt="Hero image"
              className="rounded-3xl w-full max-w-md shadow-xl object-cover"
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
      className="w-6 h-6 flex-shrink-0 mt-2"
      viewBox="0 0 24 24"
      fill="none"
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
