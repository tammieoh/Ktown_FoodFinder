import React, { Component } from "react";
import './Home.css';
import {withRouter} from "react-router";
import { GoogleLogin } from 'react-google-login';

// const responseGoogle = ((response) => {
//     console.log(response.profileObj.email);
//   })

class Home extends Component {
    constructor() {
        super();
        this.state = {
            login: false,
            loginFail: false,
            username: ""
        }
        this._clicked = this._clicked.bind(this)
        // this._loginClicked = this._loginClicked.bind(this)
        // this._isLoggedIn = this._isLoggedIn.bind(this)
        this._login = this._login.bind(this)
    }

    _clicked() {
        // console.log(this.state.login)
        // if(this.state.login === false) {
        //    alert("Please Login to account before Finding");
        // }
        // else {
            // event.preventDefault();
        console.log("clicked!")
        window.location.href = `/finder`;
        // }
    }

    _login(event) {
        const username = event.profileObj.email;
        console.log(event);
        this.setState({
            login: true
        })
        // make a fetch call in here
        const message = {
            username: `${username}`
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
            // console.log(result + " has been added");
        })
       console.log(event.profileObj.email);
       console.log(this.state.login)
    }

    // _isLoggedIn() {
    //     if(this.state.login === true) {
    //         console.log("Logged in");
            
    //     }
    //     else {
    //         console.log("Not Logged in");
    //     }
    // }


    render() {
        // const responseGoogle = (response) => {
        //     console.log(response);
        //     this.setState({
        //         login: true
        //     })
        //   }
        return(
            <div className="Home">
                <h1>Koreatown Food Finder</h1>
                <h2>Sign in to view favorites</h2>
                {/* <img src="https://live.staticflickr.com/65535/50608370032_5a8c114c93.jpg" width="1000" height="750" alt="Hangari"/> */}
                <button onClick={this._clicked}>
                    Click here to fulfill your Korean food cravings
                </button>
                <br></br>
                <br></br>
                <GoogleLogin
                    clientId="518084134345-s7j63crf1jraq7dqd9ddvjijk2jegqp8.apps.googleusercontent.com"
                    onSuccess={response => this._login(response)}
                    // onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                {this.state.username ? [<h2>Hi, {this.state.username}. You are now signed in</h2>,<br></br>,<button>View Favorites</button>] : null}
                {/* <button onClick={b => console.log(this.state.login)}>Hi</button> */}
                {/* <button onClick={this._loginClicked}>Login</button> */}
            </div>
        );
    }
}
export default withRouter(Home);

// [url=https://flic.kr/p/2k75w2u][img]https://live.staticflickr.com/65535/50608251566_9839dfcefd_n.jpg[/img][/url][url=https://flic.kr/p/2k75w2u]KangHodong[/url] by [url=https://www.flickr.com/photos/191123851@N08/]Tammie Oh[/url], on Flickr