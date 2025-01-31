import {getAllOrdersByUser} from "@/lib/actions/order.actions";
import {ProductOrder} from "@/types";
import Image from "next/image";
import crypto from "crypto";

const Item = ({data}: {data: ProductOrder}) => {
  const color = data.color
    ? data.color == "1"
      ? "Default"
      : data.color == "2"
      ? "Dark"
      : "Light"
    : "Default";

  const generateTransactionId = (input: string) => {
    const hash = crypto.createHash("md5").update(input).digest("hex");
    return hash.slice(0, 24);
  };

  return (
    <div className="flex items-center justify-between max-h-72 md:py-6 py-2 gap-4 w-full">
      <Image
        alt="Card background"
        className="hover:scale-110 overflow-hidden transform transition-transform duration-300 ease-in-out"
        src={data.image}
        width={250}
        height={250}
      />

      <div className="pb-0 pt-2 px-2 flex-col items-start w-full">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-xs md:text-sm lg:text-lg font-satoshiBold font-bold truncate">
            {data.name}
          </h3>
        </div>

        <div className="flex gap-2">
          <p className="text-xs md:text-sm lg:text-lg">
            Size:{" "}
            <span className="opacity-60">
              {data.size ? data.size : "Large"}
            </span>
          </p>
          <p className="text-xs md:text-sm lg:text-lg">
            Color: <span className="opacity-60">{color}</span>
          </p>
        </div>

        <div className="flex justify-between items-center w-full ">
          {data.discount ? (
            <div className="flex gap-2 items-center">
              <h3 className="line-through text-red-500 font-satoshi text-xl md:text-2xl">
                ${Number(data.price)}
              </h3>
              <h3 className="font-satoshiBold text-xl md:text-2xl">
                ${Number(data.price) - Number(data.discount)}
              </h3>{" "}
              <span className="opacity-60">X {data.quantity}</span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <h3 className="font-satoshiBold text-xl md:text-2xl">
                ${Number(data.price)}
              </h3>{" "}
              <span className="opacity-60">X {data.quantity}</span>
            </div>
          )}
        </div>
        <p className="text-xs md:text-sm ">
          Transaction ID:
          <br />
          <span className="opacity-60 text-xs md:text-sm">
            {generateTransactionId(data.stripeId)}
          </span>
        </p>
        <span className="opacity-60 text-xs md:text-sm">
          {new Date(data.createdAt).toLocaleString("en-BD", {
            timeZone: "Asia/Dhaka",
          })}
        </span>
      </div>
    </div>
  );
};

const PurchasesPage = async () => {
  const orders = await getAllOrdersByUser({
    page: 1,
  });
  return (
    <div className="wrapper px-4 lg:px-0 mb-12">
      <h1 className="px-4 lg:px-0 font-integral text-center font-bold uppercase text-2xl md:text-3xl lg:text-4xl my-6 ">
        Purchases
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mx-auto mb-6">
        {orders.data.map((d: ProductOrder, index: number) => (
          <Item data={d} key={d.id + index}></Item>
        ))}
      </div>
    </div>
  );
};

export default PurchasesPage;
