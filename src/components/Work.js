import React, {Component} from 'react';
import NavBar from './NavBar'
import '../styling/Work.css'
// import {Link} from 'react-router'
import Slider from 'react-slick'
// import queryString from 'query-string';
import { browserHistory } from 'react-router';
//import { browserHistory, Route, Router } from 'react-router';
// import ResponsiveMixin from 'react-responsive-mixin';
import  MediaQuery from 'react-responsive';
import Loader from 'react-loader-advanced';




import ProjectInfo from './ProjectInfo.js'

import cover1 from '../GD/covers/1.png'
import cover2 from '../GD/covers/2.png'
import cover3 from '../GD/covers/3.png'
import cover4 from '../GD/covers/4.png'
import cover5 from '../GD/covers/5.png'
import cover6 from '../GD/covers/6.png'
import cover7 from '../GD/covers/7.png'
import cover8 from '../GD/covers/8.png'
import cover9 from '../GD/covers/9.png'
import cover10 from '../GD/covers/10.png'
import cover11 from '../GD/covers/11.png'


//make object a string and then sent it through query

export default class Work extends Component {
  constructor(){
    super();
    // this.next = this.next.bind(this)
    // this.previous = this.previous.bind(this)
    this.state = {
      coverStatus: "",
      coverSize: ""
    }
  }










next(projectRef){
// console.log("fire");
// console.log(projectRef);
// console.log(this.refs.p2.parentNode.className);
  if(projectRef === "p2" && this.refs.p2.parentNode.className === 'slick-slide slick-active') {
  console.log("next");
  this.Slider.slickNext()
}
}

project(projectRef){
  this.next(projectRef)
  const projectInfoString = ""
  const status = ""
  console.log("hallo");
  // typeof projectRef;
  console.log("project ref:", this.refs);

  if(projectRef === "p1"){
    this.status =  this.refs.p1.parentNode.className
    this.projectInfoString = JSON.stringify(ProjectInfo.Project1[0]);
    console.log("pushing");
  }
  else if(projectRef === "p2"){
    this.status =  this.refs.p2.parentNode.className
    this.projectInfoString = JSON.stringify(ProjectInfo.Project2[0]);
  }
  else if(projectRef === "p3"){
    this.status =  this.refs.p3.parentNode.className
    this.projectInfoString = JSON.stringify(ProjectInfo.Project3[0]);
  }
  else if(projectRef === "p4"){
    this.status =  this.refs.p4.parentNode.className
    this.projectInfoString = JSON.stringify(ProjectInfo.Project4[0]);
  }
  else if(projectRef === "p5"){
    this.status =  this.refs.p5.parentNode.className
    this.projectInfoString = JSON.stringify(ProjectInfo.Project5[0]);
  }
  else if(projectRef === "p6"){
    this.status =  this.refs.p6.parentNode.className
    this.projectInfoString = JSON.stringify(ProjectInfo.Project6[0]);
  }
  else if(projectRef === "p7"){
    this.status =  this.refs.p7.parentNode.className
    this.projectInfoString = JSON.stringify(ProjectInfo.Project7[0]);
  }
  else if(projectRef === "p8"){
    this.status =  this.refs.p8.parentNode.className
    this.projectInfoString = JSON.stringify(ProjectInfo.Project8[0]);
  }
  else if(projectRef === "p9"){
    this.status =  this.refs.p9.parentNode.className
    this.projectInfoString = JSON.stringify(ProjectInfo.Project9[0]);
  }
  //
  //
    // if(this.status === "slick-slide slick-active slick-center"){
      console.log("approved");
      browserHistory.push({
          pathname: '/work/' + projectRef,
          query: {test: this.projectInfoString

          }
      })
    // }
  }

  projectHover (projectRef){
      // if(projectRef === "p1"){
      //   console.log("project 1");
      //   // console.log('approved');
      //   // this.setState({coverStatus: "hvr-wobble-horizontal"})
      //   this.setState({coverStatus: "cover"})
      // }
      // else if(projectRef === "p2"){
      //     console.log("project 2");
      //   this.setState({coverStatus: "cover"})
      // }
      // else if(projectRef === "p3"){
      //   this.setState({coverStatus: "cover"})
      // }
      // else if(projectRef === "p4"){
      //   this.setState({coverStatus: "cover"})
      // }
      // else if(projectRef === "p5"){
      //   this.setState({coverStatus: "cover"})
      // }
      // else if(projectRef === "p6"){
      //   this.setState({coverStatus: "cover"})
      // }
      // else if(projectRef === "p7"){
      //   this.setState({coverStatus: "cover"})
      // }
      // else if(projectRef === "p8"){
      //   this.setState({coverStatus: "cover"})
      // }
  }

mouseOut(){
  // console.log("out");
  // this.setState({coverStatus: ""})
}



