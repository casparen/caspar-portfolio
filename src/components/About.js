import React, {Component} from 'react';
// import NavBar from './NavBar';
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
                horizontal: true,
                swipe: true,
                factor: 0.3,
                loop: true,
                scrollStatus: true,
                currentPosition: 0,
                slideShowStatus:'',
                socialStatus: '',
                aboutFadeIn: ''
  };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}


componentDidUpdate(){

  const cc = this
  setTimeout(function(){
  cc.setState({aboutFadeIn: 'animated fadeIn'})
  // console.log("fade innnn");
}, 3000);
}

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
      if (scrollPosition > 650){
        console.log("now fade in");
        this.setState({slideShowStatus:'animated fadeInUp'})
      }

      if (scrollPosition > 1100){
        console.log("now fade in");
        this.setState({socialStatus:'animated fadeInUp'})
      }
      // else {
      //   this.setState({slideShowStatus: ''})
      // }

}


componentDidMount() {
  console.log("hiiiii");
  this.updateWindowDimensions();
  // window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
  window.removeEventListener('scroll', this.updateWindowDimensions);
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


    //PUL IMAGEA FROM MY ACTUAL INSTAGRAM AND SELCT RANDOM ONNESSSSSSSSSS!!!!!!!!
    //animate it so it keeps changing while lookng at the screen

    return (
      <div >
        <MediaQuery query='(min-device-width: 700px)' className="MediaQueryAbout">

          <div className="wrapper">
              <img className={"profileCss" + ' ' + this.state.aboutFadeIn} alt="reload" src={profile}></img>
              <div className="infoWrapper">
                <div id='infoContainer' style={fadeInAbout}>
                    <p id="about">caspar <span id="enno">enno</span> nagel is a German industrial designer currently attending the Rhode Island School of Design. Caspar specializes in product and furniture design, bringing a minimalist yet playful attitude to his design practice. Combining traditional craftsmanship with modern computer based modeling techniques, he is able to create unique products that are not void of the human touch. With a constantly growing knowledge base, he is delving into the world of hardware tech, developing skills in arduino and coding. He seeks to create products that can impact people on both a local and global scale with his design language constantly developing towards the tech of the future while maintaining traditional methodologies.</p>
                </div>
              </div>

                  <div className={"slideShowWrapper" + ' ' + this.state.slideShowStatus}>
                      <div className="slideShow">
                        <img  className="slideShowPic" alt="reload" src={slide1}></img>
                        <img  className="slideShowPic" alt="reload" src={slide2}></img>
                        <img  className="slideShowPic" alt="reload" src={slide3}></img>
                        <img  className="slideShowPic" alt="reload" src={slide4}></img>
                        <img  className="slideShowPic" alt="reload" src={slide5}></img>
                        <img  className="slideShowPic" alt="reload" src={slide6}></img>
                        <img  className="slideShowPic" alt="reload" src={slide7}></img>
                        <img  className="slideShowPic" alt="reload" src={slide8}></img>
                      </div>
                  </div>




            <div className={"socialContainer" + ' ' + this.state.socialStatus}>
                <a href="https://www.instagram.com/enno_nagel/" className="link hvr-bounce-in"><div href="#" className="fa fa-instagram circleAbout"></div></a>
                <a href="https://www.linkedin.com/in/casparnagel" className="link hvr-bounce-in"><div href="#" className="fa fa-linkedin circleAbout"></div></a>
                <a href="https://github.com/casparen" className="link hvr-bounce-in "><div href="#" className="fa fa-github"></div></a>
                <a href="mailto:casparen@me.com" className="contact link hvr-bounce-in" id="email"><div href="#" className="fa fa-envelope circleAbout"></div></a>


            </div>
          </div>
        </MediaQuery>

        <MediaQuery query='(max-width: 700px)' className="MediaQueryAboutSmall">
          <div className="wrapper animated fadeIn">
              <img className="profileCssSmall" alt="reload" src={profile}></img>
                <div className="infoContainerSmall">
                <p id="about">caspar <span id="enno">enno</span> nagel is a German industrial designer currently attending the Rhode Island School of Design. Caspar specializes in product and furniture design, bringing a minimalist yet playful attitude to his design practice. Combining traditional craftsmanship with modern computer based modeling techniques, he is able to create unique products that are not void of the human touch. With a constantly growing knowledge base, he is delving into the world of hardware tech, developing skills in arduino and coding. He seeks to create products that can impact people on both a local and global scale with his design language constantly developing towards the tech of the future while maintaining traditional methodologies.</p>
                </div>


                <div className="slideShowSmall">
                  <img  className="slideShowPicSmall" alt="reload" src={slide1}></img>
                  <img  className="slideShowPicSmall" alt="reload" src={slide2}></img>
                  <img  className="slideShowPicSmall" alt="reload" src={slide3}></img>
                  <img  className="slideShowPicSmall" alt="reload" src={slide4}></img>
                  <img  className="slideShowPicSmall" alt="reload" src={slide5}></img>
                  <img  className="slideShowPicSmall" alt="reload" src={slide6}></img>
                  <img  className="slideShowPicSmall" alt="reload" src={slide7}></img>
                  <img  className="slideShowPicSmall" alt="reload" src={slide8}></img>
                </div>

                <div className="socialContainerSmall">
                    <a href="https://www.instagram.com/enno_nagel/" className="linkSmall hvr-bounce-in"><div href="#" className="fa fa-instagram circleAbout" style={iconSmall}></div></a>
                    <a href="https://www.linkedin.com/in/casparnagel" className="linkSmall hvr-bounce-in"><div href="#" className="fa fa-linkedin circleAbout"></div></a>
                    <a href="https://github.com/casparen" className="linkSmall hvr-bounce-in"><div href="#" className="fa fa-github circleAbout"></div></a>
                    <a href="mailto:casparen@me.com" className="contact linkSmall hvr-bounce-in" id="email"><div href="#" className="fa fa-envelope circleAbout"></div></a>


                </div>
          </div>
        </MediaQuery>










      </div>
    )
  }
}





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
