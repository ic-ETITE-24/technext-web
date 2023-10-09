import Image from "next/image";
import css from "./regulations.module.css";
import expo from "../assets/expo-mark.png";
import line from "../assets/linelong.png";

function Guidelines4() {
  return (
    <>
      <div className={css.bg}>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-10 uppercase">
          Submission rule
        </div>
        <div className="ml-12 mr-4 text-lg">
          <div className="mb-6">
            <h1 className="text-orange-500 uppercase">Submission Deadline:</h1>
            <ul className="list-disc ml-4">
              <li>
                All project submissions must adhere to the specified submission
                deadline. Late submissions will not be considered.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h1 className="text-orange-500 uppercase">
              Project Documentation:
            </h1>
            <ul className="list-disc ml-4">
              <li>
                All projects must be accompanied by comprehensive documentation,
                including project reports, technical specifications, and user
                manuals.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h1 className="text-orange-500 uppercase">Code and Design:</h1>
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
          <div className="mb-6">
            <h1 className="text-orange-500 uppercase">Hardware Projects:</h1>
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
          <div className="mb-6">
            <h1 className="text-orange-500 uppercase">
              intellectual Property:
            </h1>
            <ul className="list-disc ml-4">
              <li>
                Ensure that the projects submitted do not violate any
                intellectual property rights, and all necessary permissions and
                licenses are obtained.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h1 className="text-orange-500 uppercase">plagiarism:</h1>
            <ul className="list-disc ml-4">
              <li>
                Plagiarism is strictly prohibited. All projects should be
                original, and proper citations should be provided if external
                resources or open-source code are used. If the project is found
                to be plagiarized, the committee holds the right to disqualify
                the team.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h1 className="text-orange-500 uppercase">
              Presentation and Demonstration:
            </h1>
            <ul className="list-disc ml-4">
              <li>
                Each team will be required to present and demonstrate their
                projects to the judging panel. Presentations should be clear,
                concise, and engaging.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h1 className="text-orange-500 uppercase">Judging Criteria:</h1>
            <ul className="list-disc ml-4">
              <li>
                Establish clear judging criteria that evaluate aspects such as
                innovation, functionality, design, technical complexity, and
                overall impact.
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h1 className="text-orange-500 uppercase">Publication Rights:</h1>
            <ul className="list-disc ml-4">
              <li>
                The organizing body may request permission to feature and share
                information about the projects in promotional materials and
                publications related to the exhibition.
              </li>
            </ul>
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
