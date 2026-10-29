"use client";

import { useState } from "react";
import { ClientConfig } from "@/types/clientConfig";

export function BeforeAfterModal({
  config,
  onClose,
}: {
  config: ClientConfig;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<"split" | "before" | "after">("split");
  const oldScreenshot = config.beforeAfter?.oldScreenshotUrl;
  const auditNotes = config.beforeAfter?.auditNotes || [
    "Outdated mobile layout with poor viewport scaling",
    "Missing instant click-to-call / direct conversion buttons",
    "Slow load times and lack of authentic customer proof",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/60">
          <div>
            <h3 className="text-base font-semibold text-white">
              Digital Transformation Audit • {config.businessName}
            </h3>
            <p className="text-xs text-zinc-400">
              Direct comparison between existing web presence and the custom uplift.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Tab Controls for Mobile */}
        <div className="sm:hidden flex border-b border-zinc-800 bg-zinc-950/40">
          <button
            onClick={() => setTab("split")}
            className={`flex-1 py-2 text-xs font-medium text-center ${
              tab === "split" ? "text-amber-400 border-b-2 border-amber-400" : "text-zinc-400"
            }`}
          >
            Split View
          </button>
          <button
            onClick={() => setTab("before")}
            className={`flex-1 py-2 text-xs font-medium text-center ${
              tab === "before" ? "text-rose-400 border-b-2 border-rose-400" : "text-zinc-400"
            }`}
          >
            Previous Site
          </button>
          <button
            onClick={() => setTab("after")}
            className={`flex-1 py-2 text-xs font-medium text-center ${
              tab === "after" ? "text-emerald-400 border-b-2 border-emerald-400" : "text-zinc-400"
            }`}
          >
            New Uplift
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-zinc-950/30">
          {/* Before Column */}
          <div
            className={`space-y-4 ${
              tab === "after" ? "hidden md:block" : "block"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                🔴 Previous Mobile Experience
              </span>
              <span className="text-xs text-zinc-500">Current Baseline</span>
            </div>

            <div className="relative aspect-[9/16] max-h-[460px] mx-auto rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 flex items-center justify-center">
              {oldScreenshot && oldScreenshot !== "NONE" ? (
                <img
                  src={oldScreenshot}
                  alt={`Previous site screenshot for ${config.businessName}`}
                  className="w-full h-full object-cover object-top opacity-70 filter grayscale-[20%]"
                  loading="lazy"
                />
              ) : (
                <div className="text-center p-6 text-zinc-500 text-xs">
                  <div className="text-2xl mb-2">⚠️</div>
                  No active modern mobile site detected.
                  <br />
                  Customer relies on default Google Maps profile.
                </div>
              )}
            </div>

            <div className="bg-rose-950/20 border border-rose-900/30 rounded-xl p-4 text-xs space-y-2">
              <div className="font-semibold text-rose-300">Identified Friction Points:</div>
              <ul className="space-y-1.5 text-zinc-400">
                {auditNotes.map((note, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-400">✕</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* After Column */}
          <div
            className={`space-y-4 ${
              tab === "before" ? "hidden md:block" : "block"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                🟢 Tailored Digital Uplift
              </span>
              <span className="text-xs text-emerald-400 font-medium">Conversion Optimized</span>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 p-5 space-y-4">
              <div className="text-sm font-semibold text-white">
                What Has Been Upgraded:
              </div>
              <ul className="text-xs space-y-3 text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 text-sm">✓</span>
                  <div>
                    <strong className="text-white">Authentic Brand Personality:</strong> Custom design archetype matching {config.businessName}&apos;s niche ({config.archetype}).
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 text-sm">✓</span>
                  <div>
                    <strong className="text-white">Direct Conversion Engine:</strong> Sticky mobile action bar with one-tap phone call ({config.phone}) and navigation.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 text-sm">✓</span>
                  <div>
                    <strong className="text-white">Real Google Social Proof:</strong> Verified {config.rating}★ rating ({config.reviewCount}+ reviews) integrated natively.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 text-sm">✓</span>
                  <div>
                    <strong className="text-white">Sub-Second Load Speed:</strong> Edge-rendered static Next.js Turbopack build that outranks local competitors in SEO.
                  </div>
                </li>
              </ul>

              <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
                <a
                  href={`tel:${config.phone}`}
                  className="w-full py-2.5 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-center text-xs transition"
                >
                  Activate & Deploy This Design for {config.businessName}
                </a>
                <button
                  onClick={onClose}
                  className="w-full py-2 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-center text-xs transition"
                >
                  Close & Explore Full Site
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
