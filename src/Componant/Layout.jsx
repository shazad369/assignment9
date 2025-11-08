import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router';
import Leftside from './Leftside';
import Rightside from './Rightside';

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
<div className='w-11-12 mx-auto grid grid-cols-12 '>
<div className='col-span-3 '><Leftside></Leftside></div>
<div  className='col-span-6'>
{/* <Outlet></Outlet> */}
<Outlet></Outlet>
</div>
<div className='col-span-3'>
<Rightside></Rightside>
</div>

</div>

      <Footer></Footer>

      
    </div>
  );
};

export default Layout;