import App  from "./App";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
// import HeroComponent from "./component/HeroComponent";
// import Login from "./component/body/auth/login/Login";
import SignUp from "./component/body/auth/signUp/SignUp";
import Image from "./component/body/imageFetch/Image";
import ReactDOM from "react-dom/client";
import React from "react";
import HeroComponent from "./component/HeroComponent";
import Login from "./component/body/auth/login/Login";

const appRouter = createBrowserRouter([{
    path: '/',
    element: <App />,
    children:[
        {
            path: '/',
            element: <HeroComponent ></HeroComponent>,
            children:[    
                {
                    path: '/',
                    element: <Image />

                },
                

               
            ]
        },
        {
                path: '/signup',
                element: <SignUp />
                },
                {
                    path: '/login',
                    element : <Login />
                }
        



    ]
   

}])

// const rootContainer = document.getElementsByid('root')
// const rootContainer = document.getElementsByid('root')


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)
