import React, { use } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from '../Provider/Authprovider';

const Myprofile = () => {



    const {user}=use(AuthContext)
    return (


        <div>
<div>

    <Navbar></Navbar>
</div>

<div>
  <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center hover:shadow-2xl transition duration-300">
    <img
      className="w-24 h-24 rounded-full mx-auto border-4 border-green-500"
      src={user.photoURL}
      alt="User"
    />
    <h2 className="text-xl font-semibold text-gray-800 mt-4">{user.displayName}</h2>
    <p className="text-gray-500 text-sm mt-1">{user.email}</p>

    <div className="mt-4">
      <button className="px-5 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
        View Profile
      </button>
    </div>
  </div>
</div>

 



</div>

<div>
    <Footer></Footer>
</div>
        
            
        </div>
    );
};

export default Myprofile;