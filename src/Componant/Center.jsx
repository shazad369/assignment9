import React, { Suspense } from 'react';
import Catagory from './Catagory';

const Center = () => {
    return (
        <div>
      
          <Suspense fallback={<div>Loading...</div>}>
          
    <Catagory></Catagory>
          
          </Suspense>


          
           
            
        </div>
    );
};

export default Center;