import type { MetadataRoute } from "next";
import { getSortedProjectsData } from "@/lib/projects";
import { SITE_INFO } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getSortedProjectsData().map((project) => ({
    url: `${SITE_INFO.url}/works/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const routes = [
    {
      url: `${SITE_INFO.url}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    // Uncomment when blog is ready
    // {
    //   url: `${SITE_INFO.url}/blog`,
    //   lastModified: new Date().toISOString(),
    //   changeFrequency: "weekly" as const,
    //   priority: 0.9,
    // },
  ];

  return [...routes, ...projects];
}
