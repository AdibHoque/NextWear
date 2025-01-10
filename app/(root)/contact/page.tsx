import {Button} from "@nextui-org/button";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="wrapper px-4 md:px-8 lg:px-0 mb-20">
      <h1 className="px-4 lg:px-0 font-integral text-center font-bold uppercase text-2xl md:text-3xl lg:text-4xl my-6 ">
        Contact Us
      </h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 my-6">
        <Image src="/contact.svg" alt="contact" width={1000} height={1000} />
        <div className="flex flex-col gap-y-6 text-opacity-80 justify-center">
          <h5 className="font-satoshiBold">Our Store</h5>
          <p>
            58290 Baxter Avenue <br /> Suite 210, New York, USA
          </p>
          <p>
            Tel: (212) 789-4561 <br />
            Email: support@nextwear.com
          </p>

          <h5 className="font-satoshiBold">Careers at NextWear</h5>

          <p>Explore exciting opportunities and join our innovative team.</p>

          <Button className="w-36" color="primary">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
