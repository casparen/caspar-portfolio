import React, {Component} from 'react';
import NavBar from './NavBar';
import '../styling/About.css'
import profile from '../GD/profile.png'
// import { browserHistory } from 'react-router';


//Blog photos
import slide1 from '../GD/aboutSlideShow/1.png'
import slide2 from '../GD/aboutSlideShow/2.png'
import slide3 from '../GD/aboutSlideShow/3.png'
import slide4 from '../GD/aboutSlideShow/4.png'
import slide5 from '../GD/aboutSlideShow/5.png'
import slide6 from '../GD/aboutSlideShow/6.png'
import slide7 from '../GD/aboutSlideShow/7.png'
import slide8 from '../GD/aboutSlideShow/8.png'


//Plug ins
import  MediaQuery from 'react-responsive';
// import Deck from 'react-slide-deck';
// import ScrollEffect from 'react-scroll-effects';
// import ScrollAnimation from 'react-animate-on-scroll';




export default class About extends Component {
  constructor(props) {
  super(props);
  this.state = {current: 0,
                spinnerStatus: 'logoImg',
                pageStatus: 'hidden',
                horizontal: true,
                aboutFadeOut: '',
                aboutFadeOutAll: '',
                swipe: true,
                factor: 0.3,
                loop: true,
                scrollStatus: true,
                currentPosition: 0,
                slideShowStatus:'',
                socialStatus: '',
                aboutFadeIn: '',
                slideShowVisibility: 'hidden',
                socialVisibility: 'visible',
                device: "",

                MediaQueryAbout: 'MediaQueryAbout',
                profileCss: 'profileCss',
                infoContainer: 'infoContainer',
                infoWrapper: "infoWrapper",
                slideShowWrapper: "slideShowWrapper",
                slideShowPic: "slideShowPic",
                socialContainer: "socialContainer"

  };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentWillMount(){
  const winWidth = window.innerWidth
  const winHeight = window.innerHeight

  console.log("initial inner width",winWidth);
  console.log("initial inner height",winHeight);

  if(winWidth > 430){
    console.log("initial, make laptopsize size");
    this.setState({device: "laptop", MediaQueryAbout: "MediaQueryAbout", profileCss: "profileCss", infoContainer: "infoContainer", infoWrapper: "infoWrapper", slideShowWrapper: "slideShowWrapper", slideShowPic: "slideShowPic", socialContainer: "socialContainer"})
    // this.setState({device: "laptop"})

  }
  // else if(winWidth > 1500){
  //   console.log("initial, make laptopsize size");
  //   this.setState({device: "laptop", coverWrapper: "coverWrapper"})
  //   // this.setState({device: "laptop"})
  //
  // }

  else {
    console.log("initial, make iphone size");
    this.setState({device: "iphone", MediaQueryAbout: "MediaQueryAboutSmall", profileCss: "profileCssSmall", infoContainer: "infoContainerSmall", infoWrapper: "infoWrapperSmall", slideShowWrapper: "slideShowWrapperSmall", slideShowPic:"slideShowPicSmall", socialContainer: "socialContainerSmall"})


  }
}

// componentDidUpdate(){
//
//   const cc = this
//   setTimeout(function(){
//   cc.setState({aboutFadeIn: 'animated fadeIn'})
//   // console.log("fade innnn");
// }, 1500);
// }

// change(event) {
//   let target = event.target;
//   let index = Array.prototype.indexOf.call(target.parentElement.children, target);
//
//   this.setState({
//     current: index
//   });
// }
// onSwitchStarted({prev: current, current: next}) {
//   console.log(`started to switch from ${current} to ${next}`);
// }
// onSwitching(progress, deck) {
//   console.log(`switching on progress.`);
//   console.log(progress, deck.state.distance);
// }
// onSwitchDone({prev, current}) {
//   console.log(`switch finished, current slide index: ${current}`);
// }
updateWindowDimensions() {
    const scrollPosition = window.scrollY
    const scrollPositionDivided = scrollPosition / 800
      this.setState({currentPosition: scrollPositionDivided})

      console.log('scroll position', scrollPosition);

      if(this.state.device === "laptop"){
        if (scrollPosition >= 20){
          this.setState({arrowState: "animated fadeOut"})
        }

        if (scrollPosition > 650){
          console.log("now fade in");
          this.setState({slideShowStatus:'animated fadeIn', slideShowVisibility: 'visible'})
        }

        if (scrollPosition > 651){
          console.log("now fade in");
        //  this.setState({socialStatus:'animated fadeIn', socialVisibility: 'visible'})
            this.setState({socialStatus:'', socialVisibility: 'visible'})
        }
      }

      else {
        if (scrollPosition >= 20){
          this.setState({arrowState: "animated fadeOut"})
        }

        if (scrollPosition > 450){
          console.log("now fade in");
          this.setState({slideShowStatus:'animated fadeIn', slideShowVisibility: 'visible'})
        }

        if (scrollPosition > 740){
          console.log("now fade in");
          // this.setState({socialStatus:'animated fadeIn', socialVisibility: 'visible'})
            this.setState({socialStatus:'', socialVisibility: 'visible'})
        }
      }


      // else {
      //   this.setState({slideShowStatus: ''})
      // }

}


componentDidMount() {
  // console.log("about mounting, and spinner will be activated");
  // this.setState({spinnerStatus:'logoImgSpinning'})
  this.updateWindowDimensions();
  // window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.updateWindowDimensions);

    const cc = this
    // setTimeout(function(){
    cc.setState({spinnerStatus:'logoImg', aboutFadeIn: 'animated fadeIn', pageStatus: 'visible'})
    // console.log("spinner will be deactivated");
  // }, 700);
}



componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
  window.removeEventListener('scroll', this.updateWindowDimensions);
}

navStatus(status) {

  if(status === 'logo'){
console.log("logooooooo");
    // console.log(status);
    console.log("slide down now");
    this.setState({aboutFadeOutAll: 'animated fadeOut'})
  }

  else if(status === 'work'){
    console.log("workkkkkkk");
    this.setState({aboutFadeOut: 'animated fadeOut'})
// console.log(status);
    // console.log("slide down now");
    // this.setState({workFadeOutAll: 'animated fadeOut'})
  }
}






