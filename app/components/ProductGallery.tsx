/* eslint-disable @next/next/no-img-element */
"use client";

import {Swiper, SwiperClass, SwiperSlide} from "swiper/react";
import {FreeMode, Thumbs, Autoplay} from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {useState} from "react";

const ProductGallery = ({image}: {image: string[]}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        thumbs={{swiper: thumbsSwiper}}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2 h-80 cursor-pointer"
      >
        <SwiperSlide className="w-full flex justify-center items-center bg-[#F0EEED] rounded-2xl">
          <img src={image[0]} className="mx-auto rounded-2xl" alt="product" />
        </SwiperSlide>
        <SwiperSlide className="w-full flex justify-center items-center bg-[#F0EEED] rounded-2xl">
          <img
            src={image[1]}
            className="mx-auto object-contain rounded-2xl"
            alt="product"
          />
        </SwiperSlide>
        <SwiperSlide className="w-full flex justify-center items-center bg-[#F0EEED] rounded-2xl">
          <img src={image[2]} className="mx-auto rounded-2xl" alt="product" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Thumbs, Autoplay]}
        className="mySwiper mt-2"
      >
        <SwiperSlide>
          <img
            src={image[0]}
            className="rounded-2xl cursor-pointer h-[150px] md:h-[250px] lg:h-[170px] w-full"
            alt="product"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image[1]}
            className="rounded-2xl bg-cover cursor-pointer h-[150px] md:h-[250px] lg:h-[170px] w-full"
            alt="product"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image[2]}
            className="rounded-2xl cursor-pointer h-[150px] md:h-[250px] lg:h-[170px] w-full"
            alt="product"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductGallery;
