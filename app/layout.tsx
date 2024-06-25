import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";
import "./index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "chaford.org",
   description: "charity for development non profit organisation | organisation sans but lucratif",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
   return (
      <html lang="en" >
         <body className={inter.className}>
            <Layout>
               {children}
            </Layout>
         </body>
      </html >
   );
}
