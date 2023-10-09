import Head from "next/head";
import Footer from "@/components/Footer";
import Guidelines1 from "@/components/guidelines1";
import Guidelines2 from "@/components/guidelines2";
import Guidelines4 from "@/components/guidelines4";

function Guidelines() {
  return (
    <>
      <Head>
        <title>Technext | Guidelines</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </Head>
      <Guidelines1 />
      <Guidelines2 />
      <Guidelines4 />
      <Footer />
    </>
  );
}

export default Guidelines;
