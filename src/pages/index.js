import Main from "@/components/Main";
import Registration from "@/components/registration";
import Regulations from "@/components/regulations";
import AboutEvent from "@/components/AboutEvent";
import ContactUs from "@/components/contactus";
import Timeline from "@/components/timeline";
import Footer from "@/components/Footer";
import Prizes from "@/components/Prizes";

export default function Home() {
  return (
    <div>
      <Main />
      <AboutEvent />
      <Regulations />
      <Registration />
      <Timeline />
      <Prizes />
      <ContactUs />
      <Footer />
    </div>
  );
}
