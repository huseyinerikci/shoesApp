import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="relative mt-6  md:mt-12 lg:mt-16 xl:mt-20">
      <div className="absolute top-1/2 transform -translate-y-1/2 max-sm:h-full max-sm:flex flex-col justify-end text-white  p-4 sm:p-6 md:p-10 ">
        <p className="text-[15px] sm:text-[17px] lg:text-[21px] xl:text-2xl xl:font-semibold text-grey">
          Sadece geçerli süreyle
        </p>
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-[74px] text-white font-semibold">
          %30 indirim
        </h1>
        <p className="text-[15px] sm:text-[17px] md:text-[19px] xl:text-[21px] text-grey max-w-[80%]">
          Rahatınız düşünülerek tasarlanan spor ayakkabılar, bir sonraki
          seansınıza tüm odağınızı verebilmenizi sağlar.
        </p>
      </div>
      <img src="/hero.png" alt="hero" />
    </div>
  );
};

export default Hero;
