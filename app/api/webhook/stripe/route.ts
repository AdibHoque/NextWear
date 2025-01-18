import stripe from "stripe";
import {NextResponse} from "next/server";
import {createOrder} from "@/lib/actions/order.actions";

export async function POST(request: Request) {
  const body = await request.text();

  const sig = (await request.headers.get("stripe-signature")) as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    return NextResponse.json({message: "Webhook error", error: err});
  }

  // Get the ID and type
  const eventType = event.type;

  // CREATE
  if (eventType === "checkout.session.completed") {
    const {id, amount_total, metadata} = event.data.object;

    const order = {
      stripeId: id,
      userId: metadata?.userId || "",
      totalAmount: amount_total ? (amount_total / 100).toString() : "0",
      createdAt: new Date(),
      id: metadata?.id || "",
      name: metadata?.name || "",
      price: metadata?.price || "",
      size: metadata?.selectedSize || "",
      color: metadata?.color || "",
      image: metadata?.image || "",
    };

    const newOrder = await createOrder(order);
    return NextResponse.json({message: "OK", order: newOrder});
  }

  return new Response("", {status: 200});
}
