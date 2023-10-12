import Image from "next/image";
import React, { useState, useEffect } from "react";
import css from "./timeline.module.css";
import icon from "./../assets/Top-right-logo.png";
import expo from "../assets/expo-mark.png";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width breakpoint as needed
    };

    checkWindowWidth();
    window.addEventListener("resize", checkWindowWidth);

    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);
  return (
    <>
      <div className={css.bg}>
        <div className="text-white mx-10 md:mx-20 text-lg sm:text-4xl font-[600] py-10">
          Timeline
        </div>
        <Image
          src={icon}
          alt="ieee logo"
          className="float-right mr-40 hidden lg:block"
        />
        <VerticalTimeline lineColor={"rgb(249 115 22)"} animate={!isMobile}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work pb-20 text-white pr-4"
            contentStyle={{ background: "rgb(249 115 22)", height: "80px" }}
            iconStyle={{ background: "rgb(249 115 22)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(249 115 22)" }}
            date="6 October 2023"

            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title min-[1170px]:text-center tracking-wider text-lg">
              Tracks Launch
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work pb-20 text-white  pr-4"
            date="4 November 2023"
            dateClassName="xl:text-white text-orange-500"
            iconStyle={{
              backgroundColor: "white",
            }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title min-[1170px]:text-center tracking-wider text-lg text-orange-500">
              Registration Starts
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work pb-20 text-white  pr-4"
            contentStyle={{ background: "rgb(249 115 22)" }}
            iconStyle={{ background: "rgb(249 115 22)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(249 115 22)" }}
            date="3 December 2023"

            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title min-[1170px]:text-center tracking-wider text-lg">
              Registration Ends
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work pb-20 text-white  pr-4"
            date="10 - 17 December 2023"
            dateClassName="xl:text-white text-orange-500"
            iconStyle={{
              backgroundColor: "white",
            }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title min-[1170px]:text-center tracking-wider text-lg text-orange-500">
              Check-in Review
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work pb-20 text-white  pr-4"
            contentStyle={{ background: "rgb(249 115 22)" }}
            iconStyle={{ background: "rgb(249 115 22)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(249 115 22)" }}
            date="24 December 2023"

            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title min-[1170px]:text-center tracking-wider text-lg">
              Result Declaration for Round 1
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work pb-20 text-white  pr-4"
            date="23 February 2024"
            dateClassName="xl:text-white text-orange-500"
            iconStyle={{
              backgroundColor: "white",
            }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title min-[1170px]:text-center tracking-wider text-lg text-orange-500">
              Exhibition Day
            </h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
        {/* <div className="flex min-[1172px]:justify-center">
          <button className="rounded text-white border-[3px] sm:mt-10 md:mt-0 md:text-2xl sm:text-5xl border-white text-2xl 2xl:text-4xl w-fit px-4 py-1">
            Learn More
          </button>
        </div> */}

        <div className="flex flex-wrap pl-2 sm:pt-56 pt-10 md:justify-between md:pt-20 2xl:pt-28">
          <div className="text-white pt-9 pl-4 md:pl-12 opacity-30"></div>
          <div className="w-full flex justify-end px-24 pb-10">
            <Image src={expo} alt="expo-mark" quality={100} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;
