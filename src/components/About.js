import React, {Component} from 'react';
import NavBar from './NavBar';
import '../styling/About.css'
import profile from '../GD/profile.png'


export default class About extends Component {
  render(){
    return (
      <div>
<NavBar />
        <div className="wrapper animated fadeIn">
          <div className="infoContainer">
            <p id="about">caspar <span id="enno">enno</span> nagel is a German industrial designer currently attending the Rhode Island School of Design. Caspar specializes in product and furniture design, bringing a minimalist yet playful attitude to his design practice. Combining traditional craftsmanship with modern computer based modeling techniques, he is able to create unique products that are not void of the human touch. With a constantly growing knowledge base, he is delving into the world of hardware tech, developing skills in arduino and coding. He seeks to create products that can impact people on both a local and global scale with his design language constantly developing towards the tech of the future while maintaining traditional methodologies.</p>
              <div className="contactContainer">
                <a href="mailto:casparen@me.com" className="contact" id="email">casparen@me.com</a>
                <a href="https://github.com/casparen" className="contact" id="github">github</a>
              </div>

          </div>
            <img className="profileCss" alt="reload" src={profile}></img>
        </div>



      </div>
    )
  }
}

//        <h1 className="animated fadeInLeft">Example</h1>

//https://github.com/casparen
//        <p id="name">caspar enno nagel</p>

//          <p className="contact" id="number">(631)8006170</p><br></br>
//          <p id="more">MORE</p>


//Caspar Enno Nagel is a German industrial designer currently attending the Rhode Island School of Design. Caspar specializes in product and furniture design, bringing a minimalist yet playful attitude to his design practice. Combining traditional craftsmanship with modern computer based modeling techniques, he is able to create unique products that are not void of the human touch. With a constantly growing knowledge base, he is delving into the world of hardware tech, developing skills in arduino and coding. He seeks to create products that can impact people on both a local and global scale with his design language constantly developing towards the tech of the future while maintaining traditional methodologies.