  render(){
    // const currentSlide = {
    //   backgroundColor: "pink",
    //   width: "100%"
    // }


//     const slideClasses = {
//   current: this.currentSlide, // will be concat to className for current slide when it finished entering
//   // entering: styles.currentSlideEntering, // will be concat to className for current slide during its entering
//   // prev: styles.prevSlide, // ...
//   // leaving: styles.prevSlideLeaving, //...
//   // before: styles.before, //
//   // after: styles.after //
// };




// <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'  duration={1.5}  className="profileContainer">
//   <img className="profileCss" alt="reload" src={profile}></img>
// </ScrollAnimation>
//
//
//
// <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'  duration={1} >
//   <p id="about">caspar <span id="enno">enno</span> nagel is a German industrial designer currently attending the Rhode Island School of Design. Caspar specializes in product and furniture design, bringing a minimalist yet playful attitude to his design practice. Combining traditional craftsmanship with modern computer based modeling techniques, he is able to create unique products that are not void of the human touch. With a constantly growing knowledge base, he is delving into the world of hardware tech, developing skills in arduino and coding. He seeks to create products that can impact people on both a local and global scale with his design language constantly developing towards the tech of the future while maintaining traditional methodologies.</p>
// </ScrollAnimation>

// <div className="blogTitleContainer">
//     <h1>Whats happening?</h1>
// </div>

//              <ScrollAnimation animateIn='fadeInLeft' animateOut='fadeOut'  duration={1.2} >

const fadeInAbout = {
  // transform: 'translate(' +  this.state.scrollStatus + 'px' + ', 0px)'
  opacity: this.state.currentPosition
}

//                <div id='infoContainer' className={this.state.scrollStatus} style={fadeLeft}>

// console.log(fadeLeft.transform);
    const iconSmall = {
      fontSize: "24px"
    }

    const pageLoadingStatus = {
      visibility: this.state.pageStatus
    }


  const  socialStyle = {
    visibility: this.state.socialVisibility
  }
  const slideShowStyle = {
    visibility: this.state.slideShowVisibility
  }


    //PUL IMAGEA FROM MY ACTUAL INSTAGRAM AND SELCT RANDOM ONNESSSSSSSSSS!!!!!!!!
    //animate it so it keeps changing while lookng at the screen

    return (
      <div className={this.state.aboutFadeOutAll}>
        <NavBar loaderStatus={this.state.spinnerStatus} navLogoStatus={this.navStatus.bind(this)}/>

        <div className={this.state.MediaQueryAbout + ' ' + this.state.aboutFadeOut} style={pageLoadingStatus}>

          <div className="wrapper">
            <div className="imageContainer">
              <img className={this.state.profileCss + ' ' + this.state.aboutFadeIn} alt="reload" src={profile}></img>
              <div className={"fa fa-angle-down arrow" + ' ' + this.state.arrowState}></div>
            </div>

          <div className={this.state.infoWrapper}>
                <div id={this.state.infoContainer} style={fadeInAbout}>
                    <p id="about">caspar <span id="enno">enno</span> nagel is a German industrial designer currently attending the Rhode Island School of Design. Caspar specializes in product and furniture design, bringing a minimalist yet playful attitude to his design practice. Combining traditional craftsmanship with modern computer based modeling techniques, he is able to create unique products that are not void of the human touch. With a constantly growing knowledge base, he is delving into the world of hardware tech, developing skills in arduino and coding. He seeks to create products that can impact people on both a local and global scale with his design language constantly developing towards the tech of the future while maintaining traditional methodologies.</p>
                </div>
              </div>






            <div className={this.state.socialContainer + ' ' + this.state.socialStatus} style={socialStyle}>
                <a href="https://www.instagram.com/enno_nagel/" className="link hvr-bounce-in"><div href="#" className="fa fa-instagram circleAbout"></div></a>
                <a href="https://www.linkedin.com/in/casparnagel" className="link hvr-bounce-in"><div href="#" className="fa fa-linkedin circleAbout"></div></a>
                <a href="https://github.com/casparen" className="link hvr-bounce-in "><div href="#" className="fa fa-github"></div></a>
                <a href="mailto:casparen@me.com" className="contact link hvr-bounce-in" id="email"><div href="#" className="fa fa-envelope circleAbout"></div></a>


            </div>
          </div>
        </div>
      </div>
    )
  }
}



