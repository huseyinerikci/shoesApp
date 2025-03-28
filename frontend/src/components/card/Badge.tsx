import { FC } from "react";
import { Shoe } from "../../types";

interface Props {
  item: Shoe;
}
const Badge: FC<Props> = ({ item }) => {
  return (
    (item.discount || item.isNew) && (
      <span
        className={`${
          item.discount ? "bg-my-yellow" : "bg-my-blue"
        } absolute text-white rounded rounded-tl-xl rounded-br-xl lg:rounded-tl-3xl lg:rounded-br-3xl px-2 py-1 lg:px-4 lg:py-2`}
      >
        {item.discount ? `${item.discount}% İndirim` : "Yeni"}
      </span>
    )
  );
};

export default Badge;
