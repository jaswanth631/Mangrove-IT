"use client";

import React, { useEffect, useState } from "react";

/**
 * Premium cinematic preloader.
 *
 * Timeline:
 *   0.0s  Logo arc begins drawing (green → orange)
 *   0.3s  "M" fades + scales in
 *   0.5s  "G" fades + scales in
 *   1.2s  Arc completes, sonar pulse radiates
 *   1.2s  Wordmark reveals (MANGROVE slide, IT glitch, subtitle, tagline)
 *   1.5s  Orbital dots + status text begins cycling
 *   3.0s  Exit: logo scales 1.0 → 1.1, flash, slides up off-screen
 *   3.7s  Element removed from DOM
 */

const STATUSES: { until: number; text: string }[] = [
  { until: 1900, text: "Powering up systems..." },
  { until: 2300, text: "Loading experiences..." },
  { until: 2700, text: "Preparing your visit..." },
  { until: 3000, text: "Welcome." },
];

const TOTAL_VISIBLE_MS = 3000;
const EXIT_MS = 700;

export default function Preloader() {
  const [exiting, setExiting] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [status, setStatus] = useState(STATUSES[0].text);

  useEffect(() => {
    const start = performance.now();

    // Cycle status text via rAF so it stays in sync with the visible timeline
    let raf = 0;
    const tick = () => {
      const elapsed = performance.now() - start;
      const next = STATUSES.find((s) => elapsed < s.until) ?? STATUSES[STATUSES.length - 1];
      setStatus((prev) => (prev === next.text ? prev : next.text));
      if (elapsed < TOTAL_VISIBLE_MS) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Lock body scroll while preloader is visible
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const restoreScroll = () => {
      document.body.style.overflow = prevOverflow;
    };

    const exitTimer = setTimeout(() => setExiting(true), TOTAL_VISIBLE_MS);
    const removeTimer = setTimeout(() => {
      restoreScroll();
      setRemoved(true);
    }, TOTAL_VISIBLE_MS + EXIT_MS);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
      restoreScroll();
    };
  }, []);

  if (removed) return null;

  return (
    <div
      aria-hidden="true"
      className={`preloader fixed inset-0 z-[9999] flex items-center justify-center ${
        exiting ? "preloader-exit" : ""
      }`}
    >
      {/* Background mesh */}
      <div className="preloader-bg" />
      <div className="preloader-noise" />

      {/* Constellation network — dim, atmospheric */}
      <Constellation />

      {/* Center stage */}
      <div className="preloader-stage relative flex flex-col items-center px-6">
        {/* Logo + orbital dots + sonar pulse */}
        <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] flex items-center justify-center">
          {/* Sonar pulse */}
          <div className="sonar absolute inset-0 rounded-full" />

          {/* Orbital dots */}
          <div className="orbit orbit-1">
            <span className="orbit-dot orbit-dot-green" />
          </div>
          <div className="orbit orbit-2">
            <span className="orbit-dot orbit-dot-cyan" />
          </div>
          <div className="orbit orbit-3">
            <span className="orbit-dot orbit-dot-orange" />
          </div>

          {/* MG SVG logo */}
          <svg
            className="logo-svg relative"
            viewBox="0 0 120 120"
            width="100%"
            height="100%"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="mgArc" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2d7a3a" />
                <stop offset="55%" stopColor="#7a8a26" />
                <stop offset="100%" stopColor="#d4721a" />
              </linearGradient>
              <radialGradient id="mgFill" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(45, 122, 58, 0.08)" />
                <stop offset="100%" stopColor="rgba(212, 114, 26, 0.0)" />
              </radialGradient>
            </defs>

            {/* Inner soft fill */}
            <circle cx="60" cy="60" r="48" fill="url(#mgFill)" />

            {/* Drawn arc — circumference 2πr ≈ 301.59 for r=48 */}
            <circle
              className="logo-arc"
              cx="60"
              cy="60"
              r="48"
              stroke="url(#mgArc)"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Letters */}
            <text
              className="logo-letter logo-letter-m"
              x="42"
              y="76"
              textAnchor="middle"
              fontFamily="'Space Grotesk', 'Inter', sans-serif"
              fontWeight="700"
              fontSize="42"
              fill="#2d7a3a"
            >
              M
            </text>
            <text
              className="logo-letter logo-letter-g"
              x="78"
              y="76"
              textAnchor="middle"
              fontFamily="'Space Grotesk', 'Inter', sans-serif"
              fontWeight="700"
              fontSize="42"
              fill="#d4721a"
            >
              G
            </text>
          </svg>
        </div>

        {/* Wordmark */}
        <div className="mt-10 md:mt-12 flex flex-col items-center text-center">
          <h1 className="word-row flex items-baseline gap-2 text-2xl md:text-4xl font-display font-bold tracking-tight">
            <span className="word-mangrove">MANGROVE</span>
            <span className="word-it">IT</span>
          </h1>

          <p className="word-subtitle mt-3 text-[11px] md:text-xs font-mono uppercase">
            Integrated Solutions
          </p>

          <p className="word-tagline mt-2 text-xs md:text-sm italic">
            Makes Good
          </p>
        </div>

        {/* Status line */}
        <div className="status-line mt-10 md:mt-12 h-5 flex items-center justify-center">
          <span key={status} className="status-text">
            {status}
          </span>
        </div>
      </div>

      {/* Exit flash */}
      <div className="exit-flash" />

      {/* All preloader styles scoped here */}
      <style jsx>{`
        .preloader {
          background: #0a0e1a;
          will-change: transform, opacity;
        }

        /* === Background layers === */
        .preloader-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 50% 50%, rgba(45, 122, 58, 0.08), transparent 55%),
            radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.05), transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(212, 114, 26, 0.05), transparent 50%);
          background-size: 200% 200%;
          animation: meshDrift 8s ease-in-out infinite;
        }

        .preloader-noise {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E");
          pointer-events: none;
        }

        @keyframes meshDrift {
          0%, 100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }

        /* === Stage container fade-in === */
        .preloader-stage {
          opacity: 0;
          animation: stageFadeIn 0.6s ease-out 0.1s forwards;
        }

        @keyframes stageFadeIn {
          to { opacity: 1; }
        }

        /* === Logo arc draw === */
        .logo-svg {
          width: 140px;
          height: 140px;
        }
        @media (min-width: 768px) {
          .logo-svg { width: 180px; height: 180px; }
        }

        .logo-arc {
          stroke-dasharray: 301.59;
          stroke-dashoffset: 301.59;
          transform-origin: 60px 60px;
          transform: rotate(-90deg);
          animation: drawArc 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
          filter: drop-shadow(0 0 6px rgba(45, 122, 58, 0.35))
                  drop-shadow(0 0 12px rgba(212, 114, 26, 0.18));
        }

        @keyframes drawArc {
          to { stroke-dashoffset: 0; }
        }

        .logo-letter {
          opacity: 0;
          filter: blur(6px);
          transform-origin: center;
        }

        .logo-letter-m {
          animation: letterIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
        }

        .logo-letter-g {
          animation: letterIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
        }

        @keyframes letterIn {
          0%   { opacity: 0; filter: blur(6px); transform: scale(0.8); }
          60%  { opacity: 1; filter: blur(0); }
          100% { opacity: 1; filter: blur(0); transform: scale(1); }
        }

        /* === Sonar pulse (one shot at arc completion) === */
        .sonar {
          opacity: 0;
          background: radial-gradient(
            circle,
            rgba(45, 122, 58, 0.35),
            rgba(212, 114, 26, 0.12),
            transparent 70%
          );
          animation: sonarPulse 1.4s ease-out 1.2s forwards;
          will-change: transform, opacity;
        }

        @keyframes sonarPulse {
          0%   { transform: scale(0.95); opacity: 0; }
          15%  { opacity: 0.9; }
          100% { transform: scale(2.4); opacity: 0; }
        }

        /* === Orbital dots === */
        .orbit {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          opacity: 0;
          animation: orbitFadeIn 0.6s ease-out 1.5s forwards;
          will-change: transform;
        }

        .orbit-1 { animation: orbitFadeIn 0.6s ease-out 1.5s forwards, spin1 2.6s linear 1.5s infinite; }
        .orbit-2 { animation: orbitFadeIn 0.6s ease-out 1.6s forwards, spin2 3.2s linear 1.6s infinite; }
        .orbit-3 { animation: orbitFadeIn 0.6s ease-out 1.7s forwards, spin3 2.9s linear 1.7s infinite; }

        @keyframes orbitFadeIn {
          to { opacity: 1; }
        }
        @keyframes spin1 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spin2 {
          from { transform: rotate(120deg); }
          to   { transform: rotate(480deg); }
        }
        @keyframes spin3 {
          from { transform: rotate(240deg); }
          to   { transform: rotate(600deg); }
        }

        .orbit-dot {
          position: absolute;
          top: 50%;
          left: 100%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .orbit-dot-green {
          background: #2d7a3a;
          box-shadow:
            0 0 8px rgba(45, 122, 58, 0.9),
            -10px 0 14px rgba(45, 122, 58, 0.4),
            -20px 0 18px rgba(45, 122, 58, 0.18);
        }
        .orbit-dot-cyan {
          background: #00d4ff;
          box-shadow:
            0 0 8px rgba(0, 212, 255, 0.9),
            -10px 0 14px rgba(0, 212, 255, 0.4),
            -20px 0 18px rgba(0, 212, 255, 0.15);
        }
        .orbit-dot-orange {
          background: #d4721a;
          box-shadow:
            0 0 8px rgba(212, 114, 26, 0.9),
            -10px 0 14px rgba(212, 114, 26, 0.4),
            -20px 0 18px rgba(212, 114, 26, 0.15);
        }

        /* === Wordmark === */
        .word-mangrove {
          color: #f1f5f9;
          opacity: 0;
          transform: translateX(-16px);
          animation: slideInLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards;
          letter-spacing: 0.06em;
        }

        @keyframes slideInLeft {
          to { opacity: 1; transform: translateX(0); }
        }

        .word-it {
          color: #00d4ff;
          opacity: 0;
          text-shadow: 0 0 18px rgba(0, 212, 255, 0.45);
          animation:
            itAppear 0.05s linear 1.55s forwards,
            itGlitch 0.5s steps(1, end) 1.6s 1 forwards;
        }

        @keyframes itAppear {
          to { opacity: 1; }
        }
        @keyframes itGlitch {
          0%   { opacity: 1; transform: translate(0, 0); }
          14%  { opacity: 0.2; transform: translate(1px, -1px); }
          28%  { opacity: 1; transform: translate(-1px, 0); }
          42%  { opacity: 0.3; transform: translate(0, 1px); }
          56%  { opacity: 1; transform: translate(0, 0); }
          100% { opacity: 1; transform: translate(0, 0); }
        }

        .word-subtitle {
          color: #64748b;
          opacity: 0;
          letter-spacing: 0.04em;
          animation: subtitleIn 0.8s ease-out 1.85s forwards;
        }

        @keyframes subtitleIn {
          0%   { opacity: 0; letter-spacing: 0.04em; }
          100% { opacity: 1; letter-spacing: 0.32em; }
        }

        .word-tagline {
          color: #2d7a3a;
          opacity: 0;
          animation: taglineIn 0.6s ease-out 2.15s forwards;
        }

        @keyframes taglineIn {
          to { opacity: 0.85; }
        }

        /* === Status text === */
        .status-line {
          opacity: 0;
          animation: stageFadeIn 0.5s ease-out 1.6s forwards;
        }

        .status-text {
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(148, 163, 184, 0.65);
          animation: statusSwap 0.4s ease;
        }

        @keyframes statusSwap {
          0%   { opacity: 0; transform: translateY(4px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* === Exit transition === */
        .preloader-exit .preloader-stage {
          animation: stageExit 0.6s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        @keyframes stageExit {
          0%   { transform: scale(1); opacity: 1; }
          40%  { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1.12); opacity: 0; }
        }

        .exit-flash {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(245, 245, 255, 0.9),
            rgba(0, 212, 255, 0.4) 30%,
            transparent 60%
          );
        }

        .preloader-exit .exit-flash {
          animation: exitFlash 0.5s ease-out forwards;
        }

        @keyframes exitFlash {
          0%   { opacity: 0; }
          30%  { opacity: 0.6; }
          100% { opacity: 0; }
        }

        .preloader-exit {
          animation: preloaderSlideUp 0.7s cubic-bezier(0.65, 0, 0.35, 1) 0.2s forwards;
          will-change: transform, opacity;
        }

        @keyframes preloaderSlideUp {
          0%   { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100vh); opacity: 0.95; }
        }

        /* Reduced motion — respect user preference */
        @media (prefers-reduced-motion: reduce) {
          .logo-arc { animation-duration: 0.4s; }
          .sonar, .orbit-1, .orbit-2, .orbit-3 { display: none; }
          .word-it { animation: itAppear 0.1s linear 0.3s forwards; }
        }
      `}</style>
    </div>
  );
}

