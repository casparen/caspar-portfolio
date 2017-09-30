import React, {Component} from 'react'
// import {Link} from 'react-router'
import '../styling/Project.css'
import NavBar from './NavBar'


//Plug ins
// import ScrollUp from 'react-scroll-up'
import ScrollUpButton from "react-scroll-up-button";
import  MediaQuery from 'react-responsive';
// import ScrollAnimation from 'react-animate-on-scroll';
import Slider from 'react-slick'
import logoAnimation from '../GD/logoAnimation.gif'


import one from '../GD/Projects/enno/1.jpg'
import two from '../GD/Projects/enno/2.jpg'
import three from '../GD/Projects/enno/3.jpg'



export default class TeakBench extends Component {
  constructor(props){
    super();
    this.state = {
      photo: 'photo',
      descriptionContainer: 'descriptionContainer',
      projectTitle: 'projectTitle',
      projectName: "projectName",
      projectNumber: "projectNumber",
      aboutProject: 'aboutProject',
      paddingTop: '15',
      projectContainer: "",
      slidesProcess: 'slidesProcess',
      gdStatus: "hidden",
      device: '',
      spinnerStatus: '',
      slideShowStatus:"",
      information: null,
      currentPositionProcess: 0,
      coverFadeInLeft: '',
      coverFadeInRight: '',
      pageStatus: 'hidden',
      title: '',
      projectNum: '',
      status:'',
      description: '',
      imgSrc: '',
      imgSrcProcess: '',
      manual: '',
      process: '',
      projectFadeOut: '',
      projectFadeOutAll: '',
      slideTestContainer: "slideTestContainer"


    }
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

//     this.next = this.next.bind(this)
// this.previous = this.previous.bind(this)
// this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
// console.log("window height - 750", document.body.scrollHeight - 750);
// console.log("window height", document.body.scrollHeight);

  }

//   componentWillUpdate(){
// // console.log("This is did mount in project.js");
//     const cc = this
//     setTimeout(function(){
//     cc.setState({pageStatus: 'visible', coverFadeInLeft: 'animated fadeInLeft', coverFadeInRight: "animated fadeInRight"})
//     // console.log("fade innnn");
//   }, 3000);
//   }

next() {
  this.slider.slickNext()
}
previous() {
  this.slider.slickPrev()
}


  mouseOff(){
    // console.log("out");
  }

  projectOn(){
    // console.log("in");
    // console.log(number);
    // console.log(this.refs);
  }




  updateWindowDimensions(event) {

    // const infromation3 = JSON.parse(this.props.location.query.test)
    // console.log('scroll offset form porject', infromation3.scrollOffset);
    // console.log("parse", parseInt(infromation3.scrollOffset));
//infromation3.scrollOffset
//console.log(event);
// console.log(event.srcElement.defaultView.innerHeight);
  const offSet = window.scrollY
  // const offSetDevided = offSet / parseInt(infromation3.scrollOffset)
    this.setState({paddingTop: offSet.toString()})




//console.log(offSet.toString());
//1500 soft chair
//3200 csp
// 2400 rigit chair
// console.log(this.state.currentPositionProcess);


// console.log("scroll position", offSet);
// console.log("window height", document.documentElement.scrollHeight);
// console.log("window height", document.scrollHeight);
// console.log(event.target.scrollHeight);
}


  componentDidMount() {
    this.updateWindowDimensions(event);
      // window.addEventListener('scroll', this.updateWindowDimensions);
        window.addEventListener('scroll', this.updateWindowDimensions);


        const cc = this

        cc.setState({spinnerStatus:'logoImg', pageStatus: 'visible', coverFadeInLeft: 'animated fadeInLeft', coverFadeInRight: "animated fadeInRight"})
        //console.log("spinner will be deactivated");

  }






