const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require('mysql');
// const Cookies = require("js-cookie");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "fullstack",
    insecureAuth : true

  });

const app = express();
const jsonParser = bodyParser.json();
app.use(cors());
app.use(express.static("public")) // name of the folder where things are stored

  
con.connect(function(err) {
    if (err) throw err;
    else {
        console.log("Connected!");
    }
    // const price = "$$$"
    // const sql_query = "SELECT * FROM Ktown_finder.restaurants WHERE price = ?"
    // con.query(sql_query, price, function (err, result) {
    //     if(err) throw err;
    //     console.log(result);
    // });
});
// con.end();

// function getResults(sql_query, choices, callback){
//     //con.query(query, current_choice, function (err, result) {
//       //  if (err) throw err;
//     //})
//     // const choices_arr = choices.split(",");
//     let restaurants = [];
//     for(i = 0; i < choices.length; i++) {
//         con.query(sql_query, choices[i], function (err, result) {

//             // row 1: Hangari
//             // row 2: Kang Ho Dong
    
//             if(err) throw err;
//             // console.log(result.name);
//             for(i = 0; i < result.length; i++) {
//                 // console.log(result[i].name);
//                 if(!restaurants.includes(result[i].name)){
//                     restaurants.push(result[i].name);
//                     // console.log("pushed");
//                     // console.log(restaurants);
//                 }
//                 // console.log(restaurants);
//             }
//             callback(null,restaurants)
//         })
//     }
//     // console.log(restaurants)
    
//     // const choices = req.query.choices;
//     // const choices_arr = choices.split(",");
//     // for(i = 0; i < choices_arr.length; i++) {
//     //     current_choice = choices_arr[i];
//     //     console.log(current_choice);
//     //     const sql_query = 'SELECT Ktown_finder.restaurants.name FROM Ktown_finder.restaurants JOIN Ktown_finder.has_options ON Ktown_finder.restaurants.restaurant_id = Ktown_finder.has_options.restaurant_id JOIN Ktown_finder.categories ON Ktown_finder.categories.category_id = Ktown_finder.has_options.category_id WHERE Ktown_finder.categories.name = ?'
    
//     // console.log(restaurants);
// }
// get villager information by personality type localhost:5000/result/name=Yuchun
// get information by color themes localhost:5000/result/colors?colors=red, white, blue
async function getRestaurant(req, res) {
    // this is just for the names
    let restaurants_arr = [];
    const choices = req.query.choices;
    console.log(choices);

    if(choices === "undefined") {
        res.status(400);
    }
    const choices_arr = choices.split(",");
    let myresult = "hello";
    // console.log(myresult);
    // for(i = 0; i < choices_arr.length; i++) {
        // 2dolllar, lunch, dinner
        const sql_query = 'SELECT DISTINCT Ktown_finder.restaurants.name, Ktown_finder.restaurants.images, Ktown_finder.restaurants.rating FROM Ktown_finder.restaurants JOIN Ktown_finder.has_options ON Ktown_finder.restaurants.restaurant_id = Ktown_finder.has_options.restaurant_id JOIN Ktown_finder.categories ON Ktown_finder.categories.category_id = Ktown_finder.has_options.category_id WHERE Ktown_finder.categories.name IN (?)'
        con.query(sql_query, choices_arr, function (err, result) {
            if(err) throw err;
            console.log(result);
            res.json(result);
            // console.log(res);
        });
        // console.log(res.result);
        // getResults(sql_query, choices_arr, function(err, result) {
        //     if (err){
        //         console.log("ERROR: ", err)
        //     }
        //     // [A, B]
        //     console.log("result");
        //     restaurants_arr.push(result)
        //     console.log(restaurants_arr);
        //     // } else {
        //     //     console.log("Result from db is: ", result)
        //     // }
        // });
        // console.log("myresult");
        // console.log(myresult);
        // console.log("rest_arr");
        // console.log(restaurants_arr);
    // }
    
    // for(i = 0; i < choices_arr.length; i++) {
    //     current_choice = choices_arr[i];
    //     console.log(current_choice);
    //     const sql_query = 'SELECT Ktown_finder.restaurants.name FROM Ktown_finder.restaurants JOIN Ktown_finder.has_options ON Ktown_finder.restaurants.restaurant_id = Ktown_finder.has_options.restaurant_id JOIN Ktown_finder.categories ON Ktown_finder.categories.category_id = Ktown_finder.has_options.category_id WHERE Ktown_finder.categories.name = ?'
    //     con.query(sql_query, current_choice, function (err, result) {
    //         if(err) throw err;
    //         // console.log(result.name);
    //         for(i = 0; i < result.length; i++) {
    //             // console.log(result[i].name);
    //             if(!restaurants.includes(result[i].name)){
    //                 restaurants.push(result[i].name);
    //                 // console.log("pushed");
    //                 // console.log(restaurants);
    //             }
    //             // console.log(restaurants);
    //         }
    //         console.log(restaurants);
    //     })
    //     // console.log(restaurants);
    // }
    // res.json(myresult);
    // console.log(myresult);
    // console.log(myresult);
    // console.log(res);
}

app.get("/choices", getRestaurant);

