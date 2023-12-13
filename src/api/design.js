import { doc, getDoc } from "firebase/firestore";
import db from "../config/firebase";
import DESIGN from "../../data";

// export const getDesign = async () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(DESIGN);
//     }, 200);
//   });

export const getDesign = async (documentId) => {
  try {
    const docRef = doc(db, "designs", documentId);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      return data;
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
};
