"use server";
import {CartItem} from "@/redux/cartSlice";
import {auth} from "@clerk/nextjs/server";
import Stripe from "stripe";
import {connectToDatabase} from "../database";
import Order from "../database/models/order.models";
import {ProductOrder} from "@/types";

export const checkoutOrder = async (
  cartItems: CartItem[],
  isDiscountApplied: boolean
) => {
  const {userId} = await auth();
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  try {
    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: "usd",
        unit_amount: Number(item.price) * 100,
        product_data: {
          name: `${item.name} - Size: ${item.selectedSize}`,
          description: item.description,
          images: [`https://nextwear.vercel.app/${item.image[0]}`],
          metadata: {
            userId: userId,
            id: item._id,
            name: item.name,
            price: item.price,
            size: item.selectedSize,
            color: item.color,
            image: `https://nextwear.vercel.app${item.image[0]}`,
          },
        },
      },
      quantity: item.quantity,
    }));

    const discounts = isDiscountApplied ? [{coupon: "YQd1FQQF"}] : [];

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      discounts,
      shipping_options: [
        {
          shipping_rate_data: {
            display_name: "Home Delivery",
            fixed_amount: {
              amount: 1500,
              currency: "usd",
            },
            type: "fixed_amount",
          },
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/purchases`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/cancel`,
    });
    return session.url;
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    throw new Error("Unable to create checkout session.");
  }
};

export const createOrder = async (order: ProductOrder) => {
  try {
    await connectToDatabase();

    const newOrder = await Order.create({
      ...order,
    });

    return JSON.parse(JSON.stringify(newOrder));
  } catch (error) {
    console.log(error);
  }
};