  componentWillUnmount() {
    // // window.removeEventListener('resize', this.updateWindowDimensions);
    // window.removeEventListener('scroll', this.updateWindowDimensions);
  }


slideRender(){
  //enno project
  //make it not draggable
  var settings = {
    // dots: true,
    slidesToShow: 1,
     slidesToScroll: 1,
      // fade: true,
      lazyLoad:true,
      swipeToSlide: false,
      touchMove:false
  }
  console.log("this is slide render");
  if(this.state.title === "enno") {
    return (
      <div className='containerSlideshow'>
          <Slider ref={c => this.slider = c } {...settings}>
            {
            this.state.manual.map(function(y, num) {
                return (
                  <div className="imgSlideshowContainer"><img className="imgSlideshow" src={y} /></div>
                )
               })
            }
              <img alt="reload" className="" src={logoAnimation}></img>

          </Slider>
          <div className="nextPrevContainer">
            <div className="fa fa-angle-left" onClick={this.previous.bind(this)}></div>
            <div  className="fa fa-angle-right" onClick={this.next.bind(this)}></div>
          </div>
      </div>

    )
  }
  else {
    console.log("not enno");
  }
}




slideShowRender(){
        const fadeInProcess = {
          // transform: 'translate(' +  this.state.scrollStatus + 'px' + ', 0px)'
          // opacity: this.state.currentPositionProcess
          // filter:'blur(' + this.state.currentPositionProcess + ')'
        }


        if (this.state.process === "yes"){
          const cc = this
          return (
                  <div className="slideTestWrapper" style={fadeInProcess}>
                    <div className={this.state.slideTestContainer} >
                      {  this.state.imgSrcProcess.map(function(y, num) {

                          return (
                            <div key={num} ><img className={cc.state.slidesProcess} src={y}  alt='loading'></img></div>
                          )
                         })
                       }
                    </div>
                  </div>
                )
        }
}

imgRender(){
  // var settings = {
  //   dots: true,
  //   slidesToShow: 1,
  //    slidesToScroll: 1
  // }

if(this.state.device === 'laptop'){
//  console.log('Make laptop  sieze');

  if(this.state.status === 'comming soon'){
  //  console.log("coming soooooon");
    return (
      <div className={"slideshowContainer" + ' ' + this.state.coverFadeInRight}>
        {
             <div className="commingSoon"><h1 className="commingSoonText">comming soon</h1><div key={1}><img alt="reload" className="photoCommingSoon" src={this.state.imgSrc[1]}></img></div></div>
        }


      </div>
    )
  }
  else {
    return (
      <div className={"slideshowContainer" + ' ' + this.state.coverFadeInRight}>
        { this.state.imgSrc.map(function(x, number) {
           return (
             <div key={number}><img alt="reload" className="photo" src={x}></img></div>
           )
          })
        }



      </div>
    )
  }

}

else {
//  console.log("make iphone sizeeee");
  return (
    <div className={"slideshowContainerSmall" + ' ' + this.state.coverFadeInRight}>
      { this.state.imgSrc.map(function(x, number) {
         return (
           <div key={number} className="photoContainerSmall"><img alt="reload" className="photoSmall" src={x}></img></div>
         )
        })
      }
    </div>
  )
}


}


//slideSHow!!!!
// <div className="slideTestWrapper">
//   <div className='fa fa-angle-left' onClick={this.previous.bind(this)}></div>
//   <div className="slideTestContainer">
//     <Slider ref={c => this.slider = c } {...settings}>
//     {  infromation1.imgSrcProcess.map(function(y, num) {
//         return (
//           <div><img className="slideTest" src={y}></img></div>
//
//         )
//        })
//      }
//     </Slider>
//   </div>
//   <div className='fa fa-angle-right' onClick={this.next.bind(this)}></div>
// </div>

componentWillMount(){
  const projectInfo = JSON.parse(this.props.location.query.test)
  // this.imgRender()
  console.log("this is in project", projectInfo);
  this.setState({  title: projectInfo.title,
                    projectNum: projectInfo.projectNum,
                    status: projectInfo.status,
                    description: projectInfo.description,
                    imgSrc: projectInfo.imgSrc,
                    imgSrcProcess: projectInfo.imgSrcProcess,
                    manual: projectInfo.manual,
                    process: projectInfo.process
                })


                const winWidth = window.innerWidth
                const winHeight = window.innerHeight

            //    console.log("initial inner width",winWidth);
              //  console.log("initial inner height",winHeight);

                if(winWidth > 430){
              //    console.log("initial, make laptopsize size");
                  this.setState({
                      device: "laptop",
                      projectContainer: "projectContainer",
                      descriptionContainer: "descriptionContainer",
                      projectTitle: "projectTitle",
                      projectName: "projectName",
                      projectNumber: "projectNumber",
                      aboutProject: "aboutProject",
                      slidesProcess: 'slidesProcess',
                      slideTestContainer: "slideTestContainer"})
                  // this.setState({device: "laptop"})

                }
                // else if(winWidth > 1500){
                //   console.log("initial, make laptopsize size");
                //   this.setState({device: "laptop", coverWrapper: "coverWrapper"})
                //   // this.setState({device: "laptop"})
                //
                // }

                else {
              //    console.log("initial, make iphone size");
                  this.setState({
                    device: "iphone",
                    projectContainer: "projectContainerSmall",
                    descriptionContainer: "descriptionContainerSmall",
                    projectTitle: "projectTitleSmall",
                    projectName: "projectNameSmall",
                    projectNumber: "projectNumberSmall",
                    aboutProject: "aboutProjectSmall",
                    slidesProcess: "slidesProcessSmall",
                    slideTestContainer: "slideTestContainerSmall"})

                }
}

navStatus(status) {

  if(status === 'logo'){
//console.log("logooooooo");
    // console.log(status);
    console.log("slide down now");
    this.setState({projectFadeOut: 'animated fadeOut'})
  }

  else if(status === 'work'){
    console.log("workkkkkkk");
    this.setState({projectFadeOut: 'animated fadeOut'})
// console.log(status);
    // console.log("slide down now");
    // this.setState({workFadeOutAll: 'animated fadeOut'})
  }

  else if(status === 'about'){
  //  console.log('aboutttt',status);
      this.setState({projectFadeOut: 'animated fadeOut'})

    // console.log("slide down now");
    // this.setState({workFadeOutAll: 'animated fadeOut'})
  }


}


render(){

  // console.log("this is refs",this.refs.content);
  // console.log(this.state.imgSrc);





     const pageLoadingStatus = {
       visibility: this.state.pageStatus
     }


    //  console.log(information.projectNum);

    //  if (information.projectNum === "07"){
    //    this.setState({gdStatus: "visible"})
    //    console.log("gd stuff");
    //  }



    // const slideStyle = {
    //   visibility: this.state.slideShowStatus
    // }


    // const posterPresentation = {
    //   color: "blue",
    //   visibility: this.state.gdStatus
    // }


//              <MediaQuery query='(min-device-width: 1000px)' className="MediaQueryProject">

  //     </MediaQuery>
            // <div className="buttonContainer">
            //     <div className='fa fa-angle-left' onClick={this.previous.bind(this)}></div>
            //     <div className='fa fa-angle-right' onClick={this.next.bind(this)}></div>
            // </div>

//FOR THE GD BOOK, use a slide show to show the digital book


// var settings = {
//   // dots: true,
//   slidesToShow: 1,
//    slidesToScroll: 1,
//     fade: true
// }



const fixedDescription = {
  // transform: "translateY(3in)"
  // paddingTop: this.state.paddingTop + 'px'
}

    return (
<div>
  <NavBar  loaderStatus={this.state.spinnerStatus} navLogoStatus={this.navStatus.bind(this)}/>
      <div style={pageLoadingStatus} className={this.state.projectFadeOut}>
        <div className="MediaQueryProject" ref='content'>
          <div className="projectWrapper2">
            <div className={this.state.projectContainer}>
                  <div className={this.state.descriptionContainer + ' ' + this.state.coverFadeInLeft}>
                        <div className={this.state.projectTitle}>
                            <div className={this.state.projectName}>
                              {this.state.title} <br></br>
                            </div>
                            <div className={this.state.projectNumber}>
                              {this.state.projectNum}
                            </div>
                        </div>
                        <div className={this.state.aboutProject}>
                          {this.state.description}
                        </div>
                  </div>


              </div>
                {this.imgRender()}

                {this.slideRender()}
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
       </div>
      </div>

      </div>

      )
    }
  }


 //  <MediaQuery query='(max-width: 800px)' className="MediaQueryProject">
 //    <div className="projectWrapperSmall">
 //      <div className="projectContainerSmall">
 //            <div className="descriptionContainerSmall animated fadeInLeft">
 //                  <div className="projectTitleSmall">
 //                      <div className="projectNameSmall">
 //                        {infromation2.title} <br></br>
 //                      </div>
 //                      <div className="projectNumberSmall">
 //                        {infromation2.projectNum}
 //                      </div>
 //                  </div>
 //                  <div className="aboutProjectSmall">
 //                    {infromation2.description}
 //                  </div>
 //            </div>
 //          <div className="slideshowContainerSmall animated fadeInRight" onClick={this.projectOn.bind(this)}>
 //            {imageProcessing}
 //          </div>
 //      </div>
 //    </div>
 //
 //    <ScrollUpButton StopPosition={0}
 //          TransitionBtnPosition={150}
 //          EasingType='easeOutCubic'
 //          AnimationDuration={1000}
 //          ContainerClassName='ScrollUpButton__ContainerSmall'
 //          TransitionClassName='ScrollUpButton__Toggled'>
 //
 //      <h1><div className="fa fa-angle-double-up"></div></h1>
 //    </ScrollUpButton>
 // </MediaQuery>


















































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
