import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from "react-router";

import Navbar from './Componant/Layout.jsx';
import Home from './Componant/Home.jsx';
import Leftside from './Componant/Leftside.jsx';
import Layout from './Componant/Layout.jsx';
import Plantcare from './Componant/Plantcare.jsx';
import Plantdetail from './Componant/Plantdetail.jsx';
import Plantslayout from './Componant/Plantslayout.jsx';
import Plantchildlayout from './Componant/Plantchildlayout.jsx';
import Loging from './Componant/Loging.jsx';
import Singup from './Componant/Singup.jsx';
import Detail from './Componant/Detail.jsx';
import Authprovider from './Provider/Authprovider.jsx';
import Privaterout from './Componant/Privaterout.jsx';
import Myprofile from './Componant/Myprofile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
children: [
  {
    path: "",
  element: <Home />,
  }
],

  },
  {
    path: "/catagory",
    element: <Layout></Layout>,
children: [
  {
    path: "",
  element: <Plantcare />,
  }
],
  },{
    path: "/provider",
    element: <Layout></Layout>,
    children: [
      {
        path: "/provider/name",
      element: <Plantdetail></Plantdetail> ,
      
      }
    ]
  },{
    path: "/plants",
    element : <Plantslayout></Plantslayout>,
  

  },
  {
    path: "/loging",
    element: <Loging></Loging>,
  },{
    path: "/signup",
    element: <Singup></Singup>,
  },{
    path: "/plantdetails/:id",
    element: <Privaterout> <Detail></Detail></Privaterout>,
  },{
    path: "/myprofile",
    element: <Myprofile></Myprofile>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>
);