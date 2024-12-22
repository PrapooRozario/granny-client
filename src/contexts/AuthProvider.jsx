import { createContext } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const loginAuth = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { loginAuth };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthProvider;
