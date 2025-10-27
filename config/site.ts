import { USER } from "@/features/profile/data/user";
import { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://kvds.space",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const MAIN_NAV: NavItem[] = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export const GITHUB_USERNAME = "kvndlgs";
export const SOURCE_CODE_GITHUB_REPO = "kvndlgs/kvds";
export const SOURCE_CODE_GITHUB_URL = `https://github.com/kvndlgs/kvds`;

export const UTM_PARAMS = {
  utm_source: "kvds.space",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
