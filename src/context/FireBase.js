import React from 'react';
import { createContext } from 'react';
import {initializeApp} from 'firebase/app'
import { getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,onAuthStateChanged } from 'firebase/auth';
import {getDatabase,ref,set} from 'firebase/database'
import { useContext } from 'react';

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

const FireBaseGetAuth = getAuth(fireBaseApp)
const user = FireBaseGetAuth.currentUser;
const database = getDatabase(fireBaseApp)
const googleProvider = new GoogleAuthProvider()
export const usefirebase = ()=> useContext(FireBaseContext)



// const fireBaseGetAuth = getAuth()  Firebase internally knows to use the default app instance, which is the one created by initializeApp(firebaseConfig) if no specific app is specified. This approach is suitable if you're working with only one Firebase project in your application and don't need to differentiate between multiple app instances.




export  function FireBaseProvider(props) {
    const putData = (key,data)=>{
        set(ref(database,key),data)
    }
    const signUpUserWithEmailAndPassword=(email,password)=>{
        return createUserWithEmailAndPassword(FireBaseGetAuth,email,password)
    }
    const signWithGoogle= ()=>{
      return signInWithPopup(FireBaseGetAuth,googleProvider)
    }
    const oauth = ()=>{
      return onAuthStateChanged(FireBaseGetAuth,(user)=>{
     
        if(user){
          console.log(user)
        }
      })
    }

  return (
    <FireBaseContext.Provider value={{signUpUserWithEmailAndPassword,putData,signWithGoogle,user,oauth}}>
        {props.children}
    </FireBaseContext.Provider >
  )
}
