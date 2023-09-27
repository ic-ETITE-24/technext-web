import Image from "next/image";
import css from "./regulations.module.css";
import expo from "../assets/expo-mark.png";

function Regulations() {
  return (
    <>
      <div className={css.bg}>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl font-[600] py-10">
          Regulations
        </div>
        <div className="flex lg:flex-nowrap flex-wrap justify-around items-center lg:h-[600px]">
          <div className="flex items-center four gap-6 sm:pl-4">
            <div className="text-orange-500 text-6xl sm:pl-12 2xl:pl-20 sm:text-9xl md:text-[160px] 2xl:text-[210px]">
              4
            </div>
            <div className="text-white text-4xl sm:text-5xl md:text-[78px] 2xl:text-[100px] md:leading-[4rem] 2xl:leading-[5rem]">
              MEMBERS&nbsp;
              <br className="hidden md:inline" />
              TEAM*
            </div>
          </div>

          <div className="sm:pt-4 pt-6 sm:pl-24 w-[500px] md:w-[700px] md:pl-6 sm:leading-relaxed">
            <ul className="list-disc text-white sm:text-xl md:text-xl md:w-full 2xl:text-2xl 2xl:pt-16 px-14 lg:text-left">
              <li>
                Participants are required to pay the required registration fee
              </li>
              <li>Technext shall be held in two rounds.</li>
              <li>
                Round 1 shall be Online mode and may be deemed an elimination
                round.
              </li>
              <li>
                Before Round 1, participants shall have 2 months to work on
                their prototypes from the time of the release of the tracks.
              </li>
              <li>
                During Round 1, the participants shall provide progress reports
                according to the guidelines laid out by the managers.
              </li>
              <li>
                For Round 2, participants shall have to transport their
                prototypes to the Vellore Campus of Vellore Institute of
                Technology and demonstrate their work on the 23rd of February,
                2024.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row sm:pt-56 pt-10 justify-center md:pt-20 lg:pt-0 2xl:pt-20 lg:w-full">
          <div className="flex justify-center text-white pt-9 md:pl-8 md:pr-8 lg:pl-4 lg:pr-48 2xl:pl-0 xl:pr-80 md:text-lg text-xs opacity-30 py-4 sm:py-0 md:w-full">
            * 3 MEMBERS CAN ALSO FORM A TEAM
          </div>
          <div className="w-full flex justify-center md:justify-end md:px-10 2xl:pr-24">
            <Image src={expo} alt="expo-mark" quality={100} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Regulations;
