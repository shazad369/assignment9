import React, { Suspense } from 'react';

import Childleftside from './Childleftside';


const Leftside = () => {
    
    return (
        <div>
       <Suspense>

         <Childleftside></Childleftside>
       </Suspense>
          
        </div>
    );
};

export default Leftside;