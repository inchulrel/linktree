import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={profile.image}
        alt={`${profile.name} 프로필 사진`}
        width={192}
        height={192}
        priority
        unoptimized={profile.image.endsWith(".svg")}
        className="h-44 w-44 rounded-full object-cover ring-4 ring-white shadow-md sm:h-48 sm:w-48"
      />
      <h1 className="mt-6 text-xl font-bold sm:text-2xl">{profile.name}</h1>
      <p className="mt-1 text-sm text-neutral-600 sm:text-base">{profile.bio}</p>
    </header>
  );
}
