import Image from "next/image";
import Me from "@/public/Kartik_Bhutra.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-full h-full justify-around bg-[#1e1e1e] rounded-2xl p-4 shadow-lg text-[#e5e5e5]">
      <div className="flex flex-col items-center w-full justify-around h-1/2">
        <div className="flex h-40 justify-center items-center">
          <div className="w-3/6">
            <Image src={Me} alt="kartik bhutra" className="rounded-2xl" />
          </div>
        </div>
        <div className="text-3xl font-bold mt-2">Kartik Bhutra</div>
        <div className="text-center text-sm text-[#a3a3a3]">
          <p>Indian Institute of Technology Goa</p>
          <p>BTech, 2nd Year</p>
          <p>Mathematics and Computing</p>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#333] my-2"></div>

      <div className="flex flex-col gap-4 items-start px-2">
        <div className="flex gap-2 items-center">
          <i className="fa-solid fa-envelope text-yellow-400"></i>
          <p className="text-sm">kartik.bhutra.23033@iitgoa.ac.in</p>
        </div>
        <div className="flex gap-2 items-center">
          <i className="fa-solid fa-mobile text-yellow-400"></i>
          <p className="text-sm">+91 810-777-8231</p>
        </div>
        <div className="flex gap-2 items-center">
          <i className="fa-solid fa-location-dot text-yellow-400"></i>
          <p className="text-sm">Jodhpur, Rajasthan</p>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-4 text-2xl text-yellow-400">
        <i className="fa-brands fa-linkedin hover:text-white transition-all duration-300"></i>
        <i className="fa-brands fa-github hover:text-white transition-all duration-300"></i>
      </div>
    </aside>
  );
}
