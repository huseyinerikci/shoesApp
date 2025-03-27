//!  Auth Types
interface LoginValues {
  email: string;
  password: string;
}
interface RegisterValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  _id: string;
  createdAt: string;
  updateAt: string;
  __v: number;
}
interface AuthResponse {
  message: string;
  user: User;
}
interface RefreshResponse {
  accessToken: string;
}
interface LogoutResponse {
  message: string;
}
interface GetMeResponse {
  user: User;
}

//!  Product Types
interface Shoe {
  _id: string;
  name: string;
  picture: string[];
  description: string;
  isNew: boolean;
  discount: number;
  size: string;
  color: string;
  gender: string;
  price: number;
  __v: number;
  updateAt: string;
}
interface ShoeFormValues {
  name: string;
  description: string;
  isNew: boolean;
  discount: number;
  size: string;
  color: string;
  gender: string;
  price: number;
}

export type {
  LoginValues,
  RegisterValues,
  AuthResponse,
  User,
  RefreshResponse,
  LogoutResponse,
  GetMeResponse,
  Shoe,
  ShoeFormValues,
};
