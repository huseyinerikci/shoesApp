import { FC } from "react";
import Hero from "./Hero";
import Buttons from "./Buttons";
import List from "./List";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <Buttons />
      <h1 className="text-[20px] md:text-[26px] lg:text-[30px] xl:text-[36px] font-semibold mb-4 md:mt-[28px] xl:mt-[32px]">
        Sana Uygun Seçenekler
      </h1>
      <List />
    </div>
  );
};

export default Home;
