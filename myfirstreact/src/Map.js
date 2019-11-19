import React from "react"
import  './index4.css'; 
class Map extends React.Component{

    constructor() {
        super();
        this.state = {
            iFrameHeight: '0px'
        }
    }
    
    
    
      render() {
        return (
          <iframe 
                    style={{width:'100%', height:this.state.iFrameHeight, overflow:'visible'}}
                    onLoad={() => {
                        const obj = ReactDOM.findDOMNode(this);
                        this.setState({
                            "iFrameHeight":  obj.contentWindow.document.body.scrollHeight + 'px'
                        });
                    }} 
                    ref="iframe" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.8198821326177!2d120.46952311543323!3d23.89600488911423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34694b1a606e7ac7%3A0xd648ab3f95da4507!2zNTIz5b2w5YyW57ij5Z-k6aCt6YSJ5p2x55Kw6Lev5LiJ5q61MzM26Jmf!5e0!3m2!1szh-TW!2stw!4v1570008069560!5m2!1szh-TW!2stw"  
                    width="100%" 
                    height={this.state.iFrameHeight} 
                    scrolling="no" 
                    frameBorder="0"
                />
        
        );
    }
}
export {Map}