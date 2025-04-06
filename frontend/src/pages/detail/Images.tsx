import { FC } from "react";

interface Props {
  pictures: string[];
}
const Images: FC<Props> = ({ pictures }) => {
  return (
    <div className="grid grid-cols-2 gap-4 rounded-[48px] h-fit ">
      {pictures.map((url, key) => {
        // Eğer url başında / işareti yoksa, onu ekliyoruz
        const imageUrl = url.startsWith("/") ? url : `/${url}`;
        return (
          <img
            src={imageUrl}
            key={key}
            className="xl:w-full xl:max-h-[340px]"
          />
        );
      })}
    </div>
  );
};

export default Images;
