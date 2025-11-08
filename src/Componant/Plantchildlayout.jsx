import React from 'react';
import Center from './Center';
import { motion } from "framer-motion";
const Plantchildlayout = () => {
    return (
        <div>
                <div style={{ textAlign: "center", marginTop: "10px" }}>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}   // starting position
        animate={{ opacity: 1, y: 0 }}     // final position
        transition={{ duration: 1.2, ease: "easeOut" }}  // smooth timing
        style={{
          fontSize: "3rem",
          color: "#2e7d32",
          fontWeight: "bold",
          fontFamily: "'Poppins', sans-serif",
        }}
      >

     <h3 className='text-6xl w-auto max-2xl:text-3xl font-bold text-green-700   hover:text-green-500'>All Plants</h3>
     
      </motion.h1>
    </div>
            <Center></Center>
            
        </div>
    );
};

export default Plantchildlayout;