import React from 'react'
import './index.css'
import { TextField } from '@mui/material'
import {Button,Box,Paper,Stack} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Facebook, Google } from '@mui/icons-material';
import { Link } from 'react-router-dom';     
import { usefirebase } from '../../../../context/FireBase';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';




export default function Login() {
  const[loginMail,setLoginMail] = useState('')
  const[isMailError,setMailError] = useState(false)
  const[logPassword,setLogPassword] = useState('')
  const[isPasswordError,setPasswordError] = useState(false)
  const firebase = usefirebase()
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
  console.log(firebase)
  function handleMail(e){
      const value = e.target.value
      setLoginMail(e.target.value);
      const valid =  emailRegex.test(value)
      console.log(valid)
      setMailError(!valid)

    }
    const handlePassWord1 = (e) => {
      const value = e.target.value;
      setLogPassword(value);
      setPasswordError(!passwordRegex.test(value));
   };
   const handleSubmit= async(e)=>{
    e.preventDefault()
    try{
        const userCredential = await firebase.signInWithCredentail(loginMail,logPassword)
        console.log(userCredential)

        console.log(firebase.user)
    }
    catch(error){
        console.error(error)
    }

  }
   const handleTestSubmit= async(e)=>{
    e.preventDefault()
    try{
        const userCredential = await firebase.signInWithCredentail('test@gmail.com','Ravi2000#')
        console.log(userCredential)

        console.log(firebase.user)
    }
    catch(error){
        console.error(error)
    }

  }

  if(!firebase.isLogin){
    return <Navigate to={'/'} />
  }
  return (

      <div className='login-wrapper'>
      <Paper elevation={9}>
          <div className='login-content'>

              <h2 style={{textAlign: 'center',marginTop: '0.5rem'}}>Welcome back</h2>
              <form className='from-wrap' onSubmit={(e)=>e.preventDefault()}> 
                <TextField required id="outlined-email1"  error={isMailError} label="Email" placeholder='mark' variant="outlined" value={loginMail} helperText={isMailError && 'Enter a valid email address'} sx={{paddingBottom: '1rem' }} onChange={handleMail}/>
                
                <TextField required id="outlined-password1" placeholder='Abc1234#' error={isPasswordError} label="Password"  type="password" startIcon={VisibilityIcon} value={logPassword} variant="outlined" sx={{paddingBottom: '1rem'}}  helperText={isPasswordError && 'Password length should contain minimum 8 characters (at least one capital, small letter and number).e.g. Abc1234#'} onChange={handlePassWord1} ></TextField>
                <Box component={'p'}  sx={{fontSize: '.75rem',marginBottom: '2rem',marginTop: '.35rem'}}>New to {'<dev/>' }? <Link to={'/signup'} style={{borderWidth: 0,background:'none',color:'#1889A9'}}>Join us
                  </Link></Box>
                <Button  type='submit' variant="outlined" sx={{width: '100%',color: '#000', border:'1px solid black', marginBottom: '10px' }} onClick={handleSubmit}>Login</Button>
                <Button  type='button' variant="outlined" sx={{width: '100%',color: '#000', border:'1px solid black',  }} onClick={handleTestSubmit}>Test Login</Button>
                <div style={{textAlign:'center' , paddingTop: '0.5rem',fontSize: '.65rem'}}>or sign with </div> 
                <Stack sx={{fontSize: '14px'}} spacing={1}>
                    <Button startIcon={<GitHubIcon />} variant="outlined" color="primary"  sx={{fontSize: '10px'}}> continue with GitHub</Button>
                    <Button startIcon={<Google />} variant="outlined" color="primary"  sx={{fontSize: '10px'}}>continue with Google</Button>
                    <Button startIcon={<Facebook/>} variant="outlined" color="primary"  sx={{fontSize: '10px'}}>continue with Facebook</Button>


                </Stack>
               </form>
               
               
               
          
                  
          </div>
      </Paper>
      </div>

    
  )
}
