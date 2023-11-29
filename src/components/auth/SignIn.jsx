import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useQueryClient } from "@tanstack/react-query";
import { auth } from "../../config/firebase";
import { USER } from "../../constants/queryKeys";
import { GUEST_USER } from "../../constants/constants";

const SignIn = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleFormChange = (prop, val) => {
    setFormData((prev) => ({ ...prev, [prop]: val }));
  };

  const setUserQueryCache = (user) => {
    queryClient.setQueryData([USER], {
      email: user.email,
      id: user.uid,
      isLoggedIn: !!user,
    });
    navigate("/admin/preview/links");
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(({ user }) => {
        setUserQueryCache(user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Flex mt="15%" justifyContent="center">
      <Flex
        flexDir="column"
        alignItems="center"
        bg="gray.700"
        borderRadius="10px"
        w="400px"
        p="20px"
        boxShadow="0px 0px 3px"
      >
        <Flex flexDir="column" w="full">
          <Text mb="5px">Email</Text>
          <Input
            name="emailInput"
            type="email"
            mb="10px"
            onChange={(e) => handleFormChange("email", e.target.value)}
          />
          <Text mb="5px">Password</Text>
          <Input
            name="passwordInput"
            type="password"
            onChange={(e) => handleFormChange("password", e.target.value)}
          />
          <Flex justifyContent="space-evenly" alignItems="center" mt="30px">
            <Link
              color="lightblue"
              onClick={() =>
                setUserQueryCache({
                  ...GUEST_USER,
                  isLoggedIn: true,
                  uid: GUEST_USER.id,
                })
              }
            >
              Continue as guest
            </Link>
            <Link color="lightblue" href="register">
              Register
            </Link>
            <Button color="lightblue" w="80px" onClick={signIn}>
              Sign In
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignIn;