  render(){
    // console.log("in work", ProjectInfo);
    // console.log("testooo", JSON.stringify(obj));
console.log(this.state.coverStatus);

//idea: give the viewer the options to see the slides for ID stuff or CS


    const coverStyling = {
      opacity: this.state.coverOpacity,
    // border: 'solid pink 5px',
      margin: '0 auto',
      paddingTop: '12px',

      width: '300px'
      // width: this.state.coverSize

    }




    const coverStylingMedium = {
      opacity: this.state.coverOpacity,
    // border: 'solid pink 5px',
      margin: '0 auto',
      paddingTop: '40px',

      width: '120px'
      // width: this.state.coverSize
    }



// const spinner = <div class="loader"></div>
//          <NavBar/>



//IIMPORT REARANGE THE COVERS ON BOTH MEDIA QUESRIES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// <div><img alt="reload" style={coverStyling} ref="p10" className={'coverStatus'} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p10')} onClick={this.project.bind(this,"p10")} src={cover10}></img><div className="projDescription"></div></div>
// <div><img alt="reload" style={coverStyling} ref="p11" className={'coverStatus'} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p11')} onClick={this.project.bind(this,"p11")} src={cover11}></img><div className="projDescription"></div></div>

    return (
      <div>

        <div className="pageWrapper">
          <div className="projectsWrapper">
            <div className="coverContainer">



                  <MediaQuery query='(min-device-width: 700px)' className="MediaQuery">





                      <div><img alt="reload" style={coverStyling} ref="p9" className={'coverStatus'} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p9')} onClick={this.project.bind(this,"p9")} src={cover9}></img><div className="projDescription"></div></div>
                      <div><img alt="reload" style={coverStyling} ref="p1" className={'coverStatus'} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p1')} onClick={this.project.bind(this,"p1")} src={cover1}></img><div className="projDescription"></div></div>
                      <div><img alt="reload" style={coverStyling} ref="p2" className={'coverStatus'} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p2')} onClick={this.project.bind(this,"p2")} src={cover2}></img><div className="projDescription"></div></div>
                      <div><img alt="reload" style={coverStyling} ref="p6" className={'coverStatus'} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p6')} onClick={this.project.bind(this,"p6")} src={cover6}></img><div className="projDescription"></div></div>
                      <div><img alt="reload" style={coverStyling} ref="p7" className={'coverStatus'} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p7')} onClick={this.project.bind(this,"p7")} src={cover7}></img><div className="projDescription"></div></div>
                      <div><img alt="reload" style={coverStyling} ref="p8" className={'coverStatus'} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p8')} onClick={this.project.bind(this,"p8")} src={cover8}></img><div className="projDescription"></div></div>
                      <div><img alt="reload" style={coverStyling} ref="p4" className={'coverStatus'} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p4')} onClick={this.project.bind(this,"p4")} src={cover4}></img><div className="projDescription"></div></div>
                      <div><img alt="reload" style={coverStyling} ref="p5" className={'coverStatus'} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p5')} onClick={this.project.bind(this,"p5")} src={cover5}></img><div className="projDescription"></div></div>
                      <div><img alt="reload" style={coverStyling} ref="p3" className={'coverStatus'} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p3')} onClick={this.project.bind(this,"p3")} src={cover3}></img><div className="projDescription"></div></div>
                  </MediaQuery>

                <MediaQuery query='(max-width: 700px)' className="MediaQuery">
                  <div><img alt="reload" style={coverStylingMedium} ref="p1" className={'coverStatus'} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p1')} onClick={this.project.bind(this,"p1")} src={cover1}></img><div className="projDescription"></div></div>
                    <div><img alt="reload" style={coverStylingMedium} ref="p2" className={'coverStatus'} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p2')} onClick={this.project.bind(this,"p2")} src={cover2}></img><div className="projDescription"></div></div>
                      <div><img alt="reload" style={coverStylingMedium} ref="p3" className={'coverStatus'} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p3')} onClick={this.project.bind(this,"p3")} src={cover3}></img><div className="projDescription"></div></div>
                      <div><img alt="reload" style={coverStylingMedium} ref="p4" className={'coverStatus'} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p4')} onClick={this.project.bind(this,"p4")} src={cover4}></img><div className="projDescription"></div></div>
                      <div><img alt="reload" style={coverStylingMedium} ref="p5" className={'coverStatus'} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p5')} onClick={this.project.bind(this,"p5")} src={cover5}></img><div className="projDescription"></div></div>
                      <div><img alt="reload" style={coverStylingMedium} ref="p6" className={'coverStatus'} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p6')} onClick={this.project.bind(this,"p6")} src={cover6}></img><div className="projDescription"></div></div>
                      <div><img alt="reload" style={coverStylingMedium} ref="p7" className={'coverStatus'} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p7')} onClick={this.project.bind(this,"p7")} src={cover7}></img><div className="projDescription"></div></div>
                      <div><img alt="reload" style={coverStylingMedium} ref="p8" className={'coverStatus'} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p8')} onClick={this.project.bind(this,"p8")} src={cover8}></img><div className="projDescription"></div></div>
                </MediaQuery>
            </div>
          </div>


        </div>



      </div>

    )
  }
}




