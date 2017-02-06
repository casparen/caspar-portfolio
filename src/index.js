import React from 'react';
import { browserHistory, Route, Router } from 'react-router';
import ReactDOM from 'react-dom';

//Styles
import './styling/index.css';

//Components
import App from './components/App.js';
import About from './components/About.js'
import Coverpage from './components/Coverpage.js'
import Work from './components/Work.js'
import Project from './components/Project.js'



ReactDOM.render(
<Router history={browserHistory}>
  <Route path="/" component={App}>
    <Route path='/coverpage' component={Coverpage} />
    <Route path="/about" component={About}/>
    <Route path="/work" component={Work} />
    <Route path='/work/:project' component={Project} />


  </Route>
</Router>
, document.getElementById('root')
);


//    <Route path="/TeakBench" component={TeakBench} />
// <Route path='/Carto' component={Carto} />
// <Route path='/gormleyTransposition' component={GormleyTransposition} />
// <Route path='/processingPaper' component={ProcessingPaper} />
