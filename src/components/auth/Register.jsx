import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import db, { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { fixErrorMessage } from "./authFunctions";
import { useNavigate } from "react-router-dom";
import { setDoc, doc, addDoc, collection } from "firebase/firestore";
import GUEST_DESIGN from "../../../data";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    validatePassword: "",
    error: "",
  });
  const [showError, setShowError] = useState(false);

  const handleFormChange = (prop, val) => {
    setFormData((prev) => ({ ...prev, [prop]: val }));
  };

  const register = () => {
    if (formData.password === formData.validatePassword) {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;

          // Add the new design to the "designs" collection
          return addDoc(collection(db, "designs"), GUEST_DESIGN)
            .then((designRef) => {
              // Set the activeDesignId on the user to the ID of the newly created design
              return setDoc(doc(db, "users", user.uid), {
                email: formData.email,
                designs: [designRef.id], // Store the ID of the newly created design
                userID: user.uid,
                activeDesignId: designRef.id, // Set the activeDesignId to the ID of the design
              });
            })
            .then(() => {
              navigate("/signin");
            })
            .catch((err) => {
              console.error("Error adding user or design:", err);
              handleFormChange("error", fixErrorMessage(err.code));
              setShowError(true);
            });
        })
        .catch((err) => {
          console.error("Error creating user:", err);
          handleFormChange("error", fixErrorMessage(err.code));
          setShowError(true);
        });
    } else {
      handleFormChange("error", "Password fields do not match");
      setShowError(true);
    }
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
            mb="10px"
            onChange={(e) => handleFormChange("password", e.target.value)}
          />
          <Text mb="5px">Validate Password</Text>
          <Input
            name="validatePasswordInput"
            type="password"
            onChange={(e) =>
              handleFormChange("validatePassword", e.target.value)
            }
          />
          <Flex mt="30px" justifyContent="center">
            <Button color="lightblue" w="80px" onClick={() => register()}>
              Register
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

export default Register;
