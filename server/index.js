const express = require('express');
const path = require('path');

const app = express();

var mysql = require('mysql2');
const e = require('express');
const { exit } = require('process');
const { log } = require('console');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "kncn_mysql"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.use(express.static('public'));

app.listen(3000, () => {
    console.log("App listening on port 3000");
})

// Endpoints
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/themes', (req, res) => {
    con.query("SELECT * FROM themes", function (err, result, fields) {
        if (err) {
            console.log("QUERY FAILED!");
            exit;
        }
        res.json(result);
    });
});

app.get('/songs', (req, res) => {
    con.query("SELECT * FROM songs WHERE theme_id = '" + req.query.theme + "';", function(err, result, field){
        if (err){
            console.log("QUERY FAILED!");
            exit;
        }
        res.json(result);
    });
});