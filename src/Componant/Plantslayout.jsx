import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Plantchildlayout from './Plantchildlayout';

const Plantslayout = () => {
    return (
        <div><Navbar></Navbar>
      <Plantchildlayout> <Outlet></Outlet></Plantchildlayout>
        <Footer></Footer>
            
        </div>
    );
};

export default Plantslayout;