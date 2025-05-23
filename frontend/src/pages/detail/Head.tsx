import { FC } from "react";
import { Shoe } from "../../types";
import Badge from "../../components/card/Badge";
import Price from "../../components/card/Price";

interface Props {
  item: Shoe;
}
const Head: FC<Props> = ({ item }) => {
  return (
    <div className="flex flex-col gap-4">
      <Badge item={item} />

      <h1 className="font-semibold text-2xl md:text-[28px] lg:text-[32px] mt-[55px]">
        {item.name}
      </h1>
      <div className="text-2xl flex gap-1">
        <Price item={item} designs="!text-my-blue" />
        {item.discount != 0 && (
          <span className="line-through ps-3">${item.price}</span>
        )}
      </div>
    </div>
  );
};

export default Head;
