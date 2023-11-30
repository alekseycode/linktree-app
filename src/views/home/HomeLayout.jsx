import { Outlet } from "react-router-dom";
import HomeNav from "../../components/nav/HomeNav";

const HomeLayout = () => {
  return (
    <>
      <HomeNav />
      <Outlet />
    </>
  );
};

export default HomeLayout;
