import Image from "next/image";
import css from "./regulations.module.css";
import expo from "../assets/expo-mark.png";
import line from "../assets/linelong.png";

function Guidelines4() {
  return (
    <>
      <div className={css.bg}>
        <div
          className="mx-10 md:mx-20 text-2xl sm:text-5xl text-white font-[600] py-10 uppercase"
          style={{
            fontFamily: "Futura BdCn BT",
            fontStyle: "normal",
          }}
        >
          Submission rule
        </div>
        <div
          className="ml-12 mr-4 text-xl px-8 text-white"
          style={{
            fontFamily: "Futura Md BT",
            fontStyle: "normal",
          }}
        >
          <div className="mb-10">
            <h1
              className="text-orange-500 uppercase font-[600] text-2xl"
              style={{
                fontFamily: "Futura BdCn BT",
                fontStyle: "normal",
              }}
            >
              Submission Deadline
            </h1>
            All project submissions must adhere to the specified submission
            deadline. Late submissions will not be considered.
          </div>
          <div className="mb-10">
            <h1
              className="text-orange-500 uppercase text-2xl"
              style={{
                fontFamily: "Futura BdCn BT",
                fontStyle: "normal",
              }}
            >
              Project Documentation
            </h1>
            All projects must be accompanied by comprehensive documentation,
            including project reports, technical specifications, and user
            manuals.
          </div>
          <div className="mb-10">
            <h1
              className="text-orange-500 uppercase text-2xl"
              style={{
                fontFamily: "Futura BdCn BT",
                fontStyle: "normal",
              }}
            >
              Code and Design
            </h1>
            <ul className="list-disc ml-4">
              <li>
                For software projects, the source code must be made available
                for review by the judging panel.
              </li>
              <li>
                Software projects should have user-friendly interfaces, and
                design principles should be followed for an intuitive user
                experience.
              </li>
            </ul>
          </div>
          <div className="mb-10">
            <h1
              className="text-orange-500 uppercase text-2xl"
              style={{
                fontFamily: "Futura BdCn BT",
                fontStyle: "normal",
              }}
            >
              Hardware Projects
            </h1>
            <ul className="list-disc ml-4">
              <li>
                Hardware projects must be functional and safe to interact with.
                Safety measures should be clearly outlined in the documentation.
              </li>
              <li>
                Prototypes should be accompanied by clear schematics and
                diagrams to explain their operation.
              </li>
            </ul>
          </div>
          <div className="mb-10">
            <h1
              className="text-orange-500 uppercase text-2xl"
              style={{
                fontFamily: "Futura BdCn BT",
                fontStyle: "normal",
              }}
            >
              intellectual Property
            </h1>
            Ensure that the projects submitted do not violate any intellectual
            property rights, and all necessary permissions and licenses are
            obtained.
          </div>
          <div className="mb-10">
            <h1
              className="text-orange-500 uppercase text-2xl"
              style={{
                fontFamily: "Futura BdCn BT",
                fontStyle: "normal",
              }}
            >
              plagiarism
            </h1>
            Plagiarism is strictly prohibited. All projects should be original,
            and proper citations should be provided if external resources or
            open-source code are used. If the project is found to be
            plagiarized, the committee holds the right to disqualify the team.
          </div>
          <div className="mb-10">
            <h1
              className="text-orange-500 uppercase text-2xl"
              style={{
                fontFamily: "Futura BdCn BT",
                fontStyle: "normal",
              }}
            >
              Presentation and Demonstration
            </h1>
            Each team will be required to present and demonstrate their projects
            to the judging panel. Presentations should be clear, concise, and
            engaging.
          </div>
          <div className="mb-10">
            <h1
              className="text-orange-500 uppercase text-2xl"
              style={{
                fontFamily: "Futura BdCn BT",
                fontStyle: "normal",
              }}
            >
              Judging Criteria
            </h1>
            Establish clear judging criteria that evaluate aspects such as
            innovation, functionality, design, technical complexity, and overall
            impact.
          </div>
          <div className="mb-10F">
            <h1
              className="text-orange-500 uppercase text-2xl"
              style={{
                fontFamily: "Futura BdCn BT",
                fontStyle: "normal",
              }}
            >
              Publication Rights
            </h1>
            The organizing body may request permission to feature and share
            information about the projects in promotional materials and
            publications related to the exhibition.
          </div>
        </div>
        <div className="w-full flex justify-end px-24 pb-10 mt-20">
          <Image src={expo} alt="expo-mark" quality={100} />
        </div>
      </div>
    </>
  );
}

export default Guidelines4;
