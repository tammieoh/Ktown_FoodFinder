import React, { Component } from "react";
import './Favorites.css';
import {withRouter} from "react-router";
import queryString from 'query-string'

class Favorites extends Component {
    constructor() {
        super();
        this.state = {
            restaurants: [],
            hasFavorites: false,
            // username: ""
        }
        this._homeClicked = this._homeClicked.bind(this)

    }
    componentDidMount() {
        const queryString = require('query-string');
        const parsed = queryString.parse(this.props.location.search);
        console.log(parsed.username);
        // this.setState({
        //     username: username
        // })
        // const username = this.props.location.search;
        
        // console.log(username);
        // console.log(`http://localhost:5000/choices${choices}`);

        fetch(`http://localhost:5000/favorites/username?username=${parsed.username}`)
        .then(response => {
            // console.log(response.status);
            if (!response.ok){
                    // this.setState({
                    //         countryStar
                    // })
                    
                    throw new Error("Network response was not ok.");
            }
            return response.json();
        })
         .then(data => {
            console.log(data);
            if(data.length !== 0) {
            // console.log(data)
                let i = 0
                for(i = 0; i < data.length; i++) {
                    this.setState({
                        hasFavorites: true,
                        restaurants: this.state.restaurants.concat(data[i])
                    })
                }
            }
            console.log(this.state.hasFavorites);
            console.log(this.state.restaurants);
            // return this.state.restaurants;
            // console.log(Object.prototype.toString.call(this.state.restaurants));
            // console.log(this.state.restaurants);
        })
    }
    _homeClicked(event) {
        window.location.href = `/`;
    }
    render() {
        return(
            <div>
                <h1>Favorites</h1>
                <button onClick={this._homeClicked}>Home</button>
                {this.state.hasFavorites ? this.state.restaurants.map((restaurant) => <div key={restaurant.restaurant_name}>
                    <h2>{restaurant.restaurant_name}</h2>
                    <img src={restaurant.images} alt={restaurant.restaurant_name}></img>
                </div>)
                 : <h2>No favorites added</h2>}
            </div>
        );
    }
}
export default withRouter(Favorites);