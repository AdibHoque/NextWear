import BrandsSlider from "../components/BrandsSlider";
import {Hero} from "../components/Hero";
import {NewArrivals} from "../components/NewArrivals";

export default function Home() {
  return (
    <div>
      <Hero />
      <BrandsSlider />
      <NewArrivals />
    </div>
  );
}
