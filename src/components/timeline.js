import Image from "next/image";
import css from "./timeline.module.css";
import icon from "./../assets/Top-right-logo.png";
import expo from "../assets/expo-mark.png";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  return (
    <>
      <div className={css.bg}>
        <div className="mx-10 md:mx-20 text-lg sm:text-4xl font-[600] py-10">
          Timeline
        </div>
        <Image
          src={icon}
          alt="ieee logo"
          className="float-right mr-40 hidden lg:block"
        />
        <VerticalTimeline lineColor={"rgb(249 115 22)"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work pb-20"
            contentStyle={{ background: "rgb(249 115 22)", height: "80px" }}
            iconStyle={{ background: "rgb(249 115 22)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(249 115 22)" }}
            date="8:00 AM"

            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title tracking-wider text-lg">
              Setup by Teams (stall allotment and prototype assembly)
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work pb-20"
            date="8:00 AM"
            iconStyle={{
              backgroundColor: "white",
            }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title tracking-wider text-lg text-orange-500">
              Commencement ceremony ( Introduction, Flow of event, Judges
              introduction, Speeches of Guests ) 35-45 minutes
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work pb-20"
            contentStyle={{ background: "rgb(249 115 22)" }}
            iconStyle={{ background: "rgb(249 115 22)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(249 115 22)" }}
            date="9:30 AM"

            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title tracking-wider text-lg">
              Commencement ceremony ( Introduction, Flow of event, Judges
              introduction, Speeches of Guests ) 35-45 minutes
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work pb-20"
            date="9:00 AM"
            iconStyle={{
              backgroundColor: "white",
            }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title tracking-wider text-lg text-orange-500">
              Commencement ceremony ( Introduction, Flow of event, Judges
              introduction, Speeches of Guests ) 35-45 minutes
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work pb-20"
            contentStyle={{ background: "rgb(249 115 22)" }}
            iconStyle={{ background: "rgb(249 115 22)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(249 115 22)" }}
            date="10:15 AM"

            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-center tracking-wider text-lg">
              Visiting Time
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work pb-20"
            date="10:15 AM"
            iconStyle={{
              backgroundColor: "white",
            }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-center tracking-wider text-lg text-orange-500">
              Visiting Time
            </h3>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work pb-20"
            contentStyle={{ background: "rgb(249 115 22)" }}
            iconStyle={{ background: "rgb(249 115 22)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(249 115 22)" }}
            date="10:15 AM"

            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title text-center tracking-wider text-lg">
              <a href="">TAP TO LEARN MORE</a>
            </h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
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
