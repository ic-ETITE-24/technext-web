import Image from "next/image";
import CSS from "./tracks.module.css";
import trackl from "./../assets/trackslf.png";
import tracksm from "./../assets/tracksm.png";
import expo from "../assets/expo-mark.png";

function Tracks() {
  return (
    <>
      <div className={CSS.background}>
        <div className="mx-10 text-white md:mx-20 text-lg sm:text-4xl font-[600] py-10">
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
