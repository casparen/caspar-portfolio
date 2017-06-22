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
    loadingStatus: 0,
    componentCounter: 0,
    counter1: 0,
    counter2: 0
  }
}

handleImageLoaded(event){


  // console.log("In APP page loaded");

 this.setState({loadingStatus: this.state.loadingStatus + 1})
 // this.setState({counter1: this.state.counter1 + 1})
 // if (this.state.counter2 != this.state.counter1){
 //    this.setState({counter2: this.state.counter2 + 1})
 // }

 // console.log(this.state.counter1, this.state.counter2);

 return true
//
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

  render() {


    return (
      <div className="App">
        <NavBar props={this.state.loadingStatus} />
        <div onLoad={this.handleImageLoaded.bind(this)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
