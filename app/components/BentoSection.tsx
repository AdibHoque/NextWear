import Link from "next/link";

export const BentoSection = () => {
  return (
    <div className="wrapper my-20 px-4 lg:px-0">
      <div className="bg-[#F0F0F0] rounded-3xl px-4 lg:px-16 pb-4 lg:pb-16">
        <h1 className="section-title pt-4 lg:pt-16">BROWSE BY dress STYLE</h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <Link
            href="/collections?category=casual"
            className="md:col-span-2 w-full h-[190px] hover:bg-cover bg-no-repeat bg-contain bg-right-top rounded-xl bg-white bg-[url('/casual.png')]"
          >
            <h2 className="font-satoshiBold text-3xl lg:text-4xl mt-6 ml-6">
              Casual
            </h2>
          </Link>

          <Link
            href="/collections?category=formal"
            className="md:col-span-3 hover:bg-cover w-full h-[190px] bg-no-repeat bg-contain bg-right-top rounded-xl bg-white bg-[url('/formal.png')]"
          >
            <h2 className="font-satoshiBold text-3xl lg:text-4xl mt-6 ml-6">
              Formal
            </h2>
          </Link>

          <Link
            href="/collections?category=party"
            className="md:col-span-3 hover:bg-cover w-full h-[190px] bg-no-repeat bg-contain bg-right-top rounded-xl bg-white bg-[url('/party.png')]"
          >
            <h2 className="font-satoshiBold text-3xl lg:text-4xl mt-6 ml-6">
              Party
            </h2>
          </Link>

          <Link
            href="/collections?category=gym"
            className="md:col-span-2 hover:bg-cover w-full h-[190px] bg-no-repeat bg-contain bg-right-top rounded-xl bg-white bg-[url('/gym.png')]"
          >
            <h2 className="font-satoshiBold text-3xl lg:text-4xl mt-6 ml-6">
              Gym
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};
