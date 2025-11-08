import React, { Children, createContext, useEffect, useState } from 'react';
import app from '../firebas/Firebaseconfig';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext();


const auth=getAuth(app)
const Authprovider = ({children}) => {

const [user, setUser] = useState(null);




console.log(user);
const creatuser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
};



const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};



const logout= ()=>{

    return signOut(auth);
}

useEffect(() => {
  
 const unsubscribe=   onAuthStateChanged(auth, (currentUser) => {
    



      setUser(currentUser);
    });
    return () => {
        unsubscribe();
        
    }
  }, []);

const singinuser=(email,password)=>{



return signInWithEmailAndPassword(auth,email,password)

}

 const updateuser= (updatedata)=>{
     
return  updateProfile(auth.currentUser,updatedata)

 }

const authdata = {

    user ,
    setUser,
    creatuser,
    logout,
    singinuser,
    updateuser,
    signInWithGoogle,
}
    return  <AuthContext value={authdata}> 

    {children}
    
     </AuthContext>;
      
    
};

export default Authprovider;