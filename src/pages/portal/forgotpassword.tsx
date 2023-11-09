import Image from "next/image";
import logo from "@/assets/portal/logo-icon.svg";
import { MdOutlineAccountCircle } from "react-icons/md";
import { PiBellSimpleBold } from "react-icons/pi";
import { z } from "zod";
import { useState } from "react";
import Head from "next/head";
import { useFormik } from "formik";
import { Toaster, toast } from "sonner";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useRouter } from "next/router";
import axios from "axios";
import React from "react";

interface ApiResponse {
  message: string;
}

const ForgotPassword = () => {
  const [getOtpLoader, setGetOtpLoader] = useState(false);
  const [getChangeLoader, setChangeLoader] = useState(false);
  const [isOtp, setIsOtp] = useState(false);
  const [resendOtp, setResendOtp] = useState(false);
  const router = useRouter();
  const formVal =
    !isOtp || resendOtp
      ? z.object({
          email: z.string({
            required_error: "Required",
          }),
        })
      : z.object({
          email: z.string({
            required_error: "Required",
          }),
          otp: z.string({
            required_error: "Required",
          }),
          password: z
            .string({
              required_error: "Required",
              invalid_type_error: "Password must be a string",
            })
            .regex(
              /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
              "Password should contain atleast 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character"
            ),
        });
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
      password: "",
    },
    validationSchema: toFormikValidationSchema(formVal),
    validateOnChange: true,
    onSubmit: async (values) => {
      const val =
        !isOtp || resendOtp
          ? {
              email: values.email,
            }
          : {
              email: values.email,
              otp: Number(values.otp),
              new_password: values.password,
            };
      try {
        if (!isOtp || resendOtp) {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/users/forgot`,
            val
          );
          setGetOtpLoader(false);
          setIsOtp(true);
        } else {
          setChangeLoader(true);
          setGetOtpLoader(false);
          const response = await axios.patch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/users/forgot`,
            val
          );

          setTimeout(() => {
            toast.success(
              "Password changed successfully! You will be re-routed to the login page."
            );
            void router.push("/portal");
          }, 4000);
          // if (response.data == true) {
          // }
        }
        // await router.push("/dashboard");
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
        <title>Technext | Forgot Password</title>
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
          </div>
        </div>
        <div>
          <div className="bdcn flex flex-col justify-center py-[30%] sm:py-[30%] text-center sm:items-center md:py-[30px] lg:py-[35px] 2xl:py-[100px]">
            <h1 className="text-2xl sm:text-4xl font-semibold md:text-6xl ">
              FORGOT PASSWORD
            </h1>
            <form className="mt-8" onSubmit={formik.handleSubmit}>
              <div className="bdcn flex flex-col items-center justify-center md:items-start ">
                <h1 className="mt-2 text-lg font-bold text-white text-left">
                  Email:
                </h1>
                <input
                  className="mt-3 w-[75vw] rounded-md bg-[#4b4b4b] px-[33px] py-[6px] text-lg font-semibold text-[#D9D9D999] md:w-[30vw] md:py-[4px] md:text-xl 2xl:py-[10px]"
                  id="email"
                  type="text"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="Enter Email"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="mx-auto w-[80%] lg:w-[98%]">
                    <span className="text-sm text-red-500">
                      {formik.errors.email}
                    </span>
                  </div>
                )}
                {isOtp && (
                  <div className="flex flex-col">
                    <h1 className="mt-2 text-lg font-bold text-white text-left">
                      OTP:
                    </h1>

                    <input
                      className="mt-3 w-[75vw] rounded-md bg-[#4b4b4b] px-[33px] py-[6px] text-lg font-semibold text-[#D9D9D999] md:w-[30vw] md:py-[4px] md:text-xl 2xl:py-[10px]"
                      id="otp"
                      type="text"
                      name="otp"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.otp}
                      placeholder="Enter Otp"
                    />
                    <h1 className="mt-2 text-lg font-bold text-white text-left">
                      New Password:
                    </h1>
                    <input
                      className="mt-3 w-[75vw] rounded-md bg-[#4b4b4b] px-[33px] py-[6px] text-lg font-semibold text-[#D9D9D999] md:w-[30vw] md:py-[4px] md:text-xl 2xl:py-[10px]"
                      id="password"
                      type="password"
                      name="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      placeholder="Enter New Password"
                    />
                  </div>
                )}
                {formik.touched.password && formik.errors.password && (
                  <div className="mx-auto w-[80%] lg:w-[98%]">
                    <span className="text-sm text-red-500">
                      {formik.errors.password}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="text-md mb-2 mt-8 flex h-[5vh] w-[40vw] sm:w-[30vw] items-center justify-center rounded-md bg-[#FF7A00] px-[33px] py-[10px] text-center font-semibold text-white md:h-[6vh] 2xl:h-[8px] md:w-[18vw] lg:w-[15vw] 2xl:w-[20vw] md:py-[7px] md:text-lg lg:text-xl 2xl:text-2xl"
                  onClick={() => {
                    setResendOtp(false);
                    setGetOtpLoader(true);
                  }}
                >
                  <span>{isOtp ? "VERIFY" : "GET OTP"}</span>
                </button>
              </div>
              {isOtp && (
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="text-md mb-2 mt-2 flex h-[5vh] w-[40vw] sm:w-[30vw] items-center justify-center rounded-md bg-[#FF7A00] px-[33px] py-[10px] text-center font-semibold text-white md:h-[6vh] 2xl:h-[8px] md:w-[18vw] lg:w-[15vw] 2xl:w-[20vw] md:py-[7px] md:text-lg lg:text-xl 2xl:text-2xl"
                    onClick={() => {
                      setResendOtp(true);
                      setGetOtpLoader(true);
                    }}
                  >
                    <span>Resend OTP</span>
                  </button>
                </div>
              )}
              {getOtpLoader && <span className="text-lg">Sending Otp...</span>}
              {getChangeLoader && <span className="text-lg">Veryfying...</span>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
