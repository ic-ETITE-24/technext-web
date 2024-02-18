import Link from "next/link";
import { useFormik } from "formik";
import { date, z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import ReactFlagsSelect from "react-flags-select";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "@/assets/portal/logo.svg";
import axios from "axios";
import Head from "next/head";
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
  const [isOtherCollege, setIsOtherCollege] = useState(false);
  const [isVITian, setIsVITian] = useState(true);
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
      phoneNo: z
        .string({
          required_error: "Required",
        })
        .max(11, "mobile number must have max 11 characters")
        .min(10, "mobile number must have a min of 10 characters"),
      gender: z.string({
        required_error: "Required",
      }),
      college: z.string({
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
      github: z.string({
        required_error: "Github link is required",
        invalid_type_error: "Github link must be a string",
      }),
      is_vitian: z.boolean({
        required_error: "Required",
      }),
      OtherCollege: z
        .string()
        .min(2, "Other college should have a minimum of 2 characters")
        .max(50, "Other college should have a maximum of 50 characters")
        .optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    })
    .refine((data) => {
      if (data.college === "Other") {
        return data.OtherCollege != null && data.OtherCollege !== "";
      }
      return true;
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
      github: "",
      phoneNo: "",
      gender: "",
      bio: "",
      college: "",
      OtherCollege: "",
      is_vitian: false,
    },
    validationSchema: toFormikValidationSchema(userSchema),
    validateOnChange: true,
    onSubmit: async (values) => {
      const send = {
        first_Name: values.firstName.trim(),
        last_Name: values.lastName.trim(),
        email: values.email.trim(),
        password: values.password,
        gender: values.gender,
        date_of_birth: formatDate(new Date(values.date_of_birth)),

        bio: values.bio.trim(),
        phone_number: values.phoneNo.trim(),
        github: values.github.trim(),
        country: values.country,
        college: values.college.trim(),
        is_vitian: values.is_vitian,
      };

      if (values.college === "Other") send.college = values.OtherCollege;
      else {
        if (!send.email.includes("vitstudent.ac.in")) {
          toast.error("Use VIT email!");
          return;
        }
        send.college = values.college;
      }
      try {
        setChangeText(true);
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/users/signup`,
          send
        );
        await router.push(`/portal/${values.email}/verify`);
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
  useEffect(() => {
    if (formik.values.college === "VIT Vellore") {
      void formik.setValues({ ...formik.values, is_vitian: true });
      setIsVITian(true);
      setIsOtherCollege(false);
    } else if (formik.values.college === "Other") {
      void formik.setValues({ ...formik.values, is_vitian: false });
      setIsVITian(false);
      setIsOtherCollege(true);
      //void formik.setFieldValue("mode", "online");
    }

    // console.log(formik.values);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.college]);
  return (
    <>
      <Head>
        <title>Technext | Registration</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <div className="Registers flex justify-center overflow-hidden">
        <Toaster richColors closeButton position="top-right" theme="light" />
        <div className="hidden items-center justify-center lg:flex lg:w-[50%]">
          <Image src={logo as HTMLImageElement} alt="Icetite-logo" />
        </div>
        <div className="mx-8 my-auto h-fit w-[100%] rounded-md py-6 backdrop-blur-md backdrop-brightness-125 lg:w-[50%]">
          <div className="flex justify-center overflow-hidden whitespace-pre pt-2 text-4xl text-white lg:text-5xl">
            <Link href="/portal">
              <div className="unselected text-white/50">LOGIN </div>
            </Link>
            <div className="selected">| REGISTER</div>
          </div>
          <div className="scrollable-form">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-center">
                <div className="flex flex-col lg:w-[100%] lg:flex-row lg:justify-center">
                  <div className="mt-9 lg:w-[39.2%]">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="First Name"
                        className={`mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036] lg:mx-0 lg:w-[98.1%]
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
                    <div className="mt-3 lg:mt-9">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Last Name"
                        className={`mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036] lg:mx-0 lg:w-[19vw]
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
                      className={`mx-auto block w-[79.1%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036]
                      ${touched.email && errors.email ? "" : ""}`}
                    />
                    <div className="mx-auto w-[80%]">
                      <span className="text-xs text-red-500 md:text-sm">
                        {touched.email && errors.email}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col  lg:w-[100%] lg:flex-row lg:justify-center">
                  <div className="lg:w-[39%]">
                    <div className="mt-3 lg:mt-2">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Password"
                        className={`mx-auto block w-[80%] lg:mx-0 rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036] lg:w-[98.1%] ${
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
                    <div className="lg:w-[39%]">
                      <div className="mt-3 lg:mt-2">
                        <input
                          type="password"
                          name="confirmPassword"
                          id="confirmPassword"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Confirm Password"
                          className={`mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036] lg:mx-0 lg:w-[19vw]
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
                <div className="flex flex-col lg:w-[100%] lg:flex-row lg:justify-center">
                  <div className="lg:w-[39%]">
                    <div className="mt-3 lg:mt-2">
                      <input
                        type="text"
                        name="phoneNo"
                        id="phoneNo"
                        value={values.phoneNo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Phone Number"
                        className={`mx-auto block w-[80%] lg:mx-0 rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036] lg:w-[98.1%] ${
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
                    <div className="country lg:w-[39%]">
                      <div className="mt-3 lg:mt-2">
                        <ReactFlagsSelect
                          id="countryCode"
                          selected={country}
                          onSelect={(countryCode) => {
                            setCountry(countryCode);
                            formik.handleChange("country")(countryCode);
                            formik.handleBlur("country");
                          }}
                          placeholder="Select Country"
                          searchable
                          searchPlaceholder="Search countries"
                          className={`mx-auto h-full w-[80%] lg:mx-0 rounded-md bg-[rgba(255,255,255,0.36)] lg:w-[19vw]
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
                <div className="flex flex-col lg:w-[100%] lg:flex-row lg:justify-center">
                  <div className="lg:w-[39%]">
                    <div className="mt-3 lg:mt-2">
                      <DatePicker
                        id="date_of_birth"
                        wrapperClassName="w-full"
                        selected={
                          formik.values.date_of_birth
                            ? new Date(formik.values.date_of_birth)
                            : null
                        }
                        onChange={(date) => {
                          const formattedDate = date && formatDate(date);
                          void formik.setFieldValue(
                            "date_of_birth",
                            formattedDate
                          );
                        }}
                        onBlur={formik.handleBlur}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select Date of Birth"
                        className={`mx-auto block w-[80%] lg:mx-0 rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036] text-black lg:w-[98.1%] ${
                          touched.date_of_birth && errors.date_of_birth
                            ? "ring-2 ring-inset ring-red-500"
                            : ""
                        } `}
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        maxDate={new Date(2006, 1, 22)}
                      />
                      <div className="mx-auto w-[80%]">
                        <span className="text-xs text-red-500 md:text-sm">
                          {touched.date_of_birth && errors.date_of_birth}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="lg:w-[39%]">
                      <div className="mt-3 lg:mt-2">
                        <select
                          name="gender"
                          id="gender"
                          title="Gender"
                          value={values.gender}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`box mx-auto block w-[80%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3.5 lg:w-[19vw] text-[#00000036]
                      ${
                        touched.gender && errors.gender
                          ? "ring-2 ring-inset ring-red-500"
                          : ""
                      }`}
                        >
                          <option hidden selected className="ham">
                            Select Gender
                          </option>
                          <option value="male" className="ham">
                            Male
                          </option>
                          <option value="female" className="ham">
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
                    <input
                      type="text"
                      name="github"
                      id="github"
                      value={values.github}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Github Link"
                      className={`mx-auto block w-[79.1%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036]
                      ${touched.github && errors.github ? "" : ""}`}
                    />
                    <div className="mx-auto w-[80%]">
                      <span className="text-xs text-red-500 md:text-sm">
                        {touched.github && errors.github}
                      </span>
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
                      className={`bdcn mx-auto block w-[79.2%] resize-none rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036]
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
                      title="Choose your university"
                      // value={values.college}
                      onChange={formik.handleChange}
                      onBlur={handleBlur}
                      className={`box mx-auto block w-[79.2%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-4 text-[#00000036]
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
                        value="Other"
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
                {formik.values.college === "Other" && (
                  <div className=" mt-3 lg:mt-3">
                    <input
                      type="text"
                      name="OtherCollege"
                      id="OtherCollege"
                      required
                      value={formik.values.OtherCollege}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter College Name"
                      className={`mx-auto block w-[79.5%] rounded-md border-0 bg-[rgba(255,255,255,0.36)] px-4 py-3 placeholder:text-[#00000036]  ${
                        formik.touched.OtherCollege &&
                        formik.errors.OtherCollege
                          ? ""
                          : ""
                      }`}
                    />
                    {formik.touched.OtherCollege &&
                      formik.errors.OtherCollege && (
                        <div className="mx-auto w-[80%] ">
                          {formik.touched.OtherCollege &&
                            formik.errors.OtherCollege && (
                              <span className="text-sm text-red-500">
                                {formik.errors.OtherCollege}
                              </span>
                            )}
                        </div>
                        // <span className="text-sm text-red-500">
                        //   {formik.errors.OtherCollege}
                        // </span>
                      )}
                  </div>
                )}
                {/* </div> */}
                <button
                  type="submit"
                  disabled={changeText}
                  className="mx-auto mt-6 w-[30%] rounded-full bg-[#FF7A00] py-1.5 text-2xl text-white hover:scale-105 hover:transition-transform active:scale-100 disabled:bg-orange-400"
                >
                  {!changeText ? "REGISTER" : "Loading..."}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
