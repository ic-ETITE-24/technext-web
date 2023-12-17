import Image from "next/image";
import CSS from "./investors.module.css";
import expo from "../assets/expo-mark.png";

function Participate() {
  return (
    <>
      <div className={CSS.background}>
        <div className="mx-10 text-white md:mx-20 text-lg sm:text-4xl font-[600] py-2 pb-6">
        WHY PARTICIPATE?
        </div>
        <div className="flex flex-col justify-center lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-y-8 gap-x-8 lg:mt-20 mx-auto">
          <div className="mx-auto lg:mx-0 lg:justify-self-end my-auto h-fit w-[80%] lg:w-[65%] sm:w-[60%] rounded-md backdrop-blur-xs backdrop-brightness-[1.3] border-[1px] border-[rgba(255,255,255,0.2)]">
            <div className="py-3">
              <h1 className="text-[#FF7A00] text-2xl lg:text-3xl text-center uppercase mt-3">Exciting Prize</h1>
              <h1 className="text-[#FF7A00] text-2xl lg:text-3xl text-center uppercase">Pool</h1>
              <p className="text-justify text-white w-[90%] mx-auto mt-2">
                Dare to bring your ideas to life and win substantial cash
                prizes! This is your opportunity to increase your wealth and
                make your dreams a reality.
              </p>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 lg:justify-self-start my-auto h-fit w-[80%] lg:w-[65%] sm:w-[60%] rounded-md backdrop-blur-xs backdrop-brightness-[1.3] border-[1px] border-[rgba(255,255,255,0.2)]">
            <div className="py-3">
              <h1 className="text-[#FF7A00] text-2xl lg:text-3xl text-center uppercase mt-3">
                International Exposure and
              </h1>
              <h1 className="text-[#FF7A00] text-2xl lg:text-3xl text-center uppercase">
                Networking
              </h1>
              <p className="text-justify text-white w-[90%] mx-auto mt-2">
                Meet experts and investors from around the world, and competing
                startups leading innovation. Increase your net worth by
                expanding your network!
              </p>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 lg:justify-self-end my-auto h-fit w-[80%] lg:w-[65%] sm:w-[60%] rounded-md backdrop-blur-xs backdrop-brightness-[1.3] border-[1px] border-[rgba(255,255,255,0.2)]">
            <div className="py-3">
              <h1 className="text-[#FF7A00] text-2xl lg:text-3xl uppercase text-center mt-3">
                Chance to Get
              </h1>
              <h1 className="text-[#FF7A00] text-2xl lg:text-3xl uppercase text-center">
                invested in
              </h1>
              <p className="text-justify text-white w-[90%] mx-auto mt-2">
                Your shot at getting invested in by investors with 10+ years of
                experience. Witness how sector-agnostic global funds pick their
                portfolio!
              </p>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 lg:justify-self-start my-auto h-fit w-[80%] lg:w-[65%] sm:w-[60%] rounded-md backdrop-blur-xs backdrop-brightness-[1.3] border-[1px] border-[rgba(255,255,255,0.2)]">
            <div className="py-3">
              <h1 className="text-[#FF7A00] text-2xl lg:text-3xl text-center uppercase mt-3">
                Market Testing and
              </h1>
              <h1 className="text-[#FF7A00] text-2xl lg:text-3xl text-center uppercase">
                Customer Feedback
              </h1>
              <p className="text-justify text-white w-[90%] mx-auto mt-2">
                Get an opportunity to know your customers, get feedback and
                validate your product with 5000+ footfall in our grand scale
                event.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row sm:pt-56 pt-10 justify-center md:pt-20 lg:pt-0 xl:pt-20 lg:w-full pb-12">
          {/* <div className="flex justify-center bdcn text-white pt-9 md:pl-8 md:pr-8 lg:pl-4 lg:pr-48 2xl:pl-0 xl:pr-80 md:text-lg text-xs opacity-30 py-4 sm:py-0 md:w-full">
            * 3 MEMBERS CAN ALSO FORM A TEAM
          </div> */}
          <div className="w-full flex justify-center md:justify-end md:px-24 2xl:pr-24">
            <Image src={expo} alt="expo-mark" quality={100} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Participate;
