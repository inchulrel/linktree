export type Profile = {
  name: string;
  bio: string;
  image: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

// 프로필과 링크는 여기서 수정하세요. (현재는 보여주기용 더미 값)
export const profile: Profile = {
  name: "한인철",
  bio: "돈 많은 백수가 꿈인 블로거",
  image: "/profile.svg",
};

// 보여주기용 더미 링크 (나중에 실제 주소로 교체)
export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "naverblog", title: "네이버 블로그", url: "https://blog.naver.com" },
  { id: "youtube", title: "YouTube", url: "https://www.youtube.com" },
];
