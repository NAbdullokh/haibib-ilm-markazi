import Ariza from "../page/Ariza";
import Home from "../page/Home";
import Login from "../page/Login";

export const pageItems = [
  { id: 1, hidden: false, title: "Home", element: <Home />, to: "/" },
  { id: 6, hidden: true, title: "ARIZA", element: <Ariza />, to: "/ariza" },
  { id: 7, hidden: true, title: "Login", element: <Login />, to: "/login" },
];
