// import React, { use } from 'react';

import { Link } from 'react-router';
import { AuthContext } from '../Provider/Authprovider';

import { motion } from 'framer-motion';
import { use } from 'react';
const Navbar = () => {


const  {user,logout} = use(AuthContext)



const handlelogout=()=>{

  logout()
  .then(()=>{

alert('logout successfully');

  })
  .catch(error=>console.log(error))

}
  

    return (
        <div>
           <div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item </a></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost text-xl"><Link to="/"><img className='w-12  rounded-full' src="https://imgs.search.brave.com/0zPQIRHiuoJf3LewNGXjjtOGXS8xdbxkzV84L8oO4Rs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE1LzAxLzk2Lzcy/LzM2MF9GXzE1MDE5/NjcyNTRfcmdYS0VP/ZmxacHVqbTBFUDMz/NjNnQ0IzeWtFYWVt/c1IuanBn" alt="" /></Link></a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a><Link to="/"> Home</Link></a></li>
      <li>
        <div>
         <Link   onClick={(e) => e.currentTarget.classList.toggle("bg-red-500")} to="/plants">  Plants</Link>
          <ul class="p-2">
          
          </ul>
        </div>
      </li>
  <Link to="/myprofile">     <li><a>My profile </a></li></Link>
    </ul>
  </div>

  <div class="navbar-end flex">
 {/* <img className='w-12  rounded-full'  src={`${user? user.photoURL : ''}`} alt="" /> */}
 <h2> {user?   <img className='w-12  rounded-full'  src={`${user? user.photoURL : ''}`} alt="" /> : ''}</h2>
   <a class="btn">{user? <h2 onClick={handlelogout} >log out</h2> : <Link to="/loging">log in</Link> }</a>
  </div>
</div>
<div>
  <div>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}   
        animate={{ opacity: 1, y: 0 }}     
        transition={{ duration: 1.2, ease: "easeOut" }}  
        style={{
          fontSize: "3rem",
          color: "#2e7d32",
          fontWeight: "bold",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
     <h3 className='text-6xl w-auto max-2xl:text-3xl font-bold  hover:text-green-500'>Grow Green, Live Clean 🌱</h3>
      </motion.h1>
    </div>
  </div>
  <div>
        <div  className='bg-amber-400 h-15 text-2xl'>
      <motion.h1
       
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
      >
       <p className='flex items-center'>  <img className='w-12 rounded-full' src="https://imgs.search.brave.com/0zPQIRHiuoJf3LewNGXjjtOGXS8xdbxkzV84L8oO4Rs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE1LzAxLzk2Lzcy/LzM2MF9GXzE1MDE5/NjcyNTRfcmdYS0VP/ZmxacHVqbTBFUDMz/NjNnQ0IzeWtFYWVt/c1IuanBn" alt="" />  🌿 Grow Green • Live Clean • Love Nature • Keep Planting • 🌱 Grow Green • Live Clean • Love Nature • Keep Planting • 🌿 Grow Green • Live Clean • Love Nature • Keep Planting • </p>
      </motion.h1>
    </div>
  </div>
  
</div>
            
        </div>
    );
};

export default Navbar;