import { auth } from "../config/firebase";

const signOut = () => {
  auth
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log("User signed out");
    })
    .catch((error) => {
      // An error happened.
      console.error("Sign-out error:", error);
    });
};

export default signOut;
