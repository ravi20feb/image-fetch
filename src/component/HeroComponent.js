import React from 'react'
import Navbar from './NavBar/Navbar'
import { useState } from 'react'
import { usefirebase } from '../context/FireBase'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function HeroComponent() {
    const [isTrue, setTrue] = useState(false)
    const firebase = usefirebase()
    console.log(firebase)
    
    // !firebase.isLogin ? <Navigate  to={'/login'}/> : console.log('nothing')

    if(firebase.isLogin){
        return <Navigate to={'/login'}  ></Navigate>
    }
      

  return (
   <>
    <div className="hero-wrapper">
        <div className="app-component-wrapper " style={{backgroundColor: isTrue?'#000':'#fff'}} >
            {/* <CssBaseline />  */}
            
            <Navbar isTrue={isTrue}   set={setTrue}/>
            <Outlet />
            {/* <Body  istrue={isTrue} /> */}
        </div>
    </div>

   </>
  )
}
