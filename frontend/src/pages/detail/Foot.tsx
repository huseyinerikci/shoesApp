import { FC } from "react";
import { FaHeart } from "react-icons/fa";
import DOMPurify from "dompurify";
interface Props {
  description: string;
}
const Foot: FC<Props> = ({ description }) => {
  return (
    <div>
      <div className="flex flex-col gap-2 text-white">
        <div className="flex gap-2">
          <button className="flex-1 bg-black p-4 rounded-lg hover:brightness-90 transition cursor-pointer">
            Sepete Ekle
          </button>
          <button className="bg-black p-4 rounded-lg hover:brightness-90 transition cursor-pointer">
            <FaHeart />
          </button>
        </div>
        <button className="bg-my-blue p-4 rounded-lg hover:brightness-90 transition cursor-pointer">
          Hemen Satın Al
        </button>
      </div>

      <div>
        <h2 className="text-2xl text-grey-dark  mt-8 mb-2 font-semibold">
          Bu ürün hakkında
        </h2>
        <p
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
        />
      </div>
    </div>
  );
};

export default Foot;
