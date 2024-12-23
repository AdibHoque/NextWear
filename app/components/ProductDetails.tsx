"use client";

import {Button, ButtonGroup, Divider, Tab, Tabs} from "@nextui-org/react";
import {CheckIcon} from "lucide-react";
import Image from "next/image";
import {useState} from "react";
import ProductGallery from "@/app/components/ProductGallery";
import {ProductCardProps} from "../../types";
import {addToCart} from "@/redux/cartSlice";
import {useDispatch} from "react-redux";
import MySwal from "sweetalert2";

const ProductDetails = ({data}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Small");
  const [color, setColor] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const actionResult = dispatch(
      addToCart({
        product: {
          _id: data._id,
          name: data.name,
          description: data.description,
          image: data.image,
          price: data.price,
          rating: data.rating,
          type: data.type,
          category: data.category,
        },
        quantity,
      })
    );

    if (actionResult) {
      MySwal.fire({
        position: "center",
        icon: "success",
        title: "Added to Cart!",
        text: `${data.name} has been added to your cart.`,
        timer: 2000,
        showConfirmButton: false,
      });
    } else {
      MySwal.fire({
        position: "center",
        icon: "error",
        title: "Error!",
        text: "Failed to add the product to the cart. Please try again.",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="wrapper flex flex-col lg:flex-row justify-between px-4 lg:px-0 gap-6 my-6 mb-12 md:mb-20">
      <div className="lg:w-1/2 w-full">
        <ProductGallery image={data.image} />
      </div>

      <div className="lg:w-1/2 w-full flex flex-col gap-4">
        <h1 className="font-integral text-4xl">{data.name}</h1>
        <div className="flex">
          {Array(Math.floor(parseInt("4.5")))
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
          {Array(5 - Math.floor(parseInt("4.5")))
            .fill(0)
            .map((_, index) => (
              <Image
                width={24}
                height={24}
                key={index}
                src="/nostar.svg"
                alt="nostar"
              />
            ))}
          <p className="ml-2 text-black/60 font-satoshi">{data.rating}/5</p>
        </div>
        <h4 className="font-bold font-satoshiBold text-3xl">${data.price}</h4>
        <p className="opacity-60">{data.description}</p>
        <Divider />

        <div>
          <p className="opacity-60 font-satoshi text-sm mb-2">Choose Color</p>
          <div className="flex gap-2">
            <div
              onClick={() => setColor(1)}
              className="size-9 bg-[#4F4631] rounded-full flex justify-center items-center text-white cursor-pointer"
            >
              {color === 1 ? <CheckIcon /> : ""}
            </div>
            <div
              onClick={() => setColor(2)}
              className="size-9 bg-[#314F4A] rounded-full flex justify-center items-center text-white cursor-pointer"
            >
              {color === 2 ? <CheckIcon /> : ""}
            </div>
            <div
              onClick={() => setColor(3)}
              className="size-9 bg-[#31344F] rounded-full flex justify-center items-center text-white cursor-pointer"
            >
              {color === 3 ? <CheckIcon /> : ""}
            </div>
          </div>
        </div>
        <Divider />
        <div>
          <p className="opacity-60 font-satoshi text-sm mb-2">Choose Size</p>
          <Tabs
            className="bg-white"
            color="primary"
            radius="full"
            size="lg"
            aria-label="Options"
            selectedKey={selectedSize}
            onSelectionChange={(key) => setSelectedSize(key as string)}
          >
            <Tab key="Small" title="Small" />
            <Tab key="Medium" title="Medium" />
            <Tab key="Large" title="Large" />
            <Tab key="X-Large" title="X-Large" />
          </Tabs>
        </div>

        <Divider />
        <div className="flex gap-5">
          <ButtonGroup radius="full" className="font-satoshiBold">
            <Button
              size="sm"
              onPress={() => (quantity > 1 ? setQuantity(quantity - 1) : "")}
              className="text-2xl h-full"
            >
              -
            </Button>
            <Button disabled className="text-xl font-satoshi h-full" size="sm">
              {quantity}
            </Button>
            <Button
              size="sm"
              onPress={() => (quantity < 10 ? setQuantity(quantity + 1) : "")}
              className="text-2xl h-full"
            >
              +
            </Button>
          </ButtonGroup>
          <Button
            color="primary"
            radius="full"
            className="w-full"
            onPress={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductDetails;
