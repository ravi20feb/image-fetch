import React, { useEffect, useState} from 'react'
import { Box ,Paper, Stack, Typography} from '@mui/material'
import styled from '@emotion/styled'
import NavBarDropDown from './NavBarDropDown';
import { usefirebase } from '../../context/FireBase';


export default function Navbar(props) {
  const [isVisible, setVisible] = useState(false)
  const firebase = usefirebase()
  // const [isTrue1, setTrue1] = useState('')
  console.log(props)

  console.log('testing')
  
  



  const DIV = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  })
  const BlueButton = styled('button')({
  
  width: '6rem',
  background:  '#fff',
  fontSize: '1rem', 
  color: '#000' ,
  padding: ' auto 0',
  textAlign: 'center',
  height: '2rem',
  borderWidth: '0',
  borderRadius: '1rem',
  webkitboxShadow: '0px 0px 16px 1px #85CFF9)',
  mozBoxShadow: '0px 0px 16px 1px #85CFF9)',
  boxShadow: '0px 0px 16px 1px #85CFF9)',
  cursor: 'pointer'

    
   
    
  })

  const handleOpen =()=>{
    if(window.innerWidth>750) setVisible(true)
    else setVisible(false)

  }
  const handleLogout = async ()=>{
    try{
      const log = await firebase.logOut()
      console.log(log,'logout')

    }
    catch(error){
      console.log('fail',error)
    }

  }
    useEffect(()=>{
      handleOpen()
      window.addEventListener('resize',handleOpen)
      return ()=>{
        window.removeEventListener('resize',handleOpen)
      }

    },[])
  



  return (
    <>
      <div className='nav-wrapper' >
      
        <div style={{position: 'fixed',zIndex: 1000,minWidth: '100%',}} >
          <Paper className='paper' elevation={10} sx={{padding: '1rem',
            background:  '#fff',
            webkitBoxShadow: '0 15px 40px -20px rgba(40,44,63,.15);',
            mozBoxShadow:' 0 15px 40px -20px rgba(40,44,63,.15);',
            boxShadow: '0 15px 40px -20px rgba(40,44,63,.15);',
            
            border: '2x solid red'
          
          }}>
        
          <DIV className='nav-content' sx={{border: '2px solid red'}}>
            
            <Typography component={'h3'} variant='h3' sx={{ fontWeight: '800' }}>{'<DEV/>'}</Typography>
            {isVisible && <Stack direction={'row'} spacing={1} >
              
              <BlueButton><Box component={'span'}>contact</Box></BlueButton>
              <BlueButton><Box component={'span'}>About</Box></BlueButton>
              <BlueButton onClick={handleLogout}><Box component={'span'} >Logout</Box></BlueButton>

              

            </Stack>}
            <NavBarDropDown {...props} />
            

          
            
          </DIV>
        </Paper>
        </div>
        
      </div> 
        
    </>
    
  )
}
