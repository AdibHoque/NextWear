"use client";
import BreadCrumbs from "@/app/components/BreadCrumbs";
import {checkoutOrder} from "@/lib/actions/checkout.actions";
import {
  CartItem,
  removeFromCart,
  changeQuantity,
  clearCart,
} from "@/redux/cartSlice";
import {RootState} from "@/redux/store";
import {Button, ButtonGroup} from "@nextui-org/button";
import {Divider, Input} from "@nextui-org/react";
import {loadStripe} from "@stripe/stripe-js";
import {ArrowRight, Tag, Trash} from "lucide-react";
import Image from "next/image";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import MySwal from "sweetalert2";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Item = ({data}: {data: CartItem}) => {
  const color = data.color
    ? data.color == 1
      ? "Default"
      : data.color == 2
      ? "Dark"
      : "Light"
    : "Default";
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const actionResult = dispatch(removeFromCart(data._id));

        if (actionResult) {
          MySwal.fire({
            position: "center",
            icon: "success",
            title: "Removed from Cart!",
            text: `${data.name} has been removed from your cart.`,
            timer: 2000,
            showConfirmButton: false,
          });
        } else {
          MySwal.fire({
            position: "center",
            icon: "error",
            title: "Error!",
            text: "Failed to remove the product to the cart. Please try again.",
            timer: 2000,
            showConfirmButton: false,
          });
        }
      }
    });
  };

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

          <Trash
            onClick={handleRemoveFromCart}
            color="red"
            className="hover:cursor-pointer"
          />
        </div>

        <p>
          Size:{" "}
          <span className="opacity-60">
            {data.selectedSize ? data.selectedSize : "Large"}
          </span>
        </p>
        <p>
          Color: <span className="opacity-60">{color}</span>
        </p>
        <div className="flex justify-between items-center w-full ">
          <h4 className="font-bold font-satoshiBold text-2xl">
            ${Number(data.price) * Number(data.quantity)}
          </h4>
          <ButtonGroup radius="full" className="font-satoshiBold">
            <Button
              isDisabled={data.quantity <= 1}
              onPress={() =>
                dispatch(
                  changeQuantity({
                    _id: data._id,
                    quantity: Number(data.quantity) - 1,
                  })
                )
              }
              isIconOnly
              size="sm"
              className="text-xl h-full px-0 w-1"
            >
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
            <Button
              isDisabled={data.quantity >= 10}
              onPress={() =>
                dispatch(
                  changeQuantity({
                    _id: data._id,
                    quantity: Number(data.quantity) + 1,
                  })
                )
              }
              isIconOnly
              size="sm"
              className="text-xl h-full px-0 w-1"
            >
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
  const dispatch = useDispatch();
  const [discount, setDiscount] = useState(0);
  const subTotal = items.reduce(
    (acc, current) => acc + Number(current.price) * Number(current.quantity),
    15
  );
  const total = subTotal - Math.round(((subTotal - 15) / 100) * discount);

  const handleDiscount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const promoCode = form.get("promo");
    if (promoCode === "ADIB20") {
      setDiscount(20);
      MySwal.fire({
        position: "center",
        icon: "success",
        title: "Discount Granted!",
        text: `You have been granted 20% Discount for using Promo code ${promoCode}`,
        timer: 2000,
        showConfirmButton: false,
      });
    } else {
      MySwal.fire({
        position: "center",
        icon: "error",
        title: "Invalid Promo code.",
        text: `${promoCode} is not a valid Promo code.`,
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  const handleClearCart = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clear cart!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
        MySwal.fire({
          position: "center",
          icon: "success",
          title: "Success!",
          text: "Cart has been cleard!",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  const handleCheckout = async () => {
    if (items.length === 0) {
      return;
    }
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe.js failed to load.");
      const session = await checkoutOrder(items);
      window.location.href = session!;
    } catch (error) {
      console.error("Checkout failed:", error);
    }
  };

  return (
    <div className="wrapper px-4 lg:px-0 mb-6 lg:mb-20">
      <BreadCrumbs routes={["Home", "Cart"]} />
      <h1 className="font-integral font-bold uppercase text-2xl md:text-3xl lg:text-4xl mb-6 -mt-2">
        Your Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 justify-between">
        <div className="w-full relative">
          {items.length > 0 && (
            <p
              onClick={handleClearCart}
              className="absolute right-2 -top-6 cursor-pointer text-gray-700 font-satoshiBold opacity-60"
            >
              Clear Cart
            </p>
          )}

          <div className="flex flex-col border rounded-xl divide-y-medium md:px-6 px-2 w-full h-full">
            {items.length < 1 ? (
              <div className="flex flex-col justify-center items-center h-full">
                <Image
                  alt="empty-cart"
                  src="/empty-cart.svg"
                  width={350}
                  height={350}
                />
                <p className="pb-6 font-satoshiBold opacity-50">
                  Your Cart is empty.
                </p>
              </div>
            ) : (
              items.map((data) => <Item key={data._id} data={data} />)
            )}
          </div>
        </div>

        <div className="rounded-xl border flex flex-col gap-5 p-5 w-full lg:w-3/5 h-full lg:sticky lg:top-6">
          <h4 className="font-satoshiBold font-bold text-xl md:text-2xl">
            Order Summary
          </h4>
          <div className="flex justify-between items-center">
            <p className="opacity-60">Subtotal</p>
            <p className="font-satoshiBold">${subTotal - 15}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="opacity-60">Discount</p>
            <p className="font-satoshiBold text-red-500">
              -${Math.round(((subTotal - 15) / 100) * discount)}
            </p>
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
          <form className="w-full flex gap-4" onSubmit={handleDiscount}>
            <Input
              name="promo"
              isDisabled={discount > 0}
              labelPlacement="outside"
              required
              placeholder={discount > 0 ? "COUPON APPLIED" : "Add promo code"}
              className="w-full rounded-xl py-[1px] bg-white"
              startContent={
                <Tag className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              type="text"
            />
            <Button
              isDisabled={discount > 0}
              type="submit"
              color="primary"
              className=" rounded-xl font-satoshiBold"
            >
              Apply
            </Button>
          </form>
          <Button
            color="primary"
            size="lg"
            className="w-full"
            onPress={handleCheckout}
          >
            Go to Checkout <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
