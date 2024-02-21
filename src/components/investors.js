import Image from "next/image";
import CSS from "./investors.module.css";
import expo from "../assets/expo-mark.png";
import inv1 from "../assets/inv1new.png";
import inv2 from "../assets/inv2new.png";
import inv3 from "../assets/investor3.png";
import inv4 from "../assets/314cap.png";
import inv3title from "../assets/java-capital.svg";
import { TbWorld } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import shiju from "../assets/shiju.jpg";
import { useEffect, useState } from "react";

function Investors() {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    const handleVisibility = () => {
      setIsSmallScreen(window.innerWidth < 1064);
    };

    handleVisibility();

    window.addEventListener("resize", handleVisibility);

    return () => {
      window.removeEventListener("resize", handleVisibility);
    };
  }, []);
  return (
    <>
      <div className={CSS.background}>
        <div className="mx-10 text-white md:mx-20 text-lg sm:text-4xl font-[600] py-2 pb-6">
          OUR INVESTMENT PARTNERS
        </div>
        <div className="flex flex-col gap-5">
          {!isSmallScreen && (
            <div className="mx-auto my-auto h-[100%] w-[90%] lg:w-[30%] sm:w-[80%] rounded-md backdrop-blur-md backdrop-brightness-125 lg:mt-5 ">

                <div className="flex flex-col justify-center items-center py-6 gap-10 text-lg llg:text-5xl lg:text-4xl xl1:text-3xl">
                  <h1 className="self-center text-center text-white/80 flex items-center gap-x-4">
                    SHIJU BABU
                    <span>
                      <Link href="https://www.linkedin.com/in/shiju-babu-92401b146/?originalSubdomain=in">
                        <FaLinkedin className="stroke-white/25" size={45} />
                      </Link>
                    </span>
                  </h1>
                  <div className=" text-white font-[800px] text-justify ">
                    <span className="text-[#FF7A00]">START UP</span> INDIA
                    MENTOR
                  </div>
                </div>

            </div>
          )}
          <div className="flex flex-col justify-center lg:flex-row lg:flex-wrap gap-y-4 lg:mt-10">
            <div className="mx-auto my-auto h-[40%] w-[80%] lg:w-[35%] sm:w-[60%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125">
              <div className="flex flex-col justify-center">
                <Image
                  src={inv1}
                  alt="investor1"
                  quality={100}
                  height={300}
                  width={300}
                  className="self-center"
                />
                <h1 className="self-center text-center text-white/50 lg:text-2xl">
                  EAGLEWINGS VENTURE SERVICES PVT. LTD.
                </h1>
                <div className="self-center flex justify-center gap-x-4 py-4 text-white">
                  <Link href="https://www.linkedin.com/company/eagle-wings-ventures/about/">
                    <FaLinkedin className="stroke-white/25" size={25} />
                  </Link>
                  <Link href="https://eaglewings.vc/">
                    <TbWorld className="stroke-white/25" size={25} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mx-auto my-auto h-[40%] w-[80%] lg:w-[35%] sm:w-[60%] rounded-md pb-5 backdrop-blur-md backdrop-brightness-125">
              <div className="flex flex-col justify-center">
                <Image
                  src={inv2}
                  alt="investor1"
                  quality={100}
                  height={270}
                  width={270}
                  className="self-center"
                />
                <h1 className="self-center text-white/50 lg:text-2xl">
                  SEED VC INNOVATION LTD.
                </h1>
                <div className="self-center flex justify-center gap-x-4 py-3.5 text-white">
                  <Link href="https://www.linkedin.com/company/seedvc-innovationcapital-fund/">
                    <FaLinkedin className="stroke-white/25" size={25} />
                  </Link>
                  <Link href="https://www.seedvc.me/">
                    <TbWorld className="stroke-white/25" size={25} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mx-auto my-auto h-[40%] w-[80%] lg:w-[35%] sm:w-[60%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 lg:mt-10">
              <div className="flex flex-col justify-center">
                <Image
                  src={inv3}
                  alt="investor3"
                  quality={100}
                  height={300}
                  width={120}
                  className="self-center py-16 mt-4"
                />
                <h1 className="self-center text-center text-white/50 lg:text-2xl">
                  JAVA CAPITAL
                </h1>
                <div className="self-center flex justify-center gap-x-4 py-4 text-white">
                  <Link href="https://www.linkedin.com/company/javacapital/">
                    <FaLinkedin className="stroke-white/25" size={25} />
                  </Link>
                  <Link href="https://www.javacapital.co/">
                    <TbWorld className="stroke-white/25" size={25} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="mx-auto my-auto h-[40%] w-[80%] lg:w-[35%] sm:w-[60%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 lg:mt-10">
              <div className="flex flex-col justify-center">
                <Image
                  src={inv4}
                  alt="investor4"
                  quality={100}
                  height={300}
                  width={350}
                  className="self-center py-16 mt-4"
                />
                <h1 className="self-center text-center text-white/50 lg:text-2xl">
                  3ONE4 CAPITAL
                </h1>
                <div className="self-center flex justify-center gap-x-4 py-4 text-white">
                  <Link href="https://www.linkedin.com/company/3one4-capital/">
                    <FaLinkedin className="stroke-white/25" size={25} />
                  </Link>
                  <Link href="https://www.3one4capital.com/">
                    <TbWorld className="stroke-white/25" size={25} />
                  </Link>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        <div className="w-full flex md:justify-end justify-center px-24 pb-10 mt-14 lg:mt-24">
          <Image src={expo} alt="expo-mark" quality={100} />
        </div>
      </div>
    </>
  );
}

export default Investors;
