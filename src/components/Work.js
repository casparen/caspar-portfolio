import React, {Component} from 'react';
import ProjectInfo from './ProjectInfo.js'
// import NavBar from './NavBar'
import '../styling/Work.css'
import { browserHistory } from 'react-router';
// import {Link} from 'react-router'

//Plug ins
// import ResponsiveMixin from 'react-responsive-mixin';
import  MediaQuery from 'react-responsive';
// import Loader from 'react-loader-advanced';
// import Slider from 'react-slick'
// import queryString from 'query-string';


//Cover photos
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
      coverSize: "",
      componentCounter: 0,
      titleTest: 'hidden',
      pageStatus: 'hidden',
      // coverFadeIn: '',
      // coverOpacity: 1,
      // border:'',
      workFadeOut: '',
      projectRef: '',
      projectTitleStatusState: 'hidden',
      p1: 'coverStatus',
        p1Container: 'coverContainerNoHover',
        p1titleContainer: '',
        titleStatusp1: 'titelHiddenp1',
      p2: 'coverStatus',
        p2Container: 'coverContainerNoHover',
        p2titleContainer: '',
        titleStatusp2: 'titelHiddenp2',
      p3: 'coverStatus',
        p3Container: 'coverContainerNoHover',
        p3titleContainer: '',
        titleStatusp3: 'titelHiddenp3',
      p4: 'coverStatus',
        p4Container: 'coverContainerNoHover',
        p4titleContainer:'',
        titleStatusp4: 'titelHiddenp4',
      p5: 'coverStatus',
        p5Container: 'coverContainerNoHover',
        p5titleContainer:'',
        titleStatusp5: 'titelHiddenp5',
      p6: 'coverStatus',
        p6Container: 'coverContainerNoHover',
        p6titleContainer:'',
        titleStatusp6: 'titelHiddenp6',
      p7: 'coverStatus',
        p7Container: 'coverContainerNoHover',
        p7titleContainer:'',
        titleStatusp7: 'titelHiddenp7',
      p8: 'coverStatus',
        p8Container: 'coverContainerNoHover',
        p8titleContainer:'',
        titleStatusp8: 'titelHiddenp8',
      p9: 'coverStatus',
        p9Container: 'coverContainerNoHover',
        p9titleContainer:'',
        titleStatusp9: 'titelHiddenp9',
      p10: 'coverStatus',
        p10Container: 'coverContainerNoHover',
        p10titleContainer:'',
        titleStatusp10: 'titelHiddenp10',
      p11: 'coverStatus',
        p11Container: 'coverContainerNoHover',
        p11titleContainer:'',
        titleStatusp11: 'titelHiddenp11',
      p12: 'coverStatus',
        p12Container: 'coverContainerNoHover',
        p12titleContainer:'',
        titleStatusp12: 'titelHiddenp12'


    }
  }

componentDidMount(){

  const cc = this
  setTimeout(function(){
  cc.setState({coverFadeIn: 'animated fadeIn', pageStatus: 'visible'})
  console.log("fade innnn");
}, 3000);
}



next(projectRef){
// console.log("fire");
// console.log(this.refs.p2.parentNode.className);
  if(projectRef === "p2" && this.refs.p2.parentNode.className === 'slick-slide slick-active') {
  // console.log("next");
  this.Slider.slickNext()
}
}

project(projectRef){
  // this.setState({workFadeOut: 'animated fadeOutDown'})
  this.next(projectRef)
  const projectInfoString = ""
  const status = ""
  // console.log("hallo");
  // typeof projectRef;
  // console.log("project ref:", this.refs);

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
  else if(projectRef === "p10"){
    this.status =  this.refs.p10.parentNode.className
    this.projectInfoString = JSON.stringify(ProjectInfo.Project10[0]);
  }
  else if(projectRef === "p11"){
    this.status =  this.refs.p11.parentNode.className
    this.projectInfoString = JSON.stringify(ProjectInfo.Project11[0]);
  }
  //
  //
    // if(this.status === "slick-slide slick-active slick-center"){
      // console.log("approved");
      // console.log("Project Info", this.projectInfoString);
      browserHistory.push({
          pathname: '/work/' + projectRef,
          query: {test: this.projectInfoString

          }
      })
    // }
  }
