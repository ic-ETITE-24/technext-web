import Main from "@/components/Main";
import Registration from "@/components/registration";
import Regulations from "@/components/regulations";
import AboutEvent from "@/components/AboutEvent";
import ContactUs from "@/components/contactus";
import Timeline from "@/components/timeline";

export default function Home() {
  return (
    <div>
      <Main />
      <AboutEvent />
      <Regulations />
      <Registration />
      <Timeline />
      <ContactUs />
    </div>
  );
}
