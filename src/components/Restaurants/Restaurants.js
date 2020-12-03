import React, { Component } from "react";
import './Restaurants.css';
import {withRouter} from "react-router";
import { GoogleLogin } from 'react-google-login';
import Cookies from "js-cookie";


class Restaurants extends Component {
    constructor() {
        super();
        this.state = {
            restaurants: [],
            isChoices: false,
            isLogin: true,
            username: "",
            activeButton: ""
        }


        this._homeClicked = this._homeClicked.bind(this)
        this._favoriteClicked = this._favoriteClicked.bind(this)
        this._login = this._login.bind(this)
        this._getFavorites = this._getFavorites.bind(this)
    }
    async componentDidMount() {
        // const cookie = Cookies.get("token");
        // console.log(cookie);
        // console.log(this.props);
        const choices = this.props.location.search;
        
        // console.log(choices);
        // console.log(`http://localhost:5000/choices${choices}`);

        fetch(`http://localhost:5000/choices${choices}`)
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
                        isChoices: true,
                        restaurants: this.state.restaurants.concat(data[i])
                    })
                }
            }
            // return this.state.restaurants;
            // console.log(Object.prototype.toString.call(this.state.restaurants));
            // console.log(this.state.restaurants);
        })
        console.log(Cookies.get("token"));
        if(Cookies.get("username") !== undefined) {
            await fetch(`http://localhost:5000/verifyUser/token?token=${Cookies.get("token")}`)
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
            .then(result => {
                console.log(result[0].name);
                    this.setState({
                        isLogin: true,
                        username: result[0].name
                    })
                    // console.log(result.name);
                    console.log(this.state.username);
                    // console.log(result);
                // console.log(result + " has been added");
            })
        }

        console.log(this.state.username);
        console.log(Cookies.get("token"));
    }
    

    _homeClicked(event) {
        window.location.href = `/`;
    }
    _favoriteClicked(event, restaurant) {
        // console.log(event.target);
        const restaurantName = restaurant;
        console.log(restaurantName);

        const message = {
            restaurant: `${restaurantName}`
        }
        // console.log(JSON.stringify(message));
        const fetchOptions = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        };
        // hardcoded the URL link rn but change later
        fetch(`http://localhost:5000/favorites/username?username=${this.state.username}`, fetchOptions)
        .then(response => {
            // console.log(response.status);
            if (!response.ok){
                    // this.setState({
                    //         countryStar
                    // })
                    return alert("Network error. Result was not added.");
                    // throw new Error("Network response was not ok.");
                    
            }
            return response.json();
        })
        .then(result => {
            console.log(result + " has been added");
            alert(result + " has been added!");
        })
        // need the username
        // send the restaurant name through body
        
        // console.log("hi");
        // fetch(`http://localhost:5000/favorites/${restaurantName}`) 
    }
    _login(event) {
        const username = event.profileObj.email;
        const token = event.tokenObj.access_token;
        console.log(token);
        this.setState({
            login: true
        })
        // make a fetch call in here
        const message = {
            username: `${username}`,
            token: `${token}`
        }
        console.log(message);
        // console.log(JSON.stringify(message));
        const fetchOptions = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        };
        
        fetch(`http://localhost:5000/addUser`, fetchOptions)
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
        .then(result => {
                this.setState({
                    username: result
                })
                Cookies.set("username", this.state.username);
                Cookies.set("token", token);
            // console.log(result + " has been added");
        })
        // Cookies.
       console.log(event.profileObj.email);
       console.log(this.state.login);
    //    this.forceUpdate();
    }
    
    _getFavorites(event) {
        event.preventDefault();
//         fetch(`http://localhost:5000/verifyUser/token?token=${Cookies.get("token")}`)
//         .then(response => {
//             // console.log(response.status);
//             if (!response.ok){
//                     // this.setState({
//                     //         countryStar
//                     // })
                    
//                     throw new Error("Network response was not ok.");
//             }
//             return response.json();
//         })
//         .then(result => {
//                 this.setState({
//                     username: result.name
//                 })
//                 // console.log(result);
//             // console.log(result + " has been added");
//         })
//         console.log(this.state.username);
        if(this.state.username === "") {
            alert("User not signed in")
        }
        else {
            window.location.href = `/favorites/username?username=${this.state.username}`;
        }
    }

    // /restaurants/restauran?restaurant=Hangari, KangHodong
    render() {
        // const disabled = this.state.isDisabled;
        // console.log(this.props.restaurants);
        return(
            <div className="Restaurants">
                <h1>Restaurants</h1>
                {/* <h2>Please sign in to add restaurants to favorites</h2> */}
                <button id="homeButton" onClick={this._homeClicked}>Home</button>
                <button id="viewFavorites" onClick={this._getFavorites}>View Favorites</button>
                <div id="login">{this.state.username === "" ? (<GoogleLogin
                    clientId="518084134345-s7j63crf1jraq7dqd9ddvjijk2jegqp8.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={response => this._login(response)}
                    onFailure={response => alert("There is an error logging in: " + response)}
                    cookiePolicy={'single_host_origin'}
                />) : <div key={this.state.token} id="greeting"><h3>Hello {this.state.username}</h3></div>}</div>
                <br></br>
                {/* <GoogleLogin
                    clientId="518084134345-s7j63crf1jraq7dqd9ddvjijk2jegqp8.apps.googleusercontent.com"
                    onSuccess={response => this._login(response)}
                    // onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                /> */}
               {/* {this.state.username ? alert("Hi, " + this.state.username) : null} */}
                <div className="results">
                {this.state.isChoices ? this.state.restaurants.map((restaurant) => <div key={restaurant.name} className = "flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h2>{restaurant.name}</h2>
                            <img src={restaurant.images} alt={restaurant.name}></img>
                        </div>
                        <div className="flip-card-back">
                            <div id="rating">
                            <h2>{restaurant.rating}/5.0</h2>
                            </div>
                        </div>
                    </div>
                    <div id="flip_favorite">
                    {this.state.username ? <button id="favoriteButton" onClick={(event) => this._favoriteClicked(event, restaurant.name)}>Add to Favorites</button> : null}
                    </div>
                    </div>)
                    : <div id="none"><h2 >No results found</h2></div>}
            </div>
            </div>
        );
    }
}

{/* <div className="flip-card">
                        <div className="flip-card-inner">
                                <div className="flip-card-front">
                                        <h1>Confirmed Cases</h1>
                                </div>
                                <div className="flip-card-back">
                                        <p>{String(confirmed)}</p>
                                </div>
                        </div>
                </div> */}
export default withRouter(Restaurants);