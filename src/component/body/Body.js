import { minHeight } from '@mui/system'
import React from 'react'
import Login from './auth/login/Login'
import { InputBase } from '@mui/material'
import SignUp from './auth/signUp/SignUp'
import './body.css'
import Auth from './auth/Auth'

export default function Body() {
  console.log()
  return (
    <div  className='body' style={{padding: '1rem'}}>
    <div >
        {/* <Login></Login> */}
        <Auth></Auth>
        {/* <SignUp /> */}
        
      
    </div>
      
      

    </div>
  )
}
