import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./context/AuthProvider";
import Sidebar from "./components/navigation/Sidebar";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Immo Soft",
  description: "Plateforme de gestion immobilière",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*       <body
        className="bg-primary text-third sm:mx-40 h-screen flex flex-col justify-between"
        suppressHydrationWarning={true}
      >
        <AuthProvider>
          <div className="h-full flex">
            <div className="max-md:hidden w-1/4 h-full">
              <Sidebar />
            </div>
            <div className="bg-secondary w-full my-2 rounded-lg p-2">
              {children}
            </div>
          </div>
          <Footer />
        </AuthProvider>
      </body> */}
      <body
        suppressHydrationWarning={true}
        className="bg-primary text-white flex max-w-[1920px] mx-auto"
      >
        <AuthProvider>
          {" "}
          <div className="flex-1 bg-secondary p-5 min-h-screen max-lg:hidden">
            <Sidebar />
          </div>
          <div className="flex-[4_4_0%] md:p-5 flex flex-col justify-between h-screen ">
            <Navbar />
            {children}
            {/*             <div className="h-full flex items-end">
             */}{" "}
            <Toaster richColors />
            <Footer />
            {/*             </div>
             */}{" "}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
