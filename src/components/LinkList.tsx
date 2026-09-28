"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 0회로 표시
  const [counts, setCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(links.map((l) => [l.id, 0])),
  );

  // 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 가져옵니다.
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/click", { cache: "no-store", signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { counts: Record<string, number> } | null) => {
        if (data) setCounts((prev) => ({ ...prev, ...data.counts }));
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  const handleClick = (id: string) =>
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

  return (
    <ul className="mt-12 flex flex-col gap-5 sm:mt-14">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} count={counts[link.id] ?? 0} onClick={() => handleClick(link.id)} />
        </li>
      ))}
    </ul>
  );
}
