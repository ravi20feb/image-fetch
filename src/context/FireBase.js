import React from 'react';
import { createContext } from 'react';
import {initializeApp} from 'firebase/app'
import { getAuth,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,onAuthStateChanged } from 'firebase/auth';
import {getDatabase,ref,set} from 'firebase/database'
import { useContext } from 'react';
import { useState,useEffect } from 'react';

const FireBaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyBRccfgzgctsc-zehI3UUSt9FcBXuezMkA",
  authDomain: "fir-fetch-85a37.firebaseapp.com",
  projectId: "fir-fetch-85a37",
  storageBucket: "fir-fetch-85a37.appspot.com",
  messagingSenderId: "823337648121",
  appId: "1:823337648121:web:3db85a3ece7d19e74d4728",
  databaseURL: "https://fir-fetch-85a37-default-rtdb.firebaseio.com/"
};
const fireBaseApp= initializeApp(firebaseConfig)

export const FireBaseGetAuth = getAuth(fireBaseApp)
const user = FireBaseGetAuth.currentUser;
const database = getDatabase(fireBaseApp)
const googleProvider = new GoogleAuthProvider()
export const usefirebase = ()=> useContext(FireBaseContext)



// const fireBaseGetAuth = getAuth()  Firebase internally knows to use the default app instance, which is the one created by initializeApp(firebaseConfig) if no specific app is specified. This approach is suitable if you're working with only one Firebase project in your application and don't need to differentiate between multiple app instances.




export  function FireBaseProvider(props) {
  const [user,setUser]  = useState(null)
  const [authStateChanged,setAuthState] = useState(null)
    const putData = (key,data)=>{
        set(ref(database,key),data)
    }
    const signUpUserWithEmailAndPassword=(email,password)=>{
        return createUserWithEmailAndPassword(FireBaseGetAuth,email,password)
    }
    const signWithGoogle= ()=>{
      return signInWithPopup(FireBaseGetAuth,googleProvider)
    }
    const signInWithCredentail = (email,password)=>{
      return signInWithEmailAndPassword(FireBaseGetAuth,email,password)
    }
    const  logOut = ()=>{
      return signOut(FireBaseGetAuth)
    }
    
    useEffect(()=>{
      onAuthStateChanged(FireBaseGetAuth,(user)=>{
        setUser(user)
        if(user){
          setAuthState(true)
        }
        else setAuthState(null)
      })
    
    },[])
    const  isLogin = authStateChanged ? false : true

  return (
    <FireBaseContext.Provider value={{signUpUserWithEmailAndPassword,logOut,signInWithCredentail,putData,signWithGoogle,user,isLogin}}>
        {props.children}
    </FireBaseContext.Provider >
  )
}
