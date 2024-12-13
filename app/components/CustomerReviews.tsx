"use client";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import {useRef, useState} from "react";
import {ArrowLeft, ArrowRight} from "lucide-react";

const Review = () => {
  return (
    <div className=" border mx-4 rounded-xl p-8 flex flex-col justify-between gap-2 ">
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
  const [_, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="lg:my-20 my-8 md:my-10">
      <h1 className="px-4 flex justify-between items-center lg:px-0 font-integral wrapper font-bold uppercase text-3xl md:text-4xl lg:text-5xl my-6 md:my-8 lg:my-10">
        OUR HAPPY CUSTOMERS
        <div className="flex">
          <button ref={prevRef}>
            <ArrowLeft className="size-8 mr-2 cursor-pointer" />
          </button>
          <button ref={nextRef}>
            <ArrowRight className="size-8 ml-2 cursor-pointer" />
          </button>
        </div>
      </h1>
      <Swiper
        onInit={() => setInit(true)}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1224: {
            slidesPerView: 4,
            spaceBetween: 0,
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
