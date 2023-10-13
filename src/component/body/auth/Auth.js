import React, { useState } from 'react'
import SignUp from './signUp/SignUp'
import Login from './login/Login'

export default function Auth(props) {
    const[isTure,setTrue] = useState(false)
    
  return (
    <>
       {isTure ? <Login setTrue={setTrue} istrue={isTure}  /> : <SignUp setTrue={setTrue} istrue={isTure}/>} 
    </>
    
  )
}
