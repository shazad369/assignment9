import React, { use, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/Authprovider';

const Loging = () => {
const {singinuser}=use(AuthContext)
const navegate=useNavigate()


const location = useLocation();
console.log(location);

const handleloging=(event)=>{
  event.preventDefault()
  const form=event.target
  const email=form.email.value

  const password=form.password.value

  

event.target.reset()
singinuser(email,password)
.then((result)=>{
  const user=result.user
  console.log(user)
  navegate(`${location.state? location.state : '/'}`)

})
.catch((error)=>{

console.log(error);
  seterror(error.code)
})

}


    return (
        <div>
           <div>
              <Navbar></Navbar>
           </div>

           <div>

            <div class="hero bg-base-200 min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div class="card-body">
        <form onSubmit={handleloging} class="fieldset">
          <label  class="label">Email</label>
          <input required  name="email" type="email" class="input" placeholder="Email" />
          <label class="label">Password</label>
          <input required name="password"  type="password" class="input" placeholder="Password" />
      
          <div><a class="link link-hover">Dont have an account? please  <Link to="/signup"> sign up</Link> </a></div>
          <p> Forget Password  </p>

       
          <button type="submit" class="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
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

export default Loging;