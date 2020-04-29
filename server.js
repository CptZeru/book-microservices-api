// source : https://robkendal.co.uk/blog/how-to-build-a-restful-node-js-api-server-using-json-files/
// source api deploy to heroku : https://dev.to/lucianopereira86/uploading-a-nodejs-web-api-to-heroku-32kn
// heroku h10 error because hard setting on port : https://stackoverflow.com/questions/14322989/first-heroku-deploy-failed-error-code-h10

// load express & body-parser package
const express = require('express');
const bodyParser = require('body-parser');
// var cors = require('cors');

// create instance of express for serving end points
const app = express();

//load filesystem
const fs = require('fs');

// app.use(
//     cors({
//         credentials: true,
//         origin: true
//     })
// );
// app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
//load routes.js
const routes = require('./routes/routes')(app,fs);

//launch api on heroku port or port 3000
const server = app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port %s...', server.address().port);
});