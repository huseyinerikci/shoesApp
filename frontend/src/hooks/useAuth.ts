import { useMutation } from "@tanstack/react-query";
import authApi from "../service/auth";
import { LoginValues, RegisterValues } from "../types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const useAuth = () => {
  const navigate = useNavigate();

  const login = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: LoginValues) => authApi.login(data),
    onSuccess: () => {
      navigate("/");
      toast.success("Giriş başarılı");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Giriş başarısız");
    },
  });
  const register = useMutation({
    mutationKey: ["register"],
    mutationFn: (data: RegisterValues) => authApi.register(data),
    onSuccess: () => {
      navigate("/");
      toast.success("Kayıt başarılı");
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "Kayıt başarısız");
    },
  });

  const logout = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      navigate("/login");
      toast.success("Çıkış başarılı");
    },
    onError: (error: any) => {
      toast.error(error.response.data?.message || "Çıkış başarısız");
    },
  });

  return {
    login,
    register,
    logout,
  };
};

export default useAuth;
