import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import Navbar02Page from "@/features/navbar/navbar-02/navbar-02";

const notoSansBengali = Noto_Sans_Bengali({
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-bengali",
  subsets: ["bengali"],
});

export const metadata: Metadata = {
  title: "Sub Module",
  description: "Sub Module",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={notoSansBengali.variable}
      suppressHydrationWarning
    >
      <body className={`${notoSansBengali.className} antialiased`}>
        <Providers>
          <Navbar02Page />

          {children}
        </Providers>
      </body>
    </html>
  );
}
