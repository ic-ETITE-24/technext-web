import Main from "@/components/Main";
import Registration from "@/components/registration";
import Regulations from "@/components/regulations";
import AboutEvent from "@/components/AboutEvent";
import Prizes from "@/components/Prizes";

export default function Home() {
  return (
    <div>
      <Main />
      <AboutEvent />
      <Regulations />
      <Registration />
      <Prizes />
    </div>
  );
}
