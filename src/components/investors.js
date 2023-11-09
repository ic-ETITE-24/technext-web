import Image from "next/image";
import CSS from "./investors.module.css";
import expo from "../assets/expo-mark.png";
import inv1 from "../assets/inv1new.png";
import inv2 from "../assets/inv2new.png";
import { TbWorld } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function Investors() {
  return (
    <>
      <div className={CSS.background}>
        <div className="mx-10 text-white md:mx-20 text-lg sm:text-4xl font-[600] py-2 pb-6">
          OUR INVESTMENT PARTNERS
        </div>
        <div className="flex flex-col justify-center lg:flex-row gap-y-4 lg:mt-20">
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
        </div>
        <div className="w-full flex md:justify-end justify-center px-24 pb-10 mt-14 lg:mt-32">
          <Image src={expo} alt="expo-mark" quality={100} />
        </div>
      </div>
    </>
  );
}

export default Investors;