// <div className="backward"></div>
//   <div className="forward"></div>
// location.hash



  //       return browserHistory.push("/");

// params={{userId: userId, taskId: "foo"}}

// <img src={cover1} width="50%"></img>
// <img src={cover1} width="50%"></img>
// <img src={cover1} width="50%"></img>
// <img src={cover1} width="50%"></img>
// <img src={cover1} width="50%"></img>


// <div><img src={baseUrl + '/abstract01.jpg'} /></div>



//---------------------------------------------------------------------OLD!
// export default class Work extends Component {
//   constructor(){
//     super();
//     // this.next = this.next.bind(this)
//     // this.previous = this.previous.bind(this)
//     this.state = {
//       coverStatus: ""
//     }
//   }
//
//
//
// next(projectRef){
// // console.log("fire");
// // console.log(projectRef);
// // console.log(this.refs.p2.parentNode.className);
//   if(projectRef === "p2" && this.refs.p2.parentNode.className === 'slick-slide slick-active') {
//   console.log("next");
//   this.Slider.slickNext()
// }
// }
//
// project(projectRef){
//   this.next(projectRef)
//   const projectInfoString = ""
//   const status = ""
//   console.log("hallo");
//   // typeof projectRef;
//   console.log(this.refs);
//
//   if(projectRef === "p1" && this.refs.p1.parentNode.className === 'slick-slide slick-active slick-center'){
//     this.status =  this.refs.p1.parentNode.className
//     this.projectInfoString = JSON.stringify(ProjectInfo.Project1[0]);
//     console.log("pushing");
//   }
//   else if(projectRef === "p2"){
//     this.status =  this.refs.p2.parentNode.className
//     this.projectInfoString = JSON.stringify(ProjectInfo.Project2[0]);
//   }
//   else if(projectRef === "p3"){
//     this.status =  this.refs.p3.parentNode.className
//     this.projectInfoString = JSON.stringify(ProjectInfo.Project3[0]);
//   }
//   else if(projectRef === "p4"){
//     this.status =  this.refs.p4.parentNode.className
//     this.projectInfoString = JSON.stringify(ProjectInfo.Project4[0]);
//   }
//   else if(projectRef === "p5"){
//     this.status =  this.refs.p5.parentNode.className
//     this.projectInfoString = JSON.stringify(ProjectInfo.Project5[0]);
//   }
//   else if(projectRef === "p6"){
//     this.status =  this.refs.p6.parentNode.className
//     this.projectInfoString = JSON.stringify(ProjectInfo.Project6[0]);
//   }
//   else if(projectRef === "p7"){
//     this.status =  this.refs.p7.parentNode.className
//     this.projectInfoString = JSON.stringify(ProjectInfo.Project7[0]);
//   }
//   else if(projectRef === "p8"){
//     this.status =  this.refs.p8.parentNode.className
//     this.projectInfoString = JSON.stringify(ProjectInfo.Project8[0]);
//   }
//
//
//     if(this.status === "slick-slide slick-active slick-center"){
//       console.log("approved");
//       browserHistory.push({
//           pathname: '/work/' + projectRef,
//           query: {test: this.projectInfoString
//
//           }
//       })
//     }
//   }
//
//   projectHover (projectRef){
//       if(projectRef === "p1" && this.refs.p1.parentNode.className === 'slick-slide slick-active slick-center'){
//         // console.log('approved');
//         // this.setState({coverStatus: "hvr-wobble-horizontal"})
//         this.setState({coverStatus: "cover"})
//       }
//       else if(projectRef === "p2" && this.refs.p2.parentNode.className === 'slick-slide slick-active slick-center'){
//         this.setState({coverStatus: "cover"})
//       }
//       else if(projectRef === "p3" && this.refs.p3.parentNode.className === 'slick-slide slick-active slick-center'){
//         this.setState({coverStatus: "cover"})
//       }
//       else if(projectRef === "p4" && this.refs.p4.parentNode.className === 'slick-slide slick-active slick-center'){
//         this.setState({coverStatus: "cover"})
//       }
//       else if(projectRef === "p5" && this.refs.p5.parentNode.className === 'slick-slide slick-active slick-center'){
//         this.setState({coverStatus: "cover"})
//       }
//       else if(projectRef === "p6" && this.refs.p6.parentNode.className === 'slick-slide slick-active slick-center'){
//         this.setState({coverStatus: "cover"})
//       }
//       else if(projectRef === "p7" && this.refs.p7.parentNode.className === 'slick-slide slick-active slick-center'){
//         this.setState({coverStatus: "cover"})
//       }
//       else if(projectRef === "p8" && this.refs.p8.parentNode.className === 'slick-slide slick-active slick-center'){
//         this.setState({coverStatus: "cover"})
//       }
//   }
//
// mouseOut(){
//   // console.log("out");
//   this.setState({coverStatus: ""})
// }
//
//
//
//   render(){
//     // console.log("in work", ProjectInfo);
//     // console.log("testooo", JSON.stringify(obj));
//
//
// //idea: give the viewer the options to see the slides for ID stuff or CS
//
//
//     const coverStyling = {
//       opacity: this.state.coverOpacity
//     }
//
//     const settings = {
//       accessibility: true,
//
//       className: 'center',
//       centerMode: true,
//       infinite: true,
//       swipeToSlide: false,
//       focusOnSelect: true,
//       //  arrows: true,
//       // centerPadding: '150px',
//        dots: false,
//        speed: 500,
//        slidesToShow: 3,
//
//
//        autoplay: true,
//        autoplaySpeed: 2500
//     };
//
//
//     return (
//       <div>
//           <NavBar/>
//
//
//
//         <div className="coverContainer">
//
//           <Slider {...settings}>
//             <div><img alt="reload" style={coverStyling} ref="p1" className={this.state.coverStatus} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p1')} onClick={this.project.bind(this,"p1")} src={cover1}></img><div className="projDescription"><span className="title">teak bench</span><br></br><span className="pNumber">01</span></div></div>
//             <div><img alt="reload" style={coverStyling} ref="p2" className={this.state.coverStatus} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p2')} onClick={this.project.bind(this,"p2")} src={cover2}></img><div className="projDescription"><span className="title">cartó</span><br></br><span className="pNumber">02</span></div></div>
//             <div><img alt="reload" style={coverStyling} ref="p3" className={this.state.coverStatus} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p3')} onClick={this.project.bind(this,"p3")} src={cover3}></img><div className="projDescription"><span className="title">anthony gormley transposition</span><br></br><span className="pNumber">03</span></div></div>
//             <div><img alt="reload" style={coverStyling} ref="p4" className={this.state.coverStatus} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p4')} onClick={this.project.bind(this,"p4")} src={cover4}></img><div className="projDescription"><span className="title">fine arts </span><br></br><span className="pNumber">04</span></div></div>
//             <div><img alt="reload" style={coverStyling} ref="p5" className={this.state.coverStatus} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p5')} onClick={this.project.bind(this,"p5")} src={cover5}></img><div className="projDescription"><span className="title">processing on paper</span><br></br><span className="pNumber">05</span></div></div>
//             <div><img alt="reload" style={coverStyling} ref="p6" className={this.state.coverStatus} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p6')} onClick={this.project.bind(this,"p6")} src={cover6}></img><div className="projDescription"><span className="title">portable seating</span><br></br><span className="pNumber">06</span></div></div>
//             <div><img alt="reload" style={coverStyling} ref="p7" className={this.state.coverStatus} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p7')} onClick={this.project.bind(this,"p7")} src={cover7}></img><div className="projDescription"><span className="title">enno identity</span><br></br><span className="pNumber">07</span></div></div>
//             <div><img alt="reload" style={coverStyling} ref="p8" className={this.state.coverStatus} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p8')} onClick={this.project.bind(this,"p8")} src={cover8}></img><div className="projDescription"><span className="title">childrens ride on</span><br></br><span className="pNumber">08</span></div></div>
//         </Slider>
//
//
//
//         </div>
//
//       </div>
//
//     )
//   }
// }
