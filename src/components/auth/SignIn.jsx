import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Button, Flex, Input, Link, Text } from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useQueryClient } from "@tanstack/react-query";
import db, { auth } from "../../config/firebase";
import { DESIGN, DESIGNS, USER } from "../../constants/queryKeys";
import { GUEST_USER } from "../../constants/constants";
import { fixErrorMessage } from "./authFunctions";
import { doc, getDoc } from "firebase/firestore";

const SignIn = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    error: "",
  });
  const [showError, setShowError] = useState(false);

  const handleFormChange = (prop, val) => {
    setFormData((prev) => ({ ...prev, [prop]: val }));
  };

  const setUserQueryCache = (user) => {
    queryClient.setQueryData([USER], {
      email: user.email,
      id: user.userId,
      isLoggedIn: !!user,
      activeDesignId: user.activeDesignId,
    });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(({ user }) => {
        getDoc(doc(db, "users", user.uid)).then((docSnapshot) => {
          const userData = docSnapshot.data();
          setUserQueryCache(userData);
        });
      })
      .then(() => {
        navigate("/admin/preview/links");
      })
      .catch((err) => {
        console.log(err),
          handleFormChange("error", fixErrorMessage(err.code)),
          setShowError(true);
      });
  };
  return (
    <Flex mt="15%" flexDir="column" alignItems="center">
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
              onClick={() => {
                setUserQueryCache({
                  ...GUEST_USER,
                  isLoggedIn: true,
                  userId: GUEST_USER.id,
                });
                navigate("/admin/preview/links");
              }}
            >
              Continue as guest
            </Link>
            <Box color="lightblue" _hover={{ textDecor: "underline" }}>
              <NavLink to="/register">Register</NavLink>
            </Box>
            <Button color="lightblue" w="80px" onClick={signIn}>
              Sign In
            </Button>
          </Flex>
        </Flex>
      </Flex>
      {showError && (
        <Text mt="20px" color="red.400">
          {formData.error}
        </Text>
      )}
    </Flex>
  );
};

export default SignIn;
