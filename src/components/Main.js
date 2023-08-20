import Image from "next/image";
import logo from "../assets/logo-icon.svg";
import register from "../assets/register-icon.svg";
import title from "../assets/title-combine.png";
import CSS from "./Main.module.css";

const Main = () => {
  return (
    <>
      <div className={CSS.background}>
        <div className="flex justify-between items-center w-full pt-6">
          <div className="flex justify-between items-center felx mx-4 ml-5 sm:ml-20 sm:max-w-md w-[300px]">
            <Image
              className="felx sm:w-[52px] w-[38px]"
              src={logo}
              alt="logo"
            />
            <span className="felx uppercase sm:text-sm text-[8px] mx-3 sm:mx-5">
              International Conference on Emerging Trends in Information
              Technology and Engineering{" "}
              <span className="text-[#FF7A00]">TECHNEXT EXPO 2024</span>
            </span>
          </div>
          <div className="text-center flex flex-wrap justify-end items-center mr-4">
            <div className="flex mx-[10px]">
              <a
                href="/input_page"
                className="uppercase p-2 sm:text-xl text-[10px] hover:text-gray-300 active:text-white"
              >
                Register Now
              </a>
              <Image
                className="sm:w-[20px] w-[15px]"
                src={register}
                alt="register"
              />
            </div>
            <a
              href="/input_page"
              className="uppercase mx-[15px] my-1 sm:mx-[30px] px-2 sm:px-5 py-1 sm:py-2 sm:text-xl text-[10px] bg-[#FF7A00] sm:rounded-lg rounded-md hover:bg-[#ff9837] hover:text-white hover:font-[400] active:bg-[#FF7A00] xl:block hidden"
            >
              Download Brochure
            </a>
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
          <a
            href="/input_page"
            className="uppercase px-4 py-1.5 sm:py-2 sm:text-lg text-[10px] bg-[#FF7A00] sm:rounded-lg rounded-md hover:bg-[#ff9837] hover:text-white hover:font-[400] active:bg-[#FF7A00]"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </>
  );
};
export default Main;
