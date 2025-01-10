import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="wrapper px-4 lg:px-0 mb-20">
      <h1 className="px-4 lg:px-0 font-integral text-center font-bold uppercase text-2xl md:text-3xl lg:text-4xl my-6 ">
        About Us
      </h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 my-12">
        <Image
          src="/about.svg"
          alt="about"
          width={1000}
          height={1000}
          className="-mt-8"
        />
        <div className="flex flex-col gap-y-6 text-opacity-80">
          <p>
            NextWear was created with a vision to redefine modern shopping and
            bring convenience to the forefront of every customer experience. Our
            story began with a commitment to crafting an online space where
            individuals could effortlessly find, explore, and acquire products
            tailored to their unique needs—all from the comfort of their
            devices.
          </p>
          <p>
            From the beginning, we have been relentless in our pursuit of
            excellence, offering a thoughtfully curated selection of products
            designed to suit every lifestyle and preference. Whether it&rsquo;s
            cutting-edge technology, trendy fashion, or everyday essentials, our
            inventory spans a diverse range of categories sourced from reliable
            brands and trusted manufacturers.
          </p>

          <h5 className="font-satoshiBold">Our Mission</h5>

          <p>
            At NextWear, our mission is to empower customers with innovation,
            accessibility, and trust. We strive to deliver a shopping journey
            that goes beyond the ordinary, ensuring satisfaction at every
            step—from product discovery and checkout to delivery and support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
