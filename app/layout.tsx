import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import 'react-datepicker/dist/react-datepicker.css'
import { Toaster } from "@/components/ui/toaster";
import '@stream-io/video-react-sdk/dist/css/styles.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ColabSpace",
  description: "Space for colabaration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`${inter.className} bg-dark-2`}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
