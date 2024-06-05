import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WagmiProviderComp from "@/config/wagmi";
import ReactToastComp from "@/lib/react-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next NFT",
  description: "Upload your NFT today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="DAR">
      <body className={inter.className}>
        <WagmiProviderComp>
          <ReactToastComp>
            <main className="bg-[#0e0e0e] text-primary min-h-[100vh]">
              <Navbar />
              {children}
              <Footer />
            </main>
          </ReactToastComp>
        </WagmiProviderComp>
      </body>
    </html>
  );
}
