import Tracks1 from "@/components/tracks1";
import Tracks2 from "@/components/tracks2";
import Tracks3 from "@/components/tracks3";
import Tracks4 from "@/components/tracks4";
import Tracks5 from "@/components/tracks5";
import Tracks6 from "@/components/tracks6";
import Tracks7 from "@/components/tracks7";
import Head from "next/head";
import Footer from "@/components/Footer";

function Tracks() {
  return (
    <>
      <Head>
        <title>Technext | Tracks</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <Tracks1 />
      <Tracks2 />
      <Tracks3 />
      <Tracks4 />
      <Tracks5 />
      <Tracks6 />
      <Tracks7 />
      <Footer />
    </>
  );
}

export default Tracks;
