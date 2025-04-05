import { FC } from "react";
interface Props {
  message: string;
}
const Error: FC<Props> = ({ message }) => {
  return (
    <div className="bg-my-blue grid place-self-center place-items-center my-36 text-white text-2xl rounded-lg shadow-2xl text-center px-3 py-2 w-fit h-[100px] ">
      {message} Bir hata oluştu. Lütfen daha sonra tekrar deneyin.
    </div>
  );
};

export default Error;
