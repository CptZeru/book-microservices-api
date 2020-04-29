// source : https://robkendal.co.uk/blog/how-to-build-a-restful-node-js-api-server-using-json-files/
// source api deploy to heroku : https://dev.to/lucianopereira86/uploading-a-nodejs-web-api-to-heroku-32kn

// load express & body-parser package
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

console.log("after load express, body-parser, cors");

// create instance of express for serving end points
const app = express();
console.log("after app = express");
//load filesystem
const fs = require('fs');

app.use(
    cors({
        credentials: true,
        origin: true
    })
);
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
console.log("after all app.use cors * bodyParser");
//load routes.js
// const routes = require('./routes/routes')(app,fs);
app.get('/', (req,res)=>{
    console.log('entering get / route');
    res.send('welcome to microservices book api');
});
console.log("after loading routes");
//launch api on port 3000
const server = app.listen(3000, () => {
    console.log('listening on port %s...', server.address().port);
});