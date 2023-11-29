import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const getUser = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      console.log("auth state change:", user);
      resolve(
        user
          ? { email: user.email, id: user.uid, isLoggedIn: !!user }
          : { isLoggedIn: false }
      );
    });
  });
};
export default getUser;
