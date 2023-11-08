import Link from "next/link";
import { useFormik } from "formik";
import { date, z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "@/assets/portal/logo.svg";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Toaster, toast } from "sonner";
import React from "react";

interface ApiResponse {
  message: string;
}

function Register() {
  const router = useRouter();
  const [country, setCountry] = useState<string>("");
  const [inputType, setInputType] = useState("text");
  const handleFocus = () => {
    setInputType("date");
  };

  const handleblur = () => {
    setInputType("text");
  };

  const [changeText, setChangeText] = useState<boolean>(false);
  const userSchema = z
    .object({
      firstName: z
        .string({
          required_error: "Required",
          invalid_type_error: "First name must be a string",
        })
        .min(2, "First name must have min 2 chars")
        .max(20, "First name must have max 20 chars"),
      lastName: z
        .string({
          required_error: "Required",
          invalid_type_error: "Last name must be a string",
        })
        .max(20, "Last name must have max 20 chars"),
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
      phoneNo: z.string({
        required_error: "Required",
      }),
      gender: z.string({
        required_error: "Required",
      }),
      bio: z.string({
        required_error: "Required",
      }),
      confirmPassword: z.string({
        required_error: "Required",
        invalid_type_error: "Confirm password must be a string",
      }),
      country: z.string({
        required_error: "Required",
        invalid_type_error: "Country must be a string",
      }),
      date_of_birth: z.string({
        required_error: "Required",
      }),
      is_vitian: z.boolean({
        required_error: "Required",
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      country: country,
      date_of_birth: "",
      phoneNo: "",
      gender: "",
      bio: "",
      college: "",
      is_vitian: false,
    },
    validationSchema: toFormikValidationSchema(userSchema),
    validateOnChange: true,
    onSubmit: async (values) => {
      const send = {
        first_Name: values.firstName,
        last_Name: values.lastName,
        email: values.email,
        password: values.password,
        gender: values.gender,
        date_of_birth: formatDate(new Date(values.date_of_birth)),

        bio: values.bio,
        phone_number: values.phoneNo,
        github: "fsinbshn",
        country: values.country,
        college: "a",
        is_vitian: values.is_vitian,
      };
      try {
        setChangeText(true);
        const response = await axios.post(
          "https://bolt.vit.ac.in/api/users/signup",
          send
        );
        await router.push("/portal/verify");
      } catch (error) {
        setChangeText(false);
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
      // await router.push("/verify");
    },
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    formik;

  const formatDate = (date: Date) => {
    if (date) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`;
    }
    return "";
  };
  return (
    <div className="Registers flex justify-center overflow-hidden">
      <Toaster richColors closeButton position="top-right" theme="light" />
      <div className="hidden items-center justify-center lg:flex lg:w-[50%]">
        <Image src={logo as HTMLImageElement} alt="Icetite-logo" />
      </div>
      <div className="mx-8 my-auto h-fit w-[100%] rounded-md py-6 backdrop-blur-md backdrop-brightness-125 lg:w-[50%]">
        <div className="flex justify-center overflow-auto whitespace-pre pt-2 text-4xl text-white lg:text-5xl">
          <Link href="/portal">
            <div className="unselected text-white/50">LOGIN </div>
          </Link>
          <div className="selected">| REGISTER</div>
        </div>
        <div className="scrollable-form">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center">
              <div className="flex flex-col lg:w-[100%] lg:flex-row lg:justify-center">
                <div className="mt-11 lg:w-[40%]">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="First Name"
                      className={`mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036] lg:mx-0 lg:w-[99%]
                      ${touched.firstName && errors.firstName ? "" : ""}`}
                    />
                    <div className="mx-auto w-[80%] lg:w-[98%]">
                      <span className="text-xs text-red-500 md:text-sm">
                        {errors.firstName}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[40%]">
                  <div className="mt-3 lg:mt-11">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      autoComplete="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Last Name"
                      className={`mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036] lg:mx-0 lg:w-[99%]
                      ${touched.lastName && errors.lastName ? "" : ""}`}
                    />
                    <div className="mx-auto w-[80%] lg:w-[98%]">
                      <span className="text-xs text-red-500 md:text-sm">
                        {touched.lastName && errors.lastName}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-3 lg:mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email"
                    className={`mx-auto block w-[79.5%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036]
                      ${touched.email && errors.email ? "" : ""}`}
                  />
                  <div className="mx-auto w-[80%]">
                    <span className="text-xs text-red-500 md:text-sm">
                      {touched.email && errors.email}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col pr-0.5 lg:w-[100%] lg:flex-row lg:justify-center">
                <div className="lg:w-[40%]">
                  <div className="mt-3 lg:mt-2">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Password"
                      className={`mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036] lg:w-[18.7vw] ${
                        touched.password && errors.password
                          ? "ring-2 ring-inset ring-red-500"
                          : ""
                      } `}
                    />
                    <div className="mx-auto w-[80%]">
                      <span className="text-xs text-red-500 md:text-sm">
                        {touched.password && errors.password}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="lg:w-[40%]">
                    <div className="mt-3 lg:mt-2">
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Confirm Password"
                        className={`mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036] lg:w-[19vw]
                      ${
                        touched.confirmPassword && errors.confirmPassword
                          ? "ring-2 ring-inset ring-red-500"
                          : ""
                      }`}
                      />
                      <div className="mx-auto w-[80%]">
                        <span className="text-xs text-red-500 md:text-sm">
                          {touched.confirmPassword && errors.confirmPassword}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col pr-0.5 lg:w-[100%] lg:flex-row lg:justify-center">
                <div className="lg:w-[40%]">
                  <div className="mt-3 lg:mt-2">
                    <input
                      type="text"
                      name="phoneNo"
                      id="phoneNo"
                      value={values.phoneNo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Phone Number"
                      className={`mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036] lg:w-[18.7vw] ${
                        touched.phoneNo && errors.phoneNo
                          ? "ring-2 ring-inset ring-red-500"
                          : ""
                      } `}
                    />
                    <div className="mx-auto w-[80%]">
                      <span className="text-xs text-red-500 md:text-sm">
                        {touched.phoneNo && errors.phoneNo}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="lg:w-[40%]">
                    <div className="mt-3 lg:mt-2">
                      <ReactFlagsSelect
                        selected={country}
                        onSelect={(countryCode) => {
                          setCountry(countryCode);
                          formik.handleChange("country")(countryCode);
                          formik.handleBlur("country");
                        }}
                        placeholder="Select Country"
                        searchable
                        searchPlaceholder="Search countries"
                        className={`box mx-auto h-full w-[80%] rounded-md bg-[rgba(255,255,255,0.36)] lg:w-[19vw] text-black
                      ${
                        touched.country && errors.country
                          ? "ring-2 ring-inset ring-red-500"
                          : ""
                      }`}
                      />
                      <div className="mx-auto w-[80%]">
                        <span className="text-xs text-red-500 md:text-sm">
                          {touched.country && errors.country}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col pr-0.5 lg:w-[100%] lg:flex-row lg:justify-center">
                <div className="lg:w-[40%]">
                  <div className="mt-3 lg:mt-2">
                    <input
                      name="date_of_birth"
                      type={inputType}
                      onMouseEnter={handleFocus}
                      value={values.date_of_birth}
                      placeholder="Date of Birth"
                      onChange={(event) =>
                        void formik.setFieldValue(
                          "date_of_birth",
                          event.target.value
                        )
                      }
                      onBlur={handleblur}
                      className={`mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036] text-black lg:w-[18.7vw] ${
                        touched.date_of_birth && errors.date_of_birth
                          ? "ring-2 ring-inset ring-red-500"
                          : ""
                      } `}
                    />
                    <div className="mx-auto w-[80%]">
                      <span className="text-xs text-red-500 md:text-sm">
                        {touched.date_of_birth && errors.date_of_birth}
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="lg:w-[40%]">
                    <div className="mt-3 lg:mt-2">
                      <select
                        name="gender"
                        id="gender"
                        value={values.gender}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`box mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3.5 text-[#00000036] lg:w-[19vw]
                      ${
                        touched.gender && errors.gender
                          ? "ring-2 ring-inset ring-red-500"
                          : ""
                      }`}
                      >
                        <option value="" disabled className="ham text-black">
                          Select Gender
                        </option>
                        <option value="male" className="ham text-black">
                          Male
                        </option>
                        <option value="female" className="ham text-black">
                          Female
                        </option>
                        <option value="other" className="ham text-black">
                          Other
                        </option>
                      </select>
                      <div className="mx-auto w-[80%]">
                        <span className="text-xs text-red-500 md:text-sm">
                          {touched.gender && errors.gender}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="mt-3 lg:mt-2">
                  <textarea
                    name="bio"
                    id="bio"
                    value={values.bio}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Bio"
                    rows={3}
                    className={`ham mx-auto block w-[80%] resize-none rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036]
                      ${
                        touched.bio && errors.bio
                          ? "ring-2 ring-inset ring-red-500"
                          : ""
                      }`}
                  />
                  <div className="mx-auto w-[80%]">
                    <span className="text-xs text-red-500 md:text-sm">
                      {touched.bio && errors.bio}
                    </span>
                  </div>
                </div>
              </div>
              {/* <div>
                <div className="mt-3 lg:mt-2">
                  <ReactFlagsSelect
                    selected={country}
                    onSelect={(countryCode) => {
                      setCountry(countryCode);
                      formik.handleChange("country")(countryCode);
                      formik.handleBlur("country");
                    }}
                    placeholder="Select Country"
                    searchable
                    searchPlaceholder="Search countries"
                    className="box mx-auto h-full w-[80%] rounded-md bg-[rgba(255,255,255,0.36)] placeholder:text-[#00000036]"
                  />
                  <div className="mx-auto w-[80%]">
                    <span className="text-xs text-red-500 md:text-sm">
                      {touched.country && errors.country}
                    </span>
                  </div>
                </div>
              </div> */}
              <div>
                {/* <div className="lg:w-[40%]"> */}
                <div className="mt-3 lg:mt-2">
                  <select
                    id="college"
                    name="college"
                    required
                    // value={values.college}
                    onChange={(e) => {
                      const selectedCollege = e.target.value;
                      const isVitian = selectedCollege === "VIT Vellore";

                      void formik.setFieldValue("is_vitian", isVitian);
                    }}
                    onBlur={handleBlur}
                    className={`box mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-4 text-[#00000036]
                       `}
                  >
                    <option
                      className="text-[#00000036]"
                      value=""
                      label="Choose your university"
                    />
                    <option
                      value="VIT Vellore"
                      label="VIT Vellore"
                      className="text-black"
                    />
                    <option
                      value="Others"
                      label="Other"
                      className="text-black"
                    />
                  </select>
                  {/* <span className="text-sm text-red-500">
                      {touched.college && errors.college}
                    </span> */}

                  {/* <div className="mx-auto w-[80%]">
                      <span className="text-xs text-red-500 md:text-sm">
                        {touched.gender && errors.gender}
                      </span>
                    </div> */}
                </div>
              </div>
              {/* </div> */}
              <button
                type="submit"
                className="mx-auto mt-6 w-[30%] rounded-full bg-[#FF7A00] py-1.5 text-2xl text-white"
              >
                {!changeText ? "REGISTER" : "Loading..."}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
