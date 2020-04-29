// source : https://robkendal.co.uk/blog/how-to-build-a-restful-node-js-api-server-using-json-files/
// source api deploy to heroku : https://dev.to/lucianopereira86/uploading-a-nodejs-web-api-to-heroku-32kn

// load express & body-parser package
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

// create instance of express for serving end points
const app = express();

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

//load routes.js
const routes = require('./routes/routes')(app,fs);

//launch api on port 3001
const server = app.listen(3000, () => {
    console.log('listening on port %s...', server.address().port);
});