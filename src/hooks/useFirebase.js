import { useState } from "react";
import { getAuth,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [error,setError]=useState();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle=()=>{
       return signInWithPopup(auth,googleProvider);
    }

    const logOut=()=>{
        signOut(auth)
        .then(() => {
            setUser({});
          }).catch((error) => {
            setError(error.massage);
          });
    }

    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            }
          });
          return unsubscribe;
    },[])

    return {
        user,
        signInUsingGoogle,
        logOut,
        error
    }
}

export default useFirebase;