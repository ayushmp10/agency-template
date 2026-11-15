import type { Metadata } from "next";
import "./globals.css";

// Each concept page loads its own fonts and colors from its DESIGN.md.
export const metadata: Metadata = {
  title: "Apex Digital",
  description: "Website concepts for local businesses by Apex Digital.",
  // Concept previews are private sales demos; keep them out of search results.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
