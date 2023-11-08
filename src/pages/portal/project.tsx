import Image from "next/image";
import logo from "@/assets/portal/logo-icon.svg";
import { MdOutlineAccountCircle } from "react-icons/md";
import { PiBellSimpleBold } from "react-icons/pi";
import { BsFillSquareFill } from "react-icons/bs";
import Hamburger from "hamburger-react";
import Modal from "react-modal";
import { Toaster, toast } from "sonner";
import { useState, useRef } from "react";
import { BsArrowLeftSquare } from "react-icons/bs";
import Link from "next/link";
import React from "react";

const Project = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const githubRef = useRef<HTMLInputElement>(null);
  const figmaRef = useRef<HTMLInputElement>(null);
  const othersRef = useRef<HTMLInputElement>(null);
  function handleSubmit(): void {
    if (
      titleRef.current?.value &&
      githubRef.current?.value &&
      descRef.current?.value &&
      figmaRef.current?.value
    ) {
      const obj = {
        title: titleRef.current.value,
        description: descRef.current.value,
        github: githubRef.current.value,
        figma: figmaRef.current.value,
        others: othersRef.current?.value,
      };
    } else {
      toast.error("Please fill the all the required fields");
    }
  }
  Modal.setAppElement("#__next");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <div className="teamInfo text-white">
        <Toaster richColors closeButton position="top-right" theme="light" />
        <div className="flex w-full items-center justify-between pt-6">
          <div className="mx-4 ml-5 flex w-[300px] items-center justify-between sm:ml-12 sm:w-[350px] lg:ml-20">
            <Image
              className="flex w-[38px] sm:w-[52px]"
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
            <div className="mx-[10px] flex">
              <div className="bdcn flex items-center px-2 text-[10px] uppercase hover:text-gray-300 active:text-white sm:text-xl">
                <PiBellSimpleBold />
                &nbsp;Announcements
              </div>
            </div>
            <span className="bdcn mx-[15px] my-1 hidden items-center rounded-md bg-[#FF7A00] px-2 py-1 text-[10px] uppercase hover:bg-[#ff9837] hover:font-[400] hover:text-white active:bg-[#FF7A00] sm:mx-[30px] sm:rounded-lg sm:px-5 sm:py-2 sm:text-xl lg:flex">
              <MdOutlineAccountCircle />
              &nbsp;Log out
            </span>
            <span className="bdcn flex items-center rounded-md uppercase hover:font-[400] hover:text-white active:bg-white active:text-[#ff9837] sm:mx-[30px] sm:rounded-lg lg:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} size={18} />
            </span>
          </div>
        </div>
        <div
          className={`ham absolute right-2 z-30 flex flex-col bg-[#FF7A00] bg-opacity-90 px-10 py-8 text-center font-bold lg:hidden ${
            isOpen ? "" : "hidden"
          } rounded-2xl`}
        >
          <Link
            href="/portal/profile"
            className="mb-1 rounded-sm px-5 py-4 text-2xl text-[#f6f3f3ca] active:border-b-4 active:text-white"
          >
            <span>PROFILE</span>
          </Link>
          <Link
            href="/portal/teamInfo"
            className="mb-1 rounded-sm px-5 py-4 text-2xl text-[#f6f3f3ca] active:border-b-4 active:text-white"
          >
            <span>TEAM</span>
          </Link>
          <Link
            href="/portal/idea"
            className="mb-1 rounded-sm px-5 py-4 text-2xl text-[#f6f3f3ca] active:border-b-4 active:text-white"
          >
            <span>IDEA</span>
          </Link>

          <span>PROJECT</span>

          <Link
            href=""
            className="mb-1 rounded-sm px-5 py-4 text-2xl text-[#f6f3f3ca] active:border-b-4 active:text-white"
          >
            <span className="flex items-center">
              <BsArrowLeftSquare />
              &nbsp;LOG OUT
            </span>
          </Link>
        </div>
        {/* <Menu>
          <Link href='/profile'><h1>PROFILE</h1></Link>
        </Menu> */}
        <div className="mt-6 flex flex-col items-center py-[30px] uppercase md:flex-row md:items-start md:justify-start">
          <div className="relative flex h-[72vh] w-[90%] flex-col items-center rounded-3xl text-white md:mx-auto md:justify-center lg:mx-0 lg:w-[65%] lg:items-start">
            <h1 className="bdcn text-4xl font-bold md:mx-10 md:text-5xl lg:text-5xl 2xl:text-7xl lg:mx-20">
              Project Submission
            </h1>
            <div className=" flex w-[100%] flex-col items-center justify-start md:flex-row lg:ml-12">
              <div className="flex w-[100%] w-full flex-col md:w-[50%] lg:w-[40%]">
                <div className="bdcn mx-8 my-8 flex h-fit flex-col rounded-md py-3 backdrop-blur-md backdrop-brightness-150">
                  <h1 className="mx-3 mb-1 text-2xl text-[#FF7A00]">
                    Project title:
                  </h1>
                  <input
                    type="text"
                    ref={titleRef}
                    placeholder="Enter project title"
                    className=" placeholder:[rgba(255, 255, 255, 0.53)] mx-3 block rounded-md border-2 bg-inherit px-4 py-2.5 lg:w-[93%]"
                  />
                </div>
                <div className="w-[100%] ">
                  <div className="bdcn mx-8 flex h-fit flex-col rounded-md py-3 backdrop-blur-md backdrop-brightness-150">
                    <h1 className="ml-3 text-2xl text-[#FF7A00]">
                      Brief Description:
                    </h1>
                    <textarea
                      rows={4}
                      ref={descRef}
                      placeholder="Description"
                      className=" placeholder:[rgba(255, 255, 255, 0.53)] mx-3 block resize-none rounded-md border-2 bg-inherit px-4 py-2.5"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 w-[100%] lg:w-[48%]">
                <div className="bdcn mx-8 flex h-fit flex-col rounded-md py-3 backdrop-blur-md backdrop-brightness-150">
                  <h1 className="ml-3 text-2xl text-[#FF7A00]">
                    Submission Links:
                  </h1>
                  <h1 className="mx-3 my-2 mb-1 text-base text-[#FF7A00]">
                    Github:
                  </h1>
                  <input
                    type="text"
                    ref={githubRef}
                    placeholder="Github Link Here"
                    className=" placeholder:[rgba(255, 255, 255, 0.53)] mx-3 mb-1 block rounded-md border-2 bg-inherit px-4 py-2.5 lg:w-[93%]"
                  />
                  <h1 className="mx-3 my-2 mb-1 text-base text-[#FF7A00]">
                    Figma:
                  </h1>
                  <input
                    type="text"
                    ref={figmaRef}
                    placeholder="Figma Link Here"
                    className=" placeholder:[rgba(255, 255, 255, 0.53)] mx-3 mb-1 block rounded-md border-2 bg-inherit px-4 py-2.5 lg:w-[93%]"
                  />
                  <h1 className="mx-3 my-2 mb-1 text-base text-[#FF7A00]">
                    Others (optional) :
                  </h1>
                  <input
                    type="text"
                    ref={othersRef}
                    placeholder="Other Links Here"
                    className=" placeholder:[rgba(255, 255, 255, 0.53)] mx-3 block rounded-md border-2 bg-inherit px-4 py-2.5 lg:w-[93%]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 flex w-full justify-center">
              <button
                type="submit"
                onClick={handleSubmit}
                className="mx-auto mb-6 w-[30%] rounded-md bg-[#FF7A00] py-1.5 text-2xl text-white"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="mt-[59px] hidden h-[60vh] w-[2.3px] rounded-3xl bg-white lg:block"></div>
          <div className="bdcn mx-auto my-auto hidden flex-col text-center lg:flex">
            <Link href="/portal/profile">
              <div className="flex justify-evenly">
                <div className="mb-3 text-2xl text-[#ffffff4d]">PROFILE</div>
                <BsFillSquareFill className="mb-3 self-center text-xs text-[#FF7A00]" />
              </div>
            </Link>
            <Link href="/portal/teamInfo">
              <div className="flex justify-evenly">
                <div className="mb-3 text-4xl text-[#ffffff4d]">TEAM</div>
                <BsFillSquareFill className="mb-3 self-center text-xs text-[#FF7A00]" />
              </div>
            </Link>
            <Link href="/portal/idea">
              <div className="flex justify-evenly">
                <div className="mb-3 text-4xl text-[#ffffff4d]">IDEA</div>
                <BsFillSquareFill className="mb-3 self-center text-xs text-[#FF7A00]" />
              </div>
            </Link>

            <div className="mb-8 flex justify-between">
              <div className="animate-text-growth mb-3 text-8xl text-white">
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
