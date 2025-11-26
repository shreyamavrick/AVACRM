// src/components/Hero.jsx
import React, { useState } from "react";
import badge1 from "../../assets/badge1.png";
import badge2 from "../../assets/badge2.png";
import badge3 from "../../assets/badge3.png";

const HEADER_HEIGHT_PX = 58; 

export default function Hero() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    users: "",
    industry: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Contact form submitted:", form);
  }

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, rgba(249,186,28,0.12) 25%, rgba(28,142,206,0.12) 100%)",
        paddingTop: `${HEADER_HEIGHT_PX}px`,
      }}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 min-h-[60vh] md:min-h-[65vh] py-10 md:py-6">
          {/* LEFT: Content */}
          <div className="w-full md:w-7/12 lg:w-7/12 text-slate-900">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              India's Fastest Growing Sales CRM
            </h1>

            <p className="mt-3 text-base md:text-xl font-semibold opacity-95">
              AVACRM: Your Path to Peak Performance
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3 text-slate-900/90">
              <li className="flex items-center gap-3 text-base">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-900/10 text-slate-900">
                  ✓
                </span>
                Enterprise-grade
              </li>
              <li className="flex items-center gap-3 text-base">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-900/10 text-slate-900">
                  ✓
                </span>
                Unlimited Users
              </li>
              <li className="flex items-center gap-3 text-base">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-900/10 text-slate-900">
                  ✓
                </span>
                Pay as You Grow
              </li>
            </ul>

            <div className="mt-6 mb-6 flex items-end gap-4">
              <img src={badge1} alt="badge" className="w-25 h-auto rounded-md shadow-sm" />
              <img src={badge2} alt="badge" className="w-25 h-auto rounded-md shadow-sm" />
              <img src={badge3} alt="badge" className="w-25 h-auto rounded-md shadow-sm" />
            </div>
          </div>

          {/* RIGHT: Compact Form */}
          <div className="w-full md:w-5/12 lg:w-5/12">
            <div className="max-w-sm mx-auto md:mx-0 bg-white/95 backdrop-blur rounded-xl shadow-md border border-slate-200 p-4 md:p-5">
              <h3 className="text-xl font-semibold text-slate-900">Connect with AVACRM</h3>
              <p className="mt-1 text-sm text-slate-600">
                Tell us a bit and we'll get back to you.
              </p>

              <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    placeholder="Enter name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                    Contact Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    type="tel"
                    className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    placeholder="Phone number"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="users" className="block text-sm font-medium text-slate-700">
                      Number of Users
                    </label>
                    <input
                      id="users"
                      name="users"
                      value={form.users}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                      placeholder="e.g., 5 - 50"
                    />
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-slate-700">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={form.industry}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
                    >
                      <option value="">Select industry</option>
                      <option>IT / SaaS</option>
                      <option>Retail</option>
                      <option>Manufacturing</option>
                      <option>Education</option>
                      <option>Consulting</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full rounded-full py-2.5 text-sm text-white font-medium shadow bg-[#1C8ECE] hover:opacity-95"
                  >
                    Submit
                  </button>
                </div>

                <p className="text-xs text-slate-400 text-center mt-1">
                  We respect your privacy. We'll only use your info to contact you.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
