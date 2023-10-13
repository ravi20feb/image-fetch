import React from 'react'
import './index.css'
import { Stack, TextField } from '@mui/material'
import {Button,Box,Paper,Stack} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Facebook, Google } from '@mui/icons-material';





export default function Login(props) {
  return (

      <div className='login-wrapper'>
      <Paper elevation={9}>
          <div className='login-content'>

              <h2 style={{textAlign: 'center',marginTop: '0.5rem'}}>Welcome back</h2>
              <form className='from-wrap' onSubmit={(e)=>e.preventDefault()}> 
                    <TextField required id="outlined-email" label="Email" variant="outlined" sx={{
                      paddingBottom: '1rem'
                    }}/>
                    <TextField required id="outlined-password" label="Password"  type="password" variant="outlined" />
                    <Box component={'p'}  sx={{fontSize: '.75rem',marginBottom: '2rem',marginTop: '.35rem'}}>New to {'<dev/>' }? <button type="button" onClick={()=>{
                      console.log(' iam logni')
                      props.setTrue(!props.istrue)}} 
                      style={{borderWidth: 0,background:'none',color:'#1889A9'}}>Join us
                      </button></Box>
                    <Button  type='submit' variant="outlined" sx={{width: '100%',color: '#000', border:'1px solid black',  }}>Login</Button>
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
