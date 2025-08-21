import {BentoSection} from "../components/BentoSection";
import BrandsSlider from "../components/BrandsSlider";
import Chat from "../components/Chat";
import CustomerReviews from "../components/CustomerReviews";
import {Hero} from "../components/Hero";
import {NewArrivals} from "../components/NewArrivals";
import {TopSelling} from "../components/TopSelling";

export default function Home() {
  return (
    <>
      <Chat />
      <Hero />
      <BrandsSlider />
      <NewArrivals />
      <TopSelling />
      <BentoSection />
      <CustomerReviews />
    </>
  );
}