async function getFavorites(req, res) {
    // console.log(req);
    const username = req.query.username;
    console.log(username);
    const sql_query = "SELECT DISTINCT Ktown_finder.favorites.restaurant_name, Ktown_finder.restaurants.images FROM Ktown_finder.favorites JOIN Ktown_finder.users ON Ktown_finder.users.user_id = Ktown_finder.favorites.user_id JOIN Ktown_finder.restaurants ON Ktown_finder.favorites.restaurant_name = Ktown_finder.restaurants.name WHERE Ktown_finder.users.name = ?";
    con.query(sql_query, username, function (err, result) {
        if(err) throw err;
        console.log(result);
        const response = result;
        res.json(response);
        // console.log(response);
    });
    // console.log(response)
}
app.get("/favorites/username", getFavorites);

// async function getToken(req, res) {
//     // console.log(req);
//     const username = req.query.username;
//     console.log(username);
//     const sql_query = "SELECT DISTINCT Ktown_finder.favorites.restaurant_name, Ktown_finder.restaurants.images FROM Ktown_finder.favorites JOIN Ktown_finder.users ON Ktown_finder.users.user_id = Ktown_finder.favorites.user_id JOIN Ktown_finder.restaurants ON Ktown_finder.favorites.restaurant_name = Ktown_finder.restaurants.name WHERE Ktown_finder.users.name = ?";
//     con.query(sql_query, username, function (err, result) {
//         if(err) throw err;
//         console.log(result);
//         const response = result;
//         res.json(response);
//         // console.log(response);
//     });
//     // console.log(response)
// }
// app.get("/verify/username", getToken);

// async function usernameToId(user, res) {
//     // const sql_query1 = "SELECT user_id FROM Ktown_finder.users WHERE (name) = ?"
//     //     con.query(sql_query1, user, function (err, result) {
//     //         if(err) throw err;
//     //         user_id = result;
//     //         console.log(user_id);
//     //         res.json(user_id);
//     //         // console.log(user_id);
//     //         // username = result;
//     //         // console.log(username);
//     //     });
// }

async function addUser(req, res) {
    const user = req.body.username;
    const token = req.body.token;
    // const cookie = Cookies.set("token", token);
    // console.log(cookie.get("token"));
    console.log(user);

    const sql_query = "INSERT INTO Ktown_finder.users (name, token) VALUES (?,?) ON DUPLICATE KEY UPDATE token = (?)"
    con.query(sql_query, [user, token, token], function (err) {
        if (err) throw err;
    })
    res.json(user);
}

app.post("/addUser", jsonParser, addUser)

async function verifyUser(req, res) {
    const token = req.query.token;
    console.log(token);
    const sql_query = "SELECT name FROM Ktown_finder.users WHERE token = (?)"
    con.query(sql_query, token, function (err, result) {
        if (err) throw err;
        res.json(result);
        console.log(result);
    })
}
// async function addToken(req, res) {
//     const user = req.body.username
// }
app.get("/verifyUser/token", verifyUser)

async function addFavorites(req, res) {
    // grab the village info
    const user = req.query.username;
    // console.log(req.query);
    console.log(user);
    // grab the new restaurant name that is being sent through body
    // assume that req.body.restaurants is an array
    const faveRestaurant = req.body.restaurant;
    console.log(faveRestaurant);

    // console.log(req);
    
    let user_id = 0;
    const sql_query1 = "SELECT user_id FROM Ktown_finder.users WHERE (name) = ?"
    con.query(sql_query1, user, function (err, result) {
        if(err) throw err;
        user_id = result[0].user_id;
        console.log(result);
        // for(i = 0; i < faveRestaurants.length; i++) {
        //     console.log(user_id);
        //     current_restaurant = faveRestaurants[i];
        //     console.log(current_restaurant);
        const sql_query2 = "INSERT INTO Ktown_finder.favorites (user_id, restaurant_name) VALUES(?, ?) ON DUPLICATE KEY UPDATE user_id = user_id, restaurant_name = restaurant_name;"
            con.query(sql_query2, [user_id, faveRestaurant], function (err) {
                // console.log(user_id);
                // console.log("hi");
                if(err) throw err;
                // res.json(response);
                // console.log(response);
        });
        // }
        console.log(faveRestaurant);
        // console.log(res.json(faveRestaurant));
        res.json(faveRestaurant);
        // console.log(res.json(faveRestaurant));
        // user_id = result;
        // console.log(user_id);
        // res.json(user_id);
        // console.log(user_id);
        // username = result;
        // console.log(username);
    });
    // function setUserId(value) {
    //     user_id = value;
    //     console.log(user_id);
    // }
    // console.log(user_id);
    // console.log(user);
    // const sql_query1 = "SELECT user_id FROM Ktown_finder.users WHERE (name) = ?"
    // con.query(sql_query1, user, function (err, result) {
    //     if(err) throw err;
    //     user_id = result;
    //     res.json(user_id);
    //     console.log(user_id);
    //     // username = result;
    //     // console.log(username);
    // });
    // construct query
    // let i = 0;
    // let current_restaurant = null;
    // console.log("hello");
    // for(i = 0; i < faveRestaurants.length; i++) {
    //     console.log(user_id);
    //     current_restaurant = faveRestaurants[i];
    //     console.log(current_restaurant);
    //     const sql_query2 = "INSERT INTO Ktown_finder.favorites (user_id, restaurant_id) VALUES (?, ?)"
    //         con.query(sql_query2, [user_id, faveRestaurants[i]], function (err, result) {
    //             if(err) throw err;
    //             const response = result;
    //             res.json(response);
    //             console.log(response);
    //     });
    // }
}


app.post("/favorites/username", jsonParser, addFavorites)

app.listen(5000, function() {
    console.log("Server is running on port 5000");
})