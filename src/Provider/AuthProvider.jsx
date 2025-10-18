import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
    
  }

  const signOutUser = () => {
    return signOut(auth)
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
        setUser(currentUser)
    })

    return ()=> {
        unsubscribe()
    }
  }, [])

  console.log(user)

  const authData = {
    user,
    setUser,
    createUser,
    signOutUser,
    signIn
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