// <div className={this.state.slideShowWrapper + ' ' + this.state.slideShowStatus} style={slideShowStyle}>
//     <div className="slideShow">
//       <img  className={this.state.slideShowPic} alt="reload" src={slide1}></img>
//       <img  className={this.state.slideShowPic} alt="reload" src={slide2}></img>
//       <img  className={this.state.slideShowPic} alt="reload" src={slide3}></img>
//       <img  className={this.state.slideShowPic} alt="reload" src={slide4}></img>
//       <img  className={this.state.slideShowPic} alt="reload" src={slide5}></img>
//       <img  className={this.state.slideShowPic} alt="reload" src={slide6}></img>
//       <img  className={this.state.slideShowPic} alt="reload" src={slide7}></img>
//       <img  className={this.state.slideShowPic} alt="reload" src={slide8}></img>
//     </div>
// </div>























// <MediaQuery query='(max-width: 700px)' className="MediaQueryAboutSmall">
//   <div className="wrapper animated fadeIn">
//       <img className="profileCssSmall" alt="reload" src={profile}></img>
//         <div className="infoContainerSmall">
//         <p id="about">caspar <span id="enno">enno</span> nagel is a German industrial designer currently attending the Rhode Island School of Design. Caspar specializes in product and furniture design, bringing a minimalist yet playful attitude to his design practice. Combining traditional craftsmanship with modern computer based modeling techniques, he is able to create unique products that are not void of the human touch. With a constantly growing knowledge base, he is delving into the world of hardware tech, developing skills in arduino and coding. He seeks to create products that can impact people on both a local and global scale with his design language constantly developing towards the tech of the future while maintaining traditional methodologies.</p>
//         </div>
//
//
//         <div className="slideShowSmall">
//           <img  className="slideShowPicSmall" alt="reload" src={slide1}></img>
//           <img  className="slideShowPicSmall" alt="reload" src={slide2}></img>
//           <img  className="slideShowPicSmall" alt="reload" src={slide3}></img>
//           <img  className="slideShowPicSmall" alt="reload" src={slide4}></img>
//           <img  className="slideShowPicSmall" alt="reload" src={slide5}></img>
//           <img  className="slideShowPicSmall" alt="reload" src={slide6}></img>
//           <img  className="slideShowPicSmall" alt="reload" src={slide7}></img>
//           <img  className="slideShowPicSmall" alt="reload" src={slide8}></img>
//         </div>
//
//         <div className="socialContainerSmall">
//             <a href="https://www.instagram.com/enno_nagel/" className="linkSmall hvr-bounce-in"><div href="#" className="fa fa-instagram circleAbout" style={iconSmall}></div></a>
//             <a href="https://www.linkedin.com/in/casparnagel" className="linkSmall hvr-bounce-in"><div href="#" className="fa fa-linkedin circleAbout"></div></a>
//             <a href="https://github.com/casparen" className="linkSmall hvr-bounce-in"><div href="#" className="fa fa-github circleAbout"></div></a>
//             <a href="mailto:casparen@me.com" className="contact linkSmall hvr-bounce-in" id="email"><div href="#" className="fa fa-envelope circleAbout"></div></a>
//
//
//         </div>
//   </div>
// </MediaQuery>

















