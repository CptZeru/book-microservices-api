const bookRoutes = require('./books')

const appRouter = (app, fs) => {
    console.log("entering approuter");
    //default route
    app.get('/', (req,res)=>{
        console.log('entering get / route');
        res.send('welcome to microservices book api');
    });

    bookRoutes(app,fs);
    console.log("after bookRoutes");
};

module.exports = appRouter;