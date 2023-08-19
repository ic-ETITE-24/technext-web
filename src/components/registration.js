import css from "./registration.module.css";
import line from "./../assets/SmallLine.png";
import Image from "next/image";
import checkout from "./../assets/checkout.png";
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
        <h1 className="text-white text-4xl sm:text-5xl p-4 md:pl-12 2xl:text-6xl">
          Registration
        </h1>
        <div className="flex flex-wrap place-content-center place-self-center sm:pt-24 md:pt-48 md:gap-8 2xl:gap-16 2xl:pt-72">
          <div className="rounded-xl flex place-content-center relative m-10 w-8/12 sm:w-4/12 md:w-1/4">
            <div className="rounded-xl absolute inset-0 backdrop-blur-md backdrop-brightness-90"></div>
            <div className="text-white text-6xl sm:text-8xl md:text-8xl relative p-8 2xl:text-[190px] price">
              {price}
            </div>
          </div>
          <div className=" sm:pt-10 md:pt-0 self-center">
            <div className="text-orange-500 text-4xl text-center sm:text-7xl md:text-5xl 2xl:text-7xl">
              <h1>{text}</h1>
            </div>
            <div className="flex flex-wrap flex-col items-center md:flex-row md:justify-start sm:justify-center pt-16 gap-10 md:gap-0 md:pl-0 md:pt-6 2xl:pt-10 sm:pt-24">
              <button className="bg-orange-500 rounded text-white text-2xl sm:text-5xl md:text-2xl 2xl:text-4xl w-fit px-3 py-2">
                REGISTER NOW{" "}
                <Image src={checkout} alt="checkout" className="inline pb-2" />
              </button>
              <button className="md:ml-10 2xl:ml-16 rounded text-white border-[3px] sm:mt-10 md:mt-0 md:text-2xl sm:text-5xl border-white text-2xl 2xl:text-4xl w-fit px-4 py-1">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap md:justify-between sm:pl-0 pt-48 sm:pt-60 md:pt-44 2xl:pt-72">
          <div className="text-white pt-9 pl-4 md:pl-12 opacity-30">
            *All amounts mentioned shall be inclusive of 18% GST
          </div>
          <div className="text-[10px] pl-28 md:pr-12 self-end">
            <span className="text-white tracking-[.7em] inline-block">
              EXPO
            </span>
            <span className="inline-block text-center">
              <Image alt="line" src={line} width={40} />
            </span>
            <span className="text-orange-500 tracking-[.7em] inline-block">
              .2024
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