//test











// with fade
// <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'  duration={2} offset="180">
//   <div className="slideShow">
//     <img  className="slideShowPic" alt="reload" src={slide1}></img>
//     <img  className="slideShowPic" alt="reload" src={slide2}></img>
//     <img  className="slideShowPic" alt="reload" src={slide3}></img>
//     <img  className="slideShowPic" alt="reload" src={slide4}></img>
//     <img  className="slideShowPic" alt="reload" src={slide5}></img>
//     <img  className="slideShowPic" alt="reload" src={slide6}></img>
//     <img  className="slideShowPic" alt="reload" src={slide7}></img>
//     <img  className="slideShowPic" alt="reload" src={slide8}></img>
//   </div>
//
// </ScrollAnimation>


            // <MediaQuery query='(min-device-width: 700px)' className="MediaQueryAbout">
            //   <div className="infoContainer">
            //   <p id="about">caspar <span id="enno">enno</span> nagel is a German industrial designer currently attending the Rhode Island School of Design. Caspar specializes in product and furniture design, bringing a minimalist yet playful attitude to his design practice. Combining traditional craftsmanship with modern computer based modeling techniques, he is able to create unique products that are not void of the human touch. With a constantly growing knowledge base, he is delving into the world of hardware tech, developing skills in arduino and coding. He seeks to create products that can impact people on both a local and global scale with his design language constantly developing towards the tech of the future while maintaining traditional methodologies.</p>
            //     <div className="contactContainer">
            //       <a href="mailto:casparen@me.com" className="contact" id="email">casparen@me.com</a>
            //       <a href="https://github.com/casparen" className="contact" id="github">github</a>
            //     </div>
            //   </div>
            //   <img className="profileCss" alt="reload" src={profile}></img>
            // </MediaQuery>
            //
            // <MediaQuery query='(max-width: 700px)' className="MediaQueryAbout">
            //       <div className="infoContainerSmall">
            //           <p id="aboutSmall">caspar <span id="ennoSmall">enno</span> nagel is a German industrial designer currently attending the Rhode Island School of Design. Caspar specializes in product and furniture design, bringing a minimalist yet playful attitude to his design practice. Combining traditional craftsmanship with modern computer based modeling techniques, he is able to create unique products that are not void of the human touch. With a constantly growing knowledge base, he is delving into the world of hardware tech, developing skills in arduino and coding. He seeks to create products that can impact people on both a local and global scale with his design language constantly developing towards the tech of the future while maintaining traditional methodologies.</p>
            //             <div className="contactContainer">
            //               <a href="mailto:casparen@me.com" className="contact" id="email">casparen@me.com</a>
            //               <a href="https://github.com/casparen" className="contact" id="github">github</a>
            //             </div>
            //       </div>
            //     <img className="profileCssSmall" alt="reload" src={profile}></img>
            // </MediaQuery>






//        <h1 className="animated fadeInLeft">Example</h1>

//https://github.com/casparen
//        <p id="name">caspar enno nagel</p>

//          <p className="contact" id="number">(631)8006170</p><br></br>
//          <p id="more">MORE</p>


//Caspar Enno Nagel is a German industrial designer currently attending the Rhode Island School of Design. Caspar specializes in product and furniture design, bringing a minimalist yet playful attitude to his design practice. Combining traditional craftsmanship with modern computer based modeling techniques, he is able to create unique products that are not void of the human touch. With a constantly growing knowledge base, he is delving into the world of hardware tech, developing skills in arduino and coding. He seeks to create products that can impact people on both a local and global scale with his design language constantly developing towards the tech of the future while maintaining traditional methodologies.
