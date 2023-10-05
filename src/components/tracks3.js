import Image from "next/image";
import CSS from "./tracks.module.css";
import expo from "../assets/expo-mark.png";
import line from "../assets/midline.png";
import line2 from "../assets/midlinem.png";

function Tracks3() {
  return (
    <>
      <div className={CSS.background}>
        <div className="mx-10 text-white md:mx-20 text-lg sm:text-4xl font-[600] py-10 mb-12">
          TRACKS
        </div>
        <div className="py-12 lg:py-0 lg:pr-8 mx-auto my-auto h-[80%] w-[80%] lg:w-[80%] xl:w-[60%] sm:w-[60%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center ">
          <div className="my-auto mx-2 md:mx-8 lg:mx-24 text-center">
            <h1 className="text-[#FF7A00] text-6xl">
              EMBEDDED SYSTEMS AND IoT
            </h1>
          </div>

          <Image
            src={line}
            quality={100}
            className="my-10 hidden lg:flex"
            alt="line"
            height={350}
          />
          <Image
            src={line2}
            quality={100}
            alt="line"
            width={350}
            className="mx-auto flex lg:hidden py-7"
          />

          <div className="text-justify my-auto mx-12 lg:mx-12 text-xl pb-10 lg:pb-0">
            Step into the world of Embedded Systems and the Internet of Things
            (IoT) where innovation meets connectivity. Forge smart devices and
            interconnected systems that redefine convenience, efficiency, and
            connectivity, illustrating our dedication to the digital evolution
            of daily life.
          </div>
        </div>
        <div className="w-full flex justify-center md:justify-end px-24 py-12 mt-10 lg:mt-20">
          <Image src={expo} alt="expo-mark" quality={100} />
        </div>
      </div>
    </>
  );
}

export default Tracks3;
