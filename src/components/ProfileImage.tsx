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
        className="cursor-zoom-in rounded-full p-1 bg-white/70 shadow-[0_14px_32px_-10px_rgba(160,95,55,0.45),0_2px_6px_rgba(160,95,55,0.12)] transition duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_18px_40px_-10px_rgba(160,95,55,0.5),0_2px_6px_rgba(160,95,55,0.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
      >
        <Image
          src={src}
          alt={alt}
          width={144}
          height={144}
          priority
          unoptimized={src.endsWith(".svg")}
          className="h-32 w-32 rounded-full object-cover sm:h-36 sm:w-36"
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-stone-900/60 p-6 backdrop-blur-sm"
        >
          <Image
            src={src}
            alt={alt}
            width={640}
            height={640}
            unoptimized={src.endsWith(".svg")}
            className="h-auto w-full max-w-md rounded-3xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
