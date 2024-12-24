import {ProductData} from "@/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface CartItem extends ProductData {
  quantity: number;
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
      const {product, quantity} = action.payload;
      const existingItem = state.items.find((item) => item._id === product._id);

      if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        existingItem.quantity = Math.min(newQuantity, 10);
      } else {
        state.items.push({...product, quantity: Math.min(quantity, 10)});
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
  },
});

export const {setCartFromStorage, addToCart, removeFromCart, clearCart} =
  cartSlice.actions;

export default cartSlice.reducer;
