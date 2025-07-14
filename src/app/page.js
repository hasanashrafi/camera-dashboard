import CamerasPage from "@/components/CamerasPage";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";


export default function Home() {
  return (
    <main className="flex flex-col  min-h-screen mx-auto gap-x-3 items-center max-w-7xl justify-center p-5  ">
          <NavBar />
      <div className="md:flex items-center w-full">
        <div className=" bg-stale-600   w-full font-mono  ">
          <CamerasPage />
        </div>
        <SideBar />
      </div>

    </main>
  );
}
