import Image from "next/image";
import css from "./regulations.module.css";
import expo from "../assets/expo-mark.png";
import line from "../assets/midline.png";
import line2 from "../assets/midlinem.png";

function Guidelines3() {
  return (
    <>
      <div className={css.bg}>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-10 uppercase">
          Robotics and Automation
        </div>
        <div className="py-12 lg:py-0 mx-auto my-auto h-[80%] w-[80%] lg:w-[80%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center">
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

          <div className="text-justify my-auto mx-12 lg:mx-24 text-xl pb-10 lg:pb-0">
            Venture into the exciting universe of Robotics and Automation, where
            technology meets autonomy. Construct mechanical marvels and
            automated solutions that revolutionize industries, optimize
            processes, and entertain with cutting-edge sophistication.
          </div>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Submissions from Participants
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">Project description-</span>{" "}
            Participants must provide detailed description of their project.
          </li>
          <li>
            <span className="text-orange-500">Problem statement:</span>{" "}
            Participants should clearly define the problem their project aims to
            solve using Robotics and Automation.
          </li>
          <li>
            <span className="text-orange-500">Solution:</span> Participants must
            explain how their project will effectively address the identified
            problem and contribute to the domain of Robotics and Automation.
          </li>
          <li>
            <span className="text-orange-500">GitHub Repository:</span> Each
            team must create a GitHub repository for their project with the
            following format: &quot;PROJECTNAME_TECHNEXT2024.&quot;
          </li>
          <li>
            <span className="text-orange-500">
              Additional Submission Requirements:{" "}
            </span>
            Specify any additional submission requirements for the track, such
            as video demos, code documentation, or project reports.
          </li>
          <li>
            <span className="text-orange-500">
              Data Requirements (if applicable):{" "}
            </span>
            If the project involves AI/ML or data analysis, participants should
            include details about the dataset(s) they are using or working on.
          </li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Best and Safe Practices
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">
              Hardware Prototypes (if applicable):{" "}
            </span>{" "}
            Ensure that hardware prototypes adhere to safety standards and do
            not pose any harm to users or bystanders.
          </li>
          <li>
            <span className="text-orange-500">Software Security: </span>
            Emphasize that software submissions should not engage in any harmful
            activities, such as network tampering, hacking, or unethical data
            collection.
          </li>
          <li>
            <span className="text-orange-500">Ethical Considerations: </span>
            Encourage participants to consider ethical implications related to
            their projects, especially in fields like AI and biotechnology.
          </li>
          <li>
            <span className="text-orange-500">Environmental Impact: </span>
            Encourage sustainable practices and consider the environmental
            impact of hardware prototypes or energy-intensive projects.
          </li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Projects domains
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
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
          AR/VR and Mixed Reality
        </div>
        <div className="py-12 lg:py-0 mx-auto my-auto h-[80%] w-[80%] lg:w-[80%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center">
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

          <div className="text-justify my-auto mx-12 lg:mx-24 text-xl pb-10 lg:pb-0">
            Immerse yourself in the cutting-edge realms of Augmented Reality
            (AR), Virtual Reality (VR), and Mixed Reality. Craft projects that
            seamlessly blend digital and physical worlds, pushing the boundaries
            of immersive experiences in industries ranging from education to
            entertainment.
          </div>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Submissions from Participants
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">Project description-</span>{" "}
            Participants must provide a clear description of their project,
            outlining the problem they aim to address or the experience they
            intend to create.
          </li>
          <li>
            <span className="text-orange-500">Problem statement:</span> Explain
            why participants are working on this project, emphasizing the
            real-world problem or need they intend to solve.
          </li>
          <li>
            <span className="text-orange-500">Solution:</span> Describe how the
            project will solve the identified problem or meet the need,
            highlighting the innovative use of AR/VR/MR technology.
          </li>
          <li>
            <span className="text-orange-500">GitHub Repository:</span> Each
            team must create a GitHub repository for their project with the
            following format: &quot;PROJECTNAME_TECHNEXT2024.&quot;
          </li>
          <li>
            <span className="text-orange-500">
              Data Requirements (if applicable):{" "}
            </span>
            For projects involving AI/ML or data analysis, participants should
            specify the dataset(s) they are using or working on and provide
            proper attribution if applicable.
          </li>
        </ul>

        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Additional Submission Requirements
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">Video Demo: </span>Include a video
            demonstration showcasing the functionality and immersive aspects of
            the project.
          </li>
          <li>
            <span className="text-orange-500">Code Documentation: </span>Provide
            well-documented code and instructions for setting up and running the
            project.
          </li>
          <li>
            <span className="text-orange-500">Project Report: </span>Submit a
            project report detailing the design choices, challenges faced, and
            lessons learned during development.
          </li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Best and Safe Practices
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">
              Hardware Prototypes (if applicable):{" "}
            </span>{" "}
            Ensure that hardware prototypes adhere to safety standards and do
            not pose any harm to users or bystanders.
          </li>
          <li>
            <span className="text-orange-500">Software Security: </span>
            Emphasize that software submissions should not engage in any harmful
            activities, such as network tampering, hacking, or unethical data
            collection.
          </li>
          <li>
            <span className="text-orange-500">Ethical Considerations: </span>
            Encourage participants to consider ethical implications related to
            their projects, especially in fields like AI and biotechnology.
          </li>
          <li>
            <span className="text-orange-500">Environmental Impact: </span>
            Encourage sustainable practices and consider the environmental
            impact of hardware prototypes or energy-intensive projects.
          </li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Projects domains
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>Education</li>
          <li>Healthcare</li>
          <li>Training and Simulation</li>
          <li>Tourism and Cultural Heritage</li>
          <li>Space Exploration</li>
          <li>Architecture and Design</li>
          <li>Industrial Applications</li>
          <li>Social Interaction</li>
          <li>Home and Personal Assistance</li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-10 uppercase">
          open innovation
        </div>
        <div className="py-12 lg:py-0 mx-auto my-auto h-[80%] w-[80%] lg:w-[80%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center">
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

          <div className="text-justify my-auto mx-12 lg:mx-24 text-xl pb-10 lg:pb-0">
            Embrace the ethos of Open Innovation, where knowledge knows no
            bounds. Showcase projects that epitomize collaborative synergy,
            blurring the lines between creators and innovators. Here, the
            collective power of shared ideas shapes the limitless future of
            technology.
          </div>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Submissions from Participants
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">Project description-</span>{" "}
            Participants must provide a clear description of their project,
            highlighting its collaborative nature and the innovative
            problem-solving aspect.
          </li>
          <li>
            <span className="text-orange-500">Problem statement:</span> Explain
            why participants are working on this project, emphasizing the
            real-world problem they aim to address through collaboration.
          </li>
          <li>
            <span className="text-orange-500">Solution Overview:</span> Describe
            how the project leverages collaboration to solve the identified
            problem and drive innovation.
          </li>
          <li>
            <span className="text-orange-500">GitHub Repository:</span> Each
            team must create a GitHub repository for their project with the
            following format: &quot;PROJECTNAME_TECHNEXT2024.&quot;
          </li>
          <li>
            <span className="text-orange-500">
              Data Requirements (if applicable):{" "}
            </span>
            For projects involving AI/ML or data analysis, participants should
            specify the dataset(s) they are using or working on and provide
            proper attribution if applicable.
          </li>
        </ul>

        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Additional Submission Requirements
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">Video Demo: </span>Include a video
            demonstration showcasing the functionality and immersive aspects of
            the project.
          </li>
          <li>
            <span className="text-orange-500">Code Documentation: </span>Provide
            well-documented code and instructions for setting up and running the
            project.
          </li>
          <li>
            <span className="text-orange-500">Project Report: </span>Submit a
            project report detailing the design choices, challenges faced, and
            lessons learned during development.
          </li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Best and Safe Practices
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">
              Hardware Prototypes (if applicable):{" "}
            </span>{" "}
            Ensure that hardware prototypes adhere to safety standards and do
            not pose any harm to users or bystanders.
          </li>
          <li>
            <span className="text-orange-500">Software Security: </span>
            Emphasize that software submissions should not engage in any harmful
            activities, such as network tampering, hacking, or unethical data
            collection.
          </li>
          <li>
            <span className="text-orange-500">Ethical Considerations: </span>
            Encourage participants to consider ethical implications related to
            their projects, especially in fields like AI and biotechnology.
          </li>
          <li>
            <span className="text-orange-500">Environmental Impact: </span>
            Encourage sustainable practices and consider the environmental
            impact of collaborative projects, especially those involving
            hardware or energy-intensive components.
          </li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Projects domains
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>Education</li>
          <li>Healthcare</li>
          <li>Environmental Sustainability</li>
          <li>Environmental Finance and Fintech</li>
          <li>Augmented Reality (AR) and Virtual Reality (VR)</li>
          <li>Artificial Intelligence (AI) and Machine Learning (ML)</li>
          <li>Social Impact</li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-10 uppercase">
          Renewable and Sustainable projects
        </div>
        <div className="py-12 lg:py-0 mx-auto my-auto h-[80%] w-[80%] lg:w-[80%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center">
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

          <div className="text-justify my-auto mx-12 lg:mx-24 text-xl pb-10 lg:pb-0">
            The Renewable and Sustainable Projects track in Technext 2024
            focuses on innovative projects that address environmental, climatic,
            and sustainable development challenges. Participants in this track
            are expected to create projects that contribute to renewable energy,
            sustainability, or environmental conservation.
          </div>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Submissions from Participants
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">Project description-</span>{" "}
            Participants must provide a detailed description of their project.
          </li>
          <li>
            <span className="text-orange-500">Problem statement:</span>{" "}
            Participants must clearly articulate the problem your project
            addresses.
          </li>
          <li>
            <span className="text-orange-500">Solution Overview:</span>{" "}
            Participants must explain how your project will effectively address
            the identified problem and contribute to renewable energy,
            sustainability, or environmental conservation.
          </li>
          <li>
            <span className="text-orange-500">GitHub Repository:</span> Each
            team must create a GitHub repository for their project with the
            following format: &quot;PROJECTNAME_TECHNEXT2024.&quot;
          </li>
          <li>
            <span className="text-orange-500">
              Data Requirements (if applicable):{" "}
            </span>
            If your project involves AI/ML or data analysis, provide details
            about the dataset(s) you are using or working on.
          </li>
        </ul>

        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Additional Submission Requirements
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">Video Demo: </span>Include a video
            demonstration showcasing the functionality and immersive aspects of
            the project.
          </li>
          <li>
            <span className="text-orange-500">Code Documentation: </span>Provide
            well-documented code and instructions for setting up and running the
            project.
          </li>
          <li>
            <span className="text-orange-500">Project Report: </span>Submit a
            project report detailing the design choices, challenges faced, and
            lessons learned during development.
          </li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Best and Safe Practices
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">
              Hardware Prototypes (if applicable):{" "}
            </span>{" "}
            Ensure that hardware prototypes adhere to safety standards and do
            not pose any harm to users or bystanders.
          </li>
          <li>
            <span className="text-orange-500">Software Security: </span>
            Emphasize that software submissions should not engage in any harmful
            activities, such as network tampering, hacking, or unethical data
            collection.
          </li>
          <li>
            <span className="text-orange-500">Ethical Considerations: </span>
            Encourage participants to consider ethical implications related to
            their projects, especially in fields like AI and biotechnology.
          </li>
          <li>
            <span className="text-orange-500">Environmental Impact: </span>
            Encourage sustainable practices and consider the environmental
            impact of hardware prototypes or energy-intensive projects.
          </li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Projects domains
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">Climatic Variables:</span>{" "}
            Includes climatic zones, climate variability, extreme events,
            climate change projections, and solar radiation.
          </li>
          <li>
            <span className="text-orange-500">Topography: </span>
            Involves drainage patterns, elevation, slopes, landform types, etc.
          </li>
          <li>
            <span className="text-orange-500">Soil: </span>
            Covers soil types, properties, and characteristics.
          </li>
          <li>
            <span className="text-orange-500">Water: </span>
            Encompasses water availability, abundance, quality, wastewater
            discharges, waste discharges, etc.
          </li>
          <li>
            <span className="text-orange-500">Air: </span>
            Addresses ambient air quality, including gaseous and particulate
            pollutants.
          </li>
          <li>
            <span className="text-orange-500">Biological: </span>
            Focuses on flora and fauna, including type, density, distribution,
            habitat requirements, economic significance, and more.
          </li>
          <li>
            <span className="text-orange-500">Land Use: </span>
            Deals with land use patterns, man-made features, designated areas,
            and incompatible land use attributes.
          </li>
          <li>
            <span className="text-orange-500">Socio-Economic Factors: </span>
            Encompasses demographic details, economy, services, housing,
            cultural aspects, and more of affected communities.
          </li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-10 uppercase">
          AI/ML
        </div>
        <div className="py-12 lg:py-0 mx-auto my-auto h-[80%] w-[80%] lg:w-[80%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center">
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

          <div className="text-justify my-auto mx-12 lg:mx-24 text-xl pb-10 lg:pb-0">
            The AI/ML Projects track in Technext 2024 is dedicated to projects
            that leverage Artificial Intelligence and Machine Learning to solve
            complex problems, enhance efficiency, and drive innovation.
            Participants in this track are expected to develop AI/ML-based
            solutions that showcase creativity and technical expertise.
          </div>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Submissions from Participants
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">Project description-</span>{" "}
            Participants must provide a detailed description of their AI/ML
            project.
          </li>
          <li>
            <span className="text-orange-500">Problem statement:</span>{" "}
            Participants should Clearly define the problem your project aims to
            solve using AI/ML.
          </li>
          <li>
            <span className="text-orange-500">Solution Overview:</span>{" "}
            Participants should Explain how your AI/ML project addresses the
            identified problem and its potential impact.
          </li>
          <li>
            <span className="text-orange-500">GitHub Repository:</span> Each
            team must create a GitHub repository for their project with the
            following format: &quot;PROJECTNAME_TECHNEXT2024.&quot;
          </li>
          <li>
            <span className="text-orange-500">
              Data Requirements (if applicable):{" "}
            </span>
            If your project involves AI/ML or data analysis, provide details
            about the dataset(s) you are using or working on.
          </li>
        </ul>

        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Additional Submission Requirements
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">Video Demo: </span>Include a video
            demonstration showcasing the functionality and immersive aspects of
            the project.
          </li>
          <li>
            <span className="text-orange-500">Code Documentation: </span>Provide
            well-documented code and instructions for setting up and running the
            project.
          </li>
          <li>
            <span className="text-orange-500">Project Report: </span>Submit a
            project report detailing the design choices, challenges faced, and
            lessons learned during development.
          </li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Best and Safe Practices
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">Ethical Considerations:</span>{" "}
            Participants are encouraged to consider ethical implications related
            to AI/ML projects, especially in areas like data privacy, bias, and
            fairness. Technext does not encourage or foster unethical activities
            , if found to be practicing in the above, they will be facing severe
            consequences
          </li>
          <li>
            <span className="text-orange-500">Software Security: </span>
            Participants should make sure that AI/ML software should not engage
            in any harmful activities, such as network tampering, hacking, or
            unethical data collection.
          </li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Projects domains
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">Healthcare:</span> Using AI/ML for
            medical diagnosis, treatment optimization, or healthcare management.
          </li>
          <li>
            <span className="text-orange-500">Finance: </span>
            Implementing AI/ML in financial modeling, fraud detection, or
            investment strategies.
          </li>
          <li>
            <span className="text-orange-500">
              Natural Language Processing (NLP):{" "}
            </span>
            Developing AI-driven language processing applications.
          </li>
          <li>
            <span className="text-orange-500">Computer Vision: </span>
            Utilizing AI/ML for image or video analysis.
          </li>
          <li>
            <span className="text-orange-500">Recommendation Systems: </span>
            Creating AI-powered recommendation algorithms.
          </li>
          <li>
            <span className="text-orange-500">Predictive Analytics: </span>
            Employing AI/ML for predictive modeling and forecasting.
          </li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-10 uppercase">
          Cybersecurity and software engineering practices
        </div>
        <div className="py-12 lg:py-0 mx-auto my-auto h-[80%] w-[80%] lg:w-[80%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center">
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

          <div className="text-justify my-auto mx-12 lg:mx-24 text-xl pb-10 lg:pb-0">
            Track Description-Fortify the digital frontier with a focus on
            Cybersecurity and other trending technologies like web3 and the art
            of Software Engineering. Illuminate projects that safeguard the
            virtual realm, optimize software development methodologies, and
            demonstrate unwavering commitment to securing the digital landscape
            using your development skills.
          </div>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Submissions from Participants
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">Project description-</span>{" "}
            Participants must provide detailed description of their project.
          </li>
          <li>
            <span className="text-orange-500">Problem statement:</span>{" "}
            Participants should clearly define the problem their project aims to
            solve using Cybersecurity and Software engineering practices.
          </li>
          <li>
            <span className="text-orange-500">Solution Overview:</span>{" "}
            Participants must explain how their project will effectively address
            the identified problem and contribute to Cybersecurity and software
            engineering practices domains.
          </li>
          <li>
            <span className="text-orange-500">GitHub Repository:</span> Each
            team must create a GitHub repository for their project with the
            following format: &quot;PROJECTNAME_TECHNEXT2024.&quot;
          </li>
          <li>
            <span className="text-orange-500">
              Data Requirements (if applicable):{" "}
            </span>
            If your project involves AI/ML or data analysis, provide details
            about the dataset(s) you are using or working on.
          </li>
        </ul>

        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Additional Submission Requirements
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">Video Demo: </span>Include a video
            demonstration showcasing the functionality and immersive aspects of
            the project.
          </li>
          <li>
            <span className="text-orange-500">Code Documentation: </span>Provide
            well-documented code and instructions for setting up and running the
            project.
          </li>
          <li>
            <span className="text-orange-500">Project Report: </span>Submit a
            project report detailing the design choices, challenges faced, and
            lessons learned during development.
          </li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Best and Safe Practices
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">Ethical Considerations:</span>{" "}
            Participants are encouraged to consider ethical implications related
            to AI/ML projects, especially in areas like data privacy, bias, and
            fairness. Technext does not encourage or foster unethical activities
            , if found to be practicing in the above, they will be facing severe
            consequences
          </li>
          <li>
            <span className="text-orange-500">Software Security: </span>
            Participants should make sure that AI/ML software should not engage
            in any harmful activities, such as network tampering, hacking, or
            unethical data collection.
          </li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Projects domains
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">For cybersecurity-</span>
            <ol className="list-decimal ml-6">
              <li>Network security</li>
              <li>Information security</li>
              <li>Application security</li>
              <li>End-point security</li>
              <li>Cloud security</li>
              <li>Cryptography</li>
              <li>Security Architecture and Design</li>
            </ol>
          </li>
          <li>
            <span className="text-orange-500">
              For software engineering practices-
            </span>
            <ol className="list-decimal ml-6">
              <li>Web development</li>
              <li>Mobile-app development</li>
              <li>Desktop-application development</li>
              <li>Embedded systems</li>
              <li>Cloud computing</li>
              <li>Data science and Big data</li>
              <li>Finance and Fintech</li>
              <li>Social media</li>
              <li>Government and public services</li>
            </ol>
          </li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl text-white font-[600] py-10 uppercase">
          Embedded Systems and IOT
        </div>
        <div className="py-12 lg:py-0 mx-auto my-auto h-[80%] w-[80%] lg:w-[80%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center">
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

          <div className="text-justify my-auto mx-12 lg:mx-24 text-xl pb-10 lg:pb-0">
            Dive into the world of Embedded Systems and the Internet of Things
            (IoT) by creating innovative projects that connect the physical and
            digital realms. Explore the potential of embedded technologies and
            IoT to solve real-world problems across various domains, from home
            automation to industrial applications.
          </div>
        </div>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Submissions from Participants
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">Project description-</span>{" "}
            Participants should provide a clear and concise description of their
            project, explaining the problem they aim to solve or the IoT
            application they intend to create.
          </li>
          <li>
            <span className="text-orange-500">Problem statement:</span>{" "}
            Elaborate on the significance of the project by highlighting the
            real-world problem or need that the project addresses. Emphasize the
            potential impact and benefits.
          </li>
          <li>
            <span className="text-orange-500">Solution Overview:</span> Describe
            how the project utilizes embedded systems and IoT technology to
            address the identified problem or create a valuable IoT application.
            Highlight any innovative approaches or features.
          </li>
          <li>
            <span className="text-orange-500">GitHub Repository:</span> Each
            team must create a GitHub repository for their project with the
            following format: &quot;PROJECTNAME_TECHNEXT2024.&quot;
          </li>
          <li>
            <span className="text-orange-500">
              Data Requirements (if applicable):{" "}
            </span>
            For projects involving data collection and analysis within the IoT
            context, participants should specify the types of data they are
            collecting and how it contributes to the project&apos;s functionality.
            Provide proper attribution if third-party data sources are used.
          </li>
        </ul>

        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Additional Submission Requirements
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">Video Demo: </span>Include a video
            demonstration showcasing the functionality and immersive aspects of
            the project.
          </li>
          <li>
            <span className="text-orange-500">Code Documentation: </span>Provide
            well-documented code and instructions for setting up and running the
            project.
          </li>
          <li>
            <span className="text-orange-500">Project Report: </span>Submit a
            project report detailing the design choices, challenges faced, and
            lessons learned during development.
          </li>
        </ul>
        <div className="mx-10 md:mx-20 text-lg sm:text-2xl text-white font-[600] py-10 uppercase">
          Projects domains
        </div>
        <ul className="list-disc ml-20 mr-4 text-base sm:text-lg">
          <li>
            <span className="text-orange-500">IoT Project Domains:</span>
            <ol className="list-decimal ml-6">
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
            </ol>
          </li>
          <li>
            <span className="text-orange-500">
              Embedded Systems Project Domains:
            </span>
            <ol className="list-decimal ml-6">
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
            </ol>
          </li>
        </ul>
        <div className="w-full flex justify-end px-24 pb-10 mt-20">
          <Image src={expo} alt="expo-mark" quality={100} />
        </div>
      </div>
    </>
  );
}

export default Guidelines3;
