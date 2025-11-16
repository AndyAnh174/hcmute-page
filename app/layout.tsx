import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trường Đại học Sư phạm Kỹ thuật TP.HCM - HCMUTE",
  description:
    "Trường Đại học Sư phạm Kỹ thuật TP.HCM - Đào tạo nguồn nhân lực chất lượng cao trong lĩnh vực kỹ thuật và công nghệ",
  icons: {
    icon: "/logo/square_logo.png",
    shortcut: "/logo/square_logo.png",
    apple: "/logo/square_logo.png",
  },
  openGraph: {
    title: "Trường Đại học Sư phạm Kỹ thuật TP.HCM - HCMUTE",
    description:
      "Trường Đại học Sư phạm Kỹ thuật TP.HCM - Đào tạo nguồn nhân lực chất lượng cao trong lĩnh vực kỹ thuật và công nghệ",
    images: [
      {
        url: "/logo/square_logo.png",
        width: 1200,
        height: 630,
        alt: "HCMUTE Logo",
      },
    ],
    type: "website",
    locale: "vi_VN",
    siteName: "HCMUTE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trường Đại học Sư phạm Kỹ thuật TP.HCM - HCMUTE",
    description:
      "Trường Đại học Sư phạm Kỹ thuật TP.HCM - Đào tạo nguồn nhân lực chất lượng cao trong lĩnh vực kỹ thuật và công nghệ",
    images: ["/logo/square_logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  antialiased`}>{children}</body>
    </html>
  );
}
