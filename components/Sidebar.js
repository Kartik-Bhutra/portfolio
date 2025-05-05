import Image from "next/image";
import Me from "@/public/Kartik_Bhutra.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-full h-full">
      {/* sidebar */}
      <div className="flex flex-col items-center w-full">
        {/* top section */}
        <div className="flex h-40 justify-center items-center">
          <div className="w-3/6 bg-green-200">
            <Image src={Me} alt="kartik bhutra" className="rounded-2xl" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl">Kartik Bhutra</h1>
        </div>
        <div>
          <p className="text-center">Indian Institute of Technology Goa</p>
          <p className="text-center">Btech, 2SY, MnC</p>
        </div>
      </div>
      <div className="w-full h-1 bg-black"></div>
    </aside>
  );
}
