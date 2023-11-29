import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Alert, AlertIcon, Center, Spinner, useToast } from "@chakra-ui/react";
import Nav from "./components/nav/Nav";
import useUser from "./hooks/useUser";
import { GUEST_USER } from "./constants/constants";

const RootLayout = () => {
  const location = useLocation();
  const { user, isPending, isSuccess, isError } = useUser();
  console.log(user);

  if (isSuccess && !user.isLoggedIn) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return (
    <>
      {isPending && (
        <Center>
          <Spinner />
        </Center>
      )}
      {isError && <Text mt={12}>An error occurred.</Text>}
      {isSuccess && (
        <>
          <Nav />
          {user.id === GUEST_USER.id && (
            <Alert
              status="warning"
              zIndex={1}
              w="fit-content"
              borderRadius="10px"
              position="fixed"
              top="20"
              left="0"
              right="0"
              mx="auto"
            >
              <AlertIcon />
              You are logged in as a guest. No changes will be saved
            </Alert>
          )}
          <Outlet />
        </>
      )}
    </>
  );
};

export default RootLayout;
