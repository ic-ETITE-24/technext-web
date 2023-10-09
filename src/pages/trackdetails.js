import Trackssingle from "@/components/trackssingle";
import Head from "next/head";
import Footer from "@/components/Footer";

function Tracks() {
  return (
    <>
      <Head>
        <title>Technext | Tracks</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <Trackssingle />
      <Footer />
    </>
  );
}

export default Tracks;
