import BrandsSlider from "../components/BrandsSlider";
import {Hero} from "../components/Hero";
import {NewArrivals} from "../components/NewArrivals";
import {TopSelling} from "../components/TopSelling";

export default function Home() {
  return (
    <div>
      <Hero />
      <BrandsSlider />
      <NewArrivals />
      <TopSelling />
    </div>
  );
}
