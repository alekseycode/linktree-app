import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const getUser = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user ? { email: user.email, id: user.uid } : {});
    });
  });
};

export default getUser;
