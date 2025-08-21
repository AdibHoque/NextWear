import Stripe from "stripe";
import {NextResponse} from "next/server";
import {createOrder} from "@/lib/actions/order.actions";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const body = await request.text();

  const sig = (await request.headers.get("stripe-signature")) as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = Stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    return NextResponse.json({message: "Webhook error", error: err});
  }

  // Get the ID and type
  const eventType = event.type;

  // CREATE
  if (eventType === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      // Fetch line items associated with the session
      const lineItems = await stripe.checkout.sessions.listLineItems(
        session.id,
        {expand: ["data.price.product"]}
      );
      // Map line items to orders
      const orders = lineItems.data.map((item) => {
        // Access metadata directly from the item
        const product = item.price?.product;
        const metadata =
          product && typeof product !== "string" && "metadata" in product
            ? product.metadata
            : {};
       
         return {
          stripeId: session.id,
          userId: metadata.userId || "",
          createdAt: new Date(),
          id: metadata.id || "",
          name: metadata.name || "",
          price: (item.amount_subtotal || 0) / 100,
          discount: (item.amount_discount || 0) / 100,
          size: metadata.size || "",
          color: metadata.color || "",
          image: metadata.image || "",
          quantity: item.quantity || 1,
        };
      });

      // Save each order in the database
      const savedOrders = await Promise.all(
        orders.map((order) => createOrder(order))
      );

      console.log("Orders created successfully:", savedOrders);
      return NextResponse.json({
        message: "Orders created",
        orders: savedOrders,
      });
    } catch (err) {
      console.error("Error processing checkout session:", err);
      return NextResponse.json(
        {message: "Error processing order", error: err},
        {status: 500}
      );
    }
  }

  return new Response("", {status: 200});
}
