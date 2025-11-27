// AVACRMTutorial.jsx
import React, { useState, useMemo } from "react";

/**
 * AVACRMTutorial
 * - Uses the 4 provided YouTube links in rotation for all modules/subitems.
 * - Converts youtu.be links to embed URLs for iframe.
 * - Accordion-on-click: click a module to open it (closes others).
 * - Clicking a module header that has its own video plays it (doesn't expand).
 * - Clicking a sub-item plays that sub-item and expands its parent.
 * - First playable video selected on load.
 */

export default function AVACRMTutorial() {
  // base links (you provided)
  const rawLinks = [
    "https://youtu.be/KyhI5dJHeqs",
    "https://youtu.be/plCn-3A8hqQ",
    "https://youtu.be/LAtdBQy6GPk",
    "https://youtu.be/sH1A-2dyc4o"
  ];

  // helper: convert youtu.be or youtube.com/watch?v= to embed url with params
  function toEmbedUrl(url) {
    // try to extract video id
    try {
      // if it's youtu.be short link
      const shortMatch = url.match(/youtu\.be\/([A-Za-z0-9_-]+)/);
      if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}?rel=0&enablejsapi=1`;

      // youtube watch?v= style
      const q = new URL(url);
      if (q.searchParams && q.searchParams.get("v")) {
        return `https://www.youtube.com/embed/${q.searchParams.get("v")}?rel=0&enablejsapi=1`;
      }

      // fallback: return as-is
      return url;
    } catch (e) {
      return url;
    }
  }

  // rotate through the rawLinks and always return an embed url
  let linkIndex = 0;
  const nextEmbed = () => {
    const url = rawLinks[linkIndex % rawLinks.length];
    linkIndex += 1;
    return toEmbedUrl(url);
  };

  // modules data with links assigned in rotation (embed URLs)
  const modules = [
    {
      id: "m1",
      title: "How Can a CRM Tool Help You Achieve Your Sales Goals",
      videoUrl: nextEmbed(),
    },
    {
      id: "m2",
      title: "How to set up your AVACRM Account?",
      videoUrl: null,
      subItems: [
        { id: "m2-1", title: "Quick introduction to AVACRM", videoUrl: nextEmbed() },
        { id: "m2-2", title: "Setting Up your Account details", videoUrl: nextEmbed() },
        { id: "m2-3", title: "Managing your Users", videoUrl: nextEmbed() },
        { id: "m2-4", title: "Managing your Teams", videoUrl: nextEmbed() },
        {
          id: "m2-5",
          title: "Setting up Profile Permissions",
          videoUrl: nextEmbed(),
          subItems: [
            { id: "m2-5-1", title: "Basic Access", videoUrl: nextEmbed() },
            { id: "m2-5-2", title: "Administrative Access", videoUrl: nextEmbed() },
            { id: "m2-5-3", title: "Special Access", videoUrl: nextEmbed() },
          ],
        },
        { id: "m2-6", title: "Setting up data sharing rules", videoUrl: nextEmbed() },
      ],
    },
    {
      id: "m3",
      title: "Why use a CRM tool?",
      videoUrl: nextEmbed(),
    },
    {
      id: "m4",
      title: "How to use AVACRM",
      videoUrl: null,
      subItems: [
        { id: "m4-1", title: "Quick Introduction of Entities", videoUrl: nextEmbed() },
        { id: "m4-2", title: "Using the Activity Dashboard", videoUrl: nextEmbed() },
      ],
    },
    {
      id: "m5",
      title: "How to set up Integrations in AVACRM Marketplace?",
      videoUrl: null,
      subItems: [
        { id: "m5-1", title: "Facebook Lead Integration", videoUrl: nextEmbed() },
        { id: "m5-2", title: "Razorpay Integration", videoUrl: nextEmbed() },
      ],
    },
    {
      id: "m6",
      title: "How to Use New AI-Powered Features?",
      videoUrl: null,
      subItems: [
        { id: "m6-1", title: "Email AI Assistant", videoUrl: nextEmbed() },
        { id: "m6-2", title: "Call Sentiment Analysis", videoUrl: nextEmbed() },
        { id: "m6-3", title: "AI Note Analysis", videoUrl: nextEmbed() },
      ],
    },
  ];

  // flatten playable items for next/prev navigation
  const flatList = useMemo(() => {
    const out = [];
    modules.forEach((m, mi) => {
      if (m.videoUrl) out.push({ id: m.id, title: m.title, videoUrl: m.videoUrl, moduleIndex: mi });
      if (m.subItems) {
        m.subItems.forEach((s, si) => {
          if (s.videoUrl) out.push({ id: s.id, title: s.title, videoUrl: s.videoUrl, moduleIndex: mi, subIndex: si });
          if (s.subItems) {
            s.subItems.forEach((ss, ssi) => {
              if (ss.videoUrl) out.push({ id: ss.id, title: ss.title, videoUrl: ss.videoUrl, moduleIndex: mi, subIndex: si, subSubIndex: ssi });
            });
          }
        });
      }
    });
    return out;
  }, []); // modules are static so empty deps

  // first playable video selected on load (index 0)
  const [activeIndex, setActiveIndex] = useState(() => (flatList.length ? 0 : -1));

  // ALL closed by default; click toggles (accordion: open clicked, close others)
  const [expanded, setExpanded] = useState(() => {
    const initial = {};
    modules.forEach((m) => (initial[m.id] = false));
    return initial;
  });

  const active = flatList[activeIndex] || null;

  function playItemAtFlatIndex(idx) {
    if (idx < 0 || idx >= flatList.length) return;
    setActiveIndex(idx);
    // expand parent so active subitem is visible
    const modId = modules[flatList[idx].moduleIndex].id;
    setExpanded(() => ({ [modId]: true }));
  }

  // toggle expand on click (accordion: only one open at a time)
  function handleModuleClickToggle(modId) {
    setExpanded((prev) => {
      const currentlyOpen = !!prev[modId];
      return currentlyOpen ? {} : { [modId]: true };
    });
  }

  // click header: if module has its own video, play it (do not change expand)
  function onModuleHeaderClick(mod) {
    if (mod.videoUrl) {
      const idx = flatList.findIndex((f) => f.id === mod.id);
      if (idx >= 0) playItemAtFlatIndex(idx);
    } else {
      handleModuleClickToggle(mod.id);
    }
  }

  function onSubItemClick(sub) {
    const idx = flatList.findIndex((f) => f.id === sub.id);
    if (idx >= 0) playItemAtFlatIndex(idx);
  }

  function next() {
    if (activeIndex < flatList.length - 1) playItemAtFlatIndex(activeIndex + 1);
  }
  function prev() {
    if (activeIndex > 0) playItemAtFlatIndex(activeIndex - 1);
  }

  // keyboard handler to toggle with Enter / Space when focus is on header
  function onHeaderKeyDown(e, mod) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onModuleHeaderClick(mod);
    }
  }

  return (
    <section className="avacrm-tutorial" aria-label="AVACRM tutorial">
      <div className="container">
        <div className="left">
          <div className="filterside-menu">
            {modules.map((m, mi) => {
              return (
                <div key={m.id} className={`module`}>
                  <div
                    className={`module-header ${active && active.moduleIndex === mi ? "module-header-active" : ""}`}
                    onClick={() => onModuleHeaderClick(m)}
                    tabIndex={0}
                    role="button"
                    aria-expanded={!!expanded[m.id]}
                    aria-controls={m.subItems ? `${m.id}-list` : undefined}
                    onKeyDown={(e) => onHeaderKeyDown(e, m)}
                  >
                    <div className="chapter-number">
                      <p>{mi + 1}</p>
                    </div>
                    <div className="chapter-title">{m.title.replace(/Kylas/gi, "AVACRM")}</div>
                  </div>

                  {m.subItems && expanded[m.id] && (
                    <ul className="module-list" id={`${m.id}-list`}>
                      {m.subItems.map((s, si) => {
                        const isActive = active && active.id === s.id;
                        return (
                          <li key={s.id} className={`list-group-item ${isActive ? "active" : ""}`}>
                            <a
                              href="#!"
                              onClick={(e) => {
                                e.preventDefault();
                                onSubItemClick(s);
                              }}
                            >
                              <div className="icon-container" />
                              <p>{s.title.replace(/Kylas/gi, "AVACRM")}</p>
                            </a>

                            {s.subItems && (
                              <ul className="sub-module-list">
                                {s.subItems.map((ss, ssi) => {
                                  const isActiveSub = active && active.id === ss.id;
                                  return (
                                    <li key={ss.id} className={`list-group-item sub ${isActiveSub ? "active" : ""}`}>
                                      <a
                                        href="#!"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          onSubItemClick(ss);
                                        }}
                                      >
                                        <div className="icon-container1">{ssi + 1}</div>
                                        <p>{ss.title}</p>
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="right">
          <div className="lesson-container">
            <div className="youtube-video-container" aria-live="polite">
              {active ? (
                <iframe
                  title={active.title}
                  width="100%"
                  height="420"
                  src={active.videoUrl}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="placeholder">Select a video to play</div>
              )}
            </div>

            <div className="navigation-btns">
              <button className="read-more-btn prev-btn" onClick={prev} disabled={activeIndex <= 0}>
                Prev
              </button>
              <button className="read-more-btn next-btn" onClick={next} disabled={activeIndex >= flatList.length - 1}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* component styles */}
      <style>{`
        .avacrm-tutorial { padding: 24px; background: #f5f7fa; font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
.container { display: flex; gap: 20px; max-width: 1200px; margin: 0 auto; }
.left { width: 33%; }
.right { width: 67%; }

.filterside-menu { background: #fff; border: 1px solid #e6e9ee; border-radius: 6px; overflow: hidden; }
.module { border-bottom: 1px solid #eef0f3; }
.module:last-child { border-bottom: 0; }

.module-header {
  display:flex;
  align-items:center;
  gap:14px;
  padding:16px;
  cursor:pointer;
  transition: background .15s ease;
  outline: none;
}

/* Hover (non-active) */
.module-header:not(.module-header-active):hover {
  background:#E9F7FB;
}

/* ACTIVE MODULE */
.module-header-active {
  background: #1C8ECE;
  color: #fff;
}
.module-header-active .chapter-number {
  background: #fff;
  color: #1C8ECE;
  border-color: #fff;
}

.chapter-number {
  width:36px;
  height:36px;
  border-radius:50%;
  border:2px solid #e6e9ee;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#fff;
  color:#333;
  font-weight:600;
}
.module-header-active .chapter-number {
  border-color: transparent;
}

.chapter-title { font-size:15px; line-height:1.3; }

/* Hover (non-active) list items */
.list-group-item:not(.active):hover {
  background:#E9F7FB;
}

/* ACTIVE SUBITEM (blue highlight) */
.list-group-item.active {
  background:#D5F1F8;
  color:#0A4E5E;
  font-weight:600;
}

.module-list { list-style:none; margin:0; padding:0 12px 12px 60px; background:#fff; }
.list-group-item {
  padding:10px 6px;
  display:flex;
  align-items:center;
  gap:10px;
  border-radius:4px;
}
.list-group-item a {
  display:flex;
  gap:10px;
  align-items:center;
  text-decoration:none;
  color:#333;
  width:100%;
}

.icon-container {
  width:22px;
  height:22px;
  border-radius:50%;
  background:#fff;
  border:1px solid #e6e9ee;
  flex-shrink:0;
}

.sub-module-list { padding-left: 18px; margin-top:6px; }
.list-group-item.sub { padding-left: 22px; font-size: 14px; }

.icon-container1 {
  width:22px;
  height:22px;
  border-radius:50%;
  background:#fff;
  border:1px solid #d0d6df;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:12px;
  margin-right:8px;
}

.lesson-container {
  background:#fff;
  border:1px solid #e6e9ee;
  border-radius:6px;
  padding:16px;
}
.youtube-video-container {
  width:100%;
  border-radius:6px;
  overflow:hidden;
  background:#000;
  min-height: 180px;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#fff;
}
.placeholder { padding:40px; text-align:center; color:#666; }

.navigation-btns { display:flex; justify-content:space-between; align-items:center; margin-top:14px; }

/* BUTTON COLORS */
.read-more-btn {
  padding:8px 14px;
  border-radius:20px;
  border:none;
  background:#1C8ECE;
  color:#fff;
  cursor:pointer;
  box-shadow: 0 6px 18px rgba(28,142,206,0.25);
}
.read-more-btn[disabled] {
  opacity:0.45;
  cursor:not-allowed;
  box-shadow:none;
}

@media (max-width: 900px) {
  .container { flex-direction: column; }
  .left, .right { width:100%; }
  .chapter-title { font-size:14px; }
}

      `}</style>
    </section>
  );
}
