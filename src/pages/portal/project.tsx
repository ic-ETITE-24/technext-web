import Image from "next/image";
import logo from "@/assets/portal/logo-icon.svg";
import { MdOutlineAccountCircle } from "react-icons/md";
import { PiBellSimpleBold } from "react-icons/pi";
import { BsFillSquareFill } from "react-icons/bs";
import Hamburger from "hamburger-react";
import Head from "next/head";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import { BsArrowLeftSquare } from "react-icons/bs";
import { BiSolidCommentEdit } from "react-icons/bi";
import Link from "next/link";
import RefreshToken from "@/utils/refreshToken";
import Logout from "@/utils/logout";
import axios from "axios";
import Router from "next/router";
import React from "react";
import { Spinner } from "@nextui-org/react";

interface projectData {
  data: {
    name: string;
    project_track: string;
    desc: string;
    github: string;
    figma: string;
    video: string;
    drive: string;
  };
  message: string;
  status: boolean;
}

const Project = () => {
  const [isOpen, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEditted, setIsEditted] = useState(false);
  const [name, setName] = useState<string | undefined>("");
  const [track, setTrack] = useState<string | undefined>("");
  const [desc, setDesc] = useState<string | undefined>("");
  const [github, setGithub] = useState<string | undefined>("");
  const [figma, setFigma] = useState<string | undefined>("");
  const [video, setVideo] = useState<string | undefined>("");
  const [drive, setDrive] = useState<string | undefined>("");
  const nameRef = useRef<HTMLInputElement>(null);
  const githubRef = useRef<HTMLInputElement>(null);
  const figmaRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLInputElement>(null);
  const driveRef = useRef<HTMLInputElement>(null);
  const trackRef = useRef<HTMLSelectElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    async function getDashboard(): Promise<void> {
      try {
        const access_token: string | null =
          localStorage.getItem("access_token");
        await RefreshToken();
        const response = await axios.get<projectData>(
          `${process.env.NEXT_PUBLIC_BASE_URL}/project/get`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );

        if (response.data.status) {
          setIsSubmitted(true);
          setName(response.data.data.name);
          setTrack(response.data.data.project_track);
          setDesc(response.data.data.desc);
          setGithub(response.data.data.github);
          setFigma(response.data.data.figma);
          setVideo(response.data.data.video);
          setDrive(response.data.data.drive);
        } else {
          setIsSubmitted(false);
          setName("");
          setTrack("");
          setDesc("");
        }
      } catch (err) {}
    }

    void getDashboard();
  }, []);

  function handleEdit(): void {
    setIsEditted(true);
    setIsSubmitted(false);
  }

  async function handleSubmit(): Promise<void> {
    const topContainer = document.querySelector(".topContainer");

    if (topContainer) {
      topContainer.scrollIntoView({
        behavior: "smooth", // or 'auto' for immediate scroll
        block: "start", // Scroll to the top of the element
      });
    }
    if (
      nameRef.current?.value &&
      trackRef.current?.value &&
      descRef.current?.value &&
      githubRef.current?.value &&
      figmaRef.current?.value &&
      videoRef.current?.value &&
      driveRef.current?.value
    ) {
      const obj = {
        name: nameRef.current.value.trim(),
        project_track: trackRef.current.value,
        desc: descRef.current.value.trim(),
        github: githubRef.current.value.trim(),
        figma: figmaRef.current.value.trim(),
        video: videoRef.current.value.trim(),
        drive: driveRef.current.value.trim(),
      };

      try {
        const access_token: string | null =
          localStorage.getItem("access_token");
        await RefreshToken();
        if (isEditted) {
          const response = await axios.post<projectData>(
            `${process.env.NEXT_PUBLIC_BASE_URL}/project/update`,
            obj,
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
              },
            }
          );
          if (response.data.status) {
            toast.success("Project updated successfully");
            setIsSubmitted(true);
            setIsEditted(false);
          } else {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            void Router.push("/portal");
          }
        } else {
          const response = await axios.post<projectData>(
            `${process.env.NEXT_PUBLIC_BASE_URL}/project/create`,
            obj,
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
              },
            }
          );
          if (response.data.status) {
            toast.success("Project submitted successfully");
            setIsSubmitted(true);
            setIsEditted(false);
          } else {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");
            void Router.push("/portal");
          }
        }
      } catch (err) {}
    } else {
      toast.error("Please fill all the fields");
    }
  }
  return (
    <>
      <Head>
        <title>Technext | Project Submission</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <div className="teamInfo text-white">
        <Toaster richColors closeButton position="top-right" theme="light" />
        <div className="flex w-full items-center justify-between pt-6">
          <div className="mx-4 ml-5 flex w-[300px] items-center justify-between sm:ml-12 sm:w-[350px] lg:ml-20">
            <Image
              className="flex w-[38px] sm:w-[52px] topContainer"
              src={logo as HTMLImageElement}
              alt="logo"
            />
            <span className="box mx-3 text-[8px] uppercase sm:mx-5 sm:text-sm">
              Second International Conference on Emerging Trends in Information
              Technology and Engineering{" "}
              <span className="text-[#FF7A00]">TECHNEXT EXPO 2024</span>
            </span>
          </div>
          <div className="mr-4 flex items-center justify-end text-center max-[380px]:flex-wrap">
            {/* <div className="mx-[10px] flex">
              <div className="bdcn flex items-center px-2 text-[10px] uppercase hover:text-gray-300 active:text-white sm:text-xl">
                <PiBellSimpleBold />
                &nbsp;Announcements
              </div>
            </div> */}
            <button
              className="bdcn mx-[15px] my-1 hidden items-center rounded-md bg-[#FF7A00] px-2 py-1 text-[10px] uppercase hover:bg-[#ff9837] hover:font-[400] hover:text-white active:bg-[#FF7A00] sm:mx-[30px] sm:rounded-lg sm:px-5 sm:py-2 sm:text-xl lg:flex"
              onClick={() => {
                void Logout();
              }}
            >
              <MdOutlineAccountCircle />
              &nbsp;Log out
            </button>
            <span className="bdcn flex items-center rounded-md uppercase hover:font-[400] hover:text-white active:bg-white active:text-[#ff9837] sm:mx-[30px] sm:rounded-lg lg:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} size={18} />
            </span>
          </div>
        </div>
        <div
          className={`ham absolute right-2 z-30 flex flex-col bg-[#FF7A00] px-10 py-8 text-center font-bold lg:hidden ${
            isOpen ? "" : "hidden"
          } rounded-2xl`}
        >
          <Link
            href="/portal/profile"
            onClick={() => setLoader(true)}
            className="mb-1 rounded-sm px-5 py-4 text-2xl text-[#f6f3f3ca] active:border-b-4 active:text-white"
          >
            <span>PROFILE</span>
          </Link>

          <Link
            href="/portal/teamInfo"
            onClick={() => setLoader(true)}
            className="mb-1 rounded-sm px-5 py-4 text-2xl text-[#f6f3f3ca] active:border-b-4 active:text-white"
          >
            <span>TEAM</span>
          </Link>
          <Link
            href="/portal/idea"
            className="mb-1 rounded-sm px-5 py-4 text-2xl text-[#f6f3f3ca] active:border-b-4 active:text-white"
          >
            <span className="mb-1 rounded-sm px-5 py-4 text-2xl text-[#f6f3f3ca] active:border-b-4 active:text-white">
              IDEA
            </span>
          </Link>

          <span className="mb-1 rounded-sm px-5 py-4 text-2xl text-[#f6f3f3ca] active:border-b-4 active:text-white">
            PROJECT
          </span>

          <Link
            href=""
            className="mb-1 rounded-sm px-5 py-4 text-2xl text-[#f6f3f3ca] active:border-b-4 active:text-white"
          >
            <button
              className="flex items-center"
              onClick={() => {
                void Logout();
              }}
            >
              <BsArrowLeftSquare />
              &nbsp;LOG OUT
            </button>
          </Link>
        </div>
        {loader && (
          <div className="absolute left-[50%] top-4 flex justify-center items-center text-[#d6a453] text-lg">
            <span>Loading...</span>&nbsp;&nbsp;
            <Spinner color="warning" />
          </div>
        )}
        <div className="flex flex-col items-center py-[30px] uppercase md:flex-row md:items-start md:justify-start md:py-[40px]">
          <div className="relative flex h-fit w-[90%] flex-col items-center rounded-3xl text-white md:mx-auto md:justify-center lg:mx-0 lg:w-[65%] lg:items-start">
            <h1
              className={`bdcn flex gap-x-4 text-4xl font-bold md:mx-10 md:text-5xl lg:mx-12 lg:text-5xl xl:mx-16 2xl:mx-20 2xl:text-7xl `}
            >
              Project Submission{" "}
              <button onClick={handleEdit}>
                <BiSolidCommentEdit
                  className={`text-[#FF7A00] ${
                    isSubmitted ? "block" : "hidden"
                  }`}
                />
              </button>
            </h1>

            <div className="flex w-[100%] flex-col items-center justify-start md:flex-row lg:ml-12 lg:mt-6">
              <div className="flex w-[100%] flex-col md:w-[50%] lg:w-[40%]">
                <div className="bdcn mx-8 my-6 flex h-fit flex-col rounded-md py-3 backdrop-blur-md backdrop-brightness-150">
                  <h1 className="mx-3 mb-1 text-2xl text-[#FF7A00]">
                    Project title:
                  </h1>
                  <input
                    type="text"
                    readOnly={isSubmitted}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    ref={nameRef}
                    placeholder="Enter project title"
                    className={`placeholder:[rgba(255, 255, 255, 0.53)] mx-3 block rounded-md border-2 bg-inherit px-4 py-2.5 lg:w-[93%] ${
                      isSubmitted && "cursor-default"
                    }`}
                  />
                </div>
                <div className="bdcn mx-8 flex h-fit flex-col rounded-md py-3 backdrop-blur-md backdrop-brightness-150">
                  <h1 className="mx-3 mb-1 text-2xl text-[#FF7A00]">Track:</h1>
                  <select
                    disabled={isSubmitted}
                    value={track}
                    onChange={(e) => setTrack(e.target.value)}
                    ref={trackRef}
                    className="mx-3 block rounded-md border-2 bg-inherit px-4 py-2.5 lg:w-[93%]"
                  >
                    <option value="">Select a Track</option>
                    <option
                      value="AR/VR and Mixed reality"
                      className="text-black"
                    >
                      AR/VR and Mixed reality
                    </option>
                    <option
                      value="Renewable energy and sustainability"
                      className="text-black"
                    >
                      Renewable energy and sustainability
                    </option>
                    <option
                      value="Embedded systems and IoT"
                      className="text-black"
                    >
                      Embedded systems and IoT
                    </option>
                    <option
                      value="Robotics and Automation"
                      className="text-black"
                    >
                      Robotics and Automation
                    </option>
                    <option value="AI and ML" className="text-black">
                      AI and ML
                    </option>
                    <option
                      value="Cybersecurity and Software Engineering Practices"
                      className="text-black"
                    >
                      Cybersecurity and Software Engineering Practices
                    </option>
                    <option value="Open Innovation" className="text-black">
                      Open Innovation
                    </option>
                  </select>
                </div>
                <div className="bdcn mx-8 mt-6 flex h-fit flex-col rounded-md py-3 backdrop-blur-md backdrop-brightness-150">
                  <h1 className="ml-3 text-2xl text-[#FF7A00]">
                    Brief Description:
                  </h1>
                  <textarea
                    readOnly={isSubmitted}
                    rows={5}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    ref={descRef}
                    placeholder="Description"
                    className={`placeholder:[rgba(255, 255, 255, 0.53)] mx-3 block resize-none rounded-md border-2 bg-inherit px-4 py-2.5 ${
                      isSubmitted && "cursor-default"
                    }`}
                  />
                </div>
              </div>
              <div className="mt-8 w-[100%] lg:w-[48%]">
                <div className="bdcn mx-8 flex h-fit flex-col rounded-md py-3 backdrop-blur-md backdrop-brightness-150">
                  <h1 className="ml-3 text-2xl text-[#FF7A00]">
                    Submission Links:
                  </h1>
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col">
                      <h1 className="mx-3 my-2 mb-1 text-base text-[#FF7A00]">
                        Github:
                      </h1>
                      <input
                        type="text"
                        readOnly={isSubmitted}
                        value={github}
                        ref={githubRef}
                        onChange={(e) => setGithub(e.target.value)}
                        placeholder="Github Link Here"
                        className={`placeholder:[rgba(255, 255, 255, 0.53)] mx-3 block rounded-md border-2 bg-inherit px-4 py-2.5 lg:w-[93%] ${
                          isSubmitted && "cursor-default"
                        }`}
                      />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="mx-3 my-2 mb-1 text-base text-[#FF7A00]">
                        Figma:
                      </h1>
                      <input
                        type="text"
                        readOnly={isSubmitted}
                        value={figma}
                        ref={figmaRef}
                        onChange={(e) => setFigma(e.target.value)}
                        placeholder="Figma Link Here"
                        className={`placeholder:[rgba(255, 255, 255, 0.53)] mx-3 block rounded-md border-2 bg-inherit px-4 py-2.5 lg:w-[93%] ${
                          isSubmitted && "cursor-default"
                        }`}
                      />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="mx-3 my-2 mb-1 text-base text-[#FF7A00]">
                        Google Drive:
                      </h1>
                      <input
                        type="text"
                        readOnly={isSubmitted}
                        value={drive}
                        ref={driveRef}
                        onChange={(e) => setDrive(e.target.value)}
                        placeholder="Google Drive Link Here"
                        className={`placeholder:[rgba(255, 255, 255, 0.53)] mx-3 block rounded-md border-2 bg-inherit px-4 py-2.5 lg:w-[93%] ${
                          isSubmitted && "cursor-default"
                        }`}
                      />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="mx-3 my-2 mb-1 text-base text-[#FF7A00]">
                        Video:
                      </h1>
                      <input
                        type="text"
                        readOnly={isSubmitted}
                        value={video}
                        ref={videoRef}
                        onChange={(e) => setVideo(e.target.value)}
                        placeholder="Video Link Here"
                        className={`placeholder:[rgba(255, 255, 255, 0.53)] mx-3 block rounded-md border-2 bg-inherit px-4 py-2.5 lg:w-[93%] ${
                          isSubmitted && "cursor-default"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex w-full justify-center">
              <button
                type="submit"
                onClick={() => {
                  void handleSubmit();
                }}
                disabled={isSubmitted}
                className="mx-auto w-[30%] rounded-md bg-[#FF7A00] hover:scale-105 hover:transition-transform active:scale-100 py-1.5 text-2xl text-white disabled:cursor-not-allowed disabled:bg-[#FF7A00] disabled:text-[#ffffff4d]"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="mt-[82px] hidden h-[60vh] w-[2.3px] rounded-3xl bg-white lg:block"></div>
          <div className="bdcn mx-auto my-auto hidden flex-col text-center lg:flex">
            <Link href="/portal/profile" onClick={() => setLoader(true)}>
              <div className="flex justify-evenly">
                <div className="mb-3 text-4xl text-[#ffffff80]">PROFILE</div>
                <BsFillSquareFill className="mb-3 self-center text-xs text-[#FF7A00]" />
              </div>
            </Link>
            <Link href="/portal/teamInfo" onClick={() => setLoader(true)}>
              <div className="flex justify-evenly">
                <div className="mb-3 text-4xl text-[#ffffff4d]">TEAM</div>
                <BsFillSquareFill className="mb-3 self-center text-xs text-[#FF7A00]" />
              </div>
            </Link>
            <Link href="/portal/idea">
              <div className="flex justify-evenly">
                <div className="mb-3 text-2xl text-[#ffffff4d]">IDEA</div>
                <BsFillSquareFill className="mb-3 self-center text-xs text-[#FF7A00]" />
              </div>
            </Link>

            <div className="flex justify-evenly">
              <div className="animate-text-growth mb-3 text-4xl text-[#ffffff80]">
                PROJECT
              </div>
              <BsFillSquareFill className="mb-3 ml-12 rotate-45 self-center text-lg text-[#FF7A00]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
