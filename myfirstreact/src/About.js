import React from "react"
import  './about.css'; 
import Logo1 from './112101.jpg';
import Logo2 from './112102.jpg';
import Logo3 from './112103.jpg';
import Logo4 from './112201.jpg';


class About extends React.Component{
    
    

    
    render(){
                
        return( 
   




            
        <div >



         











       
            <div className="demo2-bg" >
                         <div className="demo2">About US</div>
            </div>
            
            <div style={{backgroundColor:"#33C496",height:"100vh"}}>
                <div className="abouttest">
                家庭成員介紹
                </div>
                <div class="box">
               
                <img src={Logo1} alt="Logo" /> 
                <p>這是媽媽，這裡大大小小的花圃都是由她負責去澆花，施肥處理的。</p>
                </div>
                
                <div class="box">
            
                <img src={Logo2}   alt="Logo" /> 
                <p style={{fontSize:"1.5em",fontFamily:"cursive"}}>這是姐姐，家裡網站的logo以及藝術上的設計都是由她處理的。</p>
               
                </div>
                <div class="box">
           
                <img  src={Logo3} alt="Logo" /> 
                <p style={{fontSize:"1.5em",fontFamily:"cursive"}}> 這是哥哥，當初田裡的植物規劃以及環境整理都是有他負責。</p>
              
                </div>
               
              
            </div>
           
           
           
            <div className="demo2-bg" >
                         <div className="demo2">我們的努力 < /div>
                        
            </div>


            <div style={{backgroundColor:"#33C496",height:"100vh",borderTop:"2px solid white"}}>
            <div class="box">
            <img src={Logo4} alt="Logo" className="pc1"/> 
            </div>
            
            </div>
        
            <div class="rwd_slider_container_wrapper">
  <div class="rwd_slider_container">
    <div class="slider_container" >
      <div>
        <img src="http://blog.shihshih.com/wp-content/uploads/2018/08/image1.png" alt="pure css slider" width="400" height="280" />
      </div>
      <div>
        <img src="http://blog.shihshih.com/wp-content/uploads/2018/08/image5.png" alt="pure css slider" width="400" height="280" />
      </div>
      <div>
        <img src="http://blog.shihshih.com/wp-content/uploads/2018/08/image3.png" alt="pure css slider" width="400" height="280" />
      </div>
      <div>
        <img src="http://blog.shihshih.com/wp-content/uploads/2018/08/image4.png" alt="pure css slider" width="400" height="280" />
      </div>
      <div>
        <img src="http://blog.shihshih.com/wp-content/uploads/2018/08/image5.png" alt="pure css slider" width="400" height="280" />
      </div>
    </div>
  </div>
</div>
        
        
        
        </div>
      
        
      
        
        );
    }
}
export {About}