import {RootState} from "@/redux/store";
import {ShoppingBag} from "lucide-react";
import React from "react";
import {useSelector} from "react-redux";

const CartIcon = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="relative">
      <ShoppingBag />
      <div className="size-4 rounded-full absolute -bottom-2 -right-2 bg-black font-bold text-white text-xs flex justify-center items-center font-satoshiBold">
        {items.length}
      </div>
    </div>
  );
};

export default CartIcon;
