import Image from "next/image";
import CSS from "./Main.module.css";
import expo from "../assets/expo-mark.png";

const Prizes = () => {
  return (
    <>
      <div className={`${CSS.background} text-white`}>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl font-[600] py-10">
          PRIZES
        </div>
        <div className="md:mx-20 mx-10">
          <div className="uppercase flex justify-evenly items-center rounded-2xl bg-white bg-opacity-[0.16] backdrop-blur-md min-h-[300px] flex-wrap xl:flex-nowrap">
            <div className="flex justify-start items-center w-[690px] mx-10 flex-wrap xl:flex-nowrap">
              <div className="xl:text-[100px] md:text-[50px] sm:text-[40px] text-[30px] font-semibold">
                INVESTOR&apos;S <span className="text-[#FF7A00]">CHOICE</span>
              </div>
              {/* <div className="xl:text-[38px] md:text-[32px] sm:text-[30px] text-[20px] sm:leading-10 leading-6 xl:px-5 px-0 font-medium">
                <span className="text-[#FF7A00]">Hardware</span> &{" "}
                <span className="text-[#FF7A00]">software</span> Projects
              </div> */}
            </div>
            <div className="bg-white bg-opacity-85 w-[3px] h-[250px] rounded-full hidden xl:block"></div>
            <div className="flex xl:justify-center md:justify-around justify-start flex-wrap xl:w-[650px] md:mx-3 mx-10">
              <div className="flex justify-center items-center lg:mx-3 mx-0">
                <div className="xl:text-[105px] md:text-[70px] sm:text-[70px] text-[30px] font-semibold text-[#FF7A00]">
                  1
                </div>
                <div className="xl:text-[40px] md:text-[28px] sm:text-[32px] text-[15px] xl:leading-[44px] md:leading-8 px-5 w-[150px] font-medium">
                  FIRST WINNER
                </div>
              </div>
              <div className="flex justify-center items-center lg:mx-8 mx-0">
                <div className="xl:text-[105px] md:text-[70px] sm:text-[70px] text-[30px] font-semibold xl:ml-14 text-[#FF7A00]">
                  2
                </div>
                <div className="xl:text-[40px] md:text-[28px] sm:text-[32px] text-[15px] xl:leading-[44px] md:leading-8 px-5 w-[150px] font-medium">
                  SECOND WINNER
                </div>
              </div>
              <div className="flex justify-center items-center lg:mx-3 mx-0">
                <div className="xl:text-[105px] md:text-[70px] sm:text-[70px] text-[30px] font-semibold text-[#FF7A00]">
                  3
                </div>
                <div className="xl:text-[40px] md:text-[28px] sm:text-[32px] text-[15px] xl:leading-[44px] md:leading-8 px-5 w-[150px] font-medium">
                  THIRD WINNER
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:justify-around md:gap-40 justify-start items-center flex-wrap sm:flex-nowrap my-7">
            <div className="flex justify-center items-center  md:w-[400px] sm:w-[200px]">
              <div className="xl:text-[170px] lg:text-[150px] md:text-[70px] sm:text-[50px] text-[40px] font-semibold">
                <span className="text-[#FF7A00] pr-2">4</span>
              </div>
              <div className="xl:text-[75px] lg:text-[55px] md:text-[30px] sm:text-[25px] text-[20px] font-semibold lg:leading-[70px] md:leading-8 sm:leading-6 md:w-[200px] sm:w-[200px]">
                WINNING POSITIONS
              </div>
            </div>
            <div className="uppercase xl:text-5xl lg:text-3xl md:text-xl sm:text-md md:text-right font-medium xl:w-[700px] md:w-[500px]">
              Amazing CASH PRIZE POOL OF OVER <span className="text-[#FF7A00] xl:text-7xl lg:text-5xl md:text-3xl sm:text-2xl">₹1 LAKH</span>, PLUS{" "}
              <span className="text-[#FF7A00]">
                Selection* from partnering Angel Investor
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row sm:pt-56 pt-10 justify-center md:pt-20 lg:pt-0 lg:w-full pb-6">
          <div className="flex bdcn justify-center text-center md:text-left text-white pt-9 md:pl-12 lg:pl-10 xl:pl-14 2xl:pl-20 xl:pr-40 md:text-base text-xs opacity-30 py-4 sm:py-0 md:w-full">
            *offer benefits such as advisory, business development, corporate
            connections, access to industry experts, mentorship and/or
            investment for further development
          </div>
          <div className="w-full flex justify-center md:justify-end md:px-24 2xl:pr-24">
            <Image src={expo} alt="expo-mark" quality={100} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Prizes;
