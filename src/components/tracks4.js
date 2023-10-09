import Image from "next/image";
import CSS from "./tracks.module.css";
import expo from "../assets/expo-mark.png";
import line from "../assets/midline.png";
import line2 from "../assets/midlinem.png";

function Tracks4() {
  return (
    <>
      <div className={CSS.background}>
        
        <div className="py-12 lg:py-0 lg:pr-8 mx-auto my-auto h-[80%] w-[80%] lg:w-[80%] xl:w-[60%] sm:w-[60%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center ">
          <div className="my-auto mx-2 md:mx-8 lg:mx-24 text-center">
            <h1 className="text-[#FF7A00] text-4xl lg:text-6xl">ROBOTICS AND AUTOMATION</h1>
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
            width={350}
            className="mx-auto flex lg:hidden py-7"
            alt="line"
          />

          <div className="text-justify my-auto mx-12 lg:mx-12 text-xl pb-10 lg:pb-0">
            Venture into the exciting universe of Robotics and Automation, where
            technology meets autonomy. Construct mechanical marvels and
            automated solutions that revolutionize industries, optimize
            processes, and entertain with cutting-edge sophistication.
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Tracks4;
