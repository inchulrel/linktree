import ProfileImage from "@/components/ProfileImage";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <ProfileImage src={profile.image} alt={`${profile.name} 프로필 사진`} />
      <h1 className="mt-7 text-2xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-2 text-[15px] text-muted">{profile.bio}</p>
    </header>
  );
}
