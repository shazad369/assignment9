import React, { use } from 'react';
import{motion} from "framer-motion"
const  childplantcare=fetch("/Plants.json")
.then(res=>res.json())
.then(data=>data)
const Childplantcare = () => {

const childplant=use(childplantcare)

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
     <h3 className='text-6xl w-auto max-2xl:text-3xl font-bold  hover:text-green-500'>plant care</h3>
      </motion.h1>
    </div>
          </div>
<div class="grid lg:grid-cols-3  rounded-2x1 mt-5 md:grid-cols-2 sm:grid-cols-1     gap-30">
            {
            childplant.map(singlechildplant=> <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className="w-80 h-50"
      src={singlechildplant.image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 > <span className='text-red-600 text-2xl'>Care Trips </span>: {singlechildplant.careTips}</h2>
    <p> Price:{singlechildplant.price}$</p>
    <div class="card-actions justify-end">
     
    </div>
  </div>
</div>)
        }
</div>

            
        </div>
    );
};

export default Childplantcare;