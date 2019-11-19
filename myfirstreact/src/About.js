import React from "react"
import  './index4.css'; 
import Logo from './pc1.jpg';
import Logo1 from './pc2.png';
import Logo2 from './pc3.jpg';

class About extends React.Component{
    
    

    
    render(){
                
        return( 
   
        <div>
            
            <img class="logo1" src={Logo} alt="Logo"  style={{height:"40vh",width:"25%",marginRight:"2vw"}}/> 
           
            <img src={Logo1} alt="Logo"  style={{height:"40vh",width:"25%",marginRight:"2vw"}}/> 
            <img src={Logo2} alt="Logo"  style={{height:"40vh",width:"25%"}}/>            
              <p></p>

        </div>
      
        
      
        
        );
    }
}
export {About}