//    obj[projectContainer] = 'coverHoverContainer animated pulse'

  projectHover (projectRef){
    this.setState({titleTest: 'visible'})
    //    obj[projectRef] = "animated fadeOut" + ' ' + projectRef;
    console.log('in');
    const projectContainer = projectRef + 'Container'
    const titleContainer = projectRef + 'titleContainer'
    const titleStatus =  "titleStatus" + projectRef
    var obj =  {};
    // var obj = {};
    obj[projectRef] = projectRef;
    obj[projectContainer] = 'coverHoverContainer'
    obj[titleContainer] = 'hoverTitleContainer animated zoomIn'
    obj[titleStatus]  = 'titelVisible' + projectRef
    // obj[projectTitleStatusState] = 'visible'

    this.setState(obj)
    //
    console.log(obj);




      // if(projectRef === "p1"){
      //   console.log("projectRed", projectRef);
      //   // console.log('approved');
      //   // this.setState({coverStatus: "hvr-wobble-horizontal"})
      //   this.setState({coverStatus: "coverStatus" })
      // }
      // else if(projectRef === "p2"){
      //   console.log("projectRed", projectRef);
      //   this.setState({coverStatus: "coverStatus"})
      // }
      // else if(projectRef === "p3"){
      //   console.log("projectRed", projectRef);
      //   this.setState({coverStatus: "coverStatus"})
      // }
      // else if(projectRef === "p4"){
      //   console.log("projectRed", projectRef);
      //   this.setState({coverStatus: "coverStatus"})
      // }
      // else if(projectRef === "p5"){
      //   console.log("projectRed", projectRef);
      //   this.setState({coverStatus: "coverStatus"})
      // }
      // else if(projectRef === "p6"){
      //   console.log("projectRed", projectRef);
      //   this.setState({coverStatus: "coverStatus"})
      // }
      // else if(projectRef === "p7"){
      //   console.log("projectRed", projectRef);
      //   this.setState({coverStatus: "coverStatus"})
      // }
      // else if(projectRef === "p8"){
      //   console.log("projectRed", projectRef);
      //   this.setState({coverStatus: "coverStatus"})
      // }
      // else if(projectRef === "p9"){
      //   console.log("projectRed", projectRef);
      //   this.setState({coverStatus: "coverStatus"})
      // }
      // else if(projectRef === "p10"){
      //   console.log("projectRed", projectRef);
      //   this.setState({coverStatusP10: "coverStatusP10"})
      // }
      // else if(projectRef === "p11"){
      //   console.log("projectRed", projectRef);
      //   this.setState({coverStatusP11: "coverStatusP11"})
      // }
  }

mouseOut(projectRef){
  console.log("out");

  const projectContainer = projectRef + 'Container'
    const titleContainer = projectRef + 'titleContainer'
    const titleStatus =  "titleStatus" + projectRef
    // var obj = {};
    var obj = {projectTitleStatusState: 'hidden'};

  obj[titleContainer] = 'animated fadeOut'
  obj[projectRef] = "coverStatus";
    obj[projectContainer] = 'coverContainerNoHover'
    obj[titleStatus]  = ''

  this.setState(obj)
  console.log(projectRef);
}

// updateWindowDimensions() {
//   // console.log(window.innerWidth);
//   // console.log(window.innerHeight);
//   console.log(document.body.scrollTop);
//
// // console.log(document.body.scrollHeight);
//   // if(window.innerHeight != 2000){
//   //   componentDidUpdate()
//   // }
// }
//
//
// componentDidMount() {
//   console.log("hiiiii");
//   this.updateWindowDimensions();
//   // window.addEventListener('resize', this.updateWindowDimensions);
//     window.addEventListener('scroll', this.updateWindowDimensions);
// }
//
// componentWillUnmount() {
//   window.removeEventListener('resize', this.updateWindowDimensions);
//   window.removeEventListener('scroll', this.updateWindowDimensions);
// }

