"use client";
import { useTitle } from "@/context/PageTitle";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function MainLayout({ children }) {
  const { title } = useTitle();
  return (
    <html lang="en">
      <body>
        <div className="flex w-full h-screen justify-center items-center flex-col bg-[#121212] text-[#e5e5e5]">
          {/* top spacing */}
          <div className="h-6 w-11/12"></div>

          {/* content container */}
          <div className="w-11/12 flex justify-around h-full items-center gap-4">
            {/* Sidebar */}
            <div className="w-1/5 h-5/6">
              <Sidebar />
            </div>

            {/* Main Section */}
            <div className="w-4/5 h-full bg-[#1e1e1e] rounded-xl shadow-lg">
              {/* Navbar + Title */}
              <div className="flex justify-between w-full h-1/8 items-center">
                <div className="flex w-1/3 justify-center h-full items-end">
                  <div className="text-4xl font-bold">{title}</div>
                </div>
                <div className="w-2/3 h-full">
                  <Navbar />
                </div>
              </div>

              {/* Content goes here */}
              <div className="px-10 py-6 text-base leading-relaxed text-[#a3a3a3]">
                {children}
              </div>
            </div>
          </div>

          {/* bottom spacing */}
          <div className="h-6 w-11/12"></div>
        </div>
      </body>
    </html>
  );
}
