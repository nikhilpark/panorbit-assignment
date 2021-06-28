import React from "react";
import { Route, Switch} from "react-router-dom";
import  {Profile}   from "./components/Profile/Profile";
import Posts from "./components/Posts/Posts"
import Gallery from "./components/Gallery/Gallery";
import ToDo from "./components/ToDo/ToDo";

function Routes () {
    return(
      
       
        <Switch>
        <Route path="/profile/:username" exact  component = {Profile}/>
        <Route path="/posts/:username" exact  component = {Posts}/>
        <Route path="/Gallery/:username" exact  component = {Gallery}/>
        <Route path="/ToDo/:username" exact  component = {ToDo}/>
        </Switch> 
   
     
    )
}

export default Routes; 