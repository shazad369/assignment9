import { use } from "react";

import { BsFillStarFill } from "react-icons/bs";
import{motion} from "framer-motion"
import { Link } from "react-router";
const catagorypromise =fetch("/Plants.json")
.then(res=>res.json())
.then(data=>data)


const Catagory = () => {

    const catagory=use(catagorypromise)

    return (
        <div>
            

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
                 <h3 className='text-6xl w-auto max-2xl:text-3xl font-bold  hover:text-green-500'>Top Reted indoor Plants</h3>
                  </motion.h1>
                </div>
          </div>
    
        </div>
<div class="grid lg:grid-cols-3 md:grid-cols-2 gap-22 mt-5  sm:grid-cols-1">
                {
                catagory.map(singlecatagory=> <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className="w-80 rounded-2xl h-50"
      src={singlecatagory.image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{singlecatagory.plantName}</h2>
    <p> Price:{singlecatagory.price}</p>
    <p className="flex items-center"> <BsFillStarFill /> {singlecatagory.rating}</p>
    <div class="card-actions justify-end">
      <button  class="btn mr-6 btn-primary"><Link to={`/plantdetails/${singlecatagory.plantId}`}>   Details</Link></button>
    </div>
  </div>
</div>)
            }
           
</div>
            
        </div>
    );
};

export default Catagory;