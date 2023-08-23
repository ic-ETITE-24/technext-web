import CSS from "./AboutEvent.module.css";
import Image from "next/image";
import logo from "../assets/aboutevent-logo.png";
import expo from "../assets/expo-mark.png";

const AboutEvent = () => {
  return (
    <>
      <div className={CSS.background}>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl font-[600] py-10">
          About us & Events
        </div>
        <div className="flex justify-between items-center">
          <div className="hidden sm:hidden lg:block">
            <Image
              className="w-[320px] xl:mx-52 mx-12 mb-14"
              src={logo}
              alt="logo"
              quality={100}
            />
          </div>
          <div className="sm:w-[700px] md:mx-20 mx-10">
            <div className="md:text-5xl sm:text-4xl text-2xl font-[700]">
              TECHNEXT <span className="text-[#FF7A00]"> EXPO 2024</span>
            </div>
            <div className="text-justify text-sm sm:text-lg md:text-xl my-10 text-white">
              <p className="my-3">
                Technext - Technology Exhibition of the Future, an integral
                component of the ic-ETITE&apos;24 Conference, tentatively slated for
                February 22nd and 23rd, 2024, is an event designed to serve as a
                global stage, empowering students to transition from the
                conceptualization and planning of groundbreaking technologies to
                their full-fledged realization.
              </p>
              <p className="mt-5">
                Participants shall present their prototypes at the Vellore
                Campus of the esteemed Vellore Insitute of Technology. They
                shall display their technical prowess and creative flair in a
                head-to-head battle for the titles of the top 3 and the best
                tracks for software and hardware. The winners shall win the
                bragging rights that their prototype is among the finest in the
                world. Lucky winners shall also win infusions from visiting
                Angel Investors and Venture Capitalists.
              </p>
              <h1 className="md:text-2xl text-lg text-[#FF7A00] font-[600] my-2">
                DURATION
              </h1>
              <p>12 Hours</p>
              <h1 className="md:text-2xl text-lg text-[#FF7A00] font-[600] my-2">
                ROUNDS
              </h1>
              <p>2 rounds (one online, one offline)</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end px-24 pb-10">
          <Image src={expo} alt="expo-mark" quality={100} />
        </div>
      </div>
    </>
  );
};
export default AboutEvent;
