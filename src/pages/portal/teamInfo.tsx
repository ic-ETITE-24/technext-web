import Image from "next/image";
import logo from "@/assets/portal/logo-icon.svg";
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { PiBellSimpleBold } from "react-icons/pi";
import { BsFillSquareFill } from "react-icons/bs";
import Hamburger from "hamburger-react";
import Modal from "react-modal";
import { useState, useEffect } from "react";
import { BsArrowLeftSquare } from "react-icons/bs";
import { FaRegCopy } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import RefreshToken from "@/utils/refreshToken";
import axios, { AxiosError } from "axios";
import Router from "next/router";
import Logout from "@/utils/logout";
import { Toaster, toast } from "sonner";
import React from "react";
import { Spinner } from "@nextui-org/react";

interface UserData {
  status: boolean;
  team: {
    Name: string;
    code: string;
    Users: [
      {
        first_name: string;
        last_name: string;
      },
    ];
  };
}

interface leaveResponse {
  status: boolean;
  message: string;
}

const Main = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const team = ["Member 1", "Member 2", "Member 3", "Member 4"];
  const [members, setMembers] = useState<string[]>([]);
  const [name, setName] = useState<string | undefined>("");
  const [code, setCode] = useState<string>("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function getDashboard(): Promise<void> {
      try {
        const access_token: string | null =
          localStorage.getItem("access_token");
        await RefreshToken();
        const response = await axios.get<UserData>(
          `${process.env.NEXT_PUBLIC_BASE_URL}/teams`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        if (response.data.status) {
          for (const i of response.data.team.Users) {
            const member = i?.first_name + " " + i?.last_name;
            if (!members.includes(member)) {
              members.push(member);
            }
          }

          setName(response.data.team.Name.toUpperCase());
          setCode(response.data.team.code);
        } else {
          void Router.push("/portal/dashboard");
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          const error = err as AxiosError;
          if (error.response?.status === 404) {
            void Router.push("/portal/dashboard");
          } else if (error.response?.status === 400) {
            void Router.push("/portal");
          } else if (error.response?.status === 401) {
            void Router.push("/portal/payments");
            toast.error("User has not paid yet!");
          }
        }
      }
    }

    void getDashboard();
  }, []);

  async function leaveTeam(): Promise<void> {
    try {
      const access_token: string | null = localStorage.getItem("access_token");
      await RefreshToken();
      const response = await axios.get<leaveResponse>(
        `${process.env.NEXT_PUBLIC_BASE_URL}/teams/leave`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      if (response.data.status) {
        void Router.push("/portal/dashboard");
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {}
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
      <Head>
        <title>Technext | Team Details</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
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

            <button
              className="bdcn mx-[15px] my-1 hidden items-center rounded-md bg-[#FF7A00] px-2 py-1 text-[10px] uppercase hover:bg-[#ff9837] hover:font-[400] hover:text-white active:bg-[#FF7A00] sm:mx-[30px] sm:rounded-lg sm:px-5 sm:py-2 sm:text-xl md:flex"
              onClick={() => {
                void Logout();
              }}
            >
              <MdOutlineAccountCircle />
              &nbsp;Log out
            </button>
            <span className="bdcn flex items-center rounded-md uppercase hover:font-[400] hover:text-white active:bg-white active:text-[#ff9837] sm:mx-[30px] sm:rounded-lg md:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} size={18} />
            </span>
          </div>
        </div>
        <div
          className={`ham absolute right-2 z-30 flex flex-col bg-[#FF7A00] bg-opacity-90 px-10 py-8 text-center font-bold md:hidden ${
            isOpen ? "" : "hidden"
          } rounded-2xl`}
        >
          <Link
            href="/portal/profile"
            className="mb-1 rounded-sm px-5 py-4 text-2xl text-[#f6f3f3ca] active:border-b-4 active:text-white"
            onClick={() => setLoader(true)}
          >
            <span>PROFILE</span>
          </Link>

          <span className="mb-1 rounded-sm px-5 py-4 text-2xl text-[#f6f3f3ca] active:border-b-4 active:text-white">
            TEAM
          </span>

          <Link
            href="/portal/idea"
            onClick={() => setLoader(true)}
            className="mb-1 rounded-sm px-5 py-4 text-2xl text-[#f6f3f3ca] active:border-b-4 active:text-white"
          >
            <span>IDEA</span>
          </Link>
          {/* <Link
            href="/project"
            className="mb-1 rounded-sm px-5 py-4 text-2xl text-[#f6f3f3ca] active:border-b-4 active:text-white"
          >
            <span>PROJECT</span>
          </Link> */}

          <span
            className="mb-1 flex items-center rounded-sm px-5 py-4 text-2xl text-[#f6f3f3ca] active:border-b-4 active:text-white"
            onClick={() => {
              void Logout();
            }}
          >
            <BsArrowLeftSquare />
            &nbsp;LOG OUT
          </span>
        </div>
        {loader && (
          <div className="absolute left-[50%] top-4 flex justify-center items-center text-[#d6a453] text-lg">
            <span>Loading...</span>&nbsp;&nbsp;
            <Spinner color="warning" />
          </div>
        )}
        {/* <Menu>
          <Link href='/profile'><h1>PROFILE</h1></Link>
        </Menu> */}
        <div className="flex flex-col items-center uppercase md:flex-row md:items-start md:justify-start md:py-[40px]">
          <div className="relative flex h-[72vh] w-[50%] flex-col items-center justify-evenly rounded-3xl text-white md:w-[65%] md:items-start">
            <h1 className="bdcn text-4xl font-bold md:mx-10 md:text-5xl lg:mx-12 xl:mx-16 2xl:mx-20 2xl:text-7xl">
              {name}
            </h1>

            <form action="">
              <div className="md:ml-[5vw]">
                {members.map((member, index) => (
                  <input
                    key={index}
                    disabled
                    className="mb-3 w-[75vw] rounded-md bg-[#4b4b4b] px-[33px] py-[10px] text-lg font-semibold text-[#D9D9D999] md:w-[50vw] md:py-[12px] md:text-2xl"
                    id={`email_${index}`}
                    type="text"
                    placeholder={member}
                  />
                ))}
              </div>
            </form>
            <div className="flex flex-col md:mx-10 md:flex-row md:text-5xl lg:mx-12 lg:text-7xl xl:mx-16 2xl:mx-20">
              <div className="bdcn flex w-[60vw] items-center justify-between rounded-md bg-[#1e1f20] px-[30px] py-[10px] font-bold md:w-[20vw] md:px-[20px]">
                <div className="text-xs sm:text-base">Your Team Code</div>
                <div className="flex justify-center gap-x-2 rounded-md bg-black px-5 py-[10px] text-xs lowercase sm:text-base md:ml-2">
                  {code}{" "}
                  <button
                    onClick={() => {
                      void navigator.clipboard.writeText(code);
                    }}
                  >
                    <FaRegCopy />
                  </button>
                </div>
              </div>
              <Link href="">
                <span
                  className="box my-1 mt-2 flex items-center justify-center rounded-md px-2 py-1  text-base uppercase  hover:text-gray-300 sm:mx-[20px]  sm:rounded-lg sm:px-5 sm:py-2 sm:text-2xl"
                  onClick={openModal}
                >
                  Leave Team &nbsp;
                  <RiLogoutBoxLine className="text-2xl text-[#FF7A00] " />
                </span>
              </Link>
            </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              shouldCloseOnOverlayClick={true}
              style={{
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.73)",
                  backdropFilter: "blur(22px)",
                },
                content: {
                  backgroundColor: "rgba(108, 108, 108, 0.65)",
                  width: "60%",
                  height: "40vh",
                  margin: "auto",
                  border: "1px solid #ccc",
                  borderRadius: "12px",
                  padding: "20px",
                },
              }}
            >
              <div className="lg:mt-0">
                <h1 className="bdcn py-8 text-center text-3xl text-white md:text-4xl">
                  ARE YOU SURE YOU WANT TO LEAVE THE TEAM?
                </h1>
                <div className="mt-6 flex flex-col gap-y-3 lg:mt-12 lg:flex-row lg:justify-evenly lg:gap-y-0">
                  <button className="flex w-[60%] items-center justify-center self-center rounded-xl bg-white py-2 text-lg text-sm text-white sm:text-lg md:text-3xl lg:w-[30%] lg:py-2.5 lg:text-xl 2xl:py-3.5 2xl:text-3xl">
                    <button
                      className="box text-[#FF7A00]"
                      onClick={() => {
                        void leaveTeam();
                      }}
                    >
                      YES I&apos;M SURE
                    </button>
                  </button>
                  <button
                    className="flex w-[60%] justify-center self-center rounded-xl border-4 border-white py-2 text-lg text-sm text-white sm:text-lg md:text-3xl lg:w-[30%] lg:text-xl 2xl:border-8 2xl:text-3xl"
                    onClick={closeModal}
                  >
                    <span className="box">CANCEL AND CONTINUE</span>
                  </button>
                </div>
              </div>
            </Modal>
          </div>
          <div className="mt-[82px] hidden h-[60vh] w-[2.3px] rounded-3xl bg-white md:block"></div>
          <div className="bdcn mx-auto my-auto hidden flex-col text-center md:flex">
            <Link href="/portal/profile" onClick={() => setLoader(true)}>
              <div className="flex justify-around">
                <div className="mb-3 text-4xl text-[#ffffff80]">PROFILE</div>
                <BsFillSquareFill className="mb-3 self-center text-xs text-[#FF7A00]" />
              </div>
            </Link>

            <div className="flex justify-between">
              <div className="animate-text-growth mb-3 text-8xl text-white">
                TEAM
              </div>
              <BsFillSquareFill className="mb-3 ml-12 rotate-45 self-center text-lg text-[#FF7A00] " />
            </div>
            <Link href="/portal/idea" onClick={() => setLoader(true)}>
              <div className="flex justify-around">
                <div className="mb-3 text-4xl text-[#ffffff80]">IDEA</div>
                <BsFillSquareFill className="mb-3 self-center text-xs text-[#FF7A00]" />
              </div>
            </Link>
            {/* <Link href="/project">
              <div className="mb-8 flex justify-around">
                <div className="mb-3 text-2xl text-[#ffffff4d]">PROJECT</div>
                <BsFillSquareFill className="mb-3 self-center text-xs text-[#FF7A00]" />
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
