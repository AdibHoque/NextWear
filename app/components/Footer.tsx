import {Divider} from "@nextui-org/react";
import {Facebook, Github, Instagram, Twitter} from "lucide-react";
import Image from "next/image";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <>
      <Newsletter />
      <footer className="bg-[#F0F0F0] py-12">
        <div className="wrapper px-4 lg:px-0 flex flex-col lg:flex-row w-full gap-12">
          <div className="flex flex-col gap-y-6 lg:w-1/3">
            <h2 className="font-bold font-integral text-4xl">NextWear</h2>
            <p className="opacity-60">
              We have clothes that suits your style and which you are proud to
              wear. From women to men.
            </p>
            <div className="flex gap-1">
              <div className="rounded-full bg-white group hover:bg-black border-2 p-1">
                <Twitter className="opacity-80 group-hover:text-white" />
              </div>
              <div className="rounded-full bg-white hover:bg-black border-2 p-1 group">
                <Facebook className="opacity-80 group-hover:text-white" />
              </div>
              <div className="rounded-full bg-white hover:bg-black border-2 p-1 group">
                <Instagram className="opacity-80 group-hover:text-white" />
              </div>
              <div className="rounded-full bg-white hover:bg-black border-2 p-1 group">
                <Github className="opacity-80 group-hover:text-white" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-y-12 gap-x-6 lg:w-2/3 justify-between ">
            <div className="flex flex-col gap-y-6 col-span-2 lg:col-span-1">
              <h5 className="tracking-widest uppercase font-satoshiBold">
                Company
              </h5>
              <p className="opacity-60">About</p>
              <p className="opacity-60">Features</p>
              <p className="opacity-60">Works</p>
              <p className="opacity-60">Career</p>
            </div>

            <div className="flex flex-col gap-y-6 col-span-2 lg:col-span-1">
              <h5 className="tracking-widest uppercase font-satoshiBold">
                Help
              </h5>
              <p className="opacity-60">Customer Support</p>
              <p className="opacity-60">Delivery Details</p>
              <p className="opacity-60">Terms & Conditions</p>
              <p className="opacity-60">Privacy Policy</p>
            </div>

            <div className="flex flex-col gap-y-6 col-span-2 lg:col-span-1">
              <h5 className="tracking-widest uppercase font-satoshiBold">
                Faq
              </h5>
              <p className="opacity-60">Account</p>
              <p className="opacity-60">Manage Deliveries</p>
              <p className="opacity-60">Orders</p>
              <p className="opacity-60">Payment</p>
            </div>
            <div className="flex flex-col gap-y-6 col-span-2 lg:col-span-1">
              <h5 className="tracking-widest uppercase font-satoshiBold">
                Resources
              </h5>
              <p className="opacity-60">Free eBook</p>
              <p className="opacity-60">Developing Tutorial</p>
              <p className="opacity-60">How to - Blog</p>
              <p className="opacity-60">Youtube Playlist</p>
            </div>
          </div>
        </div>
        <Divider className="my-12" />
        <div className="wrapper w-full px-4 lg:px-0 flex flex-col justify-center items-center gap-4 lg:flex-row lg:justify-between">
          <p className="opacity-60">
            NextWear © 2004-2024, All Rights Reserved
          </p>
          <Image
            src="/PaymentMethods.svg"
            alt="Payment Methods"
            width={281}
            height={30}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
