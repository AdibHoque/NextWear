"use server";
import {CartItem} from "@/redux/cartSlice";
import Stripe from "stripe";

export const checkoutOrder = async (cartItems: CartItem[]) => {
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
            id: item._id,
            size: item.selectedSize,
            color: item.color,
          },
        },
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/cancel`,
    });

    return session.url;
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    throw new Error("Unable to create checkout session.");
  }
};