/* ─── Constellation network background ─── */
function Constellation() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 800 600"
      aria-hidden="true"
    >
      <g style={{ animation: "driftSlow 24s ease-in-out infinite" }}>
        {STARS.map((s, i) => (
          <circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill="rgba(0, 212, 255, 0.3)"
          />
        ))}
        {LINES.map((l, i) => (
          <line
            key={i}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="rgba(0, 212, 255, 0.08)"
            strokeWidth="1"
          />
        ))}
      </g>
      <style>{`
        @keyframes driftSlow {
          0%, 100% { transform: translate(0, 0); }
          50%      { transform: translate(-12px, 8px); }
        }
      `}</style>
    </svg>
  );
}

// Pre-computed sparse constellation — kept tiny so SSR markup stays small
const STARS = [
  { x: 60, y: 80, r: 1.2 },
  { x: 140, y: 220, r: 1 },
  { x: 220, y: 110, r: 1.4 },
  { x: 320, y: 60, r: 1 },
  { x: 410, y: 180, r: 1.2 },
  { x: 540, y: 90, r: 1 },
  { x: 660, y: 200, r: 1.3 },
  { x: 740, y: 70, r: 1 },
  { x: 90, y: 480, r: 1 },
  { x: 200, y: 540, r: 1.2 },
  { x: 360, y: 500, r: 1 },
  { x: 480, y: 540, r: 1.4 },
  { x: 600, y: 470, r: 1 },
  { x: 720, y: 520, r: 1.2 },
];

const LINES = [
  { x1: 60, y1: 80, x2: 140, y2: 220 },
  { x1: 140, y1: 220, x2: 220, y2: 110 },
  { x1: 220, y1: 110, x2: 320, y2: 60 },
  { x1: 410, y1: 180, x2: 540, y2: 90 },
  { x1: 540, y1: 90, x2: 660, y2: 200 },
  { x1: 660, y1: 200, x2: 740, y2: 70 },
  { x1: 90, y1: 480, x2: 200, y2: 540 },
  { x1: 200, y1: 540, x2: 360, y2: 500 },
  { x1: 360, y1: 500, x2: 480, y2: 540 },
  { x1: 480, y1: 540, x2: 600, y2: 470 },
  { x1: 600, y1: 470, x2: 720, y2: 520 },
];
