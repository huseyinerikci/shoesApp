import { FC } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import UserInfo from "./UserInfo";

const Header: FC = () => {
  return (
    <div className=" bg-white-fa grid grid-cols-3 p-4 md:p-6 xl:p-8 rounded-2xl items-center md:rounded-3xl xl:rounded-4xl mb-6 md:mb-7 xl:mb-8">
      <button className="md:hidden  text-xl cursor-pointer">
        <GiHamburgerMenu />
      </button>
      <nav className=" hidden md:flex item-center gap-6 xl:gap-10 font-semibold ">
        <Link to="/" className=" text-nowrap">
          Yeni Gelenler 🔥
        </Link>
        <Link to="/">Erkek</Link>
        <Link to="/">Kadın</Link>
      </nav>

      <Link to="/" className="flex justify-center items-center">
        <img src="/logo.svg" alt="logo" />
      </Link>

      <div className="flex justify-end  items-center">
        <UserInfo />
      </div>
    </div>
  );
};

export default Header;
