"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// 프로필 사진: hover 시 살짝 확대, 클릭 시 화면 가운데에 크게 표시
export default function ProfileImage({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="프로필 사진 크게 보기"
        className="cursor-zoom-in rounded-full transition duration-300 hover:scale-110 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500"
      >
        <Image
          src={src}
          alt={alt}
          width={192}
          height={192}
          priority
          unoptimized={src.endsWith(".svg")}
          className="h-44 w-44 rounded-full object-cover ring-4 ring-white shadow-md sm:h-48 sm:w-48"
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/70 p-4"
        >
          <Image
            src={src}
            alt={alt}
            width={640}
            height={640}
            unoptimized={src.endsWith(".svg")}
            className="h-auto w-full max-w-md rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
