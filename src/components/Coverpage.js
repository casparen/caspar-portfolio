import React, {Component} from 'react';
import {Link} from 'react-router'
import '../styling/Coverpage.css'
import { browserHistory } from 'react-router';

import Slider from 'react-slick'
import  MediaQuery from 'react-responsive';

// import logoWhite from '../GD/logoWhite.png'
// import abstractWhite from '../GD/abstractWhite.png'
// import abstractRed from '../GD/abstractRed.png'


import key from '../GD/key2.png'
import eins from '../GD/Covertest/1.png'
import zwei from '../GD/Covertest/2.png'
import drei from '../GD/Covertest/3.png'

export default class CoverPage extends Component {
constructor(){
  super();
  this.state = {
    visibility:"",
    pageFade: ''

  }
}
// onClick(){
//   console.log("click!!!");
//   this.setState({visibility: "hidden"})
//
// }

onClickCoverpage (){
  // console.log("coverpage click");
      this.setState({pageFade: 'animated fadeOut'})
  setTimeout(function(){

    browserHistory.push({
        pathname: '/work'
    })
}, 1000);


}

  render(){


    // const settings = {
    //   accessibility: true,
    //   className: 'center',
    //   centerMode: true,
    //   infinite: true,
    //   swipeToSlide: false,
    //   focusOnSelect: true,
    //   //  arrows: true,
    //   // centerPadding: '150px',
    //    dots: false,
    //    speed: 500,
    //    slidesToShow: 3,
    //    autoplay: true,
    //    autoplaySpeed: 2500
    // }

    // const coverPageStatus = {
    //   visibility: this.state.visibility
    // }




//            <MediaQuery query='(min-device-width: 700px)' className={"MediaQueryCover animated slideInDown"  + ' ' + this.state.pageFade}>

    return (
          <div>
            <MediaQuery query='(min-device-width: 700px)' className={"MediaQueryCover"  + ' ' + this.state.pageFade}>
              <div  >
                <div className="wrap">
                  <div className="shapeContainer">
                    <div  className="symbolContainer" onClick={this.onClickCoverpage.bind(this)}><img className="symbol" alt="reload" id="k2" src={key}></img></div>
                  </div>
                </div>
              </div>
            </MediaQuery>



            <MediaQuery query='(max-width: 700px)' className="MediaQueryCover">
              <div  >
                <div className="wrap">
                  <div className="shapeContainerSmall">
                    <Link to="/work"  className="symbolContainer" onClick={this.onClickCoverpage.bind(this)}><img className="symbolSmall" alt="reload" id="k1" src={key}></img></Link>
                    <Link to="/work"  className="symbolContainer" onClick={this.onClickCoverpage.bind(this)}><img className="symbolSmall" alt="reload" id="k2" src={key}></img></Link>
                    <Link to="/work"  className="symbolContainer" onClick={this.onClickCoverpage.bind(this)}><img className="symbolSmall" alt="reload" id="k3" src={key}></img></Link>
                  </div>
                </div>
              </div>
            </MediaQuery>
          </div>

    )
  }
}






// <div className="coverContainerNew">
//   <div className="wrap">
//     <div className="shapeContainer">
//       <Link to="/work" className="coverLogo" onClick={this.onClick.bind(this)}><img className="coverLogo" alt="reload" id="k1" src={key}></img></Link>
//       <Link to="/work" className="coverLogo"><img className="coverLogo" alt="reload" id="k2" src={key}></img></Link>
//       <Link to="/work" className="coverLogo"><img className="coverLogo" alt="reload" id="k3" src={key}></img></Link>
//     </div>
//   </div>
// </div>





// <img className="coverLogo" alt="reload" id="k1" src={key}></img>
// <img className="coverLogo" alt="reload" id="k2" src={key}></img>
// <img className="coverLogo" alt="reload" id="k3" src={key}></img>

//  <Link to="/work" className="enter">enter</Link>
