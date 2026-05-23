import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import "../styles/globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Shivansh Garg — The Silicon Canvas",
  description: "Systems Engineer & Visual Architect Portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${syne.variable}`}>
      <body className="bg-[#080809] text-[#FAF9F6] antialiased overflow-hidden">
        {children}
      </body>
    </html>
  );
}
