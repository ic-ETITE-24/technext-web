// import JoinTeam from "@/pages/joinTeam";
import Head from "next/head";
import Link from "next/link";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Image from "next/image";
import logo from "@/assets/portal/logo.svg";
import { useRouter } from "next/router";
import axios, { type AxiosError } from "axios";
import { Toaster, toast } from "sonner";
import { useState } from "react";
import React from "react";

interface LoginResponse {
  status: boolean;
  message: string;
  access_token?: string | undefined;
  refresh_token?: string | undefined;
  verification_status?: string;
  paymet_status?: boolean;
  banned?: boolean;
  in_team: boolean;
}

export default function Home() {
  const [changeText, setChangeText] = useState(false);
  const [userVerified, setUserVerified] = useState(false);
  const storeAccessToken = (access_token: string) => {
    localStorage.setItem("access_token", access_token);
  };
  const storeRefreshToken = (refresh_token: string) => {
    localStorage.setItem("refresh_token", refresh_token);
  };
  const storeName = (username: string) => {
    localStorage.setItem("username", username);
  };
  const router = useRouter();
  const userSchema = z.object({
    email: z
      .string({
        required_error: "Required",
        invalid_type_error: "Email must be a string",
      })
      .email("Enter a valid email"),
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
      password: "",
    },
    validationSchema: toFormikValidationSchema(userSchema),
    validateOnChange: true,
    onSubmit: async (values) => {
      const send = {
        email: values.email,
        password: values.password,
      };
      try {
        setChangeText(true);
        const response = await axios.post<LoginResponse>(
          `${process.env.NEXT_PUBLIC_BASE_URL}/users/login`,
          send
        );
        if (response.status >= 200 && response.status < 300) {
          storeAccessToken(response.data?.access_token ?? "");
          storeRefreshToken(response.data?.refresh_token ?? "");
          if (response.data.in_team === true) {
            void router.push("/portal/teamInfo");
          } else if (response.data.in_team === false) {
            void router.push("/portal/dashboard");
          }
          // else if(response.data.paymet_status === false) {
          //   void router.push('/payment');
          // }
        }
      } catch (err) {
        setChangeText(false);
        if (axios.isAxiosError(err)) {
          const error = err as AxiosError;
          if (error.response?.status === 401) {
            toast.error("User has not been verified");
            setUserVerified(true);
          } else if (error.response?.status === 409) {
            toast.error("Wrong password");
          } else if (error.response?.status === 404) {
            toast.error("User not found");
          } else if (error.response?.status === 502) {
            toast.error("Server error");
          }
        }
      }
    },
  });

  async function resendOtp(): Promise<void> {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/users/verify`,
        {
          email: formik.values.email,
        }
      );
      if (response.data.status == true) {
        toast.success("Verification email has been sent. You will be rerouted shortly!");
        setTimeout(() => {
          void router.push(`/portal/${formik.values.email}/verify`);
        }, 2000);
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
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    formik;
  return (
    <>
      <Head>
        <title>Technext | Login</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <div className="Registers flex justify-center">
        <Toaster richColors closeButton position="top-right" theme="light" />
        <div className="hidden items-center justify-center lg:flex lg:w-[50%]">
          <Image src={logo as HTMLImageElement} alt="Icetite-logo" />
        </div>
        <div className="mx-8 my-auto h-fit w-[100%] rounded-md py-6 backdrop-blur-md backdrop-brightness-125 lg:w-[50%]">
          <div className="flex justify-center whitespace-pre pt-2 text-4xl text-white lg:text-5xl">
            <div className="selected">LOGIN </div>
            <Link href="/portal/register">
              <div className="unselected text-white/50">| REGISTER</div>
            </Link>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-center pt-12 lg:pt-16">
                <div>
                  <div className="mt-6 lg:mt-5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Email"
                      className={`mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-4 placeholder:text-[#00000036]
                      ${touched.email && errors.email ? "" : ""}`}
                    />
                    <div className="mx-auto w-[80%]">
                      <span className="text-sm text-red-500">
                        {touched.email && errors.email}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-6 lg:mt-6">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Password"
                      className={`mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-4 placeholder:text-[#00000036] ${
                        touched.password && errors.password
                          ? "ring-2 ring-inset ring-red-500"
                          : ""
                      } `}
                    />
                    <div className="mx-auto w-[80%]">
                      <span className="text-sm text-red-500">
                        {touched.password && errors.password}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={changeText}
                  className="mx-auto mt-6 w-[30%] hover:scale-105 hover:transition-transform active:scale-100 rounded-full bg-[#FF7A00] py-1.5 text-2xl text-white lg:mt-16 disabled:bg-orange-400"
                >
                  {!changeText ? "LOGIN" : "Logging In..."}
                </button>

                <Link href="/portal/forgotpassword">
                  <div className="text-white underline text-center mt-7 lg:mt-5 hover:scale-105 hover:transition-transform active:scale-100">
                    Forgot password?
                  </div>
                </Link>
              </div>
            </form>
            {userVerified && (
              <button
              type="submit"
                className="underline ham mx-auto pt-3 w-[30%] hover:scale-105 hover:transition-transform active:scale-100 rounded-full text-md text-white flex justify-center items-start"
                onClick={() => {
                  void resendOtp();
                }}
              >
                Resend OTP
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
