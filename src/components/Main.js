import Image from "next/image";
import logo from "../assets/logo-icon.svg";
import logo1 from "../assets/startup_india_new.svg";
import register from "../assets/register-icon.svg";
import title from "../assets/title-combine.png";
import CSS from "./Main.module.css";
import Modal from "react-modal";
import Link from "next/link";
import { IoMdExit } from "react-icons/io";
import icetite from "../assets/icetite-logo.svg";
import vit from "../assets/VIT-logo.png";
import checkout from "./../assets/checkout.png";
import { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

const Main = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalWidth, setModalWidth] = useState("35%");
  const [modalHeight, setModalHeight] = useState("75vh");
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        const windowWidth = window.innerWidth;
        const newWidth = windowWidth <= 768 ? "70%" : "35%";
        const newHeight = windowWidth <= 768 ? "57vh" : "75vh";
        setModalWidth(newWidth);
        setModalHeight(newHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);    
  
  Modal.setAppElement("#__next");

  const openModal = () => {
    setModalIsOpen(true);
  };

  useEffect(() => {
    openModal();
  }, []);
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <div className={`${CSS.background} text-white`}>
        <div className="flex justify-between items-center w-full pt-6">
          <div className="flex justify-between items-center felx mx-4 sm:ml-4 sm:w-[450px] w-[300px]">
            <Image
              className="felx sm:w-[52px] w-[38px]"
              src={logo}
              alt="logo"
            />
            <span className="ham felx uppercase sm:text-sm text-[8px] mx-3 sm:mx-5">
              Second International Conference on Emerging Trends in Information
              Technology and Engineering{" "}
              <span className="text-[#FF7A00]">TECHNEXT EXPO 2024</span>
            </span>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={true}
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.80)",
                // backdropFilter: "blur(10px)",
              },
              content: {
                backgroundColor: "rgb(127, 128, 127)",
                width: modalWidth,
                height: modalHeight,
                margin: "auto",
                border: "1px solid #ccc",
                // borderRadius: "12px",
                padding: "20px",
              },
            }}
          >
            <div className="text-white flex flex-col">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <Image
                    className="felx sm:w-[52px] w-[38px]"
                    src={logo}
                    alt="logo"
                  />
                  <span className="text-xl md:text-3xl">
                    TECHNEXT EXPO 2024
                  </span>
                </div>
                <IoMdClose className="cursor-pointer" onClick={closeModal} />
              </div>

              <div className="flex flex-col items-center mt-16">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl ham font-bold">
                    New Year's Offering
                  </p>
                  <p className="text-5xl md:text-6xl ham font-bold">50% OFF</p>
                  <p className="text-xl md:text-2xl ham font-extrabold">
                    ON ALL REGISTRATION FEES
                  </p>
                </div>
              </div>
              <button
                className="bg-orange-500 rounded self-center text-white text-sm sm:text-xl md:text-xl 2xl:text-3xl w-fit px-5 py-1 mt-10"
                disabled
              >
                <Link
                  href="/portal/register"
                  className="flex flex-row items-center"
                >
                  REGISTER NOW
                  <span>
                    <Image
                      className="sm:w-[20px] w-[15px] ml-2"
                      src={checkout}
                      alt="register"
                    />
                  </span>
                </Link>
              </button>
              <div className="mx-[10px] mt-5 self-center">
                <Link
                  href="https://technext.vit.ac.in/TECHNEXT_EVENT_BROCHURE.pdf"
                  className="flex flex-row"
                >
                  <div className="uppercase p-2 sm:text-lg underline text-[10px] hover:text-gray-300 active:text-white">
                    Download Brochure
                  </div>
                </Link>
              </div>
              {/* <h1 className="text-3xl md:text-5xl text-center">New Year's Offering</h1>
              <div>
                <span className="text-5xl md:text-8xl">50%</span>
                <span className="text-3xl md:text-5xl">{" "}Off</span>
              </div>
              <div className="text-xl md:text-3xl">on Registration</div> */}
            </div>
          </Modal>
          <div className="text-center flex flex-wrap justify-end items-center mr-4">
            <div className="mx-[10px]">
              <Link
                href="https://technext.vit.ac.in/TECHNEXT_EVENT_BROCHURE.pdf"
                className="flex flex-row"
              >
                <div className="uppercase p-2 sm:text-xl text-[10px] hover:text-gray-300 active:text-white">
                  Download Brochure
                </div>
              </Link>
            </div>
            <Link
              href="/portal/register"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase mx-[15px] my-1 sm:mx-[30px] px-2 sm:px-5 py-1 sm:py-2 sm:text-xl text-[10px] bg-[#FF7A00] sm:rounded-lg rounded-md hover:bg-[#ff9837] hover:text-white hover:font-[400] active:bg-[#FF7A00] xl:flex hidden items-center gap-x-2"
            >
              <span className="ham">register now</span>
              <IoMdExit />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:py-[70px] py-[180px]">
          <div className="flex justify-center items-center sm:ml-20 lg:ml-0 sm:w-[450px] w-[300px]">
            <Image
              className="felx sm:w-[340px] w-[200px]"
              src={logo1}
              alt="logo1"
            />
          </div>
          <Image
            className="flex mt-1 w-[90%] md:w-2/3 sm:w-[80%]"
            src={title}
            alt="title"
            quality={100}
          />
        </div>
        <div className="flex justify-center xl:hidden mb-4">
          <button
            className="bg-orange-500 rounded text-white text-sm sm:text-xl md:text-xl 2xl:text-3xl w-fit px-5 py-1"
            disabled
          >
            <Link
              href="/portal/register"
              className="flex flex-row items-center"
            >
              REGISTER NOW
              <span>
                <Image
                  className="sm:w-[20px] w-[15px] ml-2"
                  src={checkout}
                  alt="register"
                />
              </span>
            </Link>
          </button>
        </div>
        <div className="flex w-full justify-between mt-10 md:mt-0">
          <div className="mb-3 md:mb-10 ml-10 flex w-[110px] md:w-[200px]">
            <a
              href="https://icetite.vit.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={icetite} alt="title" quality={100} />
            </a>
          </div>
          <div className="mb-3 md:mb-10 mr-10 flex w-[110px] md:w-[200px]">
            <a
              href="https://vit.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={vit} alt="title" quality={100} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
