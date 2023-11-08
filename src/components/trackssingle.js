import Image from "next/image";
import CSS from "./tracks.module.css";
import expo from "../assets/expo-mark.png";
import line from "../assets/midline.png";
import line2 from "../assets/midlinem.png";

function Trackssingle() {
  return (
    <>
      <div className={CSS.background}>
        <div className="mx-10 text-white md:mx-20 text-lg sm:text-4xl font-[600] py-10 mb-12">
          TRACKS
        </div>
        <div className="flex flex-col gap-y-12">
          <div className="py-12 lg:py-0 mx-auto my-auto h-[80%] w-[80%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] sm:w-[60%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center">
            <div className="my-auto mx-12 lg:mx-24 text-center">
              <h1 className="text-[#FF7A00] text-4xl lg:text-6xl">
                AR/VR AND MIXED REALITY
              </h1>
            </div>

            <Image
              src={line}
              quality={100}
              className="my-10 hidden lg:flex"
              height={350}
              alt="line"
            />
            <Image
              src={line2}
              quality={100}
              width={350}
              className="mx-auto flex lg:hidden py-7"
              alt="line"
            />

            <div className="text-justify my-auto mx-12 lg:mx-24 text-xl pb-10 lg:pb-0">
              Immerse yourself in the cutting-edge realms of Augmented Reality
              (AR), Virtual Reality (VR), and Mixed Reality. Craft projects that
              seamlessly blend digital and physical worlds, pushing the
              boundaries of immersive experiences in industries ranging from
              education to entertainment.
            </div>
          </div>
          <div className="py-12 lg:py-0 mx-auto my-auto h-[80%] w-[80%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] sm:w-[60%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center ">
            <div className="my-auto mx-0.5 lg:mx-12 text-center">
              <h1 className="text-[#FF7A00] text-4xl lg:text-6xl">
                RENEWABLE ENERGY AND SUSTAINABILITY
              </h1>
            </div>

            <Image
              src={line}
              alt="line"
              quality={100}
              className="my-10 hidden lg:flex"
              height={350}
            />
            <Image
              src={line2}
              quality={100}
              width={350}
              alt="line"
              className="mx-auto flex lg:hidden py-7"
            />

            <div className="text-justify my-auto mx-12 lg:mx-12 text-xl">
              Embark on a journey through the frontiers of sustainable
              technology. Pioneering projects that harness the Earth&apos;s
              renewable resources like solar and wind, and engineer
              eco-conscious solutions to address global sustainability
              challenges, reflecting our commitment to a greener future.
            </div>
          </div>
          <div className="py-12 lg:py-0 lg:pr-8 mx-auto my-auto h-[80%] w-[80%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] sm:w-[60%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center ">
            <div className="my-auto mx-2 md:mx-8 lg:mx-24 text-center">
              <h1 className="text-[#FF7A00] text-4xl lg:text-6xl">
                EMBEDDED SYSTEMS AND IoT
              </h1>
            </div>

            <Image
              src={line}
              quality={100}
              className="my-10 hidden lg:flex"
              alt="line"
              height={350}
            />
            <Image
              src={line2}
              quality={100}
              alt="line"
              width={350}
              className="mx-auto flex lg:hidden py-7"
            />

            <div className="text-justify my-auto mx-12 lg:mx-12 text-xl pb-10 lg:pb-0">
              Step into the world of Embedded Systems and the Internet of Things
              (IoT) where innovation meets connectivity. Forge smart devices and
              interconnected systems that redefine convenience, efficiency, and
              connectivity, illustrating our dedication to the digital evolution
              of daily life.
            </div>
          </div>
          <div className="py-12 lg:py-0 lg:pr-8 mx-auto my-auto h-[80%] w-[80%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] sm:w-[60%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center ">
            <div className="my-auto mx-2 md:mx-8 lg:mx-24 text-center">
              <h1 className="text-[#FF7A00] text-4xl lg:text-6xl">
                ROBOTICS AND AUTOMATION
              </h1>
            </div>

            <Image
              src={line}
              quality={100}
              className="my-10 hidden lg:flex"
              alt="line"
              height={350}
            />
            <Image
              src={line2}
              quality={100}
              width={350}
              className="mx-auto flex lg:hidden py-7"
              alt="line"
            />

            <div className="text-justify my-auto mx-12 lg:mx-12 text-xl pb-10 lg:pb-0">
              Venture into the exciting universe of Robotics and Automation,
              where technology meets autonomy. Construct mechanical marvels and
              automated solutions that revolutionize industries, optimize
              processes, and entertain with cutting-edge sophistication.
            </div>
          </div>
          <div className="py-12 lg:py-0 lg:pr-8 mx-auto my-auto h-[80%] w-[80%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] sm:w-[60%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center ">
            <div className="my-auto mx-2 md:mx-8 lg:mx-24 text-center">
              <h1 className="text-[#FF7A00] text-4xl lg:text-6xl">AI AND ML</h1>
            </div>

            <Image
              src={line}
              quality={100}
              className="my-10 hidden lg:flex"
              alt="line"
              height={350}
            />
            <Image
              src={line2}
              quality={100}
              width={350}
              alt="line"
              className="mx-auto flex lg:hidden py-7"
            />

            <div className="text-justify my-auto mx-12 lg:mx-12 text-xl pb-10 lg:pb-0">
              Uncover the mysteries and potential of Artificial Intelligence
              (AI) and Machine Learning (ML). Develop projects that exhibit the
              intelligence and adaptability of machines, emphasizing data-driven
              decision-making, pattern recognition, and transformative
              applications across industries.
            </div>
          </div>
          <div className="py-12 lg:py-0 mx-auto my-auto h-[80%] w-[80%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] sm:w-[60%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center ">
            <div className="my-auto mx-0.5 lg:mx-12 text-center">
              <h1 className="text-[#FF7A00] text-4xl lg:text-6xl">
                CYBERSECURITY AND SOFTWARE ENGINEERING PRACTICES
              </h1>
            </div>

            <Image
              src={line}
              alt="line"
              quality={100}
              className="my-10 hidden lg:flex"
              height={350}
            />
            <Image
              src={line2}
              alt="line"
              quality={100}
              width={350}
              className="mx-auto flex lg:hidden py-7"
            />

            <div className="text-justify my-auto mx-12 lg:mx-12 text-xl">
              Fortify the digital frontier with a focus on Cybersecurity and
              other trending technologies like web3 and the art of Software
              Engineering. Illuminate projects that safeguard the virtual realm,
              optimize software development methodologies, and demonstrate
              unwavering commitment to securing the digital landscape using your
              development skills
            </div>
          </div>
          <div className="py-12 lg:py-0 lg:pr-8 mx-auto my-auto h-[80%] w-[80%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] sm:w-[60%] rounded-md pb-3 backdrop-blur-md backdrop-brightness-125 flex flex-col lg:flex-row lg:justify-center ">
            <div className="my-auto mx-2 md:mx-8 lg:mx-24 text-center">
              <h1 className="text-[#FF7A00] text-4xl lg:text-6xl">
                OPEN INNOVATION
              </h1>
            </div>

            <Image
              src={line}
              quality={100}
              alt="line"
              className="my-10 hidden lg:flex"
              height={350}
            />
            <Image
              src={line2}
              alt="line"
              quality={100}
              width={350}
              className="mx-auto flex lg:hidden py-7"
            />

            <div className="text-justify my-auto mx-12 lg:mx-12 text-xl pb-10 lg:pb-0">
              Embrace the ethos of Open Innovation, where knowledge knows no
              bounds. Showcase projects that epitomize collaborative synergy,
              blurring the lines between creators and innovators. Here, the
              collective power of shared ideas shapes the limitless future of
              technology
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center md:justify-end px-24 mt-24">
          <Image src={expo} alt="expo-mark" quality={100} />
        </div>
      </div>
    </>
  );
}

export default Trackssingle;
