import React from 'react'
import { useState } from 'react'
import './navbarBarDropDown.css'

import { IconButton } from '@mui/material'
import ListIcon from '@mui/icons-material/List';
import { usefirebase } from '../../context/FireBase'



export default function NavBarDropDown(props) {
  const [isVisible,setVisible] = useState(false)
  console.log(props,210)
  const firebase = usefirebase()
  function handleVisible(){
    console.log(911)
    setVisible(!isVisible)
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
  return (
    <div className='menu-wrapper'>
      
      <div className='menu-contetent-wrapper'>
        <IconButton onClick={handleVisible} sx={{position: 'absolute',right: 0}} className='drop-down'><ListIcon></ListIcon></IconButton>
        {isVisible&&<ul className='list-wrapper'>
          <li>contact</li>
          <li onClick={handleLogout}>logout</li>
          <li>About</li>
          
        </ul>}
      </div>
    </div>

  )
}

