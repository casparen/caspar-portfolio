import React, {Component} from 'react';
import {Link} from 'react-router'
import { browserHistory } from 'react-router';

import '../styling/Navigation.css'
// import Coverpage from './Coverpage.js'
import Logo from '../GD/logo.png'
import shallowCompare from 'react-addons-shallow-compare';

//Plug ins
import  MediaQuery from 'react-responsive';
//rewrite rezie by my self!!!!!!!!!!!!!!!!!!!!!!!!!!

//Cover symbols
// import key from '../GD/key2.png'
// import eins from '../GD/Covertest/1.png'
// import zwei from '../GD/Covertest/2.png'
// import drei from '../GD/Covertest/3.png'





export default class NavBar extends Component {
  constructor(){
    super();
    this.state = {
      navSlideOut: '',
      aboutStatus: false,
      workStatus: false,
      workActive: "work",
      navStatusWork: "",
      navStatusAbout: "",
      navStatus: 'hidden',
      coverStatus: 'visible',
        currentPosition: 0,
        nextPropsState: 0,
        logoSpinningStatus: 'logoImg'
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);


  }

  updateWindowDimensions() {
  const scrollYInfo = window.scrollY
  const scrollYInfoDivided = scrollYInfo
    this.setState({currentPosition: scrollYInfoDivided})
// console.log(this.state.currentPosition);
  }


  componentDidMount(nextProps) {
    console.log("loading status", this.props.loaderStatus);
    // console.log(typeof(this.props.loaderStatus));
    console.log("start loader now Nav Bar");
    // console.log("hiiiii");
    // this.updateWindowDimensions();
    // // window.addEventListener('resize', this.updateWindowDimensions);
    //   window.addEventListener('scroll', this.updateWindowDimensions);
  }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updateWindowDimensions);
  //   window.removeEventListener('scroll', this.updateWindowDimensions);
  // }

  onHover(linkChoice){
    // console.log("hover");
    // console.log(linkChoice);

    if(linkChoice === 'work'){
      this.setState({navStatusWork: "hvr-grow"})

    }
    else {
      this.setState({navStatusAbout: "hvr-grow"})

    }

}


  onOut(linkChoice){
    if(linkChoice === 'work'){
      this.setState({navStatusWork: "hvr-shrink"})

    }
    else {
      this.setState({navStatusAbout: "hvr-shrink"})

    }
  }



    onClickNav (path, e){
      console.log("hiiiiiiiiiii");
      e.preventDefault()
      // console.log("click nav");
      console.log('on click nav', this.props.navLogoStatus);
      // this.setState({
      //     navStatus: 'hidden',
      //     coverStatus: 'visible'})
          // this.props.navLogoStatus('HIiiiiiii');

        if(path === "logo"){
          this.props.navLogoStatus(this.logoClick('logo'));
          const cc = this
          setTimeout(function(){
            browserHistory.push({
                pathname: '/'
            })
          }, 1000);
        }

      else  if(path === "about"){
        this.setState({navStatusAbout: "hvr-shrink", logoSpinningStatus: 'logoImgSpinningRight'})

          this.props.navLogoStatus(this.logoClick('about'));
          const cc = this
          setTimeout(function(){
            cc.setState({logoSpinningStatus: 'logoImg'})
            browserHistory.push({
                pathname: '/about'
            })
          }, 1000);
        }
     //else (path === "work"){
       else {
         this.setState({navStatusWork: "hvr-shrink", logoSpinningStatus: 'logoImgSpinningLeft'})
          this.props.navLogoStatus(this.logoClick('work'));
          const cc = this
          setTimeout(function(){
            cc.setState({logoSpinningStatus: 'logoImg'})
            browserHistory.push({
                pathname: '/work'
            })
          }, 1000);
        }


// this.setState({navStatusWork:"hvr-shrink"})








  // this.props.navLogoStatus(this.logoClick(ss));

  // this.logoClick()
    }


    logoClick(path) {
    console.log("logoclick", path);
    if(path === "logo"){
            return "logo"
    }

 else if(path === "about"){
    return "about"

    }
 else if(path === "work"){
    return "work"

    }

    }

    // loadingStatus(){
    //   // console.log("this is in navbar", this.props);
    // }

    // componentWillReceiveProps(nextProps, event){
    //
    //
    // // console.log(event);
    // // if(this.props === nextProps){
    // //   console.log("lol");
    // // }
    // }




