import React, {Component} from 'react';
import {Link} from 'react-router'

import Logo from '../GD/logo.png'
import '../styling/Navigation.css'
import  MediaQuery from 'react-responsive';
import Coverpage from './Coverpage.js'

import key from '../GD/key2.png'
import eins from '../GD/Covertest/1.png'
import zwei from '../GD/Covertest/2.png'
import drei from '../GD/Covertest/3.png'





export default class NavBar extends Component {
  constructor(){
    super();
    this.state = {
      aboutStatus: false,
      workStatus: false,
      workActive: "work",
      navStatusWork: "",
      navStatusAbout: "",
      navStatus: 'hidden',
      coverStatus: 'visible'
    }
  }

  onHover(linkChoice){
    console.log("hover");
    console.log(linkChoice);

    if(linkChoice === 'work'){
      this.setState({navStatusWork: "hvr-grow"})

    }
    else {
      this.setState({navStatusAbout: "hvr-grow"})

    }

}


  onOut(linkChoice){
    if(linkChoice === 'work'){
      this.setState({navStatusWork: ""})

    }
    else {
      this.setState({navStatusAbout: ""})

    }
  }

  onClickCoverpage (){
    console.log("coverpage click");
    this.setState({
        navStatus: 'visible',
        coverStatus: 'hidden'})
  }


    onClickNav (){
      this.setState({
          navStatus: 'hidden',
          coverStatus: 'visible'})
    }

  render(){
    const navigationStatus = {
      visibility: this.state.navStatus
    }


const coverpageStatus = {
  visibility: this.state.coverStatus

}



    return (
      <div>

        <div className="coverContainerNew" style={coverpageStatus}>
          <div className="wrap">
            <div className="shapeContainer">
              <Link to="/work" className="coverLogo" onClick={this.onClickCoverpage.bind(this)}><img className="coverLogo" alt="reload" id="k1" src={key}></img></Link>
              <Link to="/work" className="coverLogo" onClick={this.onClickCoverpage.bind(this)}><img className="coverLogo" alt="reload" id="k2" src={key}></img></Link>
              <Link to="/work" className="coverLogo" onClick={this.onClickCoverpage.bind(this)}><img className="coverLogo" alt="reload" id="k3" src={key}></img></Link>
            </div>
          </div>
        </div>


        <div className="navConatiner" style={navigationStatus}>
          <MediaQuery query='(min-device-width: 700px)' className="MediaQueryNav">
            <Link onMouseOut={this.onOut.bind(this, 'work')} onMouseOver={this.onHover.bind(this, 'work')} id="workNav" to='/work' activeStyle={{color: 'red'}}><div id="deactiveO"><span className="redO">w</span><span id="testoo" className={this.state.navStatusWork}>o</span><span className="redO">rk</span></div></Link>
            <div onClick={this.onClickNav.bind(this)} className="logoContainer"><img alt="reload" src={Logo} className="logoImg"></img></div>
            <Link onMouseOut={this.onOut.bind(this, 'about')} onMouseOver={this.onHover.bind(this, 'about')} id="aboutNav" to='/about' activeStyle={{color: 'red'}}><div id="deactiveO"><span className="redO">ab</span><span  id="testoo" className={this.state.navStatusAbout}>o</span><span className="redO">ut</span></div></Link>
          </MediaQuery>
          <MediaQuery query='(max-width: 700px)' className="MediaQueryNav">
            <Link onMouseOut={this.onOut.bind(this, 'work')} onMouseOver={this.onHover.bind(this, 'work')} id="workNavSmall" to='/work' activeStyle={{color: 'red'}}><div id="deactiveO"><span className="redO">w</span><span id="testoo" className={this.state.navStatusWork}>o</span><span className="redO">rk</span></div></Link>
            <Link className="logoContainer" to='coverpage'><img alt="reload" src={Logo} className="logoImgSmall"></img></Link>
            <Link onMouseOut={this.onOut.bind(this, 'about')} onMouseOver={this.onHover.bind(this, 'about')} id="aboutNavSmall" to='/about' activeStyle={{color: 'red'}}><div id="deactiveO"><span className="redO">ab</span><span  id="testoo" className={this.state.navStatusAbout}>o</span><span className="redO">ut</span></div></Link>
              </MediaQuery>
        </div>




      </div>


    )
  }
}
//className="hvr-grow"
// <Link id="aboutNav" to='/about' activeStyle={{color: 'red'}}><div className="hvr-grow"><span className="redO">ab</span>o<span className="redO">ut</span></div></Link>
