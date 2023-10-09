import Image from "next/image";
import CSS from "./tracks.module.css";
import trackl from "./../assets/trackslf.png";
import tracksm from "./../assets/tracksm.png";
import expo from "../assets/expo-mark.png";
import Link from "next/link";

function Tracks() {
  return (
    <>
      <div className={CSS.background}>
        <div className="mx-10 text-white md:mx-20 text-lg sm:text-4xl font-[600] py-6">
          TRACKS
        </div>
        <div className="ml-1 hidden lg:flex">
          <Image
            src={trackl}
            quality={100}
            width={1300}
            className="mx-auto"
            alt="chart"
          />
        </div>
        <Link href="/trackdetails">
          <div className="flex justify-center">
            <button className="rounded text-white border-[3px] md:text-2xl sm:text-5xl border-white text-xl 2xl:text-3xl w-fit px-4 py-1 mt-8 hover:bg-orange-500 hover:border-orange-500 hover:text-white">
              VIEW TRACK DETAILS
            </button>
          </div>
        </Link>

        <div className="ml-3 sm:ml-4 lg:hidden flex">
          <Image src={tracksm} quality={100} className="mx-auto" alt="chart" />
        </div>
        <div className="w-full flex justify-center md:justify-end px-24 py-12">
          <Image src={expo} alt="expo-mark" quality={100} />
        </div>
      </div>
    </>
  );
}

export default Tracks;
