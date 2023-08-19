import css from "./registration.module.css";
import Image from "next/image";
import checkout from "./../assets/checkout.png";
import expo from "../assets/expo-mark.png";
import { useState, useEffect } from "react";

function Registration() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(false);
  const [price, setPrice] = useState(null);
  const [text, setText] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          latlong();
        },
        function (error) {
          setError(true);
          console.error("Error getting location:", error);
        }
      );
    } else {
      setError(true);
      console.log("Geolocation is not available in this browser.");
    }
  });

  function latlong() {
    if (error) {
      setPrice("₹999");
      setText("Per Person for National Participants");
    } else if (latitude >= 8.0666 && latitude <= 37.1) {
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
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl font-[600] py-10">
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
              <button className="bg-orange-500 rounded text-white text-2xl sm:text-5xl md:text-2xl 2xl:text-3xl w-fit px-3 py-2">
                REGISTER NOW{" "}
                <Image src={checkout} alt="checkout" className="inline pb-2" />
              </button>
              <button className="md:ml-10 2xl:ml-16 rounded text-white border-[3px] sm:mt-10 md:mt-0 md:text-2xl sm:text-5xl border-white text-2xl 2xl:text-4xl w-fit px-4 py-1">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row pl-2 sm:pt-56 pt-10 md:justify-between justify-center md:pt-20 2xl:pt-0 2xl:w-full">
          <div className="text-white pt-9 pl-4 md:pl-12 opacity-30 md:text-lg text-xs py-4 sm:py-0 2xl:w-[800px]">
            *All amounts mentioned shall be inclusive of 18% GST
          </div>
          <div className="w-full flex justify-end px-24 pb-10">
            <Image src={expo} alt="expo-mark" quality={100} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
