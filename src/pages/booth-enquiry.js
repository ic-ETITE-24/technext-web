import { useState } from "react";
import { useFormik } from "formik";
import Image from "next/image";
import logo from "./../assets/logo.svg";
import logo2 from "../assets/logo-icon.svg";
import axios from "axios";
import { useRouter } from "next/router";
const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is required";
  } else if (values.name.length < 3) {
    errors.name = "Name must be at least 3 characters long";
  }

  if (!values.job_profile) {
    errors.job_profile = "Sector is required";
  } else if (values.job_profile.length < 3) {
    errors.job_profile = "Enter a valid Sector";
  }
  if (!values.company_name) {
    errors.company_name = "Compnay Name is required";
  } else if (values.company_name.length < 2) {
    errors.company_name = "Enter a valid Company Name";
  }
  if (!values.phone) {
    errors.phone = "Phone number is required";
  }
  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.city) {
    errors.city = "City is required";
  }

  return errors;
};
function BoothEnquiry() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      job_profile: "",
      company_name: "",
      phone: "",
      email: "",
      city: "",
      message: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://icetite.vit.ac.in/technext/enquiry",
          // headers,
          values
        );

        if (response.status >= 200 && response.status < 300) {
          setError(false);
          alert("Thank you for your enquiry. We will get back to you soon.");
          router.push("https://icetite.vit.ac.in");
        }
      } catch (error) {
        if (error.response) {
          const statusCode = error.response.status;
          if (statusCode >= 400) {
            setError(error.response.data.error);
          }
        }
      }
    },
  });
  return (
    <div className="register">
      <div className="flex justify-center pt-6">
        <div className="hidden lg:block lg:w-[50%]">
          <div className="flex mx-4 ml-5 sm:ml-10 sm:w-[375px] w-[300px]">
            <Image className=" sm:w-[52px] w-[38px]" src={logo2} alt="logo" />
            <span className="four uppercase sm:text-sm text-[8px] mx-3 sm:mx-5">
              Second International Conference on Emerging Trends in Information
              Technology and Engineering{" "}
              <span className="text-[#FF7A00] four">TECHNEXT EXPO 2024</span>
            </span>
          </div>
          <Image src={logo} alt="Icetite-logo" className="mx-auto xl:my-32" />
        </div>

        <div className="mx-8 xl:my-28 h-fit w-[100%] rounded-md py-6 backdrop-blur-md backdrop-brightness-150 lg:w-[50%]">
          <div className="flex justify-center whitespace-pre text-xl sm:text-3xl text-white lg:text-3xl xl:text-4xl">
            <div className="uppercase text-[#FF7A00] price">
              technext&apos;24 exhibition stall booking
            </div>
          </div>
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col justify-center">
                <div>
                  <div className="mt-6 lg:mt-11">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      placeholder="Name"
                      className={`mx-auto block w-[80%] lg:w-[60%] rounded-md border-2 bg-inherit px-4 py-2.5 placeholder:[rgba(255, 255, 255, 0.53)]
                          `}
                    />
                    <div className="flex justify-center">
                      {formik.errors.name ? (
                        <div className="text-[#D9D9D999] mt-1 ml-2 block w-[80%] lg:w-[60%]">
                          {formik.errors.name}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-6 lg:mt-5">
                    <input
                      name="job_profile"
                      id="job_profile"
                      type="text"
                      value={formik.values.job_profile}
                      onChange={formik.handleChange}
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      placeholder="Sector"
                      className={`mx-auto block w-[80%] lg:w-[60%] rounded-md border-2 bg-inherit px-4 py-2.5 placeholder:text-[rgba(255, 255, 255, 0.53)] `}
                    />
                    <div className="flex justify-center">
                      {formik.errors.job_profile ? (
                        <div className="text-[#D9D9D999] mt-1 ml-2 w-[80%] lg:w-[60%]">
                          {formik.errors.job_profile}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-6 lg:mt-5">
                    <input
                      name="company_name"
                      id="company_name"
                      type="text"
                      value={formik.values.company_name}
                      onChange={formik.handleChange}
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      placeholder="Company Name"
                      className={`mx-auto block w-[80%] lg:w-[60%] rounded-md border-2 bg-inherit px-4 py-2.5 placeholder:text-[rgba(255, 255, 255, 0.53)]
                          `}
                    />
                    <div className="flex justify-center">
                      {formik.errors.company_name ? (
                        <div className="text-[#D9D9D999] mt-1 ml-2 w-[80%] lg:w-[60%]">
                          {formik.errors.company_name}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mx-auto w-[85%] lg:w-[100%] lg:flex-row lg:justify-center">
                  <div className="mt-6 lg:mt-5 lg:w-[30.20%]">
                    <div>
                      <input
                        name="phone"
                        id="phone"
                        type="text"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        //   onBlur={handleBlur}
                        placeholder="Phone"
                        className={`mx-auto block w-[94%] lg:w-[98%] rounded-md border-2 bg-inherit px-4 py-2.5 placeholder:text-[rgba(255, 255, 255, 0.53)] lg:mx-0 
                          `}
                      />
                      <div className="flex justify-center">
                        {formik.errors.phone ? (
                          <div className="text-[#D9D9D999] mt-1 ml-2 w-[94%] lg:w-[98%]">
                            {formik.errors.phone}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-[30.5%]">
                    <div className="mt-6 lg:mt-5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        //   onBlur={handleBlur}
                        placeholder="Email"
                        className={`mx-auto block w-[94%] rounded-md border-2 bg-inherit px-4 py-2.5 placeholder:text-[rgba(255, 255, 255, 0.53)] lg:mx-0 lg:w-[98%]
                          `}
                      />
                      <div className="flex justify-center">
                        {formik.errors.email ? (
                          <div className="text-[#D9D9D999] mt-1 ml-2 w-[94%] lg:w-[98%]">
                            {formik.errors.email}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mt-6 lg:mt-5">
                    <input
                      name="city"
                      id="city"
                      type="city"
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      // onBlur={handleBlur}
                      placeholder="City"
                      className={`mx-auto block w-[80%] lg:w-[60%] rounded-md border-2 bg-inherit px-4 py-2.5 placeholder:text-[rgba(255, 255, 255, 0.53)] `}
                    />
                    <div className="flex justify-center">
                      {formik.errors.city ? (
                        <div className="text-[#D9D9D999] mt-1 ml-2 w-[80%] lg:w-[60%]">
                          {formik.errors.city}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-6 lg:mt-5">
                    <textarea
                      name="message"
                      id="message"
                      autoComplete="Message"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      // onBlur={handleBlur}
                      placeholder="Any Queries?"
                      rows={4}
                      className={`mx-auto block w-[80%] lg:w-[60%] rounded-md border-2 bg-inherit px-4 py-2.5 placeholder:text-[rgba(255, 255, 255, 0.53)] `}
                    />
                    {/* <div className="mx-auto w-[80%]">
                        <span className="text-sm text-red-500">
                          {touched.password && errors.password}
                        </span>
                      </div> */}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="mx-auto mt-6 w-[30%] rounded-md border-2 bg-inherit py-1.5 text-white text-sm sm:text-lg"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoothEnquiry;
