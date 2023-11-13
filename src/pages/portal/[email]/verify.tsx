import Image from "next/image";
import logo from "@/assets/portal/logo-icon.svg";
import { MdOutlineAccountCircle } from "react-icons/md";
import { PiBellSimpleBold } from "react-icons/pi";
import { z } from "zod";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Head from "next/head";
import { useRouter } from "next/router";
import axios, { type AxiosError } from "axios";
import { Toaster, toast } from "sonner";
import React from "react";

interface ApiResponse {
  message: string;
}

const Verify = () => {
  const [getOtpLoader, setGetOtpLoader] = useState(false);
  const [toresend, setToResend] = useState(false);
  const [resendOtp, setResendOtp] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const { email } = router.query;
  }, [router.query]);

  const { email } = router.query;
  const mail = email;

  const formVal = resendOtp
    ? z.object({
        email: z.string(),
      })
    : z.object({
        email: z.string(),
        otp: z.string({
          required_error: "Required",
        }),
      });
  const formik = useFormik({
    initialValues: {
      email: mail,
      otp: "",
    },
    validationSchema: toFormikValidationSchema(formVal),
    validateOnChange: true,
    onSubmit: async (values) => {
      const val = resendOtp
        ? {
            email: mail,
          }
        : {
            email: mail,
            otp: Number(values.otp),
          };
      try {
        if (resendOtp) {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/users/verify`,
            val
          );
          setGetOtpLoader(false);
          setSendingOtp(false);
        } else {
          const response = await axios.patch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/users/verify`,
            val
          );
          toast.success("Email verified. You will be re-routed shortly.");
          setTimeout(() => {
            void router.push("/portal");
          }, 2000);
          // if (response.data == true) {
          // }
        }
        // await router.push("/dashboard");
      } catch (error) {
        setGetOtpLoader(false);
        setSendingOtp(false);
        if (axios.isAxiosError(error)) {
          const response = error.response;
          if (response) {
            const errorMessage =
              (response.data as ApiResponse).message ||
              "An unknown error occurred.";
            if (errorMessage === "User already verified") {
              toast.error(
                `Error: ${errorMessage}. You will be rerouted shortly.`
              );
              setTimeout(() => {
                void router.push("/portal");
              }, 2000);
            }
          } else {
            toast.error("Network error or other issue occurred.");
          }
        } else {
          toast.error("An unexpected error occurred.");
        }
      }
    },
  });
  async function resendOTP(): Promise<void> {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/verify`,
        {
          email: email,
        }
      );
      if (response.data.status == true) {
        toast.success("Verification email has been re-sent.");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const aerror = error as AxiosError;
        if (aerror.response?.status === 409) {
          toast.error("User already verified");
        } else if (aerror.response?.status === 404) {
          toast.error("User not found");
        } else {
          toast.error("Server error. Please try again later");
        }
      } else {
        toast.error("Server error. Please try again later");
      }
    }
  }
  return (
    <>
      <Head>
        <title>Technext | Verify</title>
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
            <span className="bdcn mx-[15px] my-1 hidden items-center rounded-md bg-[#FF7A00] px-2 py-1 text-[10px] uppercase hover:bg-[#ff9837] hover:font-[400] hover:text-white active:bg-[#FF7A00] sm:mx-[30px] sm:rounded-lg sm:px-5 sm:py-2 sm:text-xl md:flex">
              <MdOutlineAccountCircle />
              &nbsp;Log out
            </span>
          </div>
        </div>
        <div>
          <div className="bdcn flex flex-col justify-center py-[30%] text-center sm:items-center md:py-[50px]">
            <h1 className="text-5xl font-semibold md:text-7xl ">
              OTP REQUIRED
            </h1>
            <form className="mt-8" onSubmit={formik.handleSubmit}>
              <div className="bdcn flex flex-col items-center justify-center text-left  md:items-start ">
                <div>
                  {toresend && (
                    <>
                      <h1 className="mt-2 text-lg font-bold text-white">
                        Email:
                      </h1>
                      <input
                        className="mt-3 w-[75vw] rounded-md bg-[#4b4b4b] px-[33px] py-[6px] text-lg font-semibold text-[#D9D9D999] md:w-[25vw] md:py-[6px] md:text-2xl 2xl:py-[10px]"
                        id="email"
                        type="text"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={mail}
                        placeholder="Enter Email"
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="mx-auto w-[80%] lg:w-[98%]">
                          <span className="text-sm text-red-500">
                            {formik.errors.email}
                          </span>
                        </div>
                      )}{" "}
                    </>
                  )}
                  {!toresend && (
                    <>
                      <h1 className="mt-2 text-lg font-bold text-white">
                        OTP:
                      </h1>

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
                    </>
                  )}
                </div>

                {formik.touched.otp && formik.errors.otp && (
                  <div className="mx-auto w-[80%] lg:w-[98%]">
                    <span className="text-sm text-red-500">
                      {formik.errors.otp}
                    </span>
                  </div>
                )}
              </div>
              {!toresend && (
                <>
                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      className="text-md mb-2 mt-8 flex h-[5vh] w-[55vw] items-center justify-center rounded-md bg-[#FF7A00] px-[33px] py-[10px] text-center font-semibold text-white md:h-[7vh] md:w-[20vw] md:py-[12px] md:text-2xl"
                      onClick={() => {
                        setResendOtp(false);
                        setGetOtpLoader(true);
                      }}
                    >
                      <span>VERIFY</span>
                    </button>
                  </div>
                  <button
                    className="underline mt-1.5"
                    onClick={() => {
                      void resendOTP();
                    }}
                  >
                    Resend otp?
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verify;
