import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Grocery Admin Panel",
  description: "Grocery Admin Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="mainWrapper flex">
        <div className="sidebarWrapper w-[18%] min-h-screen bg-white border-r border-[rgba(0,0,0,0.1)] shadow-md">
          <Sidebar />
        </div>
       <div className="mainContent w-[82%]">
        <Header />
        {children}  
       </div>   
      </div>       
      </body>
    </html>
  );
}
