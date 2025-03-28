import axios from "axios";
import { AuthResponse } from "../types";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    //hata alınan api isteğini  sakla
    const originalReq = err.config;
    //access token süresi   doldu ise
    if (
      err.response.status === 401 &&
      !originalReq._retry &&
      err.message.data.message === "Access token expired"
    ) {
      originalReq._retry = true;

      try {
        const res = await api.post<AuthResponse>("/auth/refresh");
        //yeni access token ile orijinal isteği tekrar at
        return api(originalReq);
      } catch (err) {
        console.log("Access token yenileme hatası", err);

        //refresh token süresi dolduysa
        await api.post("/auth/logout");

        //login sayfasına yönlendir
        window.location.href = "/login";

        //yeni hata alınırsa hata döndür
        return Promise.reject(err);
      }
    }
    return Promise.reject(err);
  }
);
export default api;
