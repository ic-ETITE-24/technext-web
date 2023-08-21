import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillFacebook,  AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  const [isIndia, setIsIndia] = useState(true);

  useEffect(() => {
    let countryName = "";
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        countryName = response.data.country_name;
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
    if (countryName === "India") {
      setIsIndia(true);
    } else {
      setIsIndia(false);
    }
  }, []);

  return (
    <div className="bg-[#1F1F1F] w-full h-auto text-white">
      <div className="md:flex-row overflow-hidden text-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        <div className="flex flex-row w-full">
          <Image
            src="/footerAsset.png"
            className=" opacity-10 hidden md:block"
            width={200}
            height={450}
            alt="footerAsset"
          />
          <h1
            className=" lg:text-[70px] font-normal text-[40px] py-6 w-full md:w-auto lg:-ml-24 md:-ml-16 "
            style={{
              fontFamily: "Futura BdCn BT",
              fontStyle: "normal",
            }}
          >
            TECHNEXT
          </h1>
        </div>

        <div className="lg:col-span-2 md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4 py-10 text-center md:text-left md:ml-auto ">
          {/* <div>
            <h2 className=" text-xs md:text-base lg:text-xl">TIMELINE</h2>
            <ul className=" text-xs md:text-sm lg:text-base mt-5 text-[#ffffff80]">
              <li>EVENT DETAIL AND TIMING</li>
              <li className=" mt-2">PRIZE POOL</li>
              <li className=" mt-2">SPONSORS</li>
            </ul>
          </div> */}
          <div>
            <h2 className=" text-xs md:text-base lg:text-xl">HOME</h2>
            <ul className=" text-xs md:text-sm lg:text-base mt-5 text-[#ffffff80]">
              <li>ABOUT</li>
              <li className=" mt-2">REGULATIONS</li>
              <li className=" mt-2">REGISTRATIONS</li>
              <li className=" mt-2">TIMELINE</li>
              <li className=" mt-2">PRIZES</li>
            </ul>
          </div>
          <div>
            <h2 className=" text-xs md:text-base lg:text-xl">RESOURCES</h2>
            <ul className=" text-xs md:text-sm lg:text-base mt-5 text-[#ffffff80]">
              {/* <li>PRESS KIT</li> */}
              <Link
                href={`${
                  isIndia
                    ? "https://drive.google.com/file/d/1hiEHBJ7CPDbfNSOiYkK0owUlUAJJq0BO/view?usp=sharing"
                    : "https://drive.google.com/file/d/1-F9mWqBUNA0OvAAPkgE-1vTrLksFhiy0/view?usp=sharing"
                }`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <li className=" mt-2">SPONSORSHIP BROCHURE</li>
              </Link>
              <Link
                href="https://drive.google.com/file/d/1XP9x3H4hHvw87s9_bXkKb68TWE_zXpgr/view?usp=sharing"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li className=" mt-2">EVENT BROCHURE</li>
              </Link>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h2 className=" text-sm md:text-base lg:text-xl">OTHER EVENTS</h2>
            <ul className=" text-xs md:text-sm lg:text-base mt-5 text-[#ffffff80]">
              <Link href="" target="_blank" rel="noreferrer noopener">
                <li className="mt-2">BOLT HACKATHON</li>
              </Link>
              <Link
                href="https://icetite.vit.ac.in"
                target="_blank"
                rel="noreferrer noopener"
              >
                <li className=" mt-2">IC-ETITE&apos;24 CONFERENCE</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-2 p-5 pb-4 lg:-mt-16 md:-mt-8">
        <p className="col-span-3 md:col-span-2 lg:col-span-1 px-4 lg:px-28 md:px-14 text-xs md:text-sm">
          © 2023-24 IC-ETITE&apos;24. <br />
          All Rights Reserved by VELLORE INSTITUTE OF TECHNOLOGY
        </p>

        <div className=" ml-auto flex mr-20  ">
          <Link
            href="https://instagram.com/icetite24?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiOutlineInstagram size={20} className=" mr-4" />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100067099440455&mibextid=2JQ9oc"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillFacebook size={20} className="mr-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/icetite24/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BiLogoLinkedin size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
