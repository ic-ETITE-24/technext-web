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
      <Investors />
      <ContactUs />
      <Footer />
    </main>
    </>
  );
}
