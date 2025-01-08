"use client";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import {useRef, useState} from "react";
import {ArrowLeft, ArrowRight} from "lucide-react";

const Review = ({name, review}: {name: string; review: string}) => {
  return (
    <div className=" border mx-4 rounded-xl p-8 flex flex-col justify-between gap-2 h-full">
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
        <h6 className="font-satoshiBold text-xl">{name}</h6>
        <Image src="/verified.svg" alt="check" width={24} height={24} />
      </div>
      <p className="opacity-60">{review}</p>
    </div>
  );
};

const CustomerReviews = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setInit] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const data = [
    {
      name: "Alex K.",
      review:
        "I am blown away by the quality and style of the clothes I received from NextWear. Every piece exceeds my expectations!",
    },
    {
      name: "Sophia M.",
      review:
        "The clothing from NextWear is stunning! The fabrics and details make every piece luxurious and perfect to wear anywhere.",
    },
    {
      name: "James T.",
      review:
        "NextWear never disappoints! Every item I’ve ordered fits perfectly and looks even better in person. Highly recommended!",
    },
    {
      name: "Emma R.",
      review:
        "I’m impressed with the versatility of NextWear’s collection. There’s always something perfect for work or a night out!",
    },
    {
      name: "Liam P.",
      review:
        "NextWear has raised the bar for online shopping. The clothes are trendy and well-made. Every purchase feels like a win!",
    },
    {
      name: "Olivia C.",
      review:
        "NextWear’s service and quality are outstanding! Each piece I’ve received has been perfectly crafted and feels luxurious!",
    },
    {
      name: "Ethan W.",
      review:
        "My order from NextWear arrived fast and looks fantastic! This brand has truly become my favorite for online fashion.",
    },
    {
      name: "Mia H.",
      review:
        "NextWear’s designs are so unique and stylish. Every time I wear something from them, I receive compliments from everyone!",
    },

    {
      name: "Isabella L.",
      review:
        "Shopping at NextWear is a breeze. Their site is simple to use, and the clothes are true to size and top quality!",
    },
    {
      name: "Aiden V.",
      review:
        "I love NextWear’s focus on sustainability. It’s great to shop for eco-friendly clothes that are also trendy and stylish!",
    },
  ];

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
        {data.map((d, index) => (
          <SwiperSlide key={index}>
            <Review name={d.name} review={d.review} />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReviews;
