import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/Authprovider';


const catagorypromise =fetch("/Plants.json")
.then(res=>res.json())
.then(data=>data)


const Childleftside = () => {
    const {user}=use(AuthContext)

       const catagory=use(catagorypromise)
    return (
        <div>

               <h1 className='text-4xl mt-3 mb-3 '> {
                user && user.email} </h1>
            

            <div>
           <div>
                 {
                    catagory.map(singlecatagory=> <NavLink to="/" > <button className='btn btn-primary'> {singlecatagory.  plantquallity}</button></NavLink> 
                        
                    )
                }
           </div>
                {/* {
                    catagory.map(singlecatagor=> <NavLink to={`/catagory/${singlecatagor.plantId}`}>plant  care </NavLink>
                        
                    )
                } */}
                <br />
                <NavLink  to="/catagory"> <button  className='  btn btn-primary w-80'>plant care</button></NavLink>
                <br />
                <br />
                <NavLink className='btn btn-primary w-60' to="/provider/name"> provider</NavLink>
            </div>
  
            
        </div>
    );
};

export default Childleftside;