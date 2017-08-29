import React, {Component} from 'react';
import {Link} from 'react-router'
import '../styling/Coverpage.css'
import { browserHistory } from 'react-router';

import Slider from 'react-slick'
import  MediaQuery from 'react-responsive';

// import logoWhite from '../GD/logoWhite.png'
// import abstractWhite from '../GD/abstractWhite.png'
// import abstractRed from '../GD/abstractRed.png'


import key1 from '../GD/key1.png'
import key2 from '../GD/key2.png'
import key3 from '../GD/key3.png'
import eins from '../GD/Covertest/1.png'
import zwei from '../GD/Covertest/2.png'
import drei from '../GD/Covertest/3.png'

export default class CoverPage extends Component {
constructor(){
  super();
  this.state = {
    visibility:"",
    pageFade: '',
    symbol:''

  }
}
// onClick(){
//   console.log("click!!!");
//   this.setState({visibility: "hidden"})
//
// }

onClickCoverpage (){

      this.setState({pageFade: 'animated fadeOut'})
  console.log(this.state.pageFade);
  setTimeout(function(){
    browserHistory.push({
        pathname: '/work'
    })
}, 1000);


}

componentWillMount(){

          const winWidth = window.innerWidth
          const winHeight = window.innerHeight

          // console.log("initial inner width",winWidth);
          // console.log("initial inner height",winHeight);

          if(winWidth > 430){
            console.log("navbar, make laptopsize size");
            this.setState({device: "laptop", symbol: 'symbol'})
            // this.setState({device: "laptop"})

          }
          // else if(winWidth > 1500){
          //   console.log("initial, make laptopsize size");
          //   this.setState({device: "laptop", coverWrapper: "coverWrapper"})
          //   // this.setState({device: "laptop"})
          //
          // }

          // else if (winWidth < 429 && winWidth > 351){
          //   console.log("navbar, make iphone size");
          //   this.setState({device: "laptop", workNav: 'workNavSmall'})
          //
          //   // this.setState({device: "iphone"})
          // }


          else {
              console.log("navbar, make  Iphone 44444444");
              this.setState({device: "iphone", symbol: 'symbolSmall'})
          }
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
            <div className={"MediaQueryCover animated fadeIn"  + ' ' + this.state.pageFade}>
              <div  >
                <div className="wrap">
                  <div className="shapeContainer">
                    <div  className="symbolContainer" onClick={this.onClickCoverpage.bind(this)}><img className={this.state.symbol} alt="reload" id="k1" src={key2}></img></div>


                </div>
                </div>
              </div>
            </div>
          </div>

    )
  }
}

// <div  className="symbolContainer" onClick={this.onClickCoverpage.bind(this)}><img className={this.state.symbol} alt="reload" id="k2" src={key2}></img></div>
//   <div  className="symbolContainer" onClick={this.onClickCoverpage.bind(this)}><img className={this.state.symbol} alt="reload" id="k3" src={key2}></img></div>




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
