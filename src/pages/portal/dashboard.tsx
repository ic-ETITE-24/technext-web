import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/portal/logo-icon.svg";
import { BsArrowLeftSquare } from "react-icons/bs";
import { MdOutlineAccountCircle, MdLogin } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa";
import { PiBellSimpleBold } from "react-icons/pi";
import { BiExit } from "react-icons/bi";
import Modal from "react-modal";
import Link from "next/link";
import Head from "next/head";
import { useRef } from "react";
import { useRouter } from "next/router";
import axios, { type AxiosError } from "axios";
import RefreshToken from "@/utils/refreshToken";
import Logout from "@/utils/logout";
import { Toaster, toast } from "sonner";

interface joinResponse {
  status: boolean;
  message: string;
}

interface createResponse {
  status: boolean;
  message: string;
  code?: string;
}

interface UserData {
  status: boolean;
  user?: {
    first_name: string;
    team: {
      ID: number;
    };
  };
}

const Dashboard = () => {
  const router = useRouter();

  const joinRef = useRef<HTMLInputElement>(null);
  const createRef = useRef<HTMLInputElement>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [teamCodeModalIsOpen, setTeamCodeModalIsOpen] =
    useState<boolean>(false);
  const [codeModal, setCodeModal] = useState<boolean>(false);
  const [modalName, setmodalName] = useState(true);
  const [teamCode, setTeamCode] = useState<string | undefined>("");
  const [name, setName] = useState<string | undefined>("");
  const [Loader, setLoader] = useState(false);

  useEffect(() => {
    async function getDashboard(): Promise<void> {
      try {
        const access_token: string | null =
          localStorage.getItem("access_token");
        await RefreshToken();
        const response = await axios.get<UserData>(
          `${process.env.NEXT_PUBLIC_BASE_URL}/users/me`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        if (response.data.user?.team.ID != 0) {
          void router.push("/portal/teamInfo");
        }
        if (response.data.status) {
          setName(response.data.user?.first_name.toUpperCase());
        } else {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          void router.push("/portal");
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          const error = err as AxiosError;
          if (error.response?.data === 400) {
            void router.push("/portal/teamInfo");
          } else if (error.response?.status === 401) {
            toast.error("User has not paid yet");
            void router.push("/portal/payments");
          } else if (error.response?.status === 502) {
            toast.error("Server error... Please try again later");
          }
        }
      }
    }

    void getDashboard();
  }, []);

  async function handleTeamAction(): Promise<void> {
    if (modalName) {
      if (joinRef.current?.value) {
        setLoader(true);
        try {
          const access_token: string | null =
            localStorage.getItem("access_token");
          await RefreshToken();
          const response = await axios.post<joinResponse>(
            `${process.env.NEXT_PUBLIC_BASE_URL}/teams/join`,
            {
              code: joinRef.current.value,
            },
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
              },
            }
          );
          setLoader(false);
          if (response.data.status === true) {
            void router.push("/portal/teamInfo");
          }
        } catch (err) {
          setLoader(false);
          if (axios.isAxiosError(err)) {
            const error = err as AxiosError;
            if (error.response?.data === 400) {
              void router.push("/portal/teamInfo");
            } else if (error.response?.status === 404) {
              closeModal();
              toast.error("Team not found");
            } else if (error.response?.status === 401) {
              closeModal();
              toast.error("User has not paid yet");
            } else if (error.response?.status === 502) {
              closeModal();
              toast.error("Server error... Please try again later");
            }
          }
        }
      } else {
        closeModal();
        toast.error("Please enter a team code");
      }
    } else {
      const access_token: string | null = localStorage.getItem("access_token");
      if (createRef.current?.value) {
        try {
          await RefreshToken();
          const response = await axios.post<createResponse>(
            `${process.env.NEXT_PUBLIC_BASE_URL}/teams`,
            {
              name: createRef.current.value,
            },
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
              },
            }
          );
          if (response.data.status === true) {
            setTeamCode(response.data.code);
            setCodeModal(true);
            setTeamCodeModalIsOpen(true);
          }
        } catch (err) {
          if (axios.isAxiosError(err)) {
            const error = err as AxiosError;
            if (error.response?.data === 400) {
              void router.push("/portal/teamInfo");
            } else if (error.response?.status === 401) {
              closeModal();
              toast.error("User has not paid yet");
            } else if (error.response?.status === 502) {
              toast.error("Server error... Please try again later");
            }
          }
        }
        // setTeamCodeModalIsOpen(!teamCodeModalIsOpen);
      } else {
        toast.error("Please enter a team name");
        closeModal();
      }
    }
  }
  Modal.setAppElement("#__next");

  const openModal = (action: string) => {
    setModalIsOpen(true);
    setmodalName(action === "join");
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Head>
        <title>Technext | Dashboard</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <div className={`teamInfo text-white`}>
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
          <div className="mr-4 flex flex-wrap items-center justify-end text-center">
            <div className="mx-[10px] flex">
              <div className="bdcn flex items-center px-2 text-[10px] uppercase hover:text-gray-300 active:text-white sm:text-xl">
                <PiBellSimpleBold />
                &nbsp;Announcements
              </div>
            </div>
            <button
              className="bdcn mx-[15px] my-1 flex items-center rounded-md bg-[#FF7A00] px-2 py-1 text-[10px] uppercase hover:bg-[#ff9837] hover:font-[400] hover:text-white active:bg-[#FF7A00] sm:mx-[30px] sm:rounded-lg sm:px-5 sm:py-2 sm:text-xl"
              onClick={() => {
                void Logout();
              }}
            >
              <MdOutlineAccountCircle />
              &nbsp;Log out
            </button>
          </div>
        </div>
        <div className="bdcn flex flex-col justify-center py-[100px] text-center sm:items-center md:py-[100px] lg:py-[65px] 2xl:py-[100px]">
          <h1 className="text-7xl font-semibold ">Welcome {name}</h1>
          <h1 className="box text-xl font-normal ">
            To proceed with Technext Expo 2024, pick one.
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center  py-[10px] uppercase  md:flex-row md:py-[10px]">
          <div
            className="flex h-[20vh] w-[60vw] items-center justify-center rounded-3xl bg-white text-[#FF7A00] md:h-[25vh] md:w-[30%]"
            onClick={() => openModal("join")}
          >
            <button onClick={() => openModal("join")}>
              <h1 className="text-center text-3xl font-bold md:text-5xl">
                Join Team
              </h1>
            </button>
          </div>

          <div className="mx-10 hidden h-[18vh] w-[2.3px] rounded-3xl bg-white md:block"></div>

          <div
            className="mt-10 flex h-[20vh] w-[60vw] items-center justify-center rounded-3xl bg-white text-[#FF7A00] md:mt-0  md:h-[25vh] md:w-[30%] "
            onClick={() => openModal("create")}
          >
            <button onClick={() => openModal("create")}>
              <h1 className="text-center text-3xl font-bold md:text-5xl">
                Create Team
              </h1>
            </button>
          </div>
        </div>
        <p className="bdcn flex justify-center py-[18px] text-center uppercase text-gray-400 sm:items-center md:py-[50px]">
          *Please review the regulation once before choosing any option
        </p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            backgroundColor: "rgba(255, 122, 0, 0.10)",
            backdropFilter: "blur(18.5px)",
          },
          content: {
            backgroundColor: "rgba(0, 0, 0, 0.41)",
            width: "60%",
            height: "50vh",
            margin: "auto",
            border: "1px solid #ccc",
            borderRadius: "12px",
            padding: "20px",
          },
        }}
      >
        <h1 className="bdcn py-4 text-center text-3xl text-4xl text-white">
          {modalName ? (
            <>
              <BsArrowLeftSquare
                className="absolute left-6 top-6 hidden cursor-pointer text-4xl md:flex"
                onClick={() => setModalIsOpen(false)}
              />
              Join Team
            </>
          ) : (
            <>
              <BsArrowLeftSquare
                className="absolute left-6 top-6 hidden cursor-pointer text-4xl md:flex"
                onClick={() => setModalIsOpen(false)}
              />
              Create Team
            </>
          )}
        </h1>

        {modalName ? (
          <div className="mx-auto my-4 w-[100%] flex-col rounded-md  py-3 text-white md:w-[75%] md:flex-row md:justify-evenly 2xl:mx-24">
            <form action="">
              <div className="flex justify-center">
                <input
                  className="w-[80%] rounded-md bg-[#4b4b4b] px-[33px] py-[8px] text-base font-semibold text-[#D9D9D999] md:w-[30vw] md:text-[22px]"
                  id="email"
                  type="text"
                  placeholder="Enter The Team Code"
                  ref={joinRef}
                />
              </div>
            </form>
          </div>
        ) : (
          <form>
            <div className="mx-auto mt-3 flex w-[100%] flex-col justify-center py-1 md:w-[50%] lg:mt-2 lg:py-2">
              <div>
                <div className="mx-auto mt-6 text-xl lg:mt-5">
                  <input
                    type="text"
                    name="tname"
                    id="tname"
                    autoComplete="tname"
                    // value={values.tname}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    placeholder="Team Name"
                    ref={createRef}
                    className="w-[100%] rounded-md bg-[#4b4b4b] px-[33px] py-[8px] text-base font-semibold text-[#D9D9D999] md:text-xl"
                  />
                  <div className="mx-auto w-[80%]">
                    <span className="text-sm text-red-500">
                      {/* {touched.tname && errors.tname} */}
                    </span>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </form>
        )}

        {/* {modalName && (
          <div className="box mt-10 text-center text-sm text-white md:text-lg">
            *Use this code to invite people
          </div>
        )} */}

        <div className="flex justify-center">
          <button
            className="mt-8 flex w-[60%] justify-center rounded-md bg-[#FF7A00] py-1.5 text-lg text-white  sm:w-[40%] sm:py-1 sm:text-lg md:py-2 md:text-2xl"
            onClick={() => {
              void handleTeamAction();
            }}
          >
            {modalName ? (
              <>
                {!Loader ? (
                  <span className="bdcn flex items-center">
                    Continue &nbsp;
                    <MdLogin />
                  </span>
                ) : (
                  <span className="bdcn flex items-center">
                    Loading... &nbsp;
                    <MdLogin />
                  </span>
                )}
              </>
            ) : (
              <>
                {Loader ? (
                  <span className="bdcn text-base lg:text-xl">Loading...</span>
                ) : (
                  <span className="bdcn text-base lg:text-xl">
                    GENERATE TEAM CODE
                  </span>
                )}
                {teamCodeModalIsOpen && codeModal && (
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    shouldCloseOnOverlayClick={false}
                    style={{
                      overlay: {
                        backgroundColor: "rgba(255, 122, 0, 0.10)",
                        backdropFilter: "blur(18.5px)",
                      },
                      content: {
                        backgroundColor: "rgba(0, 0, 0, 0.41)",
                        width: "60%",
                        height: "60vh",
                        margin: "auto",
                        border: "1px solid #ccc",
                        borderRadius: "12px",
                        padding: "20px",
                      },
                    }}
                  >
                    <h1 className="bdcn py-4 text-center text-2xl text-white sm:text-3xl md:text-4xl">
                      HERE&apos;S YOUR TEAM CODE
                    </h1>
                    <div className="mx-auto my-4 flex w-[100%] flex-col rounded-md bg-[#0000005e] py-3 text-white md:w-[75%] md:flex-row md:justify-evenly 2xl:mx-24">
                      <div className="bdcn self-center text-lg md:text-2xl">
                        Your Team Code
                      </div>
                      <div className="bdcn self-center rounded-md bg-[#00000075] px-3 py-1 text-lg md:text-2xl flex justify-center gap-x-3">
                        {teamCode}{" "}
                        <button
                          onClick={() => {
                            void navigator.clipboard.writeText(
                              teamCode ? teamCode : ""
                            );
                          }}
                        >
                          <FaRegCopy />
                        </button>
                      </div>
                    </div>
                    <div className="box mt-10 text-center text-sm text-white md:text-lg">
                      *Use this code to invite people
                    </div>
                    <div className="flex justify-center">
                      <button
                        className="mt-8 flex w-[60%] justify-center rounded-md bg-[#FF7A00] py-1.5 text-lg text-sm text-white sm:w-[40%] sm:py-1 sm:text-lg md:py-2 md:text-2xl"
                        onClick={() => {
                          void router.push("/portal/teamInfo");
                        }}
                      >
                        <Link href="/portal/teamInfo">
                          <span>CONTINUE TO DASHBOARD</span>
                        </Link>
                        <BiExit className="mt-1 hidden min-[1123px]:flex" />
                      </button>
                    </div>
                  </Modal>
                )}
              </>
            )}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Dashboard;
