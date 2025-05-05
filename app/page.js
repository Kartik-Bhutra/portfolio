import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="flex w-full h-screen justify-center items-center flex-col">
        {/* main container */}
        <div className="h-1/15 w-9/10"></div>
        {/* top seperation */}
        <div className="w-9/10 flex justify-around h-full items-center gap-4">
          {/* content container */}
          <div className="w-1/5 bg-blue-200 h-9/11 rounded-2xl">
            {/* Sidebar container */}
            <Sidebar />
          </div>
          <div className="w-4/5 bg-blue-400 h-full rounded-2xl">
            {/* page container */}
            <div className="flex justify-between w-full h-1/10 items-center">
              {/* title container */}
              <div className="h-full w-1/5 flex justify-center items-end text-5xl">
                <h1>Title</h1>
              </div>
              <div className="h-full w-3/5  bg-red-200 rounded-tr-2xl rounded-bl-2xl">
                {/* navbar */}
                <Navbar />
              </div>
            </div>
            <div>
              {/* main section */}
            </div>
          </div>
        </div>
        {/* down seperation */}
        <div className="h-1/15 w-9/10"></div>
      </div>
    </>
  );
}
