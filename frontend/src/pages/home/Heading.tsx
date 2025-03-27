import { FC } from "react";

const Heading: FC = () => {
  return (
    <div className="flex justify-between items-center my-6 md:mt-9 lg:mt-14 xl:mt-[90px] xl:mb-8">
      <h1 className="font-semibold uppercase text-2xl md:text-4xl lg:text-6xl xl:text-[74px] leading-[96%]">
        Yeni ürünleri <br /> kaçırma
      </h1>
      <button className="bg-my-blue text-white py-3 px-4 lg:py-4 lg:px-8 rounded-lg hover:brightness-90 transition cursor-pointer">
        Alışverişe Başla
      </button>
    </div>
  );
};

export default Heading;
