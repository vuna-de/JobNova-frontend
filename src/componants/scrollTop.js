import React,{useState} from "react";
import { Link } from "react-router-dom";

import {FiArrowUp} from "../assets/icons/vander"

export default function ScrollTop(){

    const [visible, setVisible] = useState(false) 

    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 300){ 
          setVisible(true) 
        }  
        else if (scrolled <= 300){ 
          setVisible(false) 
        } 
      }; 
      const scrollToTop = () =>{ 
        window.scrollTo({ 
          top: 0,  
          behavior: 'smooth'
        }); 
      };
     window.addEventListener('scroll', toggleVisible); 

    return(
        <Link to="#" onClick={scrollToTop}  id="back-to-top" className="back-to-top rounded fs-5" style={{display: visible ? 'block' : 'none'}}><FiArrowUp className="fea icon-sm align-middle"/></Link>
    )
}