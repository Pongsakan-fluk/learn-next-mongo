import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//Components
import Navbar from "@/components/head/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-slate-100 flex flex-col min-h-screen">
          <Navbar />

          <main className="flex justify-center w-full mt-5 rounded-t-[50px] bg-white grow">
            {children}
          </main>

          <footer className="p-5 bg-green-200 rounded-t-[25px]">
            <h2 className="text-center text-white">Footer</h2>
          </footer>
        </div>
      </body>
    </html>
  );
}
