import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Cash Counting",
  description: "End of day cash counting made for Sushi Sushi.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={roboto.className}>{children}</body>
      </html>
    </AuthProvider>
  );
}
