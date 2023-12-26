import { onAuthStateChanged } from "firebase/auth";
import db, { auth } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const getUser = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (!user) return resolve({ isLoggedIn: false });
      getDoc(doc(db, "users", user.uid)).then((docSnapshot) => {
        const userData = docSnapshot.data();
        resolve({
          email: user.email,
          id: user.uid,
          isLoggedIn: !!user,
          activeDesignId: userData?.activeDesignId,
        });
      });
    });
  });
};
export default getUser;