// eval("const" + projectRef + "= {opacity: 0.5, margin: 0 auto, padding: 12px, width: 250px}");

  render(){



// console.log(document.body.scrollHeight);
    // console.log("in work", ProjectInfo);
    // console.log("testooo", JSON.stringify(obj));
// console.log(this.state.coverStatus);

//idea: give the viewer the options to see the slides for ID stuff or CS

    //
    const coverStyling = {
    //   opacity: this.state.coverOpacity,
    // // border: 'solid pink 5px',
    //   margin: '0 auto',
    //   padding: '12px',
    //   // paddingTop: '12px',
    //   width: '250px'
      // width: this.state.coverSize
      // opacity: 0.5, margin: 0 auto, padding: 12px, width: 250px
    }


const coverStylingP10 = {
  visibility: this.state.titleTest
}





    const coverStylingMedium = {
      opacity: this.state.coverOpacity,
    // border: 'solid pink 5px',
      margin: '0 auto',
      paddingTop: '40px',

      width: '120px'
      // width: this.state.coverSize
    }



    const workLoadingStatus = {
      visibility: this.state.pageStatus
    }

    const projectTitleStatus = {
      visibility: this.state.projectTitleStatusState
    }
    // const projectTitleStatus = {
    //   visibility: 'visible'
    // }

// const spinner = <div class="loader"></div>
//          <NavBar/>



//IIMPORT REARANGE THE COVERS ON BOTH MEDIA QUESRIES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//                      <div><img alt="reload" style={coverStyling} ref="p3" className={'coverStatus'} onMouseOut={this.mouseOut.bind(this)} onMouseOver={this.projectHover.bind(this, 'p3')} onClick={this.project.bind(this,"p3")} src={cover3}></img><div className="projDescription"></div></div>
//className={'coverStatus'}
//coverStyling
//          <MediaQuery query='(min-device-width: 700px)' className={"MediaQuery" + ' ' + this.state.coverFadeIn}>

    return (
      <div>

        <div className={"pageWrapper" + ' ' + this.state.workFadeOut}>
          <div className="projectsWrapper">
            <div className="coverContainer">
                  <MediaQuery query='(min-device-width: 700px)' className={"MediaQuery" + ' ' + this.state.coverFadeIn} style={workLoadingStatus}>

<div className="coverWrapper" onMouseOut={this.mouseOut.bind(this, 'p10')} onMouseOver={this.projectHover.bind(this, 'p10')}>
  <div className={this.state.p10Container}><div className="titleWrapper" onClick={this.project.bind(this,"p10")} ><div className={"titleContainer" + ' ' + this.state.p10titleContainer + ' ' + this.state.titleStatusp10} ><h1 className="hoverTitle">soft chair</h1></div></div><img alt="reload" style={coverStyling} ref="p10" className={this.state.p10}  src={cover10}></img><div></div></div>
</div>

<div className="coverWrapper" onMouseOut={this.mouseOut.bind(this, 'p11')} onMouseOver={this.projectHover.bind(this, 'p11')}>
  <div className={this.state.p11Container}><div className="titleWrapper" onClick={this.project.bind(this,"p11")}><div className={"titleContainer" + ' ' + this.state.p11titleContainer + ' ' + this.state.titleStatusp11} ><h1 className="hoverTitle">rigit chair</h1></div></div><img alt="reload" style={coverStyling} ref="p11" className={this.state.p11}   src={cover11}></img><div className="projDescription"></div></div>
</div>

<div className="coverWrapper" onMouseOut={this.mouseOut.bind(this, 'p9')} onMouseOver={this.projectHover.bind(this, 'p9')}>
  <div className={this.state.p9Container}><div className="titleWrapper"  onClick={this.project.bind(this,"p9")} ><div className={"titleContainer" + ' ' + this.state.p9titleContainer + ' ' + this.state.titleStatusp9}><h1 className="hoverTitle">CSP motorbike</h1></div></div><img alt="reload" style={coverStyling} ref="p9" className={this.state.p9} src={cover9}></img><div className="projDescription"></div></div>
</div>





<div className="coverWrapper" onMouseOut={this.mouseOut.bind(this, 'p1')} onMouseOver={this.projectHover.bind(this, 'p1')}>
  <div className={this.state.p1Container}><div className="titleWrapper" onClick={this.project.bind(this,"p1")}><div className={"titleContainer" + ' ' + this.state.p1titleContainer + ' ' + this.state.titleStatusp1}><h1 className="hoverTitle">teak bench</h1></div></div><img alt="reload" style={coverStyling} ref="p1" className={this.state.p1}   src={cover1}></img><div className="projDescription"></div></div>
</div>


<div className="coverWrapper" onMouseOut={this.mouseOut.bind(this, 'p2')} onMouseOver={this.projectHover.bind(this, 'p2')}>
  <div className={this.state.p2Container}><div className="titleWrapper" onClick={this.project.bind(this,"p2")} ><div className={"titleContainer" + ' ' + this.state.p2titleContainer + ' ' + this.state.titleStatusp2}><h1 className="hoverTitle">cartò</h1></div></div><img alt="reload" style={coverStyling} ref="p2" className={this.state.p2}  src={cover2}></img><div className="projDescription"></div></div>
</div>



<div className="coverWrapper" onMouseOut={this.mouseOut.bind(this, 'p7')} onMouseOver={this.projectHover.bind(this, 'p7')}>
  <div className={this.state.p7Container}><div className="titleWrapper" onClick={this.project.bind(this,"p7")} ><div className={"titleContainer" + ' ' + this.state.p7titleContainer + ' ' + this.state.titleStatusp7}><h1 className="hoverTitle">enno</h1></div></div><img alt="reload" style={coverStyling} ref="p7" className={this.state.p7}  src={cover7}></img><div className="projDescription"></div></div>
</div>



<div className="coverWrapper"  onMouseOut={this.mouseOut.bind(this, 'p6')} onMouseOver={this.projectHover.bind(this, 'p6')}>
  <div className={this.state.p6Container}><div className="titleWrapper" onClick={this.project.bind(this,"p6")} ><div className={"titleContainer" + ' ' + this.state.p6titleContainer + ' ' + this.state.titleStatusp6}><h1 className="hoverTitle">bobo</h1></div></div><img alt="reload" style={coverStyling} ref="p6" className={this.state.p6} src={cover6}></img><div className="projDescription"></div></div>
</div>




<div className="coverWrapper" onMouseOut={this.mouseOut.bind(this, 'p8')} onMouseOver={this.projectHover.bind(this, 'p8')}>
  <div className={this.state.p8Container}><div className="titleWrapper" onClick={this.project.bind(this,"p8")} ><div className={"titleContainer" + ' ' + this.state.p8titleContainer + ' ' + this.state.titleStatusp8}><h1 className="hoverTitle">ride on</h1></div></div><img alt="reload"  ref="p8" className={this.state.p8}  src={cover8}></img><div className="projDescription"></div></div>
</div>

<div className="coverWrapper" onMouseOut={this.mouseOut.bind(this, 'p4')} onMouseOver={this.projectHover.bind(this, 'p4')}>
  <div className={this.state.p4Container}><div className="titleWrapper" onClick={this.project.bind(this,"p4")} ><div className={"titleContainer" + ' ' + this.state.p4titleContainer + ' ' + this.state.titleStatusp4}><h1 className="hoverTitle">fine arts</h1></div></div><img alt="reload"  ref="p4" className={this.state.p4} src={cover4}></img><div className="projDescription"></div></div>
</div>

<div className="coverWrapper" onMouseOut={this.mouseOut.bind(this, 'p5')} onMouseOver={this.projectHover.bind(this, 'p5')}>
  <div className={this.state.p5Container}><div className="titleWrapper" onClick={this.project.bind(this,"p5")}> <div className={"titleContainer" + ' ' + this.state.p5titleContainer + ' ' + this.state.titleStatusp5}><h1 className="hoverTitle">processing on paper</h1></div></div><img alt="reload" style={coverStyling} ref="p5" className={this.state.p5}  src={cover5}></img><div className="projDescription"></div></div>
</div>
                  </MediaQuery>
<h1 className="underConstruction">site is still under construciton</h1>


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
