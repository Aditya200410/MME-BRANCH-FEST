import { useState,useEffect} from "react"
import "./Landing.css"
import { motion, AnimatePresence } from 'framer-motion';
import d from "../d.png"
const Landing = () => {

 
  
 

 
  return (
    <div className="main"> 
    
    
    <div className="wel">
     
      <div className="mright">
    <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }} 
      >
        <motion.div className="page1" >TIME TO <p className='c'>CHEERS!</p></motion.div>
        <motion.div className="page2" >BRANCH FEST 2k24</motion.div>
        <motion.hr
        initial={{ width: 0 }} 
        animate={{ width: '50%' }} 
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }} 
      />
    
        <motion.div className="page3" >Raise your glasses to the Metallurgical alchemy</motion.div>
        <div className="page4">
          
          <motion.button className="getstarted" whileHover={{ scale: 1 }} >
            <a href="https://forms.gle/ixFQBsAnhDuoBXDLA">REGISTER NOW</a>
          </motion.button>
        </div>
      </motion.div>
     
</div>
<div className="App">
      <motion.div className="mleft"
        initial={{ opacity: 0, rotateY: -90 }} 
        animate={{ opacity: 1, rotateY: 0 }} 
        transition={{ duration: 1, delay: 0.5 }} 
        whileHover={{ rotateY: 10 }} 
        whileTap={{ rotateY: -10 }} 
        style={{ perspective: '100px' }} 
      >
        <img className="l" src={d} alt="LOGO" />
      </motion.div>
    </div>
    </div>


    </div>
  
  )
}

export default Landing