import {ProductData} from "@/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CartItem extends ProductData {
  quantity: number;
  selectedSize: string;
  color: number;
}

interface CartState {
  items: CartItem[];
  isHydrated: boolean;
}

const initialState: CartState = {
  items: [],
  isHydrated: false,
};

interface AddToCartPayload {
  product: ProductData;
  quantity: number;
  selectedSize: string;
  color: number;
}
interface ChangeQuantityPayload {
  _id: string;
  quantity: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartFromStorage: (state, action: PayloadAction<CartState>) => {
      state.items = action.payload.items;
      state.isHydrated = true;
    },
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const {product, quantity, selectedSize, color} = action.payload;
      const existingItem = state.items.find((item) => item._id === product._id);

      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        existingItem.quantity = Math.min(newQuantity, 10);
      } else {
        state.items.push({
          ...product,
          quantity: Math.min(quantity, 10),
          selectedSize,
          color,
        });
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    },
    changeQuantity: (state, action: PayloadAction<ChangeQuantityPayload>) => {
      const {_id, quantity} = action.payload;
      const existingItem = state.items.find((item) => item._id === _id);

      if (existingItem) {
        const newQuantity = quantity;
        existingItem.quantity = newQuantity;
      } else return;

      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const {
  setCartFromStorage,
  addToCart,
  removeFromCart,
  clearCart,
  changeQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
