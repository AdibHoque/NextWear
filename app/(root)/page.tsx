import {BentoSection} from "../components/BentoSection";
import BrandsSlider from "../components/BrandsSlider";
import CustomerReviews from "../components/CustomerReviews";
import {Hero} from "../components/Hero";
import {NewArrivals} from "../components/NewArrivals";
import Newsletter from "../components/Newsletter";
import {TopSelling} from "../components/TopSelling";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandsSlider />
      <NewArrivals />
      <TopSelling />
      <BentoSection />
      <CustomerReviews />
      <Newsletter />
    </>
  );
}
