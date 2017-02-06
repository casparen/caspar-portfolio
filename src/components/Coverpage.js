import React, {Component} from 'react';
import {Link} from 'react-router'
import '../styling/Coverpage.css'

// import logoWhite from '../GD/logoWhite.png'
// import abstractWhite from '../GD/abstractWhite.png'
// import abstractRed from '../GD/abstractRed.png'


import key from '../GD/key2.png'



export default class CoverPage extends Component {
constructor(){
  super();
  this.state = {
  }
}

  render(){

    return (
<div className="coverContainerNew">
  <div className="shapeContainer">
    <img className="coverLogo" alt="reload" id="k1" src={key}></img>
    <img className="coverLogo" alt="reload" id="k2" src={key}></img>
    <img className="coverLogo" alt="reload" id="k3" src={key}></img>
  </div>

    <Link to="/work" className="enter">enter</Link>


</div>
    )
  }
}
