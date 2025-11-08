import React, { use } from 'react';

import{motion} from "framer-motion"
const plantchild=fetch("/Plants.json")
.then(res=>res.json())
.then(data=>data)
const Plantdetailchild = () => {
    const childplant=use(plantchild)
    return (
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
     <h3 className='text-6xl w-auto max-2xl:text-2xl font-bold  hover:text-green-500'>Provider Name </h3>
      </motion.h1>
    </div>
  </div>
          <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-26 lg:grid-cols-3 '>
   {

childplant.map(singlechildplant=> <div class="card bg-cyan-30 w-96 shadow-sm">
  <figure>
    <img className="w-80 rounded-2xl hover:scale-200 bg-amber-200 h-60"
      src={singlechildplant.image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
   
    <p > <span className='text-white-800 text-2xl'> Provider Name:</span> <span className='text-green-400 text-[12px]'>{singlechildplant.providerName}</span></p>
    <div class="card-actions justify-end">
      
    </div>
  </div>
</div>)
   }
            
        </div>
</div>
    );
};

export default Plantdetailchild;