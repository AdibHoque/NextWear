import {ProductData} from "@/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
interface CartItem extends ProductData {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

interface AddToCartPayload {
  product: ProductData;
  quantity: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const {product, quantity} = action.payload;
      const existingItem = state.items.find((item) => item._id === product._id);

      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        existingItem.quantity = Math.min(newQuantity, 10);
      } else {
        state.items.push({...product, quantity: Math.min(quantity, 10)});
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
