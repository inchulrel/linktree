import ProfileImage from "@/components/ProfileImage";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <ProfileImage src={profile.image} alt={`${profile.name} 프로필 사진`} />
      <h1 className="mt-6 text-xl font-bold sm:text-2xl">{profile.name}</h1>
      <p className="mt-1 text-sm text-neutral-600 sm:text-base">{profile.bio}</p>
    </header>
  );
}
