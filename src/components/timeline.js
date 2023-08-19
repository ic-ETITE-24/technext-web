import Image from "next/image";
import css from "./timeline.module.css";
import line from "./../assets/SmallLine.png";
import icon from './../assets/Top-right-logo.png'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Timeline() {
  return (
    <>
      <div className={css.bg}>
        <h1 className="text-white text-4xl sm:text-5xl p-4 md:pl-12 2xl:text-6xl mb-12 md:mb-24">
          TIMELINE
        </h1>
        <Image src={icon} alt="ieee logo" className="float-right mr-40 hidden lg:block"/>
        <VerticalTimeline lineColor={"rgb(249 115 22)"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work pb-20"
            contentStyle={{ background: "rgb(249 115 22)" }}
            iconStyle={{ background: "rgb(249 115 22)", color: "#fff" }}
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
              Setup by Teams (stall allotment and prototype assembly)
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

export default Timeline;
