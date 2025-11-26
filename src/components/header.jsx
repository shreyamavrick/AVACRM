// src/components/Header.jsx
import React, { useEffect, useRef, useState } from "react";
import logoSrc from "../assets/logo1.png";
const HEADER_HEIGHT_PX = 58; // height of the pill area (keep synced with Hero paddingTop)

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "How to Use", href: "/how-to-use" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState(
    typeof window !== "undefined" ? window.location.pathname || "/" : "/"
  );

  const rafRef = useRef(null);
  const resizeTimerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24); 
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const onPop = () => setActivePath(window.location.pathname || "/");
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(() => {
        if (window.innerWidth >= 768) setOpen(false);
      }, 120);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
    };
  }, []);

  const handleNavClick = (href) => {
    setActivePath(href);
    setOpen(false);
  };

  return (
    <>
      <div
        className="fixed inset-x-0 z-50 pointer-events-none"
        style={{
          top: scrolled ? 0 : 10,
          height: HEADER_HEIGHT_PX,
        }}
      >
        <div className="mx-auto max-w-6xl px-6 h-full flex items-center pointer-events-auto">
          <div
            className={`w-full rounded-3xl transition-all duration-300 flex items-center justify-between
              ${scrolled ? "bg-white/95 shadow-2xl border border-white/40" : "bg-white/95 shadow-lg border border-white/30"}
            `}
            style={{
              padding: "10px 18px",
              transform: scrolled ? "translateY(0)" : "translateY(0)",
            }}
          >
            {/* LEFT: Logo */}
            <div className="flex items-center pl-4 gap-4 flex-shrink-0">
              <a
                href="/"
                onClick={() => handleNavClick("/")}
                aria-label="Home"
                className="flex items-center transition-transform hover:scale-105"
                style={{ lineHeight: 0 }}
              >
                <img
  src={logoSrc}
  alt="Logo"
  className={`transition-all ${
    scrolled ? "h-12" : "h-12"
  } w-auto max-w-none`}
  style={{ transform: "scale(1.8)" }}  
/>



              </a>
            </div>

            {/* CENTER: Nav (centered) */}
            <div className="flex-1 flex justify-center">
              <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Main navigation">
                {NAV_LINKS.map((link) => {
                  const isActive = activePath === link.href;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`relative inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActive ? "text-slate-900" : "text-slate-700 hover:text-slate-900"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                     <span className="relative z-10">{link.name}</span>

  {/* absolute underline that expands to full width */}
  <span
    className={`absolute left-0 right-0 -bottom-1 h-0.5 rounded-full transition-all duration-200 ${
      isActive ? "w-full bg-sky-500" : "w-0 group-hover:w-full bg-sky-300"
    }`}
    aria-hidden
  />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* RIGHT: Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Large gradient login with icon */}
              <a
                href="/login"
                className="hidden md:inline-flex items-center gap-3 px-4 py-2 rounded-full font-medium text-sm bg-[#1C8ECE] text-white shadow-lg hover:opacity-95 transition"
                aria-label="Log in"
              >
                {/* user icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="inline-block">
                  <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 20a8 8 0 0116 0" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Log in</span>
              </a>

              {/* mobile menu button */}
              <button
                onClick={() => setOpen((s) => !s)}
                className="md:hidden p-2 rounded-full text-slate-700 bg-slate-50 border border-slate-100 shadow-sm"
                aria-label="Open menu"
              >
                {!open ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current">
                    <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile off-canvas panel */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
        <div className="relative max-w-md mx-auto mt-16 bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-100">
          <div className="p-5">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <img src={logoSrc} alt="Logo" className="w-12 h-12 object-contain" />
                
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 rounded-md">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full rounded-lg px-4 py-3 text-base font-medium text-slate-800 hover:bg-slate-50"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="/login"
                className="block w-full mt-3 rounded-lg px-4 py-3 text-base font-semibold text-center bg-gradient-to-r from-purple-600 to-cyan-400 text-white hover:opacity-95"
              >
                Log in
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
