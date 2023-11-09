import React, { useState } from "react";
import axios, { type AxiosError } from "axios";
import { Toaster, toast } from "sonner";
import RefreshToken from "@/utils/refreshToken";
import Head from "next/head";
import { useRouter } from "next/router";

interface PaymentResponse {
  access_token?: string | undefined;
  refresh_token?: string | undefined;
  PaymentLink: string;
  message: string;
  status: boolean;
}

export default function Payment() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pay = async () => {
    setIsSubmitting(true);
    try {
      await RefreshToken();

      const access_token: string | null = localStorage.getItem("access_token");

      if (!access_token) {
        throw new Error("Access token not found");
      }

      const response = await axios.get<PaymentResponse>(
        `${process.env.NEXT_PUBLIC_BASE_URL}/payment/initiate`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      );

      if (response.status >= 200 && response.status < 300) {
        toast.success("Initiation successful");
        setIsSubmitting(false);
        if (response.data?.PaymentLink) {
          const a = document.createElement("a");
          a.href = response.data.PaymentLink;
          a.target = "__blank";
          a.rel = "noreferrer noopener";
          a.click();
        }
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const aerror = error as AxiosError;
        if (aerror.response?.status === 400) {
          toast.error("Invalid data");
        } else if (aerror.response?.status === 404) {
          toast.error("User not found");
        } else if (aerror.response?.status === 406) {
          const msg = aerror.response?.data as {
            message: string;
            status: boolean;
          };
          if (msg.message === "Invoice already paid")
            toast.success("Invoice already paid");
          void router.push("/portal/dashboard");
        } else if (aerror.response?.status === 409) {
          toast.error("User already exists");
        } else {
          toast.error("Server error. Please try again later");
        }
      } else {
        toast.error("Server error. Please try again later");
      }
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Technext | Payments</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <div className="flex items-center justify-center Registers">
      <Toaster richColors closeButton position="top-right" theme="light" />
        <div className="flex flex-col gap-5  text-white ">
          
          <div className=" mx-auto xl:w-[35vw] rounded-[0.200rem] bg-[#0000005E] p-6 md:w-[40vw] sm:w-[60vw] w-[80vw]">
            <p className="adieu text-center text-2xl">
              Complete Payment to Login
            </p>
            <div>
              <div className="flex flex-col justify-center gap-2">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className={`${
                    isSubmitting ? "opacity-50" : ""
                  } adieu mx-auto mt-8 w-[80%] rounded-[0.200rem] bg-[#FF7A00] py-2.5  text-2xl tracking-wide text-white hover:scale-105 hover:transition-transform active:scale-100`}
                  onClick={() => void pay()}
                >
                  {isSubmitting ? "Please Wait... " : "PROCEED"}
                </button>
              </div>
            </div>
          </div>
          {/* <div className="mx-auto flex w-[25vw] flex-row items-center justify-between rounded-[0.200rem] bg-[#1E1E1E] p-4 px-[10%] text-white xl:w-[40vw] mdl:w-[60vw] sm:w-[80vw] sm:flex-col">
                    <p>Don't have an account yet?</p>
                    <button
                        type="submit"
                        className="hover:scale-105 hover:transition-transform active:scale-100  adieu mt-2 rounded-[0.200rem] bg-[#FFFD13] px-2 py-2.5 text-black"
                        onClick={handleRegister}
                    >
                        {"REGISTER"}
                    </button>
                </div> */}
        </div>
      </div>
    </>
  );
}