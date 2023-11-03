import React, { useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

;
import { theme } from "./theme";
import { FireBaseProvider } from "./context/FireBase";
import './App.css'
import './loadEnv'
import { usefirebase } from "./context/FireBase";


import { Outlet } from "react-router-dom";
  
export default  function App(){
  const key = process.env.REACT_APP_SECRET_NAME
  console.log(key)
  console.log(usefirebase())


    return(
      <>
      <FireBaseProvider>
        <ThemeProvider theme={theme}>
        
            {/* <CssBaseline />  */}
           <Outlet />

          
        </ThemeProvider>

      </FireBaseProvider>
      </>
        
    )    
}