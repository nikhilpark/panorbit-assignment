import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage"
import SideBar from './components/SideBar/SideBar';
import  Profile  from './components/Profile/Profile';
import Layout from './Layout';

function App() {
  return (

  <Router>
    <Switch>
      <Route path="/" exact component = {LandingPage}/>
      <Layout/>
    </Switch>
  </Router>

  );
}

export default App;
