import ReactDOM from "react-dom"
import React from "react"
import { HashRouter, Route, Link } from "react-router-dom"
import { Title } from "./Title"
import { Home } from "./Home"
import { About } from "./About"
import {Contact} from "./Contact"
import {Product} from "./Product"
import {Component} from "./App"




import  './index4.css'; 
class Main extends React.Component {
  render() {
      return (
          <HashRouter>
                 
                  <div>

                <div>
                  
                </div>
                 
                  
                 
                  
                
                  
             
                  <table >
                     
                      <Link className="Nav_link" to="/" >關於我們</Link>
                      <Link className="Nav_link" to="/PTdescription" >精油介紹</Link>
                      <Link className="Nav_link" to="/Contact" >聯絡我們</Link>
                      <Link className="Nav_link" to="/Product" >植物介紹</Link>
                    
                  </table>
                
                 
                 
                 
             

                  <Route exact path="/" component={Home} />
                  
                  <Route path="/" component={About} />
                  <Route path="/PTdescription"  />
                  <Route path="/Contact" component={Contact} />
                  <Route path="/Product" component={Product} />
                 
                  
            

               
              </div>
              
          </HashRouter>
      )
  }
}



    ReactDOM.render(
     <Main/>,
      document.getElementById('root')
    );
  
