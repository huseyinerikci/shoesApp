import { FC } from "react";
import Header from "../header";
import { Navigate, Outlet } from "react-router-dom";
import useUser from "../../hooks/useUser";
import Loader from "../loader";
interface ProtectedProps {
  allowedRoles?: string[];
}
const Protected: FC<ProtectedProps> = ({ allowedRoles }) => {
  const { user, isLoading, error } = useUser();

  //kullanıcı verisi  yüklenirken
  if (isLoading) return <Loader />;

  //kullanıcı verisi yüklenmediyse logine yönlendir
  if (error) return <Navigate to="/login" />;

  //eğer rolü yetersizse logine yönlendir
  if (allowedRoles && !allowedRoles.includes(user?.role))
    return <Navigate to="/login" />;

  //kullanıcı verisi yüklendiyse yani oturum açıldıysa
  if (user)
    return (
      <div>
        <Header />
        <Outlet />
      </div>
    );
};

export default Protected;
