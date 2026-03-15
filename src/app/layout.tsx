import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Claude Code Edu — AI 시대 전문직의 새로운 무기",
    template: "%s | Claude Code Edu",
  },
  description:
    "비개발자 전문직을 위한 Claude Code 실무 활용 가이드. 노무사, 변호사, 회계사, 세무사를 위한 47개 강의.",
  keywords: ["Claude Code", "AI", "전문직", "노무사", "업무 자동화", "Claude"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
