import AnalyticsSection from "../components/AnalyticsSection";
import HeroBanner from "../components/HeroBanner";
import Kollektiv from "../components/Kollektiv";
import Newsletter from "../components/Newsletter";
import ServiceSection from "../components/ServiceSection";

export default function Home() {
  return (
    <>
    <HeroBanner />
    <AnalyticsSection/>
    <Kollektiv/>
    <ServiceSection/>
    <Newsletter/>
    </>

  );
}
