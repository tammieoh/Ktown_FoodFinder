import React, { Component } from "react";
import './Finder.css';
import {withRouter} from "react-router";
import Cookies from "js-cookie";

class Finder extends Component {
    constructor() {
        super();
        this.state = {
            choices: [],
            restaurants: [],
            dollar1: false,
            dollar2: false,
            dollar3: false,
            breakfast: false,
            lunch: false,
            dinner: false,
            dessert: false,
            snack: false,
            sweet: false,
            savory: false,
            spicy: false,
            rice: false,
            noodles: false,
            meat: false,
            soup: false,
            seafood: false,
            street: false
        };
        this._handleInputChange = this._handleInputChange.bind(this);
        this._clicked = this._clicked.bind(this);
        this._getChoices = this._getChoices.bind(this);
        this._homeClicked = this._homeClicked.bind(this);
        // this._handleSubmit = this._handleSubmit.bind(this);
    }
    // componentDidMount() {
    //     fetch()
    // }
    _handleInputChange(event) {
        // console.log("hello");
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked: target.value;
        console.log(target.checked);
        console.log(target.value);
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    _clicked(event) {
    // console.log(`http://localhost:5000/result/choices?choices=${this.state.choices}`);
        event.preventDefault();
        // console.log(this.state.choices);
        window.location.href = `/choices?choices=${this.state.choices}`;
//         await fetch(`http://localhost:5000/result/choices?choices=${this.state.choices}`)
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
//         .then(data => {
//             let i = 0
//             for(i = 0; i < data.length; i++) {
//                 this.setState({
//                     restaurants: this.state.restaurants.concat(data[i].name)
//                 })
//             }
//             console.log(this.state.restaurants);
// //         window.location.href = `/restaurants/`;
//         })
//         this._nextPage(this.state.restaurants);
    }
    // _nextPage(event) {
    //     // <Link 
    //     //     to={{ 
    //     //     pathname: '/restaurants/', 
    //     //     state: {
    //     //         restaurants: this.state.restaurants
    //     //     } 
    //     // }}/>
    //     window.location.href = `/choices?choices=${this.state.choices}`;
    // }
    _homeClicked(event) {
        window.location.href = `/`;
    }
    _getChoices(event) {
        // if(event.target.name === "$" || event.target.name === "$$" || event.target.name === "$$$") {
        if(event.target.checked) {
            this.setState({
                choices: this.state.choices.concat(event.target.name)
            })
        }
        else {
            let array = this.state.choices;
            const index = array.indexOf(event.target.name);
            if(index !== -1) {
                array.splice(index, 1);
                this.setState({ price: array})
            }
        }
    }

    render() {
        return(
            <div className="Finder">
                <h1>Korean Food Personalizer</h1>
                <button id="homeButton" onClick={this._homeClicked}>
                    Home
                </button>
                <form onSubmit={this._clicked}>
                    <div className="bigCategories">
                        <div className="categories">
                            <h2>Price</h2>
                            <label htmlFor="fname">$
                                <input
                                    name="dollar1"
                                    type="checkbox"
                                    checked={this.state.$}
                                    onChange={e => {this._handleInputChange(e); this._getChoices(e)}} />
                            </label>
                            
                            <label htmlFor="fname">$$
                                <input
                                    name="dollar2"
                                    type="checkbox"
                                    checked={this.state.$$}
                                    onChange={e => {this._handleInputChange(e); this._getChoices(e)}} />
                            </label>
                            
                            <label htmlFor="fname">$$$
                                <input
                                    name="dollar3"
                                    type="checkbox"
                                    checked={this.state.$$$}
                                    onChange={e => {this._handleInputChange(e); this._getChoices(e)}} />
                            </label>
                        </div>
                        <div className="categories">
                            <h2>Meal</h2>
                            <label htmlFor="fname">Breakfast
                                <input
                                    name="breakfast"
                                    type="checkbox"
                                    checked={this.state.breakfast}
                                    onChange={e => {this._handleInputChange(e); this._getChoices(e)}} />
                            </label>
                            
                            <label htmlFor="fname">Lunch
                                <input
                                    name="lunch"
                                    type="checkbox"
                                    checked={this.state.lunch}
                                    onChange={e => {this._handleInputChange(e); this._getChoices(e)}} />
                            </label>
                            
                            <label htmlFor="fname">Dinner
                                <input
                                    name="dinner"
                                    type="checkbox"
                                    checked={this.state.dinner}
                                    onChange={e => {this._handleInputChange(e); this._getChoices(e)}} />
                            </label>
                            
                            <label htmlFor="fname">Dessert
                                <input
                                    name="dessert"
                                    type="checkbox"
                                    checked={this.state.dessert}
                                    onChange={e => {this._handleInputChange(e); this._getChoices(e)}} />
                            </label>
                           
                            <label htmlFor="fname">Snack
                                <input
                                    name="snack"
                                    type="checkbox"
                                    checked={this.state.snack}
                                    onChange={e => {this._handleInputChange(e); this._getChoices(e)}} />
                            </label>
                        </div>
                        <div className="categories">
                            <h2>Flavors</h2>
                            <label htmlFor="fname">Sweet
                                <input
                                    name="sweet"
                                    type="checkbox"
                                    checked={this.state.sweet}
                                    onChange={e => {this._handleInputChange(e); this._getChoices(e)}} />
                            </label>
                            
                            <label htmlFor="fname">Savory
                                <input
                                    name="savory"
                                    type="checkbox"
                                    checked={this.state.savory}
                                    onChange={e => {this._handleInputChange(e); this._getChoices(e)}} />
                            </label>
                            
                            <label htmlFor="fname">Spicy
                                <input
                                    name="spicy"
                                    type="checkbox"
                                    checked={this.state.spicy}
                                    onChange={e => {this._handleInputChange(e); this._getChoices(e)}} />
                            </label>
                        </div>
                        <div className="categories">
                            <h2>Main</h2>
                            <label htmlFor="fname">Rice
                                <input
                                    name="rice"
                                    type="checkbox"
                                    checked={this.state.rice}
                                    onChange={e => {this._handleInputChange(e); this._getChoices(e)}} />
                            </label>
                            
                            <label htmlFor="fname">Noodles
                                <input
                                    name="noodles"
                                    type="checkbox"
                                    checked={this.state.noodles}
                                    onChange={e => {this._handleInputChange(e); this._getChoices(e)}} />
                            </label>
                            
                            <label htmlFor="fname">Meat
                                <input
                                    name="meat"
                                    type="checkbox"
                                    checked={this.state.meat}
                                    onChange={e => {this._handleInputChange(e); this._getChoices(e)}} />
                            </label>
                            
                            <label htmlFor="fname">Soup
                                <input
                                    name="soup"
                                    type="checkbox"
                                    checked={this.state.soup}
                                    onChange={e => {this._handleInputChange(e); this._getChoices(e)}} />
                            </label>
                            
                            <label htmlFor="fname">Seafood
                                <input
                                    name="snack"
                                    type="checkbox"
                                    checked={this.state.seafood}
                                    onChange={e => {this._handleInputChange(e); this._getChoices(e)}} />
                            </label>
                           
                            <label htmlFor="fname">Street
                                <input
                                    name="street"
                                    type="checkbox"
                                    checked={this.state.snack_and_street}
                                    onChange={e => {this._handleInputChange(e); this._getChoices(e)}} />
                            </label>
                        </div>
                        <div id ="submitButton">
                        <input type="submit" value="Submit"
                         />
                         </div>
                        </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Finder);