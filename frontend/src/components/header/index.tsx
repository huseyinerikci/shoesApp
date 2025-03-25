import { FC } from "react";
import useUser from "../../hooks/useUser";
import useAuth from "../../hooks/useAuth";

const Header: FC = () => {
  const { user, isLoading, error } = useUser();
  const { logout } = useAuth();
  return (
    <div className="flex gap-7">
      <h1> Header</h1>
      <button onClick={() => logout.mutate()}>Logout</button>
    </div>
  );
};

export default Header;
