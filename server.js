// source : https://robkendal.co.uk/blog/how-to-build-a-restful-node-js-api-server-using-json-files/

// load express & body-parser package
const express = require('express');
const bodyParser = require('body-parser');

// create instance of express for serving end points
const app = express();

//load filesystem
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//load routes.js
const routes = require('./routes/routes.js')(app,fs);

//launch api on port 3001
const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});