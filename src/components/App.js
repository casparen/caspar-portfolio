import React, { Component } from 'react';
// import logo from './logo.svg';
import '../styling/App.css';


// import { Link } from 'react-router';



export default class App extends Component {
constructor(){
  super();
  this.state = {
  }
}



  render() {

    return (
      <div className="App">
           {this.props.children}
      </div>
    );
  }
}
