import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { toast } from "react-toastify";


export const AuthContext = createContext();
const auth = getAuth(app);


// social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Authprovider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
// google login
    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    // github login
    const signInGithub = () => {
        setLoading(true);
        return signInWithPopup(auth,githubProvider)
    }



    // logout
    const logOut = () => {
        setUser(null)
      signOut(auth)
      toast.success('Succesfully LogOut')
    }

    const updateProfile = (name, photo) => {
        return updateProfile(auth, currentUser, {
            displayName: name,
            photoUrl:photo,
    })
}


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unSubscribe();
}
    },[])


    const allInfo = {
        user,loading,creatUser,signIn,signInGoogle,logOut,setUser,updateProfile,signInGithub
    }

    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;