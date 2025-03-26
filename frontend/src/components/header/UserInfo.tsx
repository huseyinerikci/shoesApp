import { FC, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserInfo: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading, error } = useUser();
  const { logout } = useAuth();
  return (
    <div className="flex gap-6 xl:gap-10">
      <button className="md:text-xl xl:text-2xl max-md:hidden cursor-pointer">
        <FaSearch />
      </button>
      <button className="relative  md:text-lg cursor-pointer">
        <FaUserAlt onClick={() => setIsOpen(!isOpen)} />
        {isOpen && (
          <div className="absolute top-10 -right-15 md:-right-18 md:top-12  xl:-right-25 xl:top-15 rounded-md bg-white shadow-lg">
            <button className="header-button font-semibold">
              {user.firstName} {user.lastName}
            </button>
            {user.role === "admin" && (
              <Link to="/admin">
                <button className="header-button">Admin Paneli</button>
              </Link>
            )}
            <button onClick={() => logout.mutate()} className="header-button">
              Çıkış Yap
            </button>
          </div>
        )}
      </button>
      <button className="bg-my-yellow text-sm md:text-base xl:text-lg grid place-items-center size-5 md:size-6 xl:size-8 rounded-full">
        0
      </button>
    </div>
  );
};

export default UserInfo;
