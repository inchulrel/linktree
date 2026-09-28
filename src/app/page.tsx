import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

// wireframe.png 구성: 원형 프로필 사진 → 이름 → 한 줄 소개 → 세로 링크 카드 목록
export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-sm flex-1 flex-col px-4 py-16 sm:py-24">
      <ProfileHeader profile={profile} />

      <ul className="mt-12 flex flex-col gap-5 sm:mt-14">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard link={link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
