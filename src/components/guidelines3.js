import Image from "next/image";
import css from "./guideline.module.css";
import expo from "../assets/expo-mark.png";
import line from "../assets/Line14.png";
import line2 from "../assets/midlinem.png";

function Guidelines3() {
  return (
    <>
      <div className={css.bg}>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-10 uppercase">
          Robotics and Automation Guidelines
        </div>
        <div className="py-12 lg:py-0 mx-auto my-auto h-[100%] w-[90%] lg:w-[90%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center">
          <div className="my-auto mx-12 lg:mx-24 text-center">
            <h1 className="text-[#FF7A00] text-3xl lg:text-5xl">
              TRACK DESCRIPTION
            </h1>
          </div>

          <Image
            src={line}
            quality={100}
            className="my-8 hidden lg:flex"
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

          <h1 className="text-justify my-auto mx-12 lg:mx-24 lg:text-3xl pb-10 lg:pb-0">
            Venture into the exciting universe of Robotics and Automation, where
            technology meets autonomy. Construct mechanical marvels and
            automated solutions that revolutionize industries, optimize
            processes, and entertain with cutting-edge sophistication.
          </h1>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 ">
          <h1 className="mb-6 text-4xl uppercase">
            {" "}
            Submissions from Participants
          </h1>

          <h1 className="text-orange-500 uppercase">Project description</h1>
          <p>
            Participants must provide a detailed description of their project.
          </p>

          <h1 className="text-orange-500 uppercase">Problem statement</h1>
          <p>
            Participants should clearly define the problem their project aims to
            solve using Robotics and Automation.
          </p>

          <h1 className="text-orange-500 uppercase">Solution</h1>
          <p>
            Participants must explain how their project will effectively address
            the identified problem and contribute to the domain of Robotics and
            Automation.
          </p>

          <h1 className="text-orange-500 uppercase">GitHub Repository</h1>
          <p>
            Each team must create a GitHub repository for their project with the
            following format: &quot;PROJECTNAME_TECHNEXT2024.&quot;
          </p>

          <h1 className="text-orange-500 uppercase">
            Additional Submission Requirements{" "}
          </h1>
          <p>
            Specify any additional submission requirements for the track, such
            as video demos, code documentation, or project reports.
          </p>

          <h1 className="text-orange-500 uppercase">
            Data Requirements (if applicable){" "}
          </h1>
          <p>
            If the project involves AI/ML or data analysis, participants should
            include details about the dataset(s) they are using or working on.
          </p>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 ">
          <h1 className="mb-6 text-4xl uppercase"> Best and Safe Practices</h1>

          <h1 className="text-orange-500 uppercase">
            Hardware Prototypes (if applicable):{" "}
          </h1>
          <p>
            Ensure that hardware prototypes adhere to safety standards and do
            not pose any harm to users or bystanders.
          </p>

          <h1 className="text-orange-500 uppercase">Software Security: </h1>
          <p>
            Emphasize that software submissions should not engage in any harmful
            activities, such as network tampering, hacking, or unethical data
            collection.
          </p>

          <h1 className="text-orange-500 uppercase">
            Ethical Considerations:{" "}
          </h1>
          <p>
            Encourage participants to consider ethical implications related to
            their projects, especially in fields like AI and biotechnology.
          </p>

          <h1 className="text-orange-500 uppercase">Environmental Impact: </h1>
          <p>
            Encourage sustainable practices and consider the environmental
            impact of hardware prototypes or energy-intensive projects.
          </p>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-6 uppercase">
          Projects domains
        </div>
        <ul
          className="list-disc ml-20 mr-4 text-base sm:text-xl"
          style={{
            fontFamily: "Futura Md BT",
            fontStyle: "normal",
          }}
        >
          <li>Manufacturing and Industrial Automation</li>
          <li>Warehouse and Logistics Automation</li>
          <li>Agricultural Automation</li>
          <li>Healthcare and Medical Robotics</li>
          <li>Service and Hospitality Robots</li>
          <li>Autonomous Vehicles</li>
          <li>Construction and Demolition</li>
          <li>Mining and Exploration</li>
          <li>Space Exploration</li>
          <li>Environmental Monitoring and Cleanup</li>
          <li>Defense and Security</li>
          <li>Education and Research</li>
          <li>Entertainment and Gaming</li>
          <li>Energy and Utilities</li>
          <li>Home and Personal Assistance</li>
          <li>Sports and Recreation</li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-10 uppercase">
          Augmented Reality, Virtual Reality, and Mixed Reality Guidelines
        </div>
        <div className="py-12 lg:py-0 mx-auto my-auto h-[100%] w-[90%] lg:w-[90%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center">
          <div className="my-auto mx-12 lg:mx-24 text-center">
            <h1 className="text-[#FF7A00] text-3xl lg:text-5xl">
              TRACK DESCRIPTION
            </h1>
          </div>

          <Image
            src={line}
            quality={100}
            className="my-8 hidden lg:flex"
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

          <h1 className="text-justify my-auto mx-12 lg:mx-24 lg:text-3xl pb-10 lg:pb-0">
            Immerse yourself in the cutting-edge realms of Augmented Reality
            (AR), Virtual Reality (VR), and Mixed Reality (MR). Craft projects
            that seamlessly blend digital and physical worlds, pushing the
            boundaries of immersive experiences in industries ranging from
            education to entertainment.
          </h1>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 ">
          <h1 className="mb-6 text-4xl uppercase">
            Submissions from Participants
          </h1>

          <h1 className="text-orange-500 uppercase">Project description</h1>
          <p>
            Participants must provide a clear description of their project,
            outlining the problem they aim to address or the experience they
            intend to create.
          </p>

          <h1 className="text-orange-500 uppercase">Problem statement</h1>
          <p>
            Explain why participants are working on this project, emphasizing
            the real-world problem or need they intend to solve.
          </p>

          <h1 className="text-orange-500 uppercase">Solution Overview</h1>
          <p>
            Describe how the project will solve the identified problem or meet
            the need, highlighting the innovative use of AR/VR/MR technology.
          </p>

          <h1 className="text-orange-500 uppercase">GitHub Repository</h1>
          <p>
            Each team must create a GitHub repository for their project with the
            following format:  &quot;PROJECTNAME_TECHNEXT2024.&quot;
          </p>

          <h1 className="text-orange-500 uppercase">
            Additional Submission Requirements
          </h1>
          <p>
            Include a video demonstration showcasing the functionality and
            immersive aspects of the project. Provide well-documented code and
            instructions for setting up and running the project. Submit a
            project report detailing the design choices, challenges faced, and
            lessons learned during development.
          </p>

          <h1 className="text-orange-500 uppercase">
            Data Requirements (if applicable)
          </h1>
          <p>
            For projects involving AI/ML or data analysis, participants should
            specify the dataset(s) they are using or working on and provide
            proper attribution if applicable.
          </p>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 ">
          <h1 className="mb-6 text-4xl uppercase"> Best and Safe Practices</h1>

          <h1 className="text-orange-500 uppercase">
            Hardware Prototypes (if applicable)
          </h1>
          <p>
            Ensure that hardware prototypes adhere to safety standards and do
            not pose any harm to users or bystanders.
          </p>

          <h1 className="text-orange-500 uppercase">Software Security</h1>
          <p>
            Emphasize that software submissions should not engage in any harmful
            activities, such as network tampering, hacking, or unethical data
            collection.
          </p>

          <h1 className="text-orange-500 uppercase">Ethical Considerations</h1>
          <p>
            Encourage participants to consider ethical implications related to
            their projects, especially in fields like AI and biotechnology.
          </p>

          <h1 className="text-orange-500 uppercase">Environmental Impact</h1>
          <p>
            Encourage sustainable practices and consider the environmental
            impact of hardware prototypes or energy-intensive projects.
          </p>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-6 uppercase">
          Project Domains
        </div>
        <ul
          className="list-disc ml-20 mr-4 text-base sm:text-xl"
          style={{
            fontFamily: "Futura Md BT",
            fontStyle: "normal",
          }}
        >
          <li>Education</li>
          <li>Entertainment</li>
          <li>Healthcare</li>
          <li>Gaming</li>
          <li>Training and Simulation</li>
          <li>Tourism and Cultural Heritage</li>
          <li>Architecture and Design</li>
          <li>Industrial Applications</li>
          <li>Social Interaction</li>
        </ul>

        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-10 uppercase">
          Open Innovation Guidelines
        </div>
        <div className="py-12 lg:py-0 mx-auto my-auto h-[100%] w-[90%] lg:w-[90%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center">
          <div className="my-auto mx-12 lg:mx-24 text-center">
            <h1 className="text-[#FF7A00] text-3xl lg:text-5xl">
              TRACK DESCRIPTION
            </h1>
          </div>

          <Image
            src={line}
            quality={100}
            className="my-8 hidden lg:flex"
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

          <h1 className="text-justify my-auto mx-12 lg:mx-24 lg:text-3xl pb-10 lg:pb-0">
            Embrace the ethos of Open Innovation, where knowledge knows no
            bounds. Showcase projects that epitomize collaborative synergy,
            blurring the lines between creators and innovators. Here, the
            collective power of shared ideas shapes the limitless future of
            technology.
          </h1>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 ">
          <h1 className="mb-6 text-4xl uppercase">
            Submissions from Participants
          </h1>

          <h1 className="text-orange-500 uppercase">Project Description</h1>
          <p>
            Participants must provide a clear description of their project,
            highlighting its collaborative nature and the innovative
            problem-solving aspect.
          </p>

          <h1 className="text-orange-500 uppercase">Problem Statement</h1>
          <p>
            Explain why participants are working on this project, emphasizing
            the real-world problem they aim to address through collaboration.
          </p>

          <h1 className="text-orange-500 uppercase">Solution Overview</h1>
          <p>
            Describe how the project leverages collaboration to solve the
            identified problem and drive innovation.
          </p>

          <h1 className="text-orange-500 uppercase">GitHub Repository</h1>
          <p>
            Each team must create a GitHub repository for their project with the
            following format:  &quot;PROJECTNAME_TECHNEXT2024.&quot;
          </p>

          <h1 className="text-orange-500 uppercase">
            Additional Submission Requirements
          </h1>
          <p>
            <strong>Video Demos:</strong> Include video demonstrations
            showcasing how the collaborative aspects of the project were
            implemented and highlighting its functionality.
          </p>
          <p>
            <strong>Code Documentation:</strong> Provide well-documented code
            that demonstrates the collaborative contributions of team members.
          </p>
          <p>
            <strong>Project Reports:</strong> Submit project reports outlining
            the collaborative process, design choices, challenges faced, and
            outcomes.
          </p>

          <h1 className="text-orange-500 uppercase">
            Data Requirements (if applicable)
          </h1>
          <p>
            For projects involving AI/ML or data analysis, participants should
            specify the dataset(s) they are using or working on and provide
            proper attribution if applicable.
          </p>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 ">
          <h1 className="mb-6 text-4xl uppercase"> Best and Safe Practices</h1>

          <h1 className="text-orange-500 uppercase">
            Hardware Prototypes (if applicable)
          </h1>
          <p>
            Ensure that hardware prototypes adhere to safety standards and do
            not pose any harm to users or bystanders.
          </p>

          <h1 className="text-orange-500 uppercase">Software Security</h1>
          <p>
            Emphasize that software submissions should not engage in any harmful
            activities, such as network tampering, hacking, or unethical data
            collection.
          </p>

          <h1 className="text-orange-500 uppercase">Ethical Considerations</h1>
          <p>
            Encourage participants to consider ethical implications related to
            their collaborative projects, especially in fields like AI and
            biotechnology.
          </p>

          <h1 className="text-orange-500 uppercase">Environmental Impact</h1>
          <p>
            Encourage sustainable practices and consider the environmental
            impact of collaborative projects, especially those involving
            hardware or energy-intensive components.
          </p>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-6 uppercase">
          Project Domains
        </div>
        <ul
          className="list-disc ml-20 mr-4 text-base sm:text-xl"
          style={{
            fontFamily: "Futura Md BT",
            fontStyle: "normal",
          }}
        >
          <li>Healthcare</li>
          <li>Education</li>
          <li>Social Impact</li>
          <li>Environmental Sustainability</li>
          <li>Entertainment</li>
          <li>Finance and Fintech</li>
          <li>Robotics</li>
          <li>Augmented Reality (AR) and Virtual Reality (VR)</li>
          <li>Artificial Intelligence (AI) and Machine Learning (ML)</li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-10 uppercase">
          Renewable and Sustainable Projects Guidelines
        </div>
        <div className="py-12 lg:py-0 mx-auto my-auto h-[100%] w-[90%] lg:w-[90%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center">
          <div className="my-auto mx-12 lg:mx-24 text-center">
            <h1 className="text-[#FF7A00] text-3xl lg:text-5xl">
              TRACK DESCRIPTION
            </h1>
          </div>

          <Image
            src={line}
            quality={100}
            className="my-8 hidden lg:flex"
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

          <h1 className="text-justify my-auto mx-12 lg:mx-24 lg:text-3xl pb-10 lg:pb-0">
            The Renewable and Sustainable Projects track in Technext 2024
            focuses on innovative projects that address environmental, climatic,
            and sustainable development challenges. Participants in this track
            are expected to create projects that contribute to renewable energy,
            sustainability, or environmental conservation.
          </h1>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 ">
          <h1 className="mb-6 text-4xl uppercase">
            Submissions from Participants
          </h1>

          <h1 className="text-orange-500 uppercase">Project Description</h1>
          <p>
            Participants must provide a detailed description of their project.
          </p>

          <h1 className="text-orange-500 uppercase">Problem Statement</h1>
          <p>
            Participants must clearly articulate the problem your project
            addresses.
          </p>

          <h1 className="text-orange-500 uppercase">Solution</h1>
          <p>
            Participants must explain how your project will effectively address
            the identified problem and contribute to renewable energy,
            sustainability, or environmental conservation.
          </p>

          <h1 className="text-orange-500 uppercase">GitHub Repository</h1>
          <p>
            Each team must create a GitHub repository for their project with the
            following format: &quot;PROJECTNAME_TECHNEXT2024.&quot;
          </p>

          <h1 className="text-orange-500 uppercase">
            Additional Submission Requirements
          </h1>
          <p>
            Specify any additional submission requirements for the track, such
            as video demonstrations, code documentation, or project reports.
          </p>

          <h1 className="text-orange-500 uppercase">
            Data Requirements (if applicable)
          </h1>
          <p>
            If your project involves AI/ML or data analysis, provide details
            about the dataset(s) you are using or working on.
          </p>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 ">
          <h1 className="mb-6 text-4xl uppercase"> Best and Safe Practices</h1>

          <h1 className="text-orange-500 uppercase">
            Hardware Prototypes (if applicable)
          </h1>
          <p>
            Ensure that hardware prototypes adhere to safety standards and do
            not pose any harm to users or bystanders.
          </p>

          <h1 className="text-orange-500 uppercase">Software Security</h1>
          <p>
            Emphasize that software submissions should not engage in any harmful
            activities, such as network tampering, hacking, or unethical data
            collection.
          </p>

          <h1 className="text-orange-500 uppercase">Ethical Considerations</h1>
          <p>
            Encourage participants to consider ethical implications related to
            their projects, especially in fields like AI and biotechnology.
          </p>

          <h1 className="text-orange-500 uppercase">Environmental Impact</h1>
          <p>
            Encourage sustainable practices and consider the environmental
            impact of hardware prototypes or energy-intensive projects.
          </p>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-6 uppercase">
          Project Domains
        </div>
        <ul
          className="list-disc ml-20 mr-4 text-base sm:text-xl"
          style={{
            fontFamily: "Futura Md BT",
            fontStyle: "normal",
          }}
        >
          <li>Climatic Variables</li>
          <li>Topography</li>
          <li>Soil</li>
          <li>Water</li>
          <li>Air</li>
          <li>Biological</li>
          <li>Land Use</li>
          <li>Socio-Economic Factors</li>
        </ul>

        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-10 uppercase">
          AI/ML Projects Guidelines
        </div>
        <div className="py-12 lg:py-0 mx-auto my-auto h-[100%] w-[90%] lg:w-[90%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center">
          <div className="my-auto mx-12 lg:mx-24 text-center">
            <h1 className="text-[#FF7A00] text-3xl lg:text-5xl">
              TRACK DESCRIPTION
            </h1>
          </div>

          <Image
            src={line}
            quality={100}
            className="my-8 hidden lg:flex"
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

          <h1 className="text-justify my-auto mx-12 lg:mx-24 lg:text-3xl pb-10 lg:pb-0">
            The AI/ML Projects track in Technext 2024 is dedicated to projects
            that leverage Artificial Intelligence and Machine Learning to solve
            complex problems, enhance efficiency, and drive innovation.
            Participants in this track are expected to develop AI/ML-based
            solutions that showcase creativity and technical expertise.
          </h1>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 ">
          <h1 className="mb-6 text-4xl uppercase">
            Submissions from Participants
          </h1>

          <h1 className="text-orange-500 uppercase">Project Description</h1>
          <p>
            Participants must provide a detailed description of their AI/ML
            project.
          </p>

          <h1 className="text-orange-500 uppercase">Problem Statement</h1>
          <p>
            Participants should clearly define the problem your project aims to
            solve using AI/ML.
          </p>

          <h1 className="text-orange-500 uppercase">Solution</h1>
          <p>
            Participants should explain how your AI/ML project addresses the
            identified problem and its potential impact.
          </p>

          <h1 className="text-orange-500 uppercase">GitHub Repository</h1>
          <p>
            Each team must create a GitHub repository for their project with the
            following format: &quot;PROJECTNAME_TECHNEXT2024.&quot;
          </p>

          <h1 className="text-orange-500 uppercase">
            Additional Submission Requirements
          </h1>
          <p>
            Specify any additional submission requirements for the track, such
            as video demonstrations, code documentation, or project reports.
          </p>

          <h1 className="text-orange-500 uppercase">
            Data Requirements (if applicable)
          </h1>
          <p>
            If your AI/ML project involves data analysis, specify details and
            provide information about the dataset(s) you are using or working
            on.
          </p>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 ">
          <h1 className="mb-6 text-4xl uppercase"> Best and Safe Practices</h1>

          <h1 className="text-orange-500 uppercase">Ethical Considerations</h1>
          <p>
            Participants are encouraged to consider ethical implications related
            to AI/ML projects, especially in areas like data privacy, bias, and
            fairness. Technext does not encourage or foster unethical
            activities; if found practicing such activities, participants will
            face severe consequences.
          </p>

          <h1 className="text-orange-500 uppercase">Software Security</h1>
          <p>
            Participants should make sure that AI/ML software should not engage
            in any harmful activities, such as network tampering, hacking, or
            unethical data collection.
          </p>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-6 uppercase">
          Project Domains
        </div>
        <ul
          className="list-disc ml-20 mr-4 text-base sm:text-xl"
          style={{
            fontFamily: "Futura Md BT",
            fontStyle: "normal",
          }}
        >
          <li>
            Healthcare: Using AI/ML for medical diagnosis, treatment
            optimization, or healthcare management.
          </li>
          <li>
            Finance: Implementing AI/ML in financial modeling, fraud detection,
            or investment strategies.
          </li>
          <li>
            Natural Language Processing (NLP): Developing AI-driven language
            processing applications.
          </li>
          <li>Computer Vision: Utilizing AI/ML for image or video analysis.</li>
          <li>
            Recommendation Systems: Creating AI-powered recommendation
            algorithms.
          </li>
          <li>
            Predictive Analytics: Employing AI/ML for predictive modeling and
            forecasting.
          </li>
          <li>etc.</li>
        </ul>

        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-10 uppercase">
          Cybersecurity and Software Engineering Practices Guidelines
        </div>
        <div className="py-12 lg:py-0 mx-auto my-auto h-[100%] w-[90%] lg:w-[90%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center">
          <div className="my-auto mx-12 lg:mx-24 text-center">
            <h1 className="text-[#FF7A00] text-3xl lg:text-5xl">
              TRACK DESCRIPTION
            </h1>
          </div>

          <Image
            src={line}
            quality={100}
            className="my-8 hidden lg:flex"
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

          <h1 className="text-justify my-auto mx-12 lg:mx-24 lg:text-3xl pb-10 lg:pb-0">
            Fortify the digital frontier with a focus on Cybersecurity and other
            trending technologies like web3 and the art of Software Engineering.
            Illuminate projects that safeguard the virtual realm, optimize
            software development methodologies, and demonstrate unwavering
            commitment to securing the digital landscape using your development
            skills.
          </h1>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 ">
          <h1 className="mb-6 text-4xl uppercase">
            Submissions from Participants
          </h1>

          <h1 className="text-orange-500 uppercase">Project Description</h1>
          <p>
            Participants must provide a detailed description of their project.
          </p>

          <h1 className="text-orange-500 uppercase">Problem Statement</h1>
          <p>
            Participants should clearly define the problem their project aims to
            solve using Cybersecurity and Software engineering practices.
          </p>

          <h1 className="text-orange-500 uppercase">Solution</h1>
          <p>
            Participants must explain how their project will effectively address
            the identified problem and contribute to Cybersecurity and software
            engineering practices domains.
          </p>

          <h1 className="text-orange-500 uppercase">GitHub Repository</h1>
          <p>
            Each team must create a GitHub repository for their project with the
            following format:  &quot;PROJECTNAME_TECHNEXT2024.&quot;
          </p>

          <h1 className="text-orange-500 uppercase">
            Additional Submission Requirements
          </h1>
          <p>
            Specify any additional submission requirements for the track, such
            as video demos, code documentation, or project reports.
          </p>

          <h1 className="text-orange-500 uppercase">
            Data Requirements (if applicable)
          </h1>
          <p>
            If the project involves AI/ML or data analysis, participants should
            include details about the dataset(s) they are using or working on.
          </p>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 ">
          <h1 className="mb-6 text-4xl uppercase"> Best and Safe Practices</h1>

          <h1 className="text-orange-500 uppercase">
            Hardware Prototypes (if applicable)
          </h1>
          <p>
            Ensure that hardware prototypes adhere to safety standards and do
            not pose any harm to users or bystanders.
          </p>

          <h1 className="text-orange-500 uppercase">Software Security</h1>
          <p>
            Emphasize that software submissions should not engage in any harmful
            activities, such as network tampering, hacking, or unethical data
            collection.
          </p>

          <h1 className="text-orange-500 uppercase">Ethical Considerations</h1>
          <p>
            Encourage participants to consider ethical implications related to
            their projects, especially in fields like AI and biotechnology.
          </p>

          <h1 className="text-orange-500 uppercase">Environmental Impact</h1>
          <p>
            Encourage sustainable practices and consider the environmental
            impact of hardware prototypes or energy-intensive projects.
          </p>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-6 uppercase">
          Project Domains
        </div>
        <ul
          className="list-disc ml-20 mr-4 text-base sm:text-xl"
          style={{
            fontFamily: "Futura Md BT",
            fontStyle: "normal",
          }}
        >
          <li>For Cybersecurity:</li>
          <ul>
            <li>Network security</li>
            <li>Information security</li>
            <li>Application security</li>
            <li>End-point security</li>
            <li>Cloud security</li>
            <li>Cryptography</li>
            <li>Security Architecture and Design</li>
          </ul>
          <li>For Software Engineering Practices:</li>
          <ul>
            <li>Web development</li>
            <li>Mobile-app development</li>
            <li>Desktop-application development</li>
            <li>Embedded systems</li>
            <li>Cloud computing</li>
            <li>Data science and Big data</li>
            <li>Finance and Fintech</li>
            <li>Social media</li>
            <li>Government and public services</li>
          </ul>
        </ul>

        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-10 uppercase">
          Embedded Systems and IoT Guidelines
        </div>
        <div className="py-12 lg:py-0 mx-auto my-auto h-[100%] w-[90%] lg:w-[90%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center">
          <div className="my-auto mx-12 lg:mx-24 text-center">
            <h1 className="text-[#FF7A00] text-3xl lg:text-5xl">
              TRACK DESCRIPTION
            </h1>
          </div>

          <Image
            src={line}
            quality={100}
            className="my-8 hidden lg:flex"
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
          <h1 className="text-justify my-auto mx-12 lg:mx-24 lg:text-3xl pb-10 lg:pb-0">
            Dive into the world of Embedded Systems and the Internet of Things
            (IoT) by creating innovative projects that connect the physical and
            digital realms. Explore the potential of embedded technologies and
            IoT to solve real-world problems across various domains, from home
            automation to industrial applications.
          </h1>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 ">
          <h1 className="mb-6 text-4xl uppercase">
            Submissions from Participants
          </h1>

          <h1 className="text-orange-500 uppercase">Project Description</h1>
          <p>
            Participants should provide a clear and concise description of their
            project, explaining the problem they aim to solve or the IoT
            application they intend to create.
          </p>

          <h1 className="text-orange-500 uppercase">Problem Statement</h1>
          <p>
            Elaborate on the significance of the project by highlighting the
            real-world problem or need that the project addresses. Emphasize the
            potential impact and benefits.
          </p>

          <h1 className="text-orange-500 uppercase">Solution Overview</h1>
          <p>
            Describe how the project utilizes embedded systems and IoT
            technology to address the identified problem or create a valuable
            IoT application. Highlight any innovative approaches or features.
          </p>

          <h1 className="text-orange-500 uppercase">GitHub Repository</h1>
          <p>
            Each team must create a GitHub repository for their project with the
            following format:  &quot;PROJECTNAME_TECHNEXT2024.&quot;
          </p>

          <h1 className="text-orange-500 uppercase">
            Additional Submission Requirements
          </h1>
          <p>
            <strong>Hardware Demonstration:</strong> Include a live or recorded
            demonstration of the project, showcasing its functionality and how
            it interacts with the physical world.
          </p>
          <p>
            <strong>Code Documentation:</strong> Provide well-documented code
            and clear instructions for setting up and running the embedded
            system or IoT project. Include any necessary hardware connections
            and configurations.
          </p>
          <p>
            <strong>Project Report:</strong> Submit a comprehensive project
            report detailing the design choices, challenges faced, and lessons
            learned during the development process. Include insights into the
            embedded systems and IoT technologies used.
          </p>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-6 uppercase">
          IoT Project Domains
        </div>
        <ul
          className="list-disc ml-20 mr-4 text-base sm:text-xl"
          style={{
            fontFamily: "Futura Md BT",
            fontStyle: "normal",
          }}
        >
          <li>Home Automation</li>
          <li>Health and Wellness</li>
          <li>Smart Agriculture</li>
          <li>Environmental Monitoring</li>
          <li>Industrial IoT (IIoT)</li>
          <li>Smart Cities</li>
          <li>Energy Management</li>
          <li>Transportation and Logistics</li>
          <li>Retail and Inventory Management</li>
          <li>Education and EdTech</li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-6 uppercase">
          Embedded Systems Project Domains
        </div>
        <ul
          className="list-disc ml-20 mr-4 text-base sm:text-xl"
          style={{
            fontFamily: "Futura Md BT",
            fontStyle: "normal",
          }}
        >
          <li>Automotive Systems</li>
          <li>Consumer Electronics</li>
          <li>Robotics and Automation</li>
          <li>Healthcare Devices</li>
          <li>Industrial Control Systems</li>
          <li>Aerospace and Aviation</li>
          <li>Smart Appliances</li>
          <li>Wearable Technology</li>
          <li>Audio and Music Systems</li>
          <li>Security Systems</li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 ">
          <h1 className="mb-6 text-4xl uppercase">
            {" "}
            Data Requirements (if applicable)
          </h1>
          <p>
            For projects involving data collection and analysis within the IoT
            context, participants should specify the types of data they are
            collecting and how it contributes to the project&apos;s functionality.
            Provide proper attribution if third-party data sources are used.
          </p>
        </div>

        <div className="w-full flex justify-end px-24 pb-10 mt-20">
          <Image src={expo} alt="expo-mark" quality={100} />
        </div>
      </div>
    </>
  );
}

export default Guidelines3;
