import Image from "next/image";
import css from "./regulations.module.css";
import expo from "../assets/expo-mark.png";
import line from "../assets/linelong.png";
import Router from "next/router";

function Guidelines2() {
  return (
    <>
      <div className={css.bg}>
        <div
          className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-10 uppercase"
          style={{
            fontFamily: "Futura BdCn BT",
            fontStyle: "normal",
            fontWeight: 100,
          }}
        >
          general rules and regulations
        </div>
        <div
          className="ml-12 mr-4 text-lg px-8"
          style={{
            fontFamily: "Futura Md BT",
            // fontStyle: "normal",
            fontWeight: 100,
            fontSize: "15px",
          }}
        >
          <ul className="list-disc text-white">
            <li>
              Registration for the competition is open to eligible teams. Each
              team must register online during the designated registration
              period. Late registrations will not be accepted.
            </li>
            <li>
              Participants must select one of the project tracks specified for
              the competition. For detailed information on the event timeline,
              please visit our{" "}
              <a href="/#timeline" className="underline hover:text-white/80">
                website
              </a>
            </li>
            <li>
              Teams will have two and a half months from the announcement of
              tracks to ideate, plan, and present their projects in round one of
              Technext 24 . Projects can be hardware or software-based and must
              be original and developed to showcase significant innovation. Any
              form of plagiarism or patent breach will lead to disqualification
            </li>
            <li>
              Projects must be physically displayed at the premises of Vellore
              Institute of Technology, Vellore, on the final day in February
              2024. Participants are responsible for setting up and dismantling
              their prototypes to be displayed. Each project must have a clear
              and informative presentation explaining its purpose,
              functionality, and innovation.
            </li>
            <li>
              Projects that do not comply with the rules and regulations may be
              subject to disqualification.
            </li>
            <li>
              Each participating team must consist of a minimum of 3 members and
              a maximum of 4 members. Teams must maintain their chosen size
              throughout the competition, and no changes in team composition
              will be allowed after registration. In cases where a team falls
              below the minimum or exceeds the maximum team size, the team may
              be disqualified from the competition.
            </li>
            <li>
              Awards will be given for various categories, including Best
              Project, First Runner-up, Second Runner-up, Investor&apos;s
              Choice. Prizes will be announced and awarded during a special
              ceremony.
            </li>
            <li>
              Participants may be required to provide consent for the
              publication of their project details.
            </li>
            <li>
              Information on setting up prototypes will be provided to
              participants closer to the event date.
            </li>
            <li>
              In case of any disputes or issues, a designated event coordinator
              or committee will make final decisions. Decision taken by the
              Technext Committee is full and final.
            </li>
            <li>
              It is advised to obtain liability insurance for your prototypes to
              protect against potential financial losses in case of accidents or
              incidents.
            </li>
            <li>
              Ensure that your liability insurance policy comprehensively covers
              potential liabilities related to your prototype, including bodily
              injury, property damage, and personal and advertising injury.
            </li>
            <li>
              Carefully review the terms and conditions of your liability
              insurance policy to fully understand the coverage it offers.
            </li>
            <li>
              Take meticulous care in designing and testing your prototype to
              minimize the risk of accidents or incidents during the exhibition.
            </li>
            <li>
              Implement all necessary precautions to prevent injuries to
              yourself and others. This includes wearing appropriate safety gear
              and exercising caution when operating your prototype.
            </li>
            <li>
              Maintain awareness of your surroundings and prioritize the safety
              of others while displaying and operating your prototype at
              Technext.
            </li>
            <li>
              If you have any concerns about the safety of your prototype or
              potential liability risks, seek advice from a qualified attorney.
            </li>
            <li>
              All participants must adhere to a strict code of conduct.Please go
              through the link below for the detailed conduct of conduct (Insert
              a link).
            </li>
            <li>
              Any changes to the competition regulations will be communicated to
              participants in a timely manner.
            </li>
            <li>
              Participants must comply with all event rules and guidelines.
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-end px-24 pb-10 mt-20">
          <Image src={expo} alt="expo-mark" quality={100} />
        </div>
      </div>
    </>
  );
}

export default Guidelines2;
