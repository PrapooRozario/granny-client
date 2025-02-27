import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
import useAxios from "@/hooks/useAxios";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const Axios = useAxios();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const loginAuth = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const registerAuth = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserAuth = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const googleAuth = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signOutAuth = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(false);
      setUser(currentUser);

      if (currentUser?.email) {
        await Axios.post("/jwt", {
          name: currentUser?.displayName,
          email: currentUser?.email,
        });
      } else {
        await Axios.get("/logout");
      }
    });

    return () => unsubscribe();
  }, [Axios]);

  const authInfo = {
    loginAuth,
    registerAuth,
    user,
    loading,
    setUser,
    updateUserAuth,
    googleAuth,
    signOutAuth,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthProvider;
