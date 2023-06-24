import React from "react";




function Footer(){
    const updatedyear= new Date().getFullYear();
    return(
        
   <footer>
      <p>copyright ⓒ {updatedyear} </p>
   </footer>
   
    );
};

export default Footer;