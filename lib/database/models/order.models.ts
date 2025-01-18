import {Schema, model, models} from "mongoose";

const OrderSchema = new Schema({
  stripeId: {type: String, required: true},
  userId: {type: String, required: true},
  totalAmount: {type: String, required: true},
  createdAt: {type: Date, required: true},
  id: {type: String, required: true},
  name: {type: String, required: true},
  price: {type: String, required: true},
  size: {type: String, required: true},
  color: {type: String, required: true},
  image: {type: String, required: true},
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;
