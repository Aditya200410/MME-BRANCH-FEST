import React from 'react';
import pic2 from "../2.png"
import { motion, AnimatePresence } from 'framer-motion';
import pic4 from "../4.png"
import pic5 from "../5.png"
import { Button,Stack } from "@mui/material";
const Domain = () => {
  return (
    <>
    <div className="ev">
    
    <div className="app">

    <div className="card">
      <img src={pic2} alt="" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Meta Hunt</h2>
        <p className="card-description">Avast, me hearties!


Step forward and dive into the realm, as you embark on a riveting escapade. Unravel enigmatic riddles, and traverse through the exciting array of rides and attractions. 
So assemble your crew, embrace the festive fervor, and let the quest unfurl!</p>
      </div>
    </div>
    
    <div className="card">
      <img src={pic4} alt="Card 1" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Meta Bonds</h2>
        <p className="card-description">Behold the power of strong bonds—the unyielding forces that bind hearts, minds, and molecules alike. 

Ladies and gentlemen, Welcome to the electrifying realm of atoms, where particles and bonds, through resilience and commitment, forge unbreakable connections, shaping relationships, materials, and the very fabric of our world, orchestrating the symphony of our universe. 
</p>
      </div>
    </div>
    <div className="card">
      <img src={pic5} alt="Card 2" className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Meta Quiz</h2>
        <p className="card-description">Prepare to unleash the profundity  of your metallurgical mastery with METAQUIZ. Engage in a thrilling exploration of your knowledge while delving into the latest advancements in the world of metallurgy. Let's embark on this journey of discovery together!</p>
      </div>
    </div>
    
  </div>
  <Stack
                  gap={4}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                   
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
 <motion.button className="getstarted" whileHover={{ scale: 1 }} >
            <a href="https://forms.gle/ixFQBsAnhDuoBXDLA">REGISTER NOW</a>
          </motion.button>
                  </Stack>
  </div>
  </>
);
};
  

export default Domain