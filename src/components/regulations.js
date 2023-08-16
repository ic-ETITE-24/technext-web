import Image from "next/image";
import icon from "./../assets/4teams.png";
import css from "./regulations.module.css";
import line from "./../assets/SmallLine.png";

function Regulations() {
  return (
    <>
      <div className={css.bg}>
        <h1 className="text-white text-3xl p-4 pl-12 pt-4" id={css.heading}>Regulations</h1>
        <div className={css.container}>
          <div className={css.imagediv}>
            <Image alt="ieee" src={icon} width={450} className={css.imagetag} />
          </div>

          <div className={css.textdiv}>
            <ul className="list-disc text-white text-xl" id={css.bodytext}>
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
        <div className={css.bottomdiv}>
          <div className="text-white pl-12 pt-9 opacity-30" id={css.instr}>
            * MEMBER OF 3 PEOPLE CAN ASLO FORM A TEAM
          </div>
          <div style={{ alignSelf: "flex-end"}} className="text-[10px]" id={css.expo}>
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
