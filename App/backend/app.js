
// App.js

/*
    SETUP
*/

// Database
var db = require('./database/db-connector')

// Express
var express = require('express');   // We are using the express library for the web server
var app = express();            // We need to instantiate an express object to interact with the server in our code
var PORT = 51551;                 // Set a port number at the top so it's easy to change in the future
app.use(express.json());
var cors = require("cors");
app.use(cors({ credentials: true, origin: "*" }));


app.get('/', function (req, res) {
    let query1 = "SELECT * FROM Patients;";               // Define our query

    res.send("The server is running!")
});

/*
    ROUTES
*/

app.get('/patients', function (req, res) {
    let query1 = "SELECT * FROM Patients;";               // Define our query

    db.pool.query(query1, function (error, results, fields) {    // Execute the query
        res.status(200).json(results);
    })
});

/*
    LISTENER
*/

app.listen(PORT, function () {            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});