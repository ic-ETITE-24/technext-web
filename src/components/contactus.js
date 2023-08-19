import css from "./contactus.module.css";
import Image from "next/image";
import line from "./../assets/SmallLine.png";
import { useRef, useState } from "react";
import axios from "axios";

function ContactUs() {
  const [isInvalid, setIsInvalid] = useState(false);

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const mobileInputRef = useRef();
  const monthInputRef = useRef();
  const dayInputRef = useRef();
  const yearInputRef = useRef();
  const queryInputRef = useRef();

  function submitQueryData(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredNumber = mobileInputRef.current.value;
    const enteredMonth = monthInputRef.current.value;
    const enteredDay = dayInputRef.current.value;
    const enteredYear = yearInputRef.current.value;
    const enteredQuery = queryInputRef.current.value;

    if (
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    const queryData = {
      name: enteredName,
      email: enteredEmail,
      mobile: enteredNumber,
      month: enteredMonth,
      day: enteredDay,
      year: enteredYear,
      query: enteredQuery,
    };

    console.log(queryData);

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
    <div className="" id={css.bg}>
      <h1 className="text-white text-4xl sm:text-5xl p-4 lg:pl-12 2xl:text-6xl">
        Contact Us
      </h1>
      <div className="pt-6 sm:pl-10 lg:pl-8 2xl:pl-12">
        <h1 className="text-orange-500 text-4xl lg:text-4xl sm:text-6xl p-4 lg:pl-12 2xl:text-7xl">
          FILL YOUR DETAILS
        </h1>
        <form onSubmit={submitQueryData}>
          <div className="flex flex-wrap gap-y-4 sm:gap-x-16 sm:gap-y-16 lg:gap-x-32 lg:gap-y-12 2xl:gap-x-36 2xl:gap-y-16 pl-6 lg:pl-10 sm:pt-10 lg:pt-8 xl:pt-12">
            <div className="w-11/12 lg:w-5/12 sm:w-5/12">
              <label
                className="block text-xl 2xl:text-3xl font-medium text-white mb-1 pl-12"
                htmlFor="fullName"
              >
                FULL NAME
              </label>
              <input
                required
                type="text"
                id="fullName"
                ref={nameInputRef}
                className="w-full p-1 sm:p-3 lg:p-2 2xl:p-4 2xl:text-2xl bg-[rgba(255,255,255,0.28)] rounded-3xl focus:outline-none focus:ring focus:border-blue-500 text-orange-500 placeholder-transparent"
              />
            </div>
            <div className="w-11/12 lg:w-5/12 sm:w-5/12">
              <label
                className="block text-xl 2xl:text-3xl font-medium text-white mb-1 pl-12"
                htmlFor="email"
              >
                E-MAIL
              </label>
              <input
                required
                type="email"
                id="email"
                ref={emailInputRef}
                className="w-full p-1 lg:p-2 sm:p-3 2xl:p-4 2xl:text-2xl bg-[rgba(255,255,255,0.28)] rounded-3xl focus:outline-none focus:ring focus:border-blue-500 text-orange-500 placeholder:text-orange-500 placeholder:pl-9 placeholder:text-sm placeholder:opacity-30 placeholder:tracking-[0.4rem]"
                placeholder="EMAIL - ADDRESS"
              />
            </div>
            <div className="w-11/12 lg:w-5/12 sm:w-5/12">
              <label
                className="block text-xl 2xl:text-3xl font-medium text-white mb-1 pl-12"
                htmlFor="email"
              >
                PHONE NUMBER
              </label>
              <input
                required
                type="text"
                id="email"
                ref={mobileInputRef}
                class="w-full p-1 sm:p-3 lg:p-2 2xl:p-4 2xl:text-2xl bg-[rgba(255,255,255,0.28)] rounded-3xl focus:outline-none focus:ring focus:border-blue-500 text-orange-500 placeholder:text-orange-500 placeholder:pl-9 placeholder:text-sm placeholder:opacity-30 placeholder:tracking-[0.4rem]"
                placeholder="PHONE NUMBER"
              />
            </div>
            <div className="w-full lg:w-5/12">
              <label
                className="block text-xl 2xl:text-3xl font-medium text-white mb-1 pl-12"
                htmlFor="email"
              >
                DATE OF BIRTH
              </label>
              <select
                required
                id="month"
                ref={monthInputRef}
                class="self-end w-4/12 p-3 2xl:text-2xl 2xl:p-4 bg-[rgba(255,255,255,0.28)] rounded-3xl focus:outline-none focus:ring focus:border-blue-500 text-orange-500 lg:mr-11 sm:mr-5 mr-3"
              >
                <option value="January" selected defaultChecked></option>
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
                class="self-end p-3 w-3/12 2xl:text-2xl 2xl:p-4 bg-[rgba(255,255,255,0.28)] rounded-3xl focus:outline-none focus:ring focus:border-blue-500 text-orange-500 lg:mr-11 sm:mr-5 mr-3"
              >
                <option value="" defaultChecked></option>
                {[...Array(31)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
              <select
                required
                ref={yearInputRef}
                class="self-end p-3 w-3/12 2xl:text-2xl 2xl:p-4 bg-[rgba(255,255,255,0.28)] rounded-3xl focus:outline-none focus:ring focus:border-blue-500 text-orange-500"
              >
                <option value="" defaultChecked></option>
                {[...Array(2023 - 1960 + 1)].map((_, index) => (
                  <option key={index + 1960} value={index + 1960}>
                    {index + 1960}
                  </option>
                ))}
              </select>
            </div>
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
                className="block 2xl:text-2xl p-2.5 w-11/12 sm:w-11/12 lg:w-11/12 bg-[rgba(255,255,255,0.28)] rounded-3xl focus:outline-none focus:ring focus:border-blue-500 text-orange-500 placeholder:text-orange-500 placeholder:pl-6 placeholder:text-sm placeholder:opacity-70 placeholder:pt-1 placeholder:tracking-[0.4rem] pt-1 pl-6"
                placeholder="Tell us your Query..."
                rows="4"
              ></textarea>
              <button className="bg-orange-500 rounded-2xl text-white text-2xl sm:text-5xl md:text-2xl 2xl:text-4xl w-fit px-3 py-2 mt-12 sm:mt-16 lg:mt-8 2xl:mt-14">
                REGISTER NOW{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-wrap pl-2 sm:pt-56 pt-10 lg:justify-between lg:pt-6 2xl:pt-28">
        <div className="text-white pt-9 pl-4 lg:pl-12 opacity-30"></div>
        <div className="text-[10px] pl-24 sm:pl-72 lg:pr-12 self-end">
          <span className="text-white tracking-[.7em] inline-block">EXPO</span>
          <span className="inline-block text-center">
            <Image alt="line" src={line} width={40} />
          </span>
          <span className="text-orange-500 tracking-[.7em] inline-block">
            .2024
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
