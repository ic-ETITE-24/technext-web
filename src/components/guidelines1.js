import Image from "next/image";
import css from "./regulations.module.css";
import expo from "../assets/expo-mark.png";
import line from "../assets/linelong.png";

function Guidelines1() {
  return (
    <>
      <div className={css.bg}>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-10 uppercase">
          Eligibility criteria
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-y-2 lg:justify-center gap-x-12 mt-12">
          <div className="text-orange-500 text-5xl price">Student Groups</div>
          <div className="text-white text-center w-[40%] text-lg">
            This competition is open to both Indian nationals and Foreign
            citizens. Participants must be currently enrolled in an academic
            institution at the time of the competition.
          </div>
        </div>
        <div className="lg:my-24 lg:flex hidden justify-center"><Image src={line} width={1200} alt="line"/></div>
        
        <div className="flex flex-col lg:flex-row items-center gap-y-2 lg:justify-center gap-x-12 mt-12">
          <div className="text-orange-500 text-5xl price">Startups</div>
          <div className="text-white text-center w-[40%] text-lg">
            The startup must be in its early stages, defined as having been
            founded within the last three years. The startup must have a
            technology-based product or service as its core offering. The
            startup should have a working prototype( often referred to as a v1)
            of the product or service that can be presented during the round 1
            and final day.
          </div>
        </div>
        <div className="w-full flex justify-end px-24 pb-10 mt-20">
          <Image src={expo} alt="expo-mark" quality={100} />
        </div>
      </div>
    </>
  );
}

export default Guidelines1;
