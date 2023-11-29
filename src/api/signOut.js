import { auth } from "../config/firebase";

const signOut = (navigate) => auth.signOut().then(() => navigate("/signin"));

export default signOut;
