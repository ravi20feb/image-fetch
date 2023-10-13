import React from 'react'
import './index.css'
import { Stack, TextField } from '@mui/material'
import {Button,Box,Paper,Stack} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Facebook, Google } from '@mui/icons-material';
import { useState } from 'react';

// import {useFireBase} from "../../../../context/FireBase"
import { usefirebase } from '../../../../context/FireBase';






export default function SignUp(props) {
    const firebase = usefirebase()
    const[fullName,setFullName] = useState('')
    const[isFullNameError,setFullNameError] = useState(false)
    const[Mail,setMail] = useState('')
    const[isMailError,setMailError] = useState(false)
    const[isPassword,setPassword] = useState('')
    const[isPasswordError,setPasswordError] = useState(false)
    const[confirmPassword,setConfirmPassword] = useState('')
    const[confirmPasswordError,setConfirmPasswordError] = useState(false)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/

    console.log(props)
    console.log(firebase)
    

    function handleFullName(e){
        setFullName(e.target.value) ;
        setFullNameError(e.target.value.length>=50)
        console.log(e.target.value.length)
         

    }
    
    function handleMail(e){
        const value = e.target.value
        setMail(e.target.value);
       const valid =  emailRegex.test(value)
       console.log(valid)
        setMailError(!valid)

    }
    const handlePassWord = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(!passwordRegex.test(value));
  };
  function handleConfirmPaasword(e){
    const value = e.target.value;
    setConfirmPassword(value)
    setConfirmPasswordError(!(value == isPassword))
  }
  const handleSubmit= async(e)=>{
    e.preventDefault()
    try{
        const userCredential = await firebase.signUpUserWithEmailAndPassword(Mail,isPassword)
        console.log(userCredential)
        await firebase.putData('users/' + fullName, { fullName, Mail, isPassword });
        console.log(firebase.user)
    }
    catch(error){
        console.error(error)
    }

  }
  console.log(isPasswordError&&confirmPasswordError)
  console.log(isPasswordError,confirmPasswordError)







  return (

      <div className='sign-wrapper'>
      <Paper elevation={9}>
          <div className='singin-content'>

              <h2 style={{textAlign: 'center',marginTop: '0.5rem'}}>Sign Up</h2>
              <form className='from-wrap' onSubmit={(e)=>e.preventDefault()}> 
                    <TextField required error={isFullNameError} id="outlined-name" label="Full Name" variant="outlined" inputProps={{maxLength: 50}} sx={{paddingBottom: '1rem'}} value={fullName} helperText={isFullNameError&&"maximum 50 characters is allowed.."} onChange={handleFullName}/>
                    <TextField required id="outlined-email1" error={isMailError} label="Email"  variant="outlined" value={Mail} helperText={isMailError && 'Enter a valid email address'} sx={{paddingBottom: '1rem' }} onChange={handleMail}/>
                    <TextField required id="outlined-password1" error={isPasswordError} label="Password"  type="password" value={isPassword} variant="outlined" sx={{paddingBottom: '1rem'}} helperText={isPasswordError && 'Password length should contain minimum 8 characters (at least one capital, small letter and number).'} onChange={handlePassWord} />
                    <TextField required id="outlined-password2" error={confirmPasswordError} label="Confirm Password"  type="password" variant="outlined" helperText={confirmPasswordError && 'Password does not match.' } value={confirmPassword} onChange={handleConfirmPaasword }/>
                    <Box component={'p'}  sx={{fontSize: '.75rem',marginBottom: '2rem',marginTop: '.35rem'}}>Already on{'<dev/>?' }? <button type="button" style={{borderWidth: 0,background:'none',color:'#1889A9'}}  onClick={
                        (e)=>{props.setTrue(!props.isTrue)
                        console.log('i am singn up')
                        e.stopPropagation()
                        
                        }}>
                    Log in</button></Box>
                    <Button variant="outlined" type='submit' sx={{width: '100%',color: '#000', border:'1px solid black', }} disabled={!isPasswordError&&!confirmPasswordError?false:true}  onClick={handleSubmit}>Sign Up</Button>
                <div style={{textAlign:'center' , paddingTop: '0.5rem',fontSize: '.65rem'}}>or sign with  </div> 
                <Stack sx={{fontSize: '14px'}} spacing={1}>
                    <Button startIcon={<GitHubIcon />} variant="outlined" color="primary"  sx={{fontSize: '10px'}}> continue with GitHub</Button>
                    <Button startIcon={<Google />} type='submit' variant="outlined" color="primary"  sx={{fontSize: '10px'}} onClick={(e)=>{firebase.signWithGoogle()}}>continue with Google</Button>
                    <Button startIcon={<Facebook/>} variant="outlined" color="primary"  sx={{fontSize: '10px'}}>continue with Facebook</Button>


                </Stack>  
               </form>
               
               
               
          
                  
          </div>
      </Paper>
      </div>

    
  )
}
