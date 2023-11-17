
import Image from "next/image";
import logo from "../assets/logo-icon.svg";
import logo1 from "../assets/startup_india1.svg";
import register from "../assets/register-icon.svg";
import title from "../assets/title-combine.png";
import CSS from "./Main.module.css";
import Link from "next/link";
import { IoMdExit } from "react-icons/io";
import checkout from "./../assets/checkout.png";

const Main = () => {
  return (
    <>
      <div className={`${CSS.background} text-white`}>
        <div className="flex justify-between items-center w-full pt-6">
          <div className="flex justify-between items-center felx mx-4 sm:ml-4 sm:w-[450px] w-[300px]">
            <Image
              className="felx sm:w-[52px] w-[38px]"
              src={logo}
              alt="logo"
            />
            <span className="ham felx uppercase sm:text-sm text-[8px] mx-3 sm:mx-5">
              Second International Conference on Emerging Trends in Information
              Technology and Engineering{" "}
              <span className="text-[#FF7A00]">TECHNEXT EXPO 2024</span>
            </span>
          </div>
          <div className="flex justify-center items-center felx mx-4 sm:ml-20 sm:w-[450px] w-[300px]">
            <Image
              className="felx sm:w-[250px] w-[100px]"
              src={logo1}
              alt="logo1"
            />
          </div>
          <div className="text-center flex flex-wrap justify-end items-center mr-4">
            <div className="mx-[10px]">
              <Link href="https://drive.google.com/file/d/1XP9x3H4hHvw87s9_bXkKb68TWE_zXpgr/view?usp=sharing" className="flex flex-row">
                <div className="uppercase p-2 sm:text-xl text-[10px] hover:text-gray-300 active:text-white">
                Download Brochure
                </div>
                
              </Link>
            </div>
            <Link
              href="/portal/register"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase mx-[15px] my-1 sm:mx-[30px] px-2 sm:px-5 py-1 sm:py-2 sm:text-xl text-[10px] bg-[#FF7A00] sm:rounded-lg rounded-md hover:bg-[#ff9837] hover:text-white hover:font-[400] active:bg-[#FF7A00] xl:flex hidden items-center gap-x-2"
            >
              <span className="ham">register now</span>
              <IoMdExit />
            </Link>
          </div>
        </div>
        <div className="flex justify-center sm:items-center items-start md:py-[100px] py-[180px]">
          <Image
            className="flex mt-1 w-[90%] md:w-2/3 sm:w-[80%]"
            src={title}
            alt="title"
            quality={100}
          />
        </div>
        <div className="flex justify-center xl:hidden mb-4">
        <button
                className="bg-orange-500 rounded text-white text-sm sm:text-xl md:text-xl 2xl:text-3xl w-fit px-5 py-1"
                disabled
              >
                <Link href="/portal/register" className="flex flex-row items-center">
                  REGISTER NOW
                  <span>
                    <Image
                      className="sm:w-[20px] w-[15px] ml-2"
                      src={checkout}
                      alt="register"
                    />
                  </span>
                </Link>
              </button>
        </div>
      </div>
    </>
  );
};
export default Main;
