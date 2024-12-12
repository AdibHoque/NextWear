"use client";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const Review = () => {
  return (
    <div className=" border mx-2 rounded-xl p-8 flex flex-col justify-between gap-2 ">
      <div className="flex">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Image
              width={24}
              height={24}
              key={index}
              src="/star.svg"
              alt="star"
            />
          ))}
      </div>
      <div className="flex gap-1">
        <h6 className="font-satoshiBold text-xl">Alex K.</h6>
        <Image src="/verified.svg" alt="check" width={24} height={24} />
      </div>
      <p className="opacity-60">
        I am blown away by the quality and style of the clothes I received from
        NextWear From casual wear to elegant dresses, every piece I have bought
        has exceeded my expectations.
      </p>
    </div>
  );
};

const CustomerReviews = () => {
  return (
    <div className="lg:my-20 my-8 md:my-10">
      <h1 className="px-4 lg:px-0 font-integral wrapper font-bold uppercase text-3xl md:text-4xl lg:text-5xl my-6 md:my-8 lg:my-10">
        OUR HAPPY CUSTOMERS
      </h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
        <SwiperSlide>
          <Review />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomerReviews;
