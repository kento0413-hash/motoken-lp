import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Zen_Kaku_Gothic_New, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-zen",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const siteUrl = "https://motoken-studio.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF9F6",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "MOTOKEN | 誰もが主役になる\u201C最高のショー\u201Dを。",
  description:
    "元お笑い芸人。Disney Worldのキャスト。上場企業でAI事業12年。——この男が今、AIで\u201C熱狂\u201Dを創る理由。AI映像・MV制作・エバンジェリスト登壇。",
  keywords: [
    "MOTOKEN",
    "AI Artist",
    "AI映像",
    "AIアーティスト",
    "AI Video Art",
    "AI Business",
    "MV制作",
    "エバンジェリスト",
    "Disney",
    "お笑い芸人",
  ],
  authors: [{ name: "MOTOKEN" }],
  creator: "MOTOKEN",
  openGraph: {
    title: "MOTOKEN | 誰もが主役になる\u201C最高のショー\u201Dを。",
    description:
      "元お笑い芸人。Disney Worldのキャスト。上場企業でAI事業12年。——この男が今、AIで\u201C熱狂\u201Dを創る理由。",
    url: siteUrl,
    siteName: "MOTOKEN",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOTOKEN | 誰もが主役になる\u201C最高のショー\u201Dを。",
    description:
      "元お笑い芸人。Disney Worldのキャスト。上場企業でAI事業12年。——この男が今、AIで\u201C熱狂\u201Dを創る理由。",
    creator: "@naturemotoken",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "MOTOKEN",
  url: siteUrl,
  jobTitle: "AI Artist / AI Business",
  description:
    "元お笑い芸人→Disney World→AI事業12年。テクノロジーに体温を宿し、誰もが主役になる最高のショーを創る。",
  sameAs: [
    "https://www.youtube.com/@naturemotoken",
    "https://www.tiktok.com/@naturemotoken",
    "https://www.instagram.com/naturemotoken",
    "https://twitter.com/naturemotoken",
    "https://lit.link/naturemotoken",
  ],
  knowsAbout: [
    "AI Video Art",
    "AI Business Strategy",
    "Immersive Video",
    "Music Video Production",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${spaceGrotesk.variable} ${zenKaku.variable} ${cormorant.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
