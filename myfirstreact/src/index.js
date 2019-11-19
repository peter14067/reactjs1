import ReactDOM from "react-dom"
import React from "react"
import { HashRouter, Route, Link } from "react-router-dom"
import { Title } from "./Title"
import { Home } from "./Home"
import { About } from "./About"
import {Contact} from "./Contact"
import  './index4.css'; 
class Main extends React.Component {
  render() {
      return (
          <HashRouter>
                 
                  <div>

                <div>
                  
                </div>
                 
                  
                 
                  
                
                  <div class="top">
             
                  <table >
                     <Link to="/" style={{textDecoration:"none",color:"grey",marginRight:"2vw"}}>首頁</Link>
                      <Link to="/about" style={{textDecoration:"none",color:"grey",marginRight:"2vw"}}>關於我們</Link>
                      <Link to="/Map" style={{textDecoration:"none",color:"grey",marginRight:"2vw"}}>地圖</Link>
                      <Link to="/Contact" style={{textDecoration:"none",color:"grey",marginRight:"2vw"}}>聯絡我們</Link>
                      <Link to="/about" style={{textDecoration:"none",color:"grey",marginRight:"2vw"}}>js作品集</Link>
                    
                  </table>
                
                  </div>
                 
                 
                  <div class="bottom">

                  <Route exact path="/" component={Home} />
                  
                  <Route path="/about" component={About} />
                  <Route path="/Contact" component={Contact} />
                  </div>
                  
            

               
              </div>
              
          </HashRouter>
      )
  }
}



    ReactDOM.render(
     <Main/>,
      document.getElementById('root')
    );
  
