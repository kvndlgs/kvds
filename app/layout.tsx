import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { WebSite, WithContext } from "schema-dts";
import { USER } from "@/features/profile/data/user";
import { SITE_INFO } from "@/config/site";
import "./globals.css";
import Nav from "@/components/nav";
import NavWrapper from "@/components/NavWrapper";

function getWebsiteJsonLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_INFO.name,
    url: SITE_INFO.url,
    description: SITE_INFO.description,
    alternateName: [USER.username],
  };
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: "/",
  },
  title: {
    template: `%s - ${SITE_INFO.name}`,
    default: `${SITE_INFO.name} - ${USER.jobTitle}`,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: SITE_INFO.name,
      url: SITE_INFO.url,
    },
  ],
  creator: "kvds",
  openGraph: {
    title: SITE_INFO.name,
    description: SITE_INFO.description,
    url: SITE_INFO.url,
    siteName: SITE_INFO.name,
    images: [
      {
        url: `${SITE_INFO.url}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kvds",
    creator: "@kvds",
    title: SITE_INFO.name,
    description: SITE_INFO.description,
    images: [
      {
        url: `${SITE_INFO.url}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = getWebsiteJsonLd();

  return (
    <html lang="en" className="overflow-x-hidden" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`antialiased overflow-x-hidden`}>
        <NavWrapper>
          <Nav />
          {children}
        </NavWrapper>
      </body>
      <GoogleAnalytics gaId={`${process.env.GA_MEASUREMENT_ID}`} />
    </html>
  );
}
