import { Outlet } from "react-router-dom";
import Nav from "./components/nav/Nav";
import useUser from "./hooks/useUser";
import Loading from "./components/loading/Loading";
import { Flex } from "@chakra-ui/react";

const RootLayout = () => {
  const user = useUser();
  //add pending and success states
  console.log(user);
  return (
    <>
      {user.status === "success" ? (
        <>
          <Nav user={user} />
          <Outlet />
        </>
      ) : (
        <Flex justifyContent="center" mt="20%">
          <Loading />
        </Flex>
      )}
    </>
  );
};

export default RootLayout;
