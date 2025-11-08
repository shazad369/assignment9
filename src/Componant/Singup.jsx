import React, { use, useState } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router';
import Footer from './Footer';
import { AuthContext } from '../Provider/Authprovider';

const Singup = () => {
    const navigate =useNavigate()

  const {creatuser,setuser,updateuser}=use(AuthContext)


  const [password,setpassword]=useState('')

const handleregester=(event)=>{
  event.preventDefault();
  const form=event.target;
 

  const email=form.email.value;
  const password=form.password.value;
  if (password.length < 8) {
  
   setpassword('password must be at least 8 characters');
   
  }else{
    setpassword('')
  }
  const name=form.name.value;
  const image=form.photo.value;
  console.log(email,password,name,image);

  creatuser(email,password)
  .then((result)=>{
    
    const user=result.user;
    console.log(user);
    
    alert('user created successfully');

updateuser({displayName:name,photoURL:image})
.then(()=>{
  alert('user updated successfully');
  setuser({...user,displayName:name,photoURL:image});
  navigate('/');
}).catch(error=>console.log(error))

  })
  .catch(()=>{
    const error=error.message;
console.log(error);
setuser(user);
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
      <h1 class="text-5xl font-bold">Sing up now!</h1>
      <p class="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div class="card-body">
        <form onSubmit={handleregester} class="fieldset">
          <label    class="label">regester</label>
          <input name='name' type="text" class="input" placeholder="name" />
          <p></p>
          <input name='email' type="email" class="input" placeholder="Email" />
          
          <input name='photo' type="text" class="input" placeholder="image" />

          <label  class="label">Password</label>
          <p> {password&& <p className='text-red-600'>{password}</p>}</p>
          <input required  name='password' type="password" class="input" placeholder="Password" />
          <div><a class="link link-hover">Already have an account? please  <Link to="/loging"> log in</Link> </a></div>
          <button type='submit ' class="btn btn-neutral mt-4">sing up</button>
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

export default Singup;