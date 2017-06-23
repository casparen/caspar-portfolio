import React, { Component } from 'react';
import '../styling/App.css';
import NavBar from './NavBar'
// import { Link } from 'react-router';
// import Coverpage from './Coverpage.js'
// import logo from './logo.svg';



export default class App extends Component {
constructor(){
  super();
  this.state = {
    spinnerStatus: '',
    appRender: 'hidden'

  }
}

//once onload function is called, set to invisible, after 4 seconds set to visible again


// makeVisible(){
//       console.log("and now visible");
//       this.setState({appRender: 'hidden'})
// }
//
// makeInvisible(){
//   console.log("now make app invisible");
//   this.setState({appRender: 'visible'})
//
// }


// componentDidUpdate(prevProps, prevState, event) {
//   console.log(event);
//     const cc = this
// this.makeInvisible()
// // this.setState({appRender: 'hidden'})
//     setTimeout(function(){
//       cc.makeVisible()
//     // cc.setState({appRender: 'visible'})
//     // cc.stateReset()
//     }, 4000);
// }


      handleImageLoaded(){
      // console.log("hide Page");
        this.setState({appRender: 'hidden', spinnerStatus: 'logoImgSpinning'})
            const cc = this
            setTimeout(function(){
            cc.setState({appRender: 'visible',spinnerStatus: 'logoImg'})
            // console.log("show Page");

          }, 2000);
        // console.log("In APP page loaded");
      //  this.setState({loadingStatus: this.state.loadingStatus + 1})
       // this.setState({counter1: this.state.counter1 + 1})
       // if (this.state.counter2 != this.state.counter1){
       //    this.setState({counter2: this.state.counter2 + 1})
       // }
       // console.log(this.state.counter1, this.state.counter2);
      //   document.addEventListener("DOMContentLoaded", function(event) {
      // console.log("DOM fully loaded and parsed");
      // console.log(event);
      // console.log(event);
      //3 11 9
      // if(this.state.componentCounter > 7){
      //     console.log("IN apppp page loaded");
      // }

        // have the logog spining while loading
      }
//props={this.state.loadingStatus}
  render() {

    // console.log("window height", document.body.scrollHeight);

  const renderStatusApp = {
      visibility: this.state.appRender

    }


    return (
      <div className="App">
        <NavBar  props={this.state.spinnerStatus}/>
        <div style={renderStatusApp} onLoad={this.handleImageLoaded.bind(this)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
