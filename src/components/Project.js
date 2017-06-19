import React, {Component} from 'react'
// import {Link} from 'react-router'
import '../styling/Project.css'
import Slider from 'react-slick'
import NavBar from './NavBar'

// import ScrollUp from 'react-scroll-up'
//        <ScrollUp showUnder={800} className="DivupButton">
        //  <span className="upButton">UP</span>
      //  </ScrollUp>
import ScrollUpButton from "react-scroll-up-button";
import  MediaQuery from 'react-responsive';
import ScrollAnimation from 'react-animate-on-scroll';









import one from '../GD/Projects/cspBike/1.png'
// import two from '../GD/Projects/cspBike/2.png'
import two from '../GD/Projects/teakBench/6.png'

import three from '../GD/Projects/cspBike/3.png'









export default class TeakBench extends Component {
  constructor(props){
    super();
    this.state = {
      gdStatus: "hidden",
      slideShowStatus:"",
      information: null
    }
//     this.next = this.next.bind(this)
// this.previous = this.previous.bind(this)
  }


  next() {
  this.slider.slickNext()
}
previous() {
  this.slider.slickPrev()
}

  mouseOff(){
    console.log("out");
  }

  projectOn(){
    console.log("in");
    // console.log(number);
    console.log(this.refs);
  }





slideShowRender(){
  const infromation1 = JSON.parse(this.props.location.query.test)
  console.log("process phototoosososos");
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1
  };

  if (infromation1.process === "yes"){
    console.log("process yes");
    // this.slideShowRender()
    return (
          <div className="slideTestWrapper">
            <div className='fa fa-angle-left' onClick={this.previous.bind(this)}></div>
            <div className="slideTestContainer">
              <Slider ref={c => this.slider = c } {...settings}>
              {  infromation1.imgSrcProcess.map(function(y, num) {
                  return (
                    <div><img className="slideTest" src={y}></img></div>

                  )
                 })
               }
              </Slider>
            </div>
            <div className='fa fa-angle-right' onClick={this.next.bind(this)}></div>
          </div>
    )
  }



}






