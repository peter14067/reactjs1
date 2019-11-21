import React from "react"
import  './about.css'; 
import Logo1 from './112101.jpg';
import Logo2 from './112102.jpg';
import Logo3 from './112103.jpg';

class About extends React.Component{
    
    

    
    render(){
                
        return( 
   




            
        <div >



            <div>





            </div>











       
            <div className="demo2-bg" >
                         <div className="demo2">About US</div>
            </div>
            
            <div style={{backgroundColor:"#52453C",height:"100vh"}}>
                <div className="abouttest">
                家庭成員介紹
                </div>
                <img class="logo1" src={Logo1} alt="Logo" /> 
                <img class="logo2" src={Logo2} alt="Logo" /> 
                <img class="logo3" src={Logo3} alt="Logo" /> 

            </div>
           
           
           
            <div className="demo2-bg" >
                         <div className="demo2">About US</div>
            </div>

        </div>
      
        
      
        
        );
    }
}
export {About}