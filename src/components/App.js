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
    componentCounter: 0
  }
}

handleImageLoaded(event){


  // console.log("In APP page loaded");

 // this.setState({loadingStatus: this.state.loadingStatus + 1})

  document.addEventListener("DOMContentLoaded", function(event) {
console.log("DOM fully loaded and parsed");
console.log(event);
});


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
