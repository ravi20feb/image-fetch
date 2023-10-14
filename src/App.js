import React, { useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./component/NavBar/Navbar";
import Body from "./component/body/Body";
import { theme } from "./theme";
import { FireBaseProvider } from "./context/FireBase";
import './App.css'




 export default  function App(){
   const [isTrue, setTrue] = React.useState(false)
   
  //  const db = getDatabase(app)
  //  const putData = ()=>{
  //   set(ref(db,"users/ravi"),{
  //     id: 1,
  //     name: 'Ravi mehto ',
  //     age: 21,

  //   })
  //  }


  //  useEffect(()=>{
  //   // console.log(putData)
  //   createUser()},[])
  

    return(
      <>
      <FireBaseProvider>
        <ThemeProvider theme={theme}>
          <div className="app-component-wrapper "  >
            <CssBaseline />  {/** */}
            <Navbar isTrue={isTrue}   set={setTrue}/>
            <Body  istrue={isTrue} />
            
          </div>
        </ThemeProvider>

      </FireBaseProvider>
      

         
         
      </>
        
     )    
}