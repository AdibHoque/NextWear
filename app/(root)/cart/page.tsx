"use client";
import {CartItem} from "@/redux/cartSlice";
import {RootState} from "@/redux/store";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Divider, Input} from "@nextui-org/react";
import {ArrowRight, Tag, Trash} from "lucide-react";
import Image from "next/image";
import React from "react";
import {useSelector} from "react-redux";

const Item = ({data}: {data: CartItem}) => {
  return (
    <div className="flex items-center justify-between max-h-72 md:py-6 py-2 gap-4 w-full">
      <Image
        alt="Card background"
        className=" hover:scale-110 overflow-hidden transform transition-transform duration-300 ease-in-out"
        src={data.image[0]}
        width={200}
        height={200}
      />

      <div className="pb-0 pt-2 px-2 flex-col items-start w-full">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-xs md:text-lg font-satoshiBold font-bold truncate">
            {data.name}
          </h3>

          <Trash color="red" className="hover:cursor-pointer" />
        </div>

        <p>
          Size: <span className="opacity-60">Large</span>
        </p>
        <p>
          Color: <span className="opacity-60">White</span>
        </p>
        <div className="flex justify-between items-center w-full ">
          <h4 className="font-bold font-satoshiBold text-2xl">
            ${Number(data.price) * Number(data.quantity)}
          </h4>
          <ButtonGroup radius="full" className="font-satoshiBold">
            <Button isIconOnly size="sm" className="text-xl h-full px-0 w-1">
              -
            </Button>
            <Button
              isIconOnly
              disabled
              className="text-xl font-satoshi h-full px-0 w-1 "
              size="sm"
            >
              {data.quantity}
            </Button>
            <Button isIconOnly size="sm" className="text-xl h-full px-0 w-1">
              +
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

const CartPage = () => {
  const {items} = useSelector((state: RootState) => state.cart);
  const total = items.reduce(
    (acc, current) => acc + Number(current.price) * Number(current.quantity),
    15
  );
  return (
    <div className="wrapper px-4 lg:px-0 my-6">
      <h1 className="font-integral font-bold uppercase text-2xl md:text-3xl lg:text-4xl my-6">
        Your Cart
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 justify-between">
        <div className="flex flex-col border rounded-xl divide-y-medium md:px-6 px-2 w-full">
          {items.map((data) => (
            <Item key={data._id} data={data} />
          ))}
        </div>
        <div className="rounded-xl border flex flex-col gap-5 p-5 w-full lg:w-3/5 h-full">
          <h4 className="font-satoshiBold font-bold text-xl md:text-2xl">
            Order Summary
          </h4>
          <div className="flex justify-between items-center">
            <p className="opacity-60">Subtotal</p>
            <p className="font-satoshiBold">${total - 15}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="opacity-60">Discount</p>
            <p className="font-satoshiBold text-red-500">-$0</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="opacity-60">Delivery Fee</p>
            <p className="font-satoshiBold">${total > 15 ? 15 : 0}</p>
          </div>
          <Divider />
          <div className="flex justify-between items-center">
            <p className="">Total</p>
            <p className="font-satoshiBold">${total > 15 ? total : 0}</p>
          </div>
          <form className="w-full flex gap-4">
            <Input
              name="promo"
              labelPlacement="outside"
              required
              placeholder="Add promo code"
              className="w-full rounded-xl py-[1px] bg-white"
              startContent={
                <Tag className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              type="text"
            />
            <Button
              type="submit"
              color="primary"
              className=" rounded-xl font-satoshiBold"
            >
              Apply
            </Button>
          </form>
          <Button color="primary" size="lg" className="w-full">
            Go to Checkout <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
