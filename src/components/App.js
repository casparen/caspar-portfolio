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
    loadingStatus: ''
  }
}

handleImageLoaded(){
  console.log("page loaded");
  this.setState({loadingStatus: 'loaded'})
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