// shouldComponentUpdate(nextProps, nextState, event) {
//   // console.log("next props"nextProps);
//   // console.log("this.props", this.props);
//   // console.log(event);
//    return shallowCompare(this, nextProps, nextState);
//  }
//
// componentWillUpdate(nextProps){
//   this.setState({nextPropsState: nextProps})
//   // const counter = 0
// // console.log("this.props", this.props);
// // if(nextProps + 1 != )
// // console.log("nextProps", nextProps);
//
// }
//
// componentDidUpdate(prevProps, prevState, event) {
//   // console.log("prevProps:", prevProps);
//   // console.log("this.props", this.props);
//
//   if (this.props + 2 != this.state.nextPropsState){
//     // console.log("lololol");
//   }
  // console.log("this.props IN DID UPDTE", this.props);
  // console.log(event);
  // if(this.props == nextProps){
  //   console.log("lolol");
  // }

// }

componentWillUpdate(){
      console.log("loading status", this.props.loaderStatus);
  // console.log(this.props);
// this.props.navLogoStatus(this.appColor(weatherData));
  // console.log("THis is nav", this.props.props);

  // if(this.props == 'show'){
  //   this.setState({logoSpinningStatus: 'logoImgSpinning'})
  // }
  // else {
  //   this.setState({logoSpinningStatus: 'logoImg'})
  //
  // }
}




//if prop + 1 is not = to nrxt prop them....

  render(){




// console.log(shallowCompare);






  const logoRoatate = {
    //  transform: ,
    //  transform: 'translate(0,'+ this.state.currentPosition + 'px)' + '' + 'rotate(-' + this.state.currentPosition +   'deg)'
  }
  // <Link to="/work"  className="symbolContainer" onClick={this.onClickCoverpage.bind(this)}><img className="symbol" alt="reload" id="k1" src={key}></img></Link>
  // <Link to="/work"  className="symbolContainer" onClick={this.onClickCoverpage.bind(this)}><img className="symbol" alt="reload" id="k2" src={key}></img></Link>
  // <Link to="/work"  className="symbolContainer" onClick={this.onClickCoverpage.bind(this)}><img className="symbol" alt="reload" id="k3" src={key}></img></Link>


//            <Link onClick={this.onClickNav.bind(this)} className="logoContainer" to='/'><img alt="reload" src={Logo}  className={this.props.loaderStatus} style={logoRoatate}></img></Link>

    return (
      <div>
        <div className="navConatiner">
          <MediaQuery query='(min-device-width: 700px)' className={"MediaQueryNav" + ' ' + this.state.navSlideOut}>
            <Link onClick={this.onClickNav.bind(this, "work")} onMouseOut={this.onOut.bind(this, 'work')} onMouseOver={this.onHover.bind(this, 'work')}   to='/work' id="workNav" activeClassName="activeWork"><div id="deactiveO"><span className="redO">w</span><span id="testoo" className={this.state.navStatusWork}>o</span><span className="redO">rk</span></div></Link>
            <div onClick={this.onClickNav.bind(this, "logo")} className="logoContainer" ><img alt="reload" src={Logo}  className={this.state.logoSpinningStatus + ' ' + this.props.loaderStatus} style={logoRoatate}></img></div>
            <Link onClick={this.onClickNav.bind(this, "about")}  onMouseOut={this.onOut.bind(this, 'about')} onMouseOver={this.onHover.bind(this, 'about')} id="aboutNav" to='/about' activeStyle={{color: 'red'}}><div id="deactiveO"><span className="redO">ab</span><span  id="testoo" className={this.state.navStatusAbout}>o</span><span className="redO">ut</span></div></Link>
          </MediaQuery>


          <MediaQuery query='(max-width: 700px)' className="MediaQueryNav">
            <Link onMouseOut={this.onOut.bind(this, 'work')} onMouseOver={this.onHover.bind(this, 'work')} id="workNavSmall" to='/work' activeStyle={{color: 'red'}}><div id="deactiveO"><span className="redO">w</span><span id="testoo" className={this.state.navStatusWork}>o</span><span className="redO">rk</span></div></Link>
            <Link onClick={this.onClickNav.bind(this)} className="logoContainer"><img alt="reload" src={Logo} className="logoImgSmall"></img></Link>
            <Link onMouseOut={this.onOut.bind(this, 'about')} onMouseOver={this.onHover.bind(this, 'about')} id="aboutNavSmall" to='/about' activeStyle={{color: 'red'}}><div id="deactiveO"><span className="redO">ab</span><span  id="testoo" className={this.state.navStatusAbout}>o</span><span className="redO">ut</span></div></Link>
          </MediaQuery>
        </div>
      </div>


    )
  }
}
//className="hvr-grow"
// <Link id="aboutNav" to='/about' activeStyle={{color: 'red'}}><div className="hvr-grow"><span className="redO">ab</span>o<span className="redO">ut</span></div></Link>
