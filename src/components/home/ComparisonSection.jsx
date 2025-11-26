import React, { useMemo } from "react";
import logo from "../../assets/logo1.png";

import gmailIcon from "../../assets/gmail.svg";
import fbIcon from "../../assets/facebook.svg";
import phoneIcon from "../../assets/calls.png";
import docsIcon from "../../assets/docs.png";
import filterIcon from "../../assets/filter.png";
import calendarIcon from "../../assets/calendar.png";
import targetIcon from "../../assets/target.png";

/**
 * ComparisonSection — Left icons are now "scattered"
 *
 * NOTE: reference image you uploaded is available at:
 * /mnt/data/Screenshot 2025-11-25 165321.png
 */

export default function ComparisonSection() {
  const icons = [
    { id: 1, src: gmailIcon, name: "gmail" },
    { id: 2, src: fbIcon, name: "facebook" },
    { id: 3, src: phoneIcon, name: "phone" },
    { id: 4, src: docsIcon, name: "docs" },
    { id: 5, src: filterIcon, name: "filter" },
    { id: 6, src: calendarIcon, name: "calendar" },
    { id: 7, src: targetIcon, name: "target" },
  ];

  const outerCount = Math.ceil(icons.length / 2);
  const innerCount = icons.length - outerCount;
  const outerIcons = icons.slice(0, outerCount);
  const innerIcons = icons.slice(outerCount);

  const outerRadius = 130;
  const innerRadius = 85;

  // LEFT: create more natural scattered final positions (bounded)
  const leftFinals = useMemo(() => {
    const n = icons.length;
    const baseY = 200; // px from top of the 300px icon area
    // helper: deterministic-ish randomness using index (keeps positions stable across renders)
    const rand = (seed, min, max) => {
      // simple seeded pseudo-random (sine)
      const x = Math.sin(seed * 999.123 + 13.37) * 10000;
      const r = x - Math.floor(x);
      return min + r * (max - min);
    };

    return icons.map((_, i) => {
      // evenly spaced baseline across width, then add jitter in percent (-12..+12)
      const baselinePercent = ((i + 1) / (n + 1)) * 100;
      const jitterPercent = rand(i + 1, -12, 12);
      let fxPercent = baselinePercent + jitterPercent;
      // clamp to [6, 94] so icons stay inside container
      fxPercent = Math.max(6, Math.min(94, fxPercent));

      // Y: baseY with stronger jitter (-40..+30)
      const fyJitter = Math.round(rand(i + 10, -40, 30));
      let fyPx = baseY + fyJitter;
      // clamp Y to reasonable bounds inside 300px area
      fyPx = Math.max(130, Math.min(260, fyPx));

      // small rotation and scale for natural feel
      const rot = Math.round(rand(i + 20, -14, 14)); // degrees
      const scale = (rand(i + 30, 0.92, 1.12)).toFixed(2);

      return {
        fx: `${fxPercent}%`,
        fy: `${fyPx}px`,
        rot: `${rot}deg`,
        scale,
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="w-full max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT: Without AVACRM */}
        <div className="rounded-lg border border-slate-200 p-8 bg-[#E9F5FF] min-h-[520px] flex flex-col relative overflow-visible">
          <h3 className="text-2xl font-semibold text-slate-800 text-center mb-4">
            Without AVACRM
          </h3>

          <p className="text-slate-500 text-sm leading-relaxed text-center max-w-2xl mx-auto">
            Leads scattered across channels → missed follow-ups and repeated manual work.
            It's hard to monitor performance or forecast where the business is heading.
            <span className="font-semibold block mt-3">You are losing money!</span>
          </p>

          {/* LEFT: icons orbit briefly, then fall into scattered positions inside this container */}
          <div className="relative mt-8" style={{ height: 300 }}>
            {icons.map((it, i) => {
              const initialAngle = (i / icons.length) * 360;
              const final = leftFinals[i] || { fx: `${(i+1)*12}%`, fy: `200px`, rot: "0deg", scale: "1" };
              const style = {
                "--init-angle": `${initialAngle}deg`,
                "--init-r": `28px`,
                "--fx": final.fx,
                "--fy": final.fy,
                "--final-rot": final.rot,
                "--final-scale": final.scale,
                animationDelay: `${i * 0.12}s`,
                zIndex: 100 - i,
              };

              return (
                <div
                  key={`left-${it.id}`}
                  className="left-orbit-fall-wrapper"
                  style={style}
                >
                  <div className="left-icon-spot">
                    <img
                      src={it.src}
                      alt={it.name}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: With AVACRM */}
        <div className="rounded-lg overflow-hidden p-8 text-white relative min-h-[520px] flex flex-col items-center justify-center right-gradient-bg">
          <h3 className="text-2xl font-semibold text-center mb-3">With AVACRM</h3>

          <p className="text-white text-sm leading-relaxed text-center max-w-xl mx-auto mb-6">
            Centralized lead records, contextual automated communication, and
            collaborative follow-ups. AVACRM gives timely reminders and analytics
            so your team always hits revenue goals.
            <span className="font-bold block mt-2">You are acing your revenue targets!</span>
          </p>

          <div className="relative w-[380px] h-[380px] flex items-center justify-center">
            {/* Rings */}
            <div className="absolute w-[320px] h-[320px] rounded-full ring-visible" />
            <div className="absolute w-[220px] h-[220px] rounded-full ring-visible" />

            {/* Center logo */}
            <div className="z-20 w-32 h-32 rounded-2xl  flex items-center justify-center shadow-lg">
              <img src={logo} alt="AVACRM" className="w-24 h-24 object-contain" />
            </div>

            {/* OUTER ORBIT ICONS */}
            {outerIcons.map((it, idx) => {
              const angle = (idx / outerCount) * 360;
              const dur = 14;
              const style = {
                "--start-angle": `${angle}deg`,
                "--radius": `${outerRadius}px`,
                "--spin-dur": `${dur}s`,
              };

              return (
                <div
                  key={`outer-${it.id}`}
                  className="orbit-icon-wrapper"
                  style={style}
                >
                  <div className="orbit-icon-inner">
                    <div className="orbit-icon">
                      <img
                        src={it.src}
                        alt={it.name}
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* INNER ORBIT ICONS */}
            {innerIcons.map((it, idx) => {
              const count = innerCount || 1;
              const angle = (idx / count) * 360;
              const dur = 10;
              const style = {
                "--start-angle": `${angle}deg`,
                "--radius": `${innerRadius}px`,
                "--spin-dur": `${dur}s`,
              };

              return (
                <div
                  key={`inner-${it.id}`}
                  className="orbit-icon-wrapper orbit-icon-wrapper-inner"
                  style={style}
                >
                  <div className="orbit-icon-inner">
                    <div className="orbit-icon orbit-icon-inner-size">
                      <img
                        src={it.src}
                        alt={it.name}
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-xs text-white/90 text-center">
            Integrated channels, automated follow ups, and a central lead hub.
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* RIGHT panel gradient background */
        .right-gradient-bg {
          background-image:
            linear-gradient(135deg, #00a4ff 0%, #36c9b0 38%, #9bd46a 72%, #d8be3a 100%);
          background-size: cover;
          background-position: center;
          background-blend-mode: overlay;
        }

        /* LEFT: orbit a bit then drop to final coords (left/top) with small final rotation & scale */
        .left-orbit-fall-wrapper {
          position: absolute;
          left: 50%;
          top: 6%;
          width: 48px;
          height: 48px;
          transform: translate(-50%, -50%);
          transform-origin: center center;
          animation: left-orbit-then-fall 1.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .left-icon-spot {
          width: 48px;
          height: 48px;
          border-radius: 9999px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
          transition: transform 220ms ease;
        }
        /* during animation we move to --fx/--fy then apply final rotation & scale */
        @keyframes left-orbit-then-fall {
          0% {
            left: 50%;
            top: 6%;
            transform: translate(-50%, -50%) rotate(var(--init-angle, 0deg)) translate(0, -var(--init-r, 24px)) rotate(calc(-1 * var(--init-angle, 0deg)));
            opacity: 1;
          }
          45% {
            left: 50%;
            top: 6%;
            transform: translate(-50%, -50%) rotate(calc(var(--init-angle, 0deg) + 360deg)) translate(0, -var(--init-r, 24px)) rotate(calc(-1 * (var(--init-angle, 0deg) + 360deg)));
          }
          65% {
            left: var(--fx);
            top: calc(var(--fy) + 22px);
            transform: translate(-50%, -50%);
            opacity: 1;
          }
          85% {
            left: var(--fx);
            top: calc(var(--fy) - 6px);
            transform: translate(-50%, -50%);
            opacity: 1;
          }
          96% {
            left: var(--fx);
            top: var(--fy);
            transform: translate(-50%, -50%) rotate(var(--final-rot, 0deg)) scale(var(--final-scale, 1));
            opacity: 1;
          }
          100% {
            left: var(--fx);
            top: var(--fy);
            transform: translate(-50%, -50%) rotate(var(--final-rot, 0deg)) scale(var(--final-scale, 1));
            opacity: 1;
          }
        }

        /* RIGHT orbiting logic */
        .orbit-icon-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          transform-origin: center center;
          animation: orbit-spin var(--spin-dur, 16s) linear infinite;
        }
        @keyframes orbit-spin {
          0% {
            transform: translate(-50%, -50%) rotate(var(--start-angle, 0deg));
          }
          100% {
            transform: translate(-50%, -50%) rotate(calc(var(--start-angle, 0deg) + 360deg));
          }
        }
        .orbit-icon-inner {
          width: 0;
          height: 0;
          transform-origin: center center;
          animation: orbit-counter var(--spin-dur, 16s) linear infinite;
        }
        @keyframes orbit-counter {
          0% {
            transform: translateY(calc(-1 * var(--radius, 120px))) rotate(0deg);
          }
          100% {
            transform: translateY(calc(-1 * var(--radius, 120px))) rotate(-360deg);
          }
        }

        .orbit-icon {
          width: 52px;
          height: 52px;
          border-radius: 9999px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
        }
        .orbit-icon-inner-size { width: 46px; height: 46px; }

        .ring-visible {
          border: 2px solid rgba(255, 255, 255, 0.18);
          background: radial-gradient(circle at center, rgba(255,255,255,0.02), transparent 60%);
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.02);
        }

        @media (max-width: 640px) {
          .orbit-icon, .orbit-icon-inner-size { width: 40px; height: 40px; }
          .left-icon-spot { width: 40px; height: 40px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .left-orbit-fall-wrapper, .orbit-icon-wrapper, .orbit-icon-inner {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
