import { Outlet } from "react-router-dom";
import Nav from "./components/nav/Nav";

const RootLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default RootLayout;
