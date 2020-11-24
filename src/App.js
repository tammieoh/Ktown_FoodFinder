import React, { Component } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';
import Home from "./components/Home/Home";
import Finder from "./components/Finder/Finder";
import Restaurants from "./components/Restaurants/Restaurants";
import Favorites from "./components/Favorites/Favorites";

class App extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <Router>    
        {/* <Link 
          to={{ 
          pathname: '/restaurants/', 
          state: {
              restaurants: this.state.restaurants
          } 
        }}/> {''} */}
      <Switch>
        {/* Routes for Home page and Results */}
        <Route exact path="/"><Home /></Route>
        <Route exact path="/finder"><Finder /></Route>
        <Route exact path="/choices"><Restaurants /></Route>
        <Route exact path="/favorites/username"><Favorites /></Route>
      </Switch>
      </Router>
    );
  }
}

export default App;
