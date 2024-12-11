import {BentoSection} from "../components/BentoSection";
import BrandsSlider from "../components/BrandsSlider";
import {Hero} from "../components/Hero";
import {NewArrivals} from "../components/NewArrivals";
import {TopSelling} from "../components/TopSelling";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandsSlider />
      <NewArrivals />
      <TopSelling />
      <BentoSection />
    </>
  );
}
