import Image from "next/image";
import CSS from "./tracks.module.css";
import expo from "../assets/expo-mark.png";
import line from "../assets/midline.png";
import line2 from "../assets/midlinem.png";

function Tracks2() {
  return (
    <>
      <div className={CSS.background}>
        
        <div className="py-12 lg:py-0 mx-auto my-auto h-[80%] w-[80%] lg:w-[80%] xl:w-[60%] sm:w-[60%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center ">
          <div className="my-auto mx-0.5 lg:mx-12 text-center">
            <h1 className="text-[#FF7A00] text-4xl lg:text-6xl">
              RENEWABLE ENERGY AND SUSTAINABILITY
            </h1>
          </div>

          <Image
            src={line}
            alt="line"
            quality={100}
            className="my-10 hidden lg:flex"
            height={350}
          />
          <Image
            src={line2}
            quality={100}
            width={350}
            alt="line"
            className="mx-auto flex lg:hidden py-7"
          />

          <div className="text-justify my-auto mx-12 lg:mx-12 text-xl">
            Embark on a journey through the frontiers of sustainable technology.
            Pioneering projects that harness the Earth&apos;s renewable resources
            like solar and wind, and engineer eco-conscious solutions to address
            global sustainability challenges, reflecting our commitment to a
            greener future.
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Tracks2;
