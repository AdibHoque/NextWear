import {setCartFromStorage} from "@/redux/cartSlice";
import {RootState} from "@/redux/store";
import {Spinner} from "@nextui-org/react";
import {ShoppingBag} from "lucide-react";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

const CartIcon = () => {
  const {items, isHydrated} = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined" && !isHydrated) {
      const storedCart = localStorage.getItem("cart");
      const parsedCart = storedCart ? JSON.parse(storedCart) : {items: []};
      dispatch(setCartFromStorage(parsedCart));
    }
  }, [dispatch, isHydrated]);

  if (!isHydrated) {
    return (
      <div className="relative">
        <ShoppingBag />
        <div className="size-4 rounded-full absolute -bottom-2 -right-2 bg-black font-bold text-white text-xs flex justify-center items-center font-satoshiBold">
          <Spinner />
        </div>
      </div>
    );
  }
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
