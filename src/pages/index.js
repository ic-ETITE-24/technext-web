import Main from "@/components/Main";
import Registration from "@/components/registration";
import Regulations from "@/components/regulations";
import AboutEvent from "@/components/AboutEvent";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div>
            <Main />
            <AboutEvent />
            <Regulations />
            <Registration />
            <Footer />
        </div>
    );
}
