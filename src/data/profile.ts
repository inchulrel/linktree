import type { Brand } from "@/components/BrandIcon";

export type Profile = {
  name: string;
  bio: string;
  image: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
  icon?: Brand; // 버튼 배경에 연하게 깔리는 로고 (github | naver | youtube)
};

// 프로필과 링크는 여기서 수정하세요.
export const profile: Profile = {
  name: "한인철",
  bio: "돈 많은 백수가 꿈인 블로거",
  image: "/profile.png",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/inchulrel", icon: "github" },
  { id: "naverblog", title: "네이버 블로그", url: "https://blog.naver.com/ha_neul_98", icon: "naver" },
  { id: "youtube", title: "YouTube", url: "https://www.youtube.com/@%ED%95%9C%EC%9D%B8%EC%B2%A0-k9u", icon: "youtube" },
];
