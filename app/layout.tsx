import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl = "https://motoken.studio";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF9F6",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "MOTOKEN | AI Artist — 冷たい画面の向こうに、熱狂を。",
  description:
    "MOTOKEN — AI Artist / AI Business。冷たい画面の向こう側に、熱狂のステージを創る。没入映像・MV制作・AIビジネス登壇。12年以上のAI事業推進経験。",
  keywords: [
    "MOTOKEN",
    "AI Artist",
    "AI映像",
    "没入映像",
    "AIアーティスト",
    "AI Video Art",
    "AI Business",
    "MV制作",
    "エバンジェリスト",
  ],
  authors: [{ name: "MOTOKEN" }],
  creator: "MOTOKEN",
  openGraph: {
    title: "MOTOKEN | AI Artist — 冷たい画面の向こうに、熱狂を。",
    description:
      "冷たい画面の向こう側に、熱狂のステージを創る。没入映像・MV制作・AIビジネス登壇。",
    url: siteUrl,
    siteName: "MOTOKEN",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOTOKEN | AI Artist",
    description: "冷たい画面の向こう側に、熱狂のステージを創る。",
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
    "冷たい画面の向こう側に、熱狂のステージを創る。AI×創作×事業を融合するAIアーティスト。",
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
      className={`${inter.variable} ${notoSansJP.variable} ${playfairDisplay.variable}`}
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
