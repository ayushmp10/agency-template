"use client";

import { useState } from "react";
import { ClientConfig } from "@/types/clientConfig";
import { BeforeAfterModal } from "./BeforeAfterModal";

export function HeaderBanner({ config }: { config: ClientConfig }) {
  const [showModal, setShowModal] = useState(false);
  const hasOldSite = Boolean(config.beforeAfter?.oldScreenshotUrl && config.beforeAfter.oldScreenshotUrl !== "NONE");

  return (
    <>
      <div className="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 px-4 py-2.5 text-xs text-zinc-300">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              Live Concept
            </span>
            <span>
              Tailored Digital Uplift for <strong className="text-white font-medium">{config.businessName}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {hasOldSite && (
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition"
              >
                <span>⚡</span>
                <span>Compare Before vs. After</span>
              </button>
            )}
            <a
              href={`tel:${config.phone}`}
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 transition"
            >
              Claim This Website ↗
            </a>
          </div>
        </div>
      </div>

      {showModal && (
        <BeforeAfterModal
          config={config}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
