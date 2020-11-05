import React from 'react';
import './App.css';
import Nav from './components/nav/nav'
import Login from './components/login/login';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';

function App(){ 
    return(
      <Router>
      <div className="App"> 
            <Nav/>
            <Switch>
            <Route path="/" exact component={New}/>
            <Route path="/login" component={Login}/>
            <Route path="/home" component={Home}/>
            <Route path="/profile" component={Profile}/>
            </Switch>
            
      </div>
      </Router>
    )
}
const New=()=>{
  return(
<div>
    <h1>WELCOME TO BARE FOOT NOMADE</h1>
  </div>
  )
  

}



export default App;
