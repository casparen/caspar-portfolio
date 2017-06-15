import React, {Component} from 'react'
// import {Link} from 'react-router'
import '../styling/Project.css'
import Slider from 'react-slick'
import NavBar from './NavBar'


import ScrollUp from 'react-scroll-up'
import  MediaQuery from 'react-responsive';


export default class TeakBench extends Component {
  constructor(props){
    super();
    this.state = {
      gdStatus: "hidden"
    }
  }

  mouseOff(){
    console.log("out");
  }

  projectOn(){
    console.log("in");
    // console.log(number);
    console.log(this.refs);
  }

render(){



    // console.log("in project",this.props.location.query);

    const information = JSON.parse(this.props.location.query.test)
    // console.log(information);
    // console.log(information.imgSrc);

    const imageProcessing = information.imgSrc.map(function(x, number) {
      console.log(number);
      return (
        //  <div ><img alt="reload" className="photo" src={x} ref={number}></img></div>
        <div ><img alt="reload" className="photo" src={x}></img></div>
    )

     });


    //  console.log(information.projectNum);

    //  if (information.projectNum === "07"){
    //    this.setState({gdStatus: "visible"})
    //    console.log("gd stuff");
    //  }

    //  const SamplePrevArrow = function () {
    //    return (
    //      <div  style={{background: 'red'}}></div>
    //    )
    //  }
     //
    //  const SampleNextArrow = function () {
    //    return (
    //      <div  style={{background: 'red'}}></div>
    //    )
    //  }

    const posterPresentation = {
      color: "blue",
      visibility: this.state.gdStatus
    }

//              <MediaQuery query='(min-device-width: 1000px)' className="MediaQueryProject">

  //     </MediaQuery>


    return (
      <div>

        <MediaQuery query='(min-device-width: 700px)' className="MediaQueryProject">
          <div className="projectWrapper">
            <div className="projectContainer">
                  <div className="descriptionContainer animated fadeInLeft">
                        <div className="projectTitle">
                            <div className="projectName">
                              {information.title} <br></br>
                            </div>
                            <div className="projectNumber">
                              {information.projectNum}
                            </div>
                        </div>
                        <div className="aboutProject">
                          {information.description}
                        </div>
                  </div>
                <div className="slideshowContainer animated fadeInRight" onClick={this.projectOn.bind(this)}>
                  {imageProcessing}
                </div>
            </div>
          </div>
       </MediaQuery>




       <MediaQuery query='(max-width: 700px)' className="MediaQueryProject">
         <div className="projectWrapperSmall">
           <div className="projectContainerSmall">
                 <div className="descriptionContainerSmall animated fadeInLeft">
                       <div className="projectTitleSmall">
                           <div className="projectNameSmall">
                             {information.title} <br></br>
                           </div>
                           <div className="projectNumberSmall">
                             {information.projectNum}
                           </div>
                       </div>
                       <div className="aboutProjectSmall">
                         {information.description}
                       </div>
                 </div>
               <div className="slideshowContainerSmall animated fadeInRight" onClick={this.projectOn.bind(this)}>
                 {imageProcessing}
               </div>
           </div>
         </div>
      </MediaQuery>







          <div className="buttonWrap">
            <ScrollUp showUnder={800} className="DivupButton">
              <span className="upButton fadeInRight">UP</span>
            </ScrollUp>
          </div>


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
