import React, { use } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import { Navigate, useLocation } from 'react-router';

const Privaterout = ({children}) => {
    
    const {user}=use(AuthContext)

    console.log(user);


    const location = useLocation();
    console.log(location);

if(user && user?.email){

    return children
}
return <Navigate state={location.pathname} to="/loging"></Navigate>


    




    
};

export default Privaterout;