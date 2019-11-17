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
                  <div class="top">


               
                  <table >
                      <td><Link to="/" style={{textDecoration:"none"}}>首頁</Link></td>
                      <td><Link to="/about" style={{textDecoration:"none"}}>關於我們</Link></td>
                      <td><Link to="/about" style={{textDecoration:"none"}}>地圖</Link></td>
                      <td><Link to="/Contact" style={{textDecoration:"none"}}>聯絡我們</Link></td>
                      <td><Link to="/about" style={{textDecoration:"none"}}>js作品集</Link></td>
                  </table>
              
                  </div>
                  <hr />
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
  