render(){



    // console.log("in project",this.props.location.query);

    const infromation2 = JSON.parse(this.props.location.query.test)

    // console.log("this is the infro", information);
    // console.log("haoooooo", information.imgSrcProcess);
    console.log("halooooooooo", infromation2);

    const imageProcessing = infromation2.imgSrc.map(function(x, number) {
      console.log(x);
      console.log(infromation2.projectNum);
      return (
        //  <div ><img alt="reload" className="photo" src={x} ref={number}></img></div>
        <div><img alt="reload" className="photo" src={x}></img></div>
      )
     });


    //  console.log(information.projectNum);

    //  if (information.projectNum === "07"){
    //    this.setState({gdStatus: "visible"})
    //    console.log("gd stuff");
    //  }



    const slideStyle = {
      visibility: this.state.slideShowStatus
    }

    const posterPresentation = {
      color: "blue",
      visibility: this.state.gdStatus
    }


//              <MediaQuery query='(min-device-width: 1000px)' className="MediaQueryProject">

  //     </MediaQuery>
            // <div className="buttonContainer">
            //     <div className='fa fa-angle-left' onClick={this.previous.bind(this)}></div>
            //     <div className='fa fa-angle-right' onClick={this.next.bind(this)}></div>
            // </div>



    return (
      <div>
        <MediaQuery query='(min-device-width: 800px)' className="MediaQueryProject">
          <div className="projectWrapper">
            <div className="projectContainer">
                  <div className="descriptionContainer animated fadeInLeft">
                        <div className="projectTitle">
                            <div className="projectName">
                              {infromation2.title} <br></br>
                            </div>
                            <div className="projectNumber">
                              {infromation2.projectNum}
                            </div>
                        </div>
                        <div className="aboutProject">
                          {infromation2.description}
                        </div>
                  </div>
                <div className="slideshowContainer animated fadeInRight" >
                  {imageProcessing}
                </div>

            </div>
          </div>


            {this.slideShowRender()}





              <ScrollUpButton StopPosition={0}
                    TransitionBtnPosition={150}
                    EasingType='easeOutCubic'
                    AnimationDuration={800}
                    ContainerClassName='ScrollUpButton__Container'
                    TransitionClassName='ScrollUpButton__Toggled'>
                <h1><div className="fa fa-angle-double-up"></div></h1>
              </ScrollUpButton>
       </MediaQuery>




       <MediaQuery query='(max-width: 800px)' className="MediaQueryProject">
         <div className="projectWrapperSmall">
           <div className="projectContainerSmall">
                 <div className="descriptionContainerSmall animated fadeInLeft">
                       <div className="projectTitleSmall">
                           <div className="projectNameSmall">
                             {infromation2.title} <br></br>
                           </div>
                           <div className="projectNumberSmall">
                             {infromation2.projectNum}
                           </div>
                       </div>
                       <div className="aboutProjectSmall">
                         {infromation2.description}
                       </div>
                 </div>
               <div className="slideshowContainerSmall animated fadeInRight" onClick={this.projectOn.bind(this)}>
                 {imageProcessing}
               </div>
           </div>
         </div>

         <ScrollUpButton StopPosition={0}
               TransitionBtnPosition={150}
               EasingType='easeOutCubic'
               AnimationDuration={1000}
               ContainerClassName='ScrollUpButton__ContainerSmall'
               TransitionClassName='ScrollUpButton__Toggled'>

           <h1><div className="fa fa-angle-double-up"></div></h1>
         </ScrollUpButton>
      </MediaQuery>











      </div>

      )
    }
  }



  //test
            // <div className="projectWrapper">
            //   <div className="projectContainer">
            //
            //
            //         <div className="descriptionContainer animated fadeInLeft">
            //           <MediaQuery query='(min-device-width: 1000px)' className="MediaQueryProject">
            //
            //               <div className="projectTitle">
            //                   <div className="projectName">
            //                     {information.title} <br></br>
            //                   </div>
            //                   <div className="projectNumber">
            //                     {information.projectNum}
            //                   </div>
            //               </div>
            //               <div className="aboutProject">
            //                 {information.description}
            //               </div>
            //             </MediaQuery>
            //
            //         </div>
            //
            //
            //
            //               <div className="descriptionContainer animated fadeInLeft">
            //                   <MediaQuery query='(max-width: 1000px)' className="MediaQueryProject">
            //                     <div className="projectTitleSmall">
            //                         <div className="projectNameSmall">
            //                           {information.title} <br></br>
            //                         </div>
            //                         <div className="projectNumberSmall">
            //                           {information.projectNum}
            //                         </div>
            //                     </div>
            //                     <div className="aboutProjectSmall">
            //                       {information.description}
            //                     </div>
            //                                     </MediaQuery>
            //               </div>
            //
            //
            //
            //
            //
            //
            //       <div className="slideshowContainer animated fadeInRight" onClick={this.projectOn.bind(this)}>
            //         {imageProcessing}
            //       </div>
            //
            //
            //
            //
            //
            //
            //   </div>
            //
            //
            // </div>
            //
            //
            // <h1 id="test" >1</h1>
            // <div className="buttonWrap">
            //   <ScrollUp showUnder={800} className="DivupButton">
            //     <span className="upButton fadeInRight">UP</span>
            //   </ScrollUp>
            // </div>


































  // <div className="slideshowContainer animated fadeInRight">
  //     <Slider {...settings}>
  //         {imageProcessing}
  //     </Slider>
  // </div>









//                    <div className="backwardArrow animated fadeInRight"></div>

//                    <div className="forwardArrow animated fadeInRight"></div>


  // <div style={posterPresentation}>
  //   hallo
  // </div>
  // <Slider {...settings}>
  //       <div><img src={information.imgSrc[0]} /></div>
  //       <div><img src={information.imgSrc[1]} /></div>
  //       <div><img src={information.imgSrc[2]} /></div>
  //       <div><img src={information.imgSrc[3]} /></div>
  // </Slider>


//   const settings = {
//     className: "centerImage",
//     // arrows: true,
//     dots: false,
//     focusOnSelect: true,
//     swipeToSlide: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     nextArrow: <SampleNextArrow />,
// prevArrow: <SamplePrevArrow />
//
// };

// import queryString from 'query-string';
// var SampleNextArrow = React.createClass({
//
//
//   render: function() {
//     const nextStyle = {
//       height: "17px",
//       // backgroundColor: "pink",
//       marginRight:"-1cm",
//       opacity: "0.4",
//       width: "17px",
//       zIndex: "+1",
//       display: 'block',
//       background: 'grey',
//       borderRadius: "100%"
//     }
//     return <div {...this.props} style={nextStyle}></div>;
//   }
// });
//
// var SamplePrevArrow = React.createClass({
//   render: function() {
//     const prevStyle = {
//       height: "17px",
//       opacity: "0.4",
//       width: "18px",
//       textAlign: "center",
//       display: 'block',
//       background: 'grey',
//       borderRadius: "50%"
//     }
//     return (
//       <div {...this.props} style={prevStyle}></div>
//     );
//   }
// });
