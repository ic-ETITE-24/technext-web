import Image from "next/image";
import css from "./regulations.module.css";
import expo from "../assets/expo-mark.png";
import line from "../assets/linelong.png";
import line1 from "../assets/Line14.png";
import line2 from "../assets/midlinem.png";

function Guidelines1() {
  return (
    <>
      <div className={css.bg}>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-10 uppercase">
          Eligibility criteria
        </div>
        {/* <div className="flex flex-col lg:flex-row items-center gap-y-2 lg:justify-center gap-x-12 mt-12"> */}
        {/* <div className="text-orange-500 text-5xl price">Student Groups</div> */}
        <div className="py-2 lg:py-0 mx-auto my-auto h-[100%] w-[90%] lg:w-[90%] rounded-md backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center">
          <div className="my-auto mx-12 lg:mx-24 text-center">
            <h1 className="mt-4 md:mt-0 text-[#FF7A00] text-3xl lg:text-5xl">
              Student Groups
            </h1>
          </div>

          <Image
            src={line1}
            quality={100}
            className="my-12 hidden lg:flex"
            height={150}
            alt="line"
          />
          <Image
            src={line2}
            quality={100}
            width={160}
            className="mx-auto flex lg:hidden py-7"
            alt="line"
          />

          <h1 className="text-justify my-auto mx-12 lg:mx-24 lg:text-3xl pb-10 lg:pb-0 text-white">
            This competition is open to both Indian nationals and Foreign
            citizens. Participants must be currently enrolled in an academic
            institution at the time of the competition
          </h1>
        </div>
        <div className="lg:my-12 lg:flex hidden justify-center">
          <Image src={line} width={1200} alt="line" />
        </div>

        <div className="py-12 lg:py-0 mx-auto my-auto h-[100%] w-[90%] lg:w-[90%] rounded-md backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center">
          <div className="my-auto mx-12 lg:mx-24 text-center">
            <h1 className="text-[#FF7A00] text-3xl lg:text-5xl">
            Startups
            </h1>
          </div>

          <Image
            src={line1}
            quality={100}
            className="my-10 hidden lg:flex"
            height={160}
            alt="line"
          />
          <Image
            src={line2}
            quality={100}
            width={160}
            className="mx-auto flex lg:hidden py-7"
            alt="line"
          />

          <h1 className="text-justify my-auto mx-12 lg:mx-24 lg:text-3xl text-white pb-10 lg:pb-0">
          The startup must be in its early stages, defined as having been
            founded within the last three years. The startup must have a
            technology-based product or service as its core offering. The
            startup should have a working prototype( often referred to as a v1)
            of the product or service that can be presented during the round 1
            and final day.
          </h1>
        </div>
        <div className="w-full flex justify-end px-24 pb-10 mt-20">
          <Image src={expo} alt="expo-mark" quality={100} />
        </div>
      </div>
    </>
  );
}

export default Guidelines1;
