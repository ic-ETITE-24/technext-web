import Image from "next/image";
import logo from "@/assets/portal/logo-icon.svg";
import { MdOutlineAccountCircle, MdLogin } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { PiBellSimpleBold } from "react-icons/pi";
import { BsFillSquareFill } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";
import { BsArrowLeftSquare } from "react-icons/bs";
import Link from "next/link";
import { z } from "zod";
import Head from "next/head";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import RefreshToken from "@/utils/refreshToken";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import { Toaster, toast } from "sonner";
import { Spinner } from "@nextui-org/react";
import React from "react";

interface ApiResponse {
  message: string;
}

interface UserData {
  status: boolean;
  user: {
    first_name: string;
    last_name: string;
    gender: string;
    date_of_birth: string;
    bio: string;
    phone_number: string;
  };
}

const Profile = () => {
  const router = useRouter();
  const [editPass, setEditPass] = useState(false);
  const [editDetails, setEditDetails] = useState(true);
  const [editName, setEditName] = useState(false);
  const [first_name, setFirst_Name] = useState<string | undefined>("");
  const [last_Name, setLastName] = useState<string | undefined>("");
  const [gender, setGender] = useState<string | undefined>("");
  const [date_of_birth, setdate_of_birth] = useState<string | undefined>("");
  const [phone_number, setphone_number] = useState<string | undefined>("");
  const [bio, setbio] = useState<string | undefined>("");

  const [isOpen, setOpen] = useState(false);
  const [changeInnerText, setChangeInnerText] = useState(false);
  const [changeInnerTextPass, setChangeInnerTextPass] = useState(false);
  const [loader, setLoader] = useState(false);

  const [changePasswordMode, setChangePasswordMode] = useState(false);
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
        if (response.data.status) {
          setFirst_Name(response.data.user.first_name.toUpperCase());
          setLastName(response.data.user.last_name.toUpperCase());
          setGender(response.data.user.gender.toUpperCase());
          setdate_of_birth(response.data.user.date_of_birth.toUpperCase());
          setphone_number(response.data.user.phone_number.toUpperCase());
          setbio(response.data.user.bio.toUpperCase());
        } else {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          void router.push("/portal");
        }
      } catch (err) {}
    }

    void getDashboard();
  }, []);

  // const formVal = z
  //   .object({
  //     // first_name: z.string({
  //     //   required_error: "Required",
  //     // }),
  //     // last_Name: z
  //     //   .string({
  //     //     required_error: "Required",
  //     //   }),

  //     phone_number: z.string({
  //       // required_error: "Required",
  //     }),
  //     bio: z.string({
  //       // required_error: "Required",
  //     }),
  //     gender: z.string({
  //       // required_error: "Required",
  //     }),
  //     date_of_birth: z.string({
  //       // required_error: "Required",
  //     }),
  //   })

  const formik = useFormik({
    initialValues: {
      first_name: first_name,
      last_Name: last_Name,
      phone_number: phone_number,
      bio: bio,
      gender: gender,
      date_of_birth: date_of_birth,
      oldPassword: "",
      newPassword: "",
    },
    // validationSchema: toFormikValidationSchema(formVal),
    // validateOnChange: true,
    onSubmit: async (values) => {
      const val = !changePasswordMode
        ? {
            first_name: values.first_name ?? first_name,
            last_Name: values.last_Name ?? last_Name,
            phone_number: values.phone_number ?? phone_number,
            bio: values.bio ?? bio,
            gender: values.gender ?? gender,
            date_of_birth: values.date_of_birth ?? date_of_birth,
          }
        : {
            old_Password: values.oldPassword,
            new_Password: values.newPassword,
          };
      try {
        changePasswordMode
          ? setChangeInnerTextPass(true)
          : setChangeInnerText(true);
        const access_token: string | null =
          localStorage.getItem("access_token");
        await RefreshToken();
        const apiUrl = changePasswordMode
          ? `${process.env.NEXT_PUBLIC_BASE_URL}/users/reset-pas`
          : `${process.env.NEXT_PUBLIC_BASE_URL}/users/update`;

        const method = changePasswordMode ? "POST" : "PATCH";

        const response = await axios.request<UserData>({
          method,
          url: apiUrl,
          data: val,
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        changePasswordMode
          ? setChangeInnerTextPass(false)
          : setChangeInnerText(false);
        // changePasswordMode?alert("Password reset successfull"):alert("Changes saved successfully")
        changePasswordMode
          ? toast.success("Password reset successfull")
          : toast.success("Changes saved successfully");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const response = error.response;
          if (response) {
            const errorMessage =
              (response.data as ApiResponse).message ||
              "An unknown error occurred.";
            toast.error(`Error: ${errorMessage}`);
          } else {
            toast.error("Network error or other issue occurred.");
          }
        } else {
          toast.error("An unexpected error occurred.");
        }
      }
    },
  });

  return (
    <>
      <Head>
        <title>Technext | Profile</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>

      <div className="teamInfo relative text-white">
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
            <span className="bdcn mx-[15px] my-1 hidden items-center rounded-md bg-[#FF7A00] px-2 py-1 text-[10px] uppercase hover:bg-[#ff9837] hover:font-[400] hover:text-white active:bg-[#FF7A00] sm:mx-[30px] sm:rounded-lg sm:px-5 sm:py-2 sm:text-xl md:flex">
              <MdOutlineAccountCircle />
              &nbsp;Log out
            </span>
            <span className="bdcn flex items-center rounded-md uppercase hover:font-[400] hover:text-white active:bg-white active:text-[#ff9837] sm:mx-[30px] sm:rounded-lg md:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} size={18} />
            </span>
          </div>
        </div>
        {loader && (
          <div className="absolute left-[50%] top-4 flex justify-center items-center text-[#d6a453] text-lg">
            <span>Loading...</span>&nbsp;&nbsp;
            <Spinner color="warning" />
          </div>
        )}
        
        <Toaster richColors closeButton position="top-right" theme="light" />
        <div
          className={`ham absolute right-2 z-30 flex flex-col bg-[#FF7A00] bg-opacity-90 px-10 py-8 text-center font-bold md:hidden ${
            isOpen ? "" : "hidden"
          } rounded-2xl`}
        >
          <span className="mb-1 rounded-sm px-5 py-4 text-2xl text-[#f6f3f3ca] active:border-b-4 active:text-white">
            PROFILE
          </span>

          <Link
            href="/portal/teamInfo"
            className="mb-1 rounded-sm px-5 py-4 text-2xl text-[#f6f3f3ca] active:border-b-4 active:text-white"
            onClick={() => setLoader(true)}
          >
            <span>TEAM</span>
          </Link>
          <Link
            href="/portal/idea"
            className="mb-1 rounded-sm px-5 py-4 text-2xl text-[#f6f3f3ca] active:border-b-4 active:text-white"
            onClick={() => setLoader(true)}
          >
            <span>IDEA</span>
          </Link>

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

          
        <div className="mt-16 flex flex-col items-center uppercase md:mt-0 md:flex-row md:items-start md:justify-start md:py-[40px]">
          <div className="relative flex h-[72vh] w-[50%] flex-col items-center justify-evenly rounded-3xl text-white md:w-[65%] md:items-center">
            <div className={`flex items-center flex-col md:flex-row justify-center px-[33px] `}>
                <div
                  className={`text-md mb-4 md:mb-2 mt-3 flex h-[5vh] w-[40vw] items-center justify-center cursor-pointer rounded-md  px-[33px] py-[10px] text-center font-semibold text-xl text-white lg:text-3xl md:h-[7vh] md:w-[20vw] md:py-[12px] md:text-2xl ${!editDetails?"opacity-50":""}`}
                  onClick={() => {
                    setEditDetails(!editDetails);setEditPass(!editPass)
                    
                  }}
                >
                  <span className={`${editDetails?"border-[#FF7A00] border-b-[3px]":""}`}>
                    Edit profile
                  </span>
                </div>
                <div
                  className={`text-md mb-2 mt-3 md:ml-6 ml-0 flex h-[5vh]  w-[40vw] items-center justify-center cursor-pointer rounded-md  px-[33px] py-[10px] text-center font-semibold  text-xl text-white lg:text-3xl md:h-[7vh] md:w-[20vw] md:py-[12px]  ${!editPass?"opacity-50":""}`}
                  onClick={() => {
                    setEditPass(!editPass);setEditDetails(!editDetails)
                  }}
                >
                  <span className={`${editPass?"border-[#FF7A00] border-b-[3px]":""}`}>
                    Edit Password
                  </span>
                </div>
              </div>
            <form
              className="flex flex-col md:mt-4"
              onSubmit={formik.handleSubmit}
            >
              {editDetails &&
              <>
                {editName ? (
                <>
                  <div className="flex flex-col items-center justify-end md:flex-row">
                    <input
                      className="mt-3 w-[75vw]  rounded-md bg-[#4b4b4b] px-[33px] py-[6px]  text-4xl font-semibold text-[#D9D9D999] md:w-[25vw] md:py-[6px] md:text-5xl 2xl:py-[10px]"
                      id="first_name"
                      type="text"
                      name="first_name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.first_name ?? first_name}
                      placeholder="first_name"
                    />
                    <input
                      className="mt-3 w-[75vw]  rounded-md bg-[#4b4b4b] px-[33px] py-[6px]  text-4xl font-semibold text-[#D9D9D999] md:ml-6 md:w-[25vw] md:py-[6px] md:text-5xl 2xl:py-[10px]"
                      id="last_Name"
                      type="text"
                      name="last_Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.last_Name ?? last_Name}
                      placeholder="last_Name"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-center">
                    <h1 className="bdcn mt-8 text-4xl font-bold md:mx-10 md:text-5xl lg:mx-12 lg:text-5xl xl:mx-16 2xl:mx-20 2xl:text-7xl">
                      {formik.values.first_name ?? first_name}{" "}
                      {formik.values.last_Name ?? last_Name}
                    </h1>
                    <BiSolidEdit
                      className="text-2xl"
                      onClick={() => setEditName(true)}
                    />
                  </div>
                </>
              )}

              <div className="bdcn flex grid-cols-2 flex-col gap-x-4 md:ml-[5vw] md:grid">
                <div>
                  <h1 className="   mt-2 text-xs  font-bold text-white">
                    Gender:
                  </h1>
                  <select
                    className="mt-3 w-[75vw] rounded-md bg-[#4b4b4b] px-[33px] py-[6px] text-lg font-semibold text-[#D9D9D999] md:w-[25vw] md:py-[6px] md:text-xl 2xl:py-[10px]"
                    id="gender"
                    name="gender"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.gender ?? gender}
                    placeholder="Gender"
                  >
                    <option value="" disabled className="ham text-[#fffdfddf]">
                      Select Gender
                    </option>
                    <option value="male" className="ham text-[#fffdfddf]">
                      Male
                    </option>
                    <option value="female" className="ham text-[#fffdfddf]">
                      Female
                    </option>
                    <option value="other" className="ham text-[#fffdfddf]">
                      Other
                    </option>
                  </select>
                  
                </div>
                <div>
                  <h1 className="   mt-2 text-xs  font-bold text-white">
                    Phone No:
                  </h1>
                  <input
                    className="mt-3 w-[75vw] rounded-md bg-[#4b4b4b] px-[33px] py-[6px] text-lg font-semibold text-[#D9D9D999] md:w-[25vw] md:py-[6px] md:text-xl 2xl:py-[10px]"
                    id="phone_number"
                    type="text"
                    name="phone_number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone_number ?? phone_number}
                    placeholder="Phone No"
                  />
                  
                </div>
                
                <div>
                  <h1 className="   mt-2 text-xs  font-bold text-white">
                    Date_Of_Birth:
                  </h1>

                  <input
                    className="mt-3 w-[75vw] rounded-md bg-[#4b4b4b] px-[33px] py-[6px] text-lg font-semibold text-[#D9D9D999] md:w-[25vw] md:py-[6px] md:text-xl 2xl:py-[10px]"
                    id="date_of_birth"
                    type="text"
                    name="date_of_birth"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.date_of_birth ?? date_of_birth}
                    placeholder="Date_Of_Birth"
                  />
                  
                </div>
                
                <div>
                  <h1 className="   mt-2 text-xs  font-bold text-white">
                    Bio:
                  </h1>
                  <textarea
                    className="mt-3 h-[15vh] w-[75vw] resize-none rounded-md bg-[#4b4b4b] px-[33px] py-[6px] text-lg font-semibold text-[#D9D9D999] md:w-[25vw] md:py-[10px] md:text-xl"
                    id="bio"
                    rows={3}
                    placeholder="BIO"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.bio ?? bio}
                  />
                </div>
              </div>
              <div className={`flex items-center justify-center `}>
                <button
                  type="submit"
                  disabled={changeInnerText}
                  className="text-md mb-2 mt-3 flex h-[5vh] w-[55vw] items-center justify-center rounded-md bg-[#FF7A00] px-[33px] py-[10px] text-center font-semibold text-white md:h-[7vh] md:w-[20vw] md:py-[12px] md:text-2xl hover:scale-105 hover:transition-transform active:scale-100 disabled:bg-orange-400"
                  onClick={() => {
                    setEditName(false);
                    setChangePasswordMode(false);
                  }}
                >
                  <span>{!changeInnerText ? "Save Changes" : "Saving..."}</span>
                </button>
              </div>
              </>
              
              }
              
              <div className={`flex flex-col items-center justify-end px-[33px] py-[6px] md:flex-row md:w-[60vw] ${!editPass?"hidden":""}`}>
                <input
                  className="mt-3 w-[75vw] rounded-md bg-[#4b4b4b] px-[33px] py-[6px] text-lg font-semibold text-[#D9D9D999] md:w-[25vw] md:py-[6px] md:text-xl 2xl:py-[10px]"
                  id="pass"
                  type="text"
                  name="oldPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.oldPassword}
                  placeholder="Old Password"
                />
                <input
                  className="mt-3 w-[75vw] rounded-md bg-[#4b4b4b] px-[33px] py-[6px] text-lg font-semibold text-[#D9D9D999] md:ml-6 md:w-[25vw] md:py-[6px] md:text-xl 2xl:py-[10px]"
                  id="pass"
                  type="text"
                  name="newPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.newPassword}
                  placeholder="New Password"
                />
              </div>
              <div className={`flex items-center justify-center ${!editPass?"hidden":""}`}>
                <button
                  type="submit"
                  disabled={changeInnerTextPass}
                  className="text-md mb-2 mt-3 flex h-[5vh] w-[55vw] items-center justify-center rounded-md bg-[#FF7A00] px-[33px] py-[10px] text-center font-semibold text-white md:h-[7vh] md:w-[20vw] md:py-[12px] md:text-2xl hover:scale-105 hover:transition-transform active:scale-100 disabled:bg-orange-400"
                  onClick={() => {
                    setEditName(false), setChangePasswordMode(true);
                  }}
                >
                  <span>
                    {!changeInnerTextPass ? "Reset Password" : "Loading..."}
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="mt-[82px] hidden h-[60vh] w-[2.3px] rounded-3xl bg-white md:block"></div>
          <div className="bdcn mx-auto my-auto hidden flex-col text-center md:flex">
            <div className="flex">
              <div className="animate-text-growth mb-3 text-4xl text-[#ffffff80]">
                PROFILE
              </div>
              <BsFillSquareFill className="mb-3 ml-12 rotate-45 self-center text-lg text-[#FF7A00]" />
            </div>

            <Link href="/portal/teamInfo" onClick={() => setLoader(true)}>
              <div className="flex justify-evenly">
                <div className="mb-3 text-4xl text-[#ffffff80]">TEAM</div>
                <BsFillSquareFill className="mb-3 self-center text-xs text-[#FF7A00] " />
              </div>
            </Link>
            <Link href="/portal/idea" onClick={() => setLoader(true)}>
              <div className="flex justify-evenly">
                <div className="mb-3 text-4xl text-[#ffffff80]">IDEA</div>
                <BsFillSquareFill className="mb-3 self-center text-xs text-[#FF7A00]" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
