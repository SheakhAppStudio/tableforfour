
import HeroSection from "./HomeComponents/Banner";
import HowItWorks from "./HomeComponents/HowItWorks";
import Features from "./HomeComponents/Features";
import Pricing from "./HomeComponents/Pricing";
import CTA from "./HomeComponents/CTA";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <HowItWorks/>
      <Features/>
      <Pricing/>
      {/* <CTA/> */}
    </div>
  );
}
