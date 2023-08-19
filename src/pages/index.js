import Main from "@/components/Main";
import Registration from "@/components/registration";
import Regulations from "@/components/regulations";
import AboutEvent from "@/components/AboutEvent";
import ContactUs from "@/components/contactus";

export default function Home() {
  return (
    <div>
      <Main />
      <AboutEvent />
      <Regulations />
      <Registration />
      <ContactUs />
    </div>
  );
}
