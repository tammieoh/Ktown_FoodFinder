import React, { Component } from "react";
import './Home.css';
import {withRouter} from "react-router";
import Cookies from "js-cookie";
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import imageA from "../../asset/images/A.jpg"
import imageB from "../../asset/images/B.jpg"
import imageC from "../../asset/images/C.jpg"
import imageD from "../../asset/images/bingsoo.jpg"
import imageE from "../../asset/images/ddukbokki.jpg"
import imageF from "../../asset/images/japchae.png"
import logo from "../../asset/images/Korean_logo_2.jpg"


// const responseGoogle = ((response) => {
//     console.log(response.profileObj.email);
//   })

class Home extends Component {
    constructor() {
        super();
        this.state = {
            login: false,
            logout: false,
            loginFirst: true,
            loginFail: false,
            username: "",
            token: ""
        }
        this._clicked = this._clicked.bind(this)
        // this._loginClicked = this._loginClicked.bind(this)
        // this._isLoggedIn = this._isLoggedIn.bind(this)
        this._login = this._login.bind(this)
        this._lgout = this._logout.bind(this)
        this._clickedFavorite = this._clickedFavorite.bind(this)
    }

    async componentDidMount() {
        // if(Cookies.get("loginFirst") === "false") {
        //     this.setState = {
        //         loginFirst: false
        //     }
        // }
        if(Cookies.get("token") !==  undefined ) {
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
                        login: true,
                        username: result[0].name
                    })
                    // console.log(result.name);
                    console.log(this.state.username);
                    // console.log(result);
                // console.log(result + " has been added");
            })
        }
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

    _clickedFavorite() {
        window.location.href = `/favorites/username?username=${this.state.username}`;
    }
    _login(event) {
        const username = event.profileObj.email;
        const token = event.tokenObj.access_token;
        console.log(event);
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
                console.log(result);
                Cookies.set("username", this.state.username);
                Cookies.set("token", token);
            // console.log(result + " has been added");
        })

    //    const cookie = Cookies.set("token", token);
    //    console.log(Cookies.get("token"));
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
    _logout(event) {
        alert(`${this.state.username}` + " have successfully logged out");
        Cookies.remove("username");
        Cookies.remove("token");
        this.setState({
            username: "",
            login: false,
            logout: true
        })
        console.log(this.state.username);
        // <h3>Goodbye!</h3>
        // return "You have successfully logged out!";
    }

    render() {
        // const responseGoogle = (response) => {
        //     console.log(response);
        //     this.setState({
        //         login: true
        //     })
        //   }
        return(
            <div className="Home">
                <div>
                {this.state.username === "" ? 
                <GoogleLogin
                    id="signInButton"
                    clientId="518084134345-s7j63crf1jraq7dqd9ddvjijk2jegqp8.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={response => this._login(response)} 
                    onFailure={response => alert("There is an error logging in: " + response.error)}
                    cookiePolicy={'single_host_origin'}
                    key={this.state.username}
                />
                :
                <GoogleLogout
                    clientId="518084134345-s7j63crf1jraq7dqd9ddvjijk2jegqp8.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={response => this._logout(response)}
                    >
                </GoogleLogout>
                }
                </div>
                <br></br>
                <div id="title">
                    <img id="logo" src={logo} alt="Korean Flag"></img>
                    <h1>Koreatown Food Finder</h1>
                </div>
                {/* <div id="signin">
                    <h3>Sign in to view favorites</h3> */}
                    {/* <img src="https://live.staticflickr.com/65535/50608370032_5a8c114c93.jpg" width="1000" height="750" alt="Hangari"/> */}
                    {/* <GoogleLogin
                    id="signin"
                        clientId="518084134345-s7j63crf1jraq7dqd9ddvjijk2jegqp8.apps.googleusercontent.com"
                        onSuccess={response => this._login(response)}
                        // onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div> */}
                {this.state.username ? ([<div key={this.state.token} id="greeting"><h3>Hello {this.state.username}</h3></div>,<button key={this.state.username} id="favorites" onClick={this._clickedFavorite}>View Favorites</button>]) : null}
                <br></br>
                <button id="food_finder" onClick={this._clicked}>
                    Click on me to fulfill your Korean food cravings
                </button>
                <br></br>
                <div className="homeImages">
                    <div className="imgs">
                    <img src={imageA} alt="kbbq"></img>
                    </div>
                    <div className="imgs">
                    <img src={imageB} alt="bibimbap"></img>
                    </div>
                    <div className="imgs">
                    <img src={imageC} alt="chicken"></img>
                    </div>
                    <div className="imgs">
                    <img src={imageD} alt="bingsoo"></img>
                    </div>
                    <div className="imgs">
                    <img src={imageE} alt="ddukbokki"></img>
                    </div>
                    <div className="imgs">
                    <img src={imageF} alt="japchae"></img>
                    </div>
                </div>
                {/* <button onClick={b => console.log(this.state.login)}>Hi</button> */}
                {/* <button onClick={this._loginClicked}>Login</button> */}
            </div>
        );
    }
}
export default withRouter(Home);

// [url=https://flic.kr/p/2k75w2u][img]https://live.staticflickr.com/65535/50608251566_9839dfcefd_n.jpg[/img][/url][url=https://flic.kr/p/2k75w2u]KangHodong[/url] by [url=https://www.flickr.com/photos/191123851@N08/]Tammie Oh[/url], on Flickr