import { FC } from "react";
import { Shoe } from "../../types";

interface Props {
  item: Shoe;
  designs: string;
}
const Price: FC<Props> = ({ item, designs }) => {
  let price = item.price;
  if (item.discount) {
    price = (price * (100 - item.discount)) / 100;
  }
  return (
    <div
      className={`${item.discount} ? "text-my-yellow" : "text-white" ${designs}`}
    >
      ${price.toFixed(2)}
    </div>
  );
};

export default Price;
