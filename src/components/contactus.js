import css from "./contactus.module.css";
import Image from "next/image";
import expo from "../assets/expo-mark.png";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function ContactUs() {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const mobileInputRef = useRef();
  const ccInputRef = useRef();
  const [value, setValue] = useState("");
  // const monthInputRef = useRef();
  // const dayInputRef = useRef();
  // const yearInputRef = useRef();
  const queryInputRef = useRef();
  const [countryCode, setCountryCode] = useState("+91");

  const getCountryCode = async () => {
    await axios.get("https://ipapi.co/json/").then((response) => {
      setCountryCode(response.data.country_calling_code);
    });
  };

  useEffect(() => {
    getCountryCode();
  }, [countryCode]);

  function varlidateQueryData(
    enteredName,
    enteredEmail,
    enteredNumber,
    enteredQuery,
    enteredCode
  ) {
    if (
      enteredName.trim() === "" ||
      enteredEmail.trim() === "" ||
      enteredNumber.trim() === "" ||
      enteredQuery.trim() === "" ||
      enteredCode.trim() === ""
    ) {
      alert("Please fill all the fields");
      return false;
    }
    if (enteredNumber.length !== 10) {
      alert("Please enter a valid mobile number");
      return false;
    }
    return true;
  }

  function submitQueryData(event) {
    event.preventDefault();
    const enteredName =
      firstNameInputRef.current.value + " " + lastNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredNumber = mobileInputRef.current.value;
    // const enteredMonth = monthInputRef.current.value;
    // const enteredDay = dayInputRef.current.value;
    // const enteredYear = yearInputRef.current.value;
    const enteredQuery = queryInputRef.current.value;
    const enteredCode = ccInputRef.current.value;

    if (
      !varlidateQueryData(
        enteredName,
        enteredEmail,
        enteredNumber,
        enteredQuery,
        enteredCode
      )
    ) {
      return;
    }

    const queryData = {
      name: enteredName,
      email: enteredEmail,
      mobile: enteredNumber,
      // month: enteredMonth,
      // day: enteredDay,
      // year: enteredYear,
      query: enteredQuery,
    };

    // axios
    //   .post(`/api/hello`, queryData, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  }

  return (
    <div className="text-white" id={css.bg}>
      <div className="mx-10 md:mx-20 text-lg sm:text-4xl font-[600] py-10">
        Contact Us
      </div>
      <div className="pt-6 sm:pl-10 lg:pl-8 2xl:pl-12">
        <h1 className="text-orange-500 text-4xl lg:text-4xl sm:text-6xl p-4 pl-8 lg:pl-12 2xl:text-5xl">
          Fill Your Details
        </h1>
        <form onSubmit={submitQueryData}>
          <div className="flex flex-wrap gap-y-4 sm:gap-x-16 sm:gap-y-16 lg:gap-x-32 lg:gap-y-12 2xl:gap-x-36 2xl:gap-y-16 pl-6 lg:pl-10 sm:pt-10 lg:pt-8 xl:pt-6">
            <div className="w-11/12 lg:w-5/12 sm:w-5/12">
              <label
                className="block text-xl 2xl:text-2xl font-medium text-white mb-1 pl-12"
                htmlFor="firstName"
              >
                FIRST NAME
              </label>
              <input
                required
                type="text"
                id="firstName"
                ref={firstNameInputRef}
                className="w-full py-1 px-4 sm:py-3 2xl:py-2 2xl:px-6 2xl:text-2xl bg-[rgba(255,255,255,0.28)] rounded-3xl focus:outline-none focus:ring focus:border-blue-500 text-orange-500 placeholder:text-orange-500 placeholder:text-sm placeholder:opacity-70 placeholder:tracking-[0.3rem] placeholder:font-bold"
                placeholder="FIRST NAME"
              />
            </div>
            <div className="w-11/12 lg:w-5/12 sm:w-5/12">
              <label
                className="block text-xl 2xl:text-2xl font-medium text-white mb-1 pl-12"
                htmlFor="lastName"
              >
                LAST NAME
              </label>
              <input
                required
                type="text"
                id="lastName"
                ref={lastNameInputRef}
                className="w-full py-1 px-4 sm:py-3 2xl:py-2 2xl:px-6 2xl:text-2xl bg-[rgba(255,255,255,0.28)] rounded-3xl focus:outline-none focus:ring focus:border-blue-500 text-orange-500 placeholder:text-orange-500 placeholder:text-sm placeholder:opacity-70 placeholder:tracking-[0.3rem] placeholder:font-bold"
                placeholder="LAST NAME"
              />
            </div>
            <div className="w-11/12 lg:w-5/12 sm:w-5/12">
              <label
                className="block text-xl 2xl:text-2xl font-medium text-white mb-1 pl-12"
                htmlFor="email"
              >
                E-MAIL
              </label>
              <input
                required
                type="email"
                id="email"
                ref={emailInputRef}
                className="w-full py-1 px-4 sm:py-3 2xl:py-2 2xl:px-6 2xl:text-2xl bg-[rgba(255,255,255,0.28)] rounded-3xl focus:outline-none focus:ring focus:border-blue-500 text-orange-500 placeholder:text-orange-500 placeholder:text-sm placeholder:opacity-70 placeholder:tracking-[0.3rem] placeholder:font-bold"
                placeholder="EMAIL - ADDRESS"
              />
            </div>
            <div className="w-11/12 lg:w-5/12 sm:w-5/12">
              <label
                className="block text-xl 2xl:text-2xl font-medium text-white mb-1 pl-12"
                htmlFor="mobilenum"
              >
                PHONE NUMBER
              </label>
              <input
                required
                type="text"
                defaultValue={countryCode}
                ref={ccInputRef}
                onBlur={(e) => {
                  if (e.target.value.match(/^\+[0-9]{1,3}$/) === null) {
                    alert("Please enter a valid calling code");
                  }
                }}
                className="lg:w-2/12 w-1/5 mr-1 py-1 lg:ml-2 text-center sm:py-3 px-4 2xl:py-2 2xl:text-2xl bg-[rgba(255,255,255,0.28)] rounded-3xl focus:outline-none focus:ring focus:border-blue-500 text-orange-500"
              />
              <input
                required
                type="text"
                id="mobilenum"
                ref={mobileInputRef}
                onBlur={(e) => {
                  if (e.target.value.match(/^[0-9]{10}$/) === null) {
                    alert("Please enter a valid mobile number");
                  }
                }}
                className="lg:w-9/12 w-3/4 py-1 px-4 lg:ml-4 sm:py-3 2xl:py-2 2xl:px-6 2xl:text-2xl bg-[rgba(255,255,255,0.28)] rounded-3xl focus:outline-none focus:ring focus:border-blue-500 text-orange-500 placeholder:text-orange-500 placeholder:opacity-70 placeholder:text-sm placeholder:tracking-[0.2rem] placeholder:font-bold"
                placeholder="PHONE NUMBER"
              />
            </div>
            {/* <div className="w-full lg:w-5/12">
              <label
                className="block text-xl 2xl:text-2xl font-medium text-white mb-1 pl-12"
                htmlFor="email"
              >
                DATE OF BIRTH
              </label>
              <select
                required
                id="month"
                ref={monthInputRef}
                className="self-end w-4/12 p-3 2xl:text-2xl bg-[rgba(255,255,255,0.28)] rounded-3xl focus:outline-none focus:ring focus:border-blue-500 text-orange-500 lg:mr-11 sm:mr-5 mr-3"
              >
                <option value="January" className="" default>
                  Month
                </option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
              <select
                required
                ref={dayInputRef}
                className="self-end p-3 w-3/12 2xl:text-2xl bg-[rgba(255,255,255,0.28)] rounded-3xl focus:outline-none focus:ring focus:border-blue-500 text-orange-500 lg:mr-11 sm:mr-5 mr-3"
              >
                <option value="" defaultChecked>
                  Day
                </option>
                {[...Array(31)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
              <select
                required
                ref={yearInputRef}
                className="self-end p-3 w-3/12 2xl:text-2xl bg-[rgba(255,255,255,0.28)] rounded-3xl focus:outline-none focus:ring focus:border-blue-500 text-orange-500"
              >
                <option value="" defaultChecked>
                  Year
                </option>
                {[...Array(2023 - 1960 + 1)].map((_, index) => (
                  <option key={index + 1960} value={index + 1960}>
                    {index + 1960}
                  </option>
                ))}
              </select>
            </div> */}
            <div className="w-full lg:w-full">
              <label
                className="block text-xl 2xl:text-3xl font-medium text-white mb-1 pl-12"
                htmlFor="query"
              >
                MESSAGE
              </label>
              <textarea
                required
                ref={queryInputRef}
                id="query"
                className="block 2xl:text-2xl p-2.5 w-11/12 sm:w-11/12 lg:w-11/12 bg-[rgba(255,255,255,0.28)] rounded-3xl focus:outline-none focus:ring focus:border-blue-500 text-orange-500 placeholder:text-orange-500 placeholder:text-sm placeholder:opacity-70 placeholder:pt-2 placeholder:uppercase placeholder:tracking-[0.3rem] pt-4 pl-6 placeholder:font-bold"
                placeholder="Tell us your Query..."
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-500 rounded-2xl text-white text-2xl sm:text-5xl md:text-2xl 2xl:text-4xl w-fit px-3 py-2 mt-12 sm:mt-16 lg:mt-8 2xl:mt-14"
              >
                CONTACT US
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-wrap pl-2 sm:pt-56 pt-10 lg:justify-between lg:pt-6 2xl:pt-12">
        <div className="text-white pt-9 pl-4 lg:pl-12 opacity-30"></div>
        <div className="w-full flex justify-end px-24 pb-10">
          <Image src={expo} alt="expo-mark" quality={100} />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
