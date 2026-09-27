"use client";

import type { LinkItem } from "@/data/profile";

// 페이지 이동을 막지 않도록 sendBeacon으로 클릭을 기록합니다.
function trackClick(linkId: string) {
  const body = new Blob([JSON.stringify({ linkId })], { type: "application/json" });
  if (!navigator.sendBeacon?.("/api/click", body)) {
    fetch("/api/click", { method: "POST", body, keepalive: true }).catch(() => {});
  }
}

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackClick(link.id)}
      onAuxClick={(e) => e.button === 1 && trackClick(link.id)}
      className="block w-full rounded-xl border border-neutral-200 bg-white px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-md active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
    >
      {link.title}
    </a>
  );
}
