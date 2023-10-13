import React, { useEffect, useState,useRef } from 'react'
import { Box, Button, Container ,Paper, Stack, Typography,InputBase} from '@mui/material'
import styled from '@emotion/styled'
import LightModeIcon from '@mui/icons-material/LightMode';
import {Switch} from '@mui/material';

import image from '../../assests/images/panda.png'


export default function Navbar(props) {
  // const [isTrue, setTrue] = useState(false)
  // const [isTrue1, setTrue1] = useState('')
  console.log(props)
  const inputRef = useRef()
  console.log('testing')


  const MuiSwitch = styled(Switch)({
  
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: props.isTrue  ? '#000' : 'black',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: props.isTrue ? '#000' : '#fff',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#000',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: props.isTrue  ? '#fff' : '#fff',
    borderRadius: 20 / 2,
  },
      


   

  })
  const DIV = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  })
  const BlueButton = styled('button')({
  
  width: '6rem',
  background: props.isTrue ? '#000' : '#fff',
  fontSize: '1rem', 
  color: !props.isTrue ? '#000' : '#fff',
  padding: ' auto 0',
  textAlign: 'center',
  height: '2rem',
  borderWidth: '0',
  borderRadius: '1rem',
  webkitboxShadow: '0px 0px 16px 1px #85CFF9)',
  mozBoxShadow: '0px 0px 16px 1px #85CFF9)',
  boxShadow: '0px 0px 16px 1px #85CFF9)',

    
   
    
  })
  console.log('check  ')
   const handleSwitchChange = () => {
    props.set((prevState) => !prevState); // Toggle the state
  };
  



  return (
    <>
      <div className='nav-wrapper' style={{position: 'fixed',width: '100%',zIndex: 1000}} >
      <Paper className='paper' elevation={10} sx={{padding: '1rem',
      background: props.isTrue? '#000' : '#fff',
      webkitBoxShadow: '0 15px 40px -20px rgba(40,44,63,.15);',
      mozBoxShadow:' 0 15px 40px -20px rgba(40,44,63,.15);',
      boxShadow: '0 15px 40px -20px rgba(40,44,63,.15);',
      
      }}>
      
        <DIV className='nav-content' sx>
          
          <Typography component={'h3'} variant='h3' sx={{color:props.isTrue? '#fff':'#', fontWeight: '800' }}>{'<DEV/>'}</Typography>
          <Stack direction={'row'} spacing={3} >
            
            <BlueButton><Box component={'span'}>contact</Box></BlueButton>
            <BlueButton><Box component={'span'}>contact</Box></BlueButton>
            <BlueButton><Box component={'span'}>Log in</Box></BlueButton>
            <BlueButton><Box component={'span'}>Sign up</Box></BlueButton>
            <MuiSwitch checked={props.isTrue} onChange={handleSwitchChange} />
            

          </Stack>

        
          
        </DIV>
      </Paper>
      </div> 
        
    </>
    
  )
}
