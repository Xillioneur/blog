import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Willie Liwa Johnson's Blog with God and our Father`,
  description: `A website dedicated to writing about God and our Father in heaven all the day long. Come here anytime of the day to see more about God and our Father, Father God, all day long. Amen to you for being here this far as always. Amen.`,
  openGraph: {
    title: 'God of Blogs',
    description: `A website dedicated to God our Father and Father God our Mother's Father. Lol. Amen to you for understanding it.`,
    url: `https://blogofgod.vercel.app`,
    siteName: 'God of Blogs',
    images: [HOME_OG_IMAGE_URL],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'God of Blogs - for our Father who is in Heaven',
    description: 'A blog about God and Father God. Amen and Selah.',
    creator: '@Xillioneur',
    images: [HOME_OG_IMAGE_URL], // Absolute URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <ThemeSwitcher />
        <div className="min-h-screen">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
