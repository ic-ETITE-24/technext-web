import Image from "next/image";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
    return (
        <div className="bg-[#1F1F1F] w-full h-auto text-white">
            <div className="md:flex-row overflow-hidden text-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  ">
                <div className="flex flex-row ">
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

                <div className="lg:col-span-2 md:col-span-2 grid grid-cols-2  md:grid-cols-4 gap-4  py-10  text-center md:text-left">
                    <div>
                        <h2 className=" text-sm md:text-base lg:text-xl">
                            HOME
                        </h2>
                        <ul className=" text-xs md:text-sm lg:text-base mt-5 text-[#ffffff80]">
                            <li>REGISTERATION</li>
                            <li className=" mt-2">FOR NATIONAL PARTICPANT</li>
                            <li className=" mt-2">
                                FOR INTERNATIONAL PARTICPANT
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className=" text-xs md:text-base lg:text-xl">
                            TIMELINE
                        </h2>
                        <ul className=" text-xs md:text-sm lg:text-base mt-5 text-[#ffffff80]">
                            <li>EVENT DETAIL AND TIMING</li>
                            <li className=" mt-2">PRIZE POOL</li>
                            <li className=" mt-2">SPONSORS</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className=" text-xs md:text-base lg:text-xl">
                            ABOUT US
                        </h2>
                        <ul className=" text-xs md:text-sm lg:text-base mt-5 text-[#ffffff80]">
                            <li>MISSION & VISION</li>
                            <li className=" mt-2">EVENT DETAIL</li>
                            <li className=" mt-2">REGULATIONS</li>
                            <li className=" mt-2">TEAM FORMATION</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className=" text-xs md:text-base lg:text-xl">
                            RESOURCES
                        </h2>
                        <ul className=" text-xs md:text-sm lg:text-base mt-5 text-[#ffffff80]">
                            <li>PRESS KIT</li>
                            <li className=" mt-2">DOWNLOAD BROCHURE</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-2 p-5 pb-2 lg:-mt-16 md:-mt-8 ">
                <p className="col-span-3 md:col-span-2 lg:col-span-1 px-4 lg:px-28 md:px-14  text-xs md:text-sm">
                    © 2023-24 TECHNEXTEXPO. All Rights Reserved by VELLORE
                    INSTITUTE OF TECHNOLOGY
                </p>

                <div className=" ml-auto flex mr-20  ">
                    <AiOutlineInstagram size={20} className=" mr-4" />
                    <AiOutlineTwitter size={20} className="mr-4" />
                    <BiLogoLinkedin size={20} />
                </div>
            </div>
        </div>
    );
};
export default Footer;
