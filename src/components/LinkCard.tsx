"use client";

import BrandIcon, { brands } from "@/components/BrandIcon";
import type { LinkItem } from "@/data/profile";

// 페이지 이동을 막지 않도록 sendBeacon으로 클릭을 기록합니다.
function trackClick(linkId: string) {
  const body = new Blob([JSON.stringify({ linkId })], { type: "application/json" });
  if (!navigator.sendBeacon?.("/api/click", body)) {
    fetch("/api/click", { method: "POST", body, keepalive: true }).catch(() => {});
  }
}

export default function LinkCard({
  link,
  count,
  onClick,
}: {
  link: LinkItem;
  count: number;
  onClick: () => void;
}) {
  const handleClick = () => {
    trackClick(link.id);
    onClick();
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      onAuxClick={(e) => e.button === 1 && handleClick()}
      className="group relative block w-full overflow-hidden rounded-2xl border border-white/80 bg-white/65 px-5 py-4 text-center font-semibold tracking-tight shadow-[0_6px_20px_-8px_rgba(160,95,55,0.25)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/85 hover:shadow-[0_10px_26px_-8px_rgba(160,95,55,0.32)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
      style={
        link.icon
          ? { backgroundImage: `linear-gradient(${brands[link.icon].color}06, ${brands[link.icon].color}06)` }
          : undefined
      }
    >
      {link.icon && (
        <BrandIcon
          brand={link.icon}
          className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] transition-opacity duration-300 group-hover:opacity-10"
        />
      )}
      <span className="relative">{link.title}</span>
      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-medium tabular-nums text-muted">
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
