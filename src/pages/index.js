import Main from "@/components/Main";
import Registration from "@/components/registration";
import Regulations from "@/components/regulations";
import AboutEvent from "@/components/AboutEvent";
import ContactUs from "@/components/contactus";
import Timeline from "@/components/timeline";
import Footer from "@/components/Footer";
import Prizes from "@/components/Prizes";
import Head from "next/head";
import Investors from "@/components/investors";
import Tracks from "@/components/tracks";
import Tracks1 from "@/components/tracks1";
import Tracks2 from "@/components/tracks2";
import Tracks3 from "@/components/tracks3";
import Tracks4 from "@/components/tracks4";
import Tracks5 from "@/components/tracks5";
import Tracks6 from "@/components/tracks6";
import Tracks7 from "@/components/tracks7";

export default function Home() {
  return (
    <>
    <Head>
      <title>Technext | Home</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
    </Head>
    <main>
      <Main />
      <AboutEvent />
      <Regulations />
      <Registration />
      <Timeline />
      <Prizes />
      <Tracks />
      <Tracks1 />
      <Tracks2 />
      <Tracks3 />
      <Tracks4 />
      <Tracks5 />
      <Tracks6 />
      <Tracks7 />
      <Investors />
      <ContactUs />
      <Footer />
    </main>
    </>
  );
}
