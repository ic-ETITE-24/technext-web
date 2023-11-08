import Image from "next/image";
import logo from "@/assets/portal/logo-icon.svg";
import { MdOutlineAccountCircle } from "react-icons/md";
import { PiBellSimpleBold } from "react-icons/pi";
import { z } from "zod";
import { useState } from "react";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useRouter } from "next/router";
import axios from "axios";
import { Toaster, toast } from "sonner";
import React from "react";

interface ApiResponse {
  message: string;
}

const Verify = () => {
  const [getOtpLoader, setGetOtpLoader] = useState(false);
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
        });
  const formik = useFormik({
    initialValues: {
      email: "",
      otp: "",
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
            };
      try {
        if (!isOtp || resendOtp) {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/users/verify`,
            val
          );
          setGetOtpLoader(false);
          setIsOtp(true);
        } else {
          const response = await axios.patch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/users/verify`,
            val
          );
          await router.push("/portal");
          // if (response.data == true) {
          // }
        }
        // await router.push("/dashboard");
      } catch (error) {
        setGetOtpLoader(false);
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
          <span className="bdcn mx-[15px] my-1 hidden items-center rounded-md bg-[#FF7A00] px-2 py-1 text-[10px] uppercase hover:bg-[#ff9837] hover:font-[400] hover:text-white active:bg-[#FF7A00] sm:mx-[30px] sm:rounded-lg sm:px-5 sm:py-2 sm:text-xl md:flex">
            <MdOutlineAccountCircle />
            &nbsp;Log out
          </span>
        </div>
      </div>
      <div>
        <div className="bdcn flex flex-col justify-center py-[30%] text-center sm:items-center md:py-[50px]">
          <h1 className="text-5xl font-semibold md:text-7xl ">OTP REQUIRED</h1>
          <form className="mt-8" onSubmit={formik.handleSubmit}>
            <div className="bdcn flex flex-col items-center justify-center text-left  md:items-start ">
              <h1 className="mt-2 text-lg font-bold text-white">Email:</h1>
              <input
                className="mt-3 w-[75vw] rounded-md bg-[#4b4b4b] px-[33px] py-[6px] text-lg font-semibold text-[#D9D9D999] md:w-[25vw] md:py-[6px] md:text-2xl 2xl:py-[10px]"
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
                <div>
                  <h1 className="mt-2 text-lg font-bold text-white">OTP:</h1>

                  <input
                    className="mt-3 w-[75vw] rounded-md bg-[#4b4b4b] px-[33px] py-[6px] text-lg font-semibold text-[#D9D9D999] md:w-[25vw] md:py-[6px] md:text-2xl 2xl:py-[10px]"
                    id="otp"
                    type="text"
                    name="otp"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.otp}
                    placeholder="Enter Otp"
                  />
                </div>
              )}
              {formik.touched.otp && formik.errors.otp && (
                <div className="mx-auto w-[80%] lg:w-[98%]">
                  <span className="text-sm text-red-500">
                    {formik.errors.otp}
                  </span>
                </div>
              )}
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="text-md mb-2 mt-8 flex h-[5vh] w-[55vw] items-center justify-center rounded-md bg-[#FF7A00] px-[33px] py-[10px] text-center font-semibold text-white md:h-[7vh] md:w-[20vw] md:py-[12px] md:text-2xl"
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
                  className="text-md mb-2 mt-2 flex h-[5vh] w-[55vw] items-center justify-center rounded-md bg-[#FF7A00] px-[33px] py-[10px] text-center font-semibold text-white md:h-[7vh] md:w-[20vw] md:py-[12px] md:text-2xl"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verify;
