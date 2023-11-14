import css from "./registration.module.css";
import Image from "next/image";
import checkout from "./../assets/checkout.png";
import Modal from "react-modal";
import expo from "../assets/expo-mark.png";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

function Registration() {
  const [conutryName, setCountryName] = useState("");

  const [error, setError] = useState(false);
  const [price, setPrice] = useState(null);
  const [text, setText] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  Modal.setAppElement("#__next");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setCountryName(data.country_name);
        countryCall();
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  });

  function countryCall() {
    if (error) {
      setPrice("₹999");
      setText("Per Person for National Participants");
    } else if (conutryName === "India") {
      setPrice("₹999");
      setText("Per Person for National Participants");
    } else {
      setPrice("$49.99");
      setText("Per Person for international Participants");
    }
  }

  return (
    <>
      <div className={css.bg}>
        <div className="mx-10 text-white md:mx-20 text-lg sm:text-4xl font-[600] py-10">
          Registration
        </div>
        <div className="flex flex-wrap place-content-center place-self-center h-[600px] ">
          <div className="rounded-xl items-center flex place-content-center relative m-10 w-5/12 sm:w-4/12 md:w-[300px] lg:w-[450px]">
            <div className="rounded-xl absolute inset-0 backdrop-blur-md backdrop-brightness-90"></div>
            <div className="text-white text-6xl sm:text-8xl md:text-8xl relative p-8 2xl:text-[120px] price">
              {price}
            </div>
          </div>
          <div className=" sm:pt-10 md:pt-0 self-center">
            <div className="text-orange-500 text-4xl text-center sm:text-3xl md:text-5xl">
              <h1>{text}</h1>
            </div>
            <div className="flex flex-wrap flex-col items-center md:flex-row md:justify-start sm:justify-center pt-16 gap-10 md:gap-0 md:pl-0 md:pt-6 2xl:pt-10 sm:pt-24">
              <button
                className="bg-orange-500 rounded text-white text-2xl sm:text-5xl md:text-2xl 2xl:text-3xl w-fit px-3 py-2"
                disabled
              >
                <Link href="/portal/register" className="flex flex-row items-center">
                  REGISTER NOW
                  <span>
                    <Image
                      className="sm:w-[20px] w-[15px]"
                      src={checkout}
                      alt="register"
                    />
                  </span>
                </Link>
              </button>

              <button
                className="md:ml-10 2xl:ml-16 rounded text-white border-[3px] sm:mt-10 md:mt-0 md:text-2xl sm:text-5xl border-white text-2xl 2xl:text-4xl w-fit px-4 py-1 hover:bg-orange-500 hover:border-orange-500 hover:text-white"
                onClick={openModal}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick={true}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              backgroundColor: "rgb(241 245 249)",
              width: "60%",
              height: "50vh",
              margin: "auto",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "20px",
            },
          }}
        >
          <button
            onClick={closeModal}
            className="text-black border-black rounded float-right border-[2px] px-2"
          >
            x
          </button>
          <h2 className="text-black text-3xl 2xl:text-4xl py-4">
            Registration Details
          </h2>
          <ul className="list-disc text-black 2xl:text-xl px-4 pb-4">
            <li>The registration fee is inclusive of all taxes and GST.</li>
            <li>
              Kindly note that the registration fee will not be subject to
              refund in the event that your project is not chosen for
              participation in the expo.
            </li>
            <li>
              Participants are responsible for managing their own logistics
              costs.
            </li>
            <li>
              Organising team shall be assisting in local accommodation if
              needed, at extra charge.
            </li>
          </ul>
        </Modal>
        <div className="flex flex-col items-center md:flex-row sm:pt-56 pt-10 justify-center md:pt-20 lg:pt-0 2xl:pt-20 lg:w-full">
          <div className="flex justify-center text-white pt-9 md:pl-12 lg:pl-4 xl:pl-8 2xl:pl-0 xl:pr-40 md:text-lg text-xs opacity-30 py-4 sm:py-0 md:w-full">
            *All amounts mentioned shall be inclusive of 18% GST
          </div>
          <div className="w-full flex justify-center md:justify-end md:px-10 2xl:pr-24">
            <Image src={expo} alt="expo-mark" quality={100} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
