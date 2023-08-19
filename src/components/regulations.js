import Image from "next/image";
import css from "./regulations.module.css";
import line from "./../assets/SmallLine.png";

function Regulations() {
  return (
    <>
      <div className={css.bg}>
        <h1 className="text-white text-4xl sm:text-5xl p-4 md:pl-12 2xl:text-6xl">
          Regulations
        </h1>
        <div className="flex flex-wrap justify-between pt-6 sm:pt-24 pl-16 md:pt-10 md:pl-28 2xl:pl-64">
          <div className="flex items-center four gap-6 self-center sm:pl-4">
            <div className="text-orange-500 text-8xl sm:pl-12 sm:text-9xl md:text-[160px] 2xl:text-[210px]">
              4
            </div>
            <div className="text-white text-4xl sm:text-5xl md:text-[78px] 2xl:text-[100px] md:leading-[4rem] 2xl:leading-[5rem]">
            MEMBERS&nbsp;
              <br className="hidden md:inline"/>
            TEAM*
            </div>
          </div>

          <div className="w-3/4 sm:pt-16 sm:pl-24 sm:w-2/3 md:w-2/4 md:pl-6 pt-8 sm:leading-relaxed">
            <ul className="list-disc text-white sm:text-xl md:text-xl md:w-full 2xl:text-4xl 2xl:pt-16 md:pr-24 lg:text-left">
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
        <div className="flex flex-wrap pl-2 sm:pt-56 pt-10 md:justify-between md:pt-20 2xl:pt-28">
          <div className="text-white pt-9 pl-4 md:pl-12 opacity-30">
            * MEMBER OF 3 PEOPLE CAN ASLO FORM A TEAM
          </div>
          <div className="text-[10px] pl-28 md:pr-12 self-end">
            <span className="text-white tracking-[.7em] inline-block">
              EXPO
            </span>
            <span className="inline-block text-center">
              <Image alt="line" src={line} width={40} />
            </span>
            <span className="text-orange-500 tracking-[.7em] inline-block">
              .2024
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Regulations;
