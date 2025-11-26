import React from "react";

// Import your SVGs
import feature1 from "../../assets/a1.svg";
import feature2 from "../../assets/a2.svg";
import feature3 from "../../assets/a3.svg";

export default function ThreeFeatures() {
  return (
    <section className="py-16 animated-gradient">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-slate-900 mb-12">
          A Sales CRM your Team will Love
        </h2>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-sm flex justify-center">
              <img src={feature1} alt="Easy to Use CRM" className="max-w-[260px]" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">Easy to Use CRM</h3>
            <p className="mt-3 text-slate-600 max-w-sm">
              AvaOne CRM is designed to be simple and intuitive so you can get started instantly.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-sm flex justify-center">
              <img src={feature2} alt="Expert Help" className="max-w-[260px]" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">Expert Help</h3>
            <p className="mt-3 text-slate-600 max-w-sm">
              Our team provides hands-on guidance to help you and your business grow faster.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-sm flex justify-center">
              <img src={feature3} alt="Secure Technology" className="max-w-[260px]" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">Secure Technology</h3>
            <p className="mt-3 text-slate-600 max-w-sm">
              AvaOne ensures top-notch security so your data stays safe at all times.
            </p>
          </div>

        </div>
      </div>

      {/* Animated Gradient Background */}
      <style jsx>{`
        .animated-gradient {
          background: linear-gradient(
            90deg,
            rgba(249, 186, 28, 0.18),
            rgba(28, 142, 206, 0.18)
          );
          background-size: 200% 200%;
          animation: moveGradient 10s ease infinite;
        }

        @keyframes moveGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
