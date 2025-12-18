import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "نظام الإشعارات",
  description: "نظام إدارة الإشعارات",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body >
          {children}
          <Toaster />
      </body>
    </html>
  );
}